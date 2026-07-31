import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
}

/**
 * Same-page anchors must be plain <a>, not next/link.
 *
 * next/link routes a hash-only href through the App Router, which updates the
 * URL with history.pushState — and pushState does NOT fire `hashchange`. Any
 * code listening for that event (see ServiceExplorer, which has to open a tab
 * before the target card exists in the layout) silently never runs.
 *
 * A plain <a> gives native anchor behaviour and a real hashchange event.
 * Anything that is a genuine route still goes through next/link, so this stays
 * correct once the site grows past one page.
 */
export default function SmartLink({ href, children, ...rest }: Props) {
  if (href.startsWith("#")) {
    return (
      <a href={href} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} {...rest}>
      {children}
    </Link>
  );
}
