import type { IconName } from "@/lib/types";

/**
 * Inline SVG icon set — no dependency, no network request, inherits
 * currentColor and scales with the box it sits in.
 *
 * All paths are drawn on a 24x24 grid with round caps and a 1.75 stroke so
 * they stay optically consistent with the type at small sizes.
 */
const paths: Record<IconName, React.ReactNode> = {
  api: (
    <>
      <polyline points="15.5 17.5 21 12 15.5 6.5" />
      <polyline points="8.5 6.5 3 12 8.5 17.5" />
    </>
  ),
  sliders: (
    <>
      <path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3" />
      <path d="M1.5 14h5M9.5 8h5M17.5 16h5" />
    </>
  ),
  devices: (
    <>
      <rect x="2" y="3.5" width="13" height="9.5" rx="2" />
      <path d="M5.5 17h6M8.5 13v4" />
      <rect x="16.5" y="8" width="5.5" height="12" rx="1.5" />
    </>
  ),
  tag: (
    <>
      <path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0l-7.2-7.2A2 2 0 0 1 2.8 12V4.8a2 2 0 0 1 2-2H12a2 2 0 0 1 1.4.6l7.2 7.2a2 2 0 0 1 0 2.8Z" />
      <circle cx="7.6" cy="7.6" r="1.3" />
    </>
  ),
  mail: (
    <>
      <rect x="2" y="4.5" width="20" height="15" rx="2.5" />
      <path d="m21.5 7.5-8.4 5.6a2 2 0 0 1-2.2 0L2.5 7.5" />
    </>
  ),
  send: (
    <>
      <path d="M21.5 2.5 10.8 13.2" />
      <path d="M21.5 2.5 14.8 21.5l-4-8.3-8.3-4Z" />
    </>
  ),
  message: (
    <>
      <path d="M20.8 11.6a8.3 8.3 0 0 1-11.9 7.5L3.2 21l1.9-5.6a8.3 8.3 0 1 1 15.7-3.8Z" />
      <path d="M8.6 9.2c0 3.4 2.8 6.2 6.2 6.2" />
    </>
  ),
  pin: (
    <>
      <path d="M20 10.2c0 5.8-8 11.8-8 11.8s-8-6-8-11.8a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="2.8" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <polyline points="12 6.8 12 12 15.6 14.2" />
    </>
  ),
  shield: (
    <>
      <path d="M12 21.6s7.6-3.6 7.6-9.6V5.2L12 2.4 4.4 5.2V12c0 6 7.6 9.6 7.6 9.6Z" />
      <polyline points="9 12 11.2 14.2 15.4 10" />
    </>
  ),
  zap: <polygon points="12.8 2.4 4 13.4 11.4 13.4 10.6 21.6 19.4 10.6 12 10.6" />,
  lock: (
    <>
      <rect x="3.6" y="10.6" width="16.8" height="10.4" rx="2.4" />
      <path d="M7.4 10.6V7.2a4.6 4.6 0 0 1 9.2 0v3.4" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="5.4" rx="8.4" ry="3" />
      <path d="M3.6 5.4v13.2c0 1.7 3.8 3 8.4 3s8.4-1.3 8.4-3V5.4" />
      <path d="M3.6 12c0 1.7 3.8 3 8.4 3s8.4-1.3 8.4-3" />
    </>
  ),
  refresh: (
    <>
      <path d="M20.6 12a8.6 8.6 0 1 1-2.6-6.2" />
      <polyline points="20.8 3.4 20.8 9 15.2 9" />
    </>
  ),
  headset: (
    <>
      <path d="M4.4 14.4V12a7.6 7.6 0 0 1 15.2 0v2.4" />
      <rect x="2" y="13.4" width="4.6" height="6.8" rx="2.1" />
      <rect x="17.4" y="13.4" width="4.6" height="6.8" rx="2.1" />
    </>
  ),
  arrowRight: (
    <>
      <path d="M4.5 12h14" />
      <polyline points="13 6.5 18.5 12 13 17.5" />
    </>
  ),
  chevronDown: <polyline points="6 9.5 12 15 18 9.5" />,
  check: <polyline points="20 6.5 9.4 17.2 4 11.8" />,
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <ellipse cx="12" cy="12" rx="3.9" ry="9" />
      <path d="M3.2 12h17.6" />
    </>
  ),
};

interface Props {
  name: IconName;
  size?: number;
  className?: string;
  /** Set when the icon carries meaning no adjacent text already provides. */
  title?: string;
}

export default function Icon({ name, size = 20, className, title }: Props) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      focusable="false"
    >
      {title ? <title>{title}</title> : null}
      {paths[name]}
    </svg>
  );
}
