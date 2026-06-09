import Joi from "joi";

// ── Constants ──────────────────────────────────────
export const MAX_NAME_LEN = 10;
export const MAX_MSG_LEN = 5000;
export const DUPLICATE_WINDOW_MS = 6 * 60 * 60 * 1000;

// ── Types ──────────────────────────────────────────
export type ContactFormData = {
  name: string;
  email: string;
  message: string;
  interests?: string[];
};

export type Locale = "zh" | "en";

// ── XSS / HTML injection pattern detection ─────────
// Note: no `g` flag on any pattern. With `g`, RegExp.test() remembers
// `lastIndex` across calls and gives wrong results on reuse.
const INJECTION_PATTERNS = [
  /<script\b[\s\S]*?<\/script\s*>/i, // <script>…</script>
  /<\/?\s*script\s*>/i, // <script> or </script> (standalone)
  /<\/?\s*html\b[\s\S]*?>/i, // <html> or </html> with optional attrs
  /<\/?\s*iframe\b[\s\S]*?>/i, // <iframe> or </iframe>
  /<\/?\s*embed\s*>/i, // <embed> or </embed>
  /<\/?\s*object\s*>/i, // <object> or </object>
  /javascript\s*:/i, // javascript: protocol
  /on\w+\s*=\s*["'][^"']*["']/i, // onerror="…", onclick="…", etc.
  /on\w+\s*=\s*\S+/i, // unquoted event handlers
];

export function containsInjectionPatterns(input: string): boolean {
  return INJECTION_PATTERNS.some((pattern) => pattern.test(input));
}

// ── Input sanitization ─────────────────────────────
// Strips HTML tags, zero-width characters, and common XSS vectors.
export function sanitize(input: string): string {
  return input
    .replace(/<[^>]*>/g, "") // strip HTML tags
    .replace(/[\u200B-\u200D\uFEFF]/g, "") // strip zero-width chars
    .replace(/javascript\s*:/gi, "") // strip javascript: protocol
    .replace(/on\w+\s*=\s*["'][^"']*["']/gi, "") // strip event handlers: onerror=...
    .replace(/on\w+\s*=\s*\S+/gi, "") // strip unquoted event handlers
    .trim();
}

// ── Name helpers ───────────────────────────────────
function containsCJK(value: string): boolean {
  return /[\u4e00-\u9fff]/.test(value);
}

function countCJK(value: string): number {
  return (value.match(/[\u4e00-\u9fff]/g) || []).length;
}

// ── Create locale-aware Joi schema ─────────────────
function createContactSchema(locale: Locale = "zh") {
  const isZh = locale === "zh";

  return Joi.object({
    name: Joi.string()
      .trim()
      .max(MAX_NAME_LEN)
      .custom((value: string, helpers) => {
        if (!value || value.length < 2) {
          return helpers.error("any.invalid");
        }
        // ── CJK (Chinese) name — must have 2+ Chinese chars ──
        if (containsCJK(value)) {
          if (countCJK(value) < 2) {
            return helpers.error("any.invalid");
          }
          return value;
        }
        // ── Latin name — must have at least 2 parts (first + last) ──
        const parts = value.trim().split(/\s+/);
        if (parts.length < 2 || parts.some((p: string) => p.length < 2)) {
          return helpers.error("any.invalid");
        }
        return value;
      })
      .required()
      .messages({
        "string.empty": isZh ? "请输入您的姓名" : "Please enter your full name",
        "string.max": isZh
          ? `姓名不能超过${MAX_NAME_LEN}个字符`
          : `Name must not exceed ${MAX_NAME_LEN} characters`,
        "any.invalid": isZh
          ? "请输入真实的姓名（中文姓名2字以上，英文需名+姓）"
          : "Please enter a real name (Chinese: 2+ chars; Western: first + last name)",
        "any.required": isZh ? "姓名是必填项" : "Name is required",
      }),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .max(254)
      .required()
      .messages({
        "string.email": isZh
          ? "请输入有效的邮箱地址（例如：name@domain.com）"
          : "Please enter a valid email address (e.g. name@domain.com)",
        "string.empty": isZh ? "邮箱是必填项" : "Email is required",
        "string.max": isZh
          ? "邮箱不能超过254个字符"
          : "Email must not exceed 254 characters",
        "string.pattern.base": isZh
          ? "邮箱地址看起来不太对，请使用包含姓名的真实邮箱"
          : "Please use a real email address with your name",
        "any.required": isZh ? "邮箱是必填项" : "Email is required",
      }),
    message: Joi.string()
      .trim()
      .min(1)
      .max(MAX_MSG_LEN)
      .required()
      .messages({
        "string.empty": isZh ? "请输入项目描述" : "Please enter your message",
        "string.min": isZh
          ? "项目描述至少需要1个字符"
          : "Message must be at least 1 character",
        "string.max": isZh
          ? `项目描述不能超过${MAX_MSG_LEN}个字符`
          : `Message must not exceed ${MAX_MSG_LEN} characters`,
        "any.required": isZh ? "项目描述是必填项" : "Message is required",
      }),
    interests: Joi.array().items(Joi.string()).optional().default([]),
  });
}

// ── Validation helper ──────────────────────────────
export type ValidationResult =
  | { ok: true; data: ContactFormData }
  | { ok: false; errors: Record<string, string> };

export function validateContactForm(
  body: unknown,
  locale: Locale = "zh",
): ValidationResult {
  const schema = createContactSchema(locale);
  const isZh = locale === "zh";

  const { error, value } = schema.validate(body, {
    abortEarly: false,
    stripUnknown: true,
  });

  if (error) {
    const fieldErrors: Record<string, string> = {};
    for (const detail of error.details) {
      const field = detail.path.join(".");
      if (!fieldErrors[field]) {
        fieldErrors[field] = detail.message;
      }
    }
    return { ok: false, errors: fieldErrors };
  }

  // ── Reject HTML / script injection patterns in message ──
  if (containsInjectionPatterns(value.message)) {
    return {
      ok: false,
      errors: {
        message: isZh
          ? "消息内容不能包含 HTML 或脚本代码，请移除后重试"
          : "Message cannot contain HTML or script code. Please remove it and try again.",
      },
    };
  }

  // Sanitize text fields
  const name = sanitize(value.name);
  const message = sanitize(value.message);

  if (!name || !message) {
    return {
      ok: false,
      errors: {
        _form: isZh
          ? "输入内容无效，请检查后重试"
          : "Invalid input. Please check and try again.",
      },
    };
  }

  return {
    ok: true,
    data: {
      name,
      email: value.email,
      message,
      interests: value.interests,
    },
  };
}
