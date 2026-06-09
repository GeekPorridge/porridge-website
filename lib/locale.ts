// ── Locale detection ──────────────────────────────
// Priority: 1) explicit locale (X-Locale header), 2) Accept-Language header
export function detectLocale(
  acceptLanguage: string | null,
  explicitLocale?: string | null,
): "zh" | "en" {
  // 1) explicit locale from X-Locale header takes highest priority
  if (explicitLocale === "zh" || explicitLocale === "en") {
    return explicitLocale;
  }

  // 2) fallback: Accept-Language header
  if (!acceptLanguage) return "en";
  const first = acceptLanguage.split(",")[0]?.trim().toLowerCase() || "";
  if (first.startsWith("zh")) return "zh";
  return "en";
}

// ── Form-level error messages ──────────────────────
export type FormMessages = {
  invalidInput: string;
  duplicateSubmission: string;
  serverError: string;
  success: string;
};

export function getFormMessages(locale: "zh" | "en"): FormMessages {
  if (locale === "zh") {
    return {
      invalidInput: "输入内容无效，请检查后重试",
      duplicateSubmission: "您最近已经提交过消息了，我们会在24小时内回复您。",
      serverError: "服务器出了点问题，请稍后重试。",
      success: "消息已收到，感谢您的留言！",
    };
  }
  return {
    invalidInput: "Invalid input. Please check and try again.",
    duplicateSubmission:
      "You have recently submitted a message. We will reply within 24 hours.",
    serverError: "Something went wrong on our end. Please try again later.",
    success: "Message received. Thank you for reaching out!",
  };
}

// ── Query (GET) error messages ─────────────────────
export type QueryMessages = {
  emailRequired: string;
  queryFailed: string;
};

export function getQueryMessages(locale: "zh" | "en"): QueryMessages {
  if (locale === "zh") {
    return {
      emailRequired: '查询参数 "email" 是必填项。',
      queryFailed: "查询提交记录失败。",
    };
  }
  return {
    emailRequired: 'Query parameter "email" is required.',
    queryFailed: "Failed to query submission.",
  };
}
