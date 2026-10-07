/** Placeholder values that mean "no link yet". Buttons for these are hidden. */
const PLACEHOLDERS = new Set(["", "POST_URL_REQUIRED", "PASTE_REAL_CERTIFICATE_URL_HERE", "#"]);

/** True only for a real, usable link (http(s), mailto, tel or a site-relative path). */
export function hasUrl(url?: string | null): url is string {
  if (!url) return false;
  const u = url.trim();
  if (PLACEHOLDERS.has(u)) return false;
  return /^(https?:\/\/|mailto:|tel:|\/)/i.test(u);
}

/** Props for opening external links safely in a new tab. */
export function external(url: string) {
  const isExternal = /^https?:\/\//i.test(url);
  return isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {};
}
