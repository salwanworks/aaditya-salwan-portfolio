import { external, hasUrl } from "@/lib/links";

type Props = {
  href?: string;
  children: React.ReactNode;
  className?: string;
  label?: string;
};

/**
 * Renders a link only when `href` is a real URL.
 * Empty strings and placeholders ("POST_URL_REQUIRED", …) render nothing — no broken buttons.
 */
export default function LinkButton({ href, children, className = "link-mini", label }: Props) {
  if (!hasUrl(href)) return null;
  return (
    <a href={href} className={className} aria-label={label} {...external(href)}>
      {children}
    </a>
  );
}
