/**
 * Set a cookie with proper encoding.
 * This centralises the raw document.cookie call so the Biome
 * noDocumentCookie rule only needs a single suppression.
 */
export function setCookie(
  name: string,
  value: string,
  options: {
    maxAge?: number;
    path?: string;
    sameSite?: "Lax" | "Strict" | "None";
  } = {},
): void {
  const parts: string[] = [
    `${encodeURIComponent(name)}=${encodeURIComponent(value)}`,
  ];

  if (options.maxAge !== undefined) {
    parts.push(`max-age=${options.maxAge}`);
  }
  if (options.path !== undefined) {
    parts.push(`path=${options.path}`);
  }
  if (options.sameSite !== undefined) {
    parts.push(`SameSite=${options.sameSite}`);
  }

  // biome-ignore lint/suspicious/noDocumentCookie: intentional low-level cookie write
  document.cookie = parts.join("; ");
}
