interface Props {
  size?: number;
  /**
   * Gradient ids must be unique per instance — the mark renders more than once
   * per page (header, footer), and duplicate ids in a document are invalid.
   */
  uid: string;
  className?: string;
}

/**
 * The Meridian monogram: an M whose centre vertex reads as a chart trough and
 * recovery, with a longitude line through it.
 *
 * Kept in sync with src/app/icon.svg and the social card by hand — same
 * geometry, so the favicon, header logo and share image are one mark.
 */
export default function BrandMark({ size = 32, uid, className }: Props) {
  const tile = `bm-tile-${uid}`;
  const stroke = `bm-stroke-${uid}`;
  const sheen = `bm-sheen-${uid}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={tile} x1="0" y1="0" x2="0.75" y2="1">
          <stop offset="0" stopColor="#1D4680" />
          <stop offset="0.52" stopColor="#0E2951" />
          <stop offset="1" stopColor="#07182F" />
        </linearGradient>
        <linearGradient id={stroke} x1="0.08" y1="0" x2="0.92" y2="1">
          <stop offset="0" stopColor="#A8CEFF" />
          <stop offset="0.48" stopColor="#7FB2FF" />
          <stop offset="1" stopColor="#B49BFF" />
        </linearGradient>
        <linearGradient id={sheen} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFFFFF" stopOpacity="0.18" />
          <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
      </defs>

      <rect width="64" height="64" rx="16" fill={`url(#${tile})`} />
      <rect width="64" height="34" rx="16" fill={`url(#${sheen})`} />

      <path
        d="M32 12.5 V51.5"
        stroke="#B49BFF"
        strokeOpacity="0.3"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M16.5 46.5 V23 L32 36.2 L47.5 23 V46.5"
        fill="none"
        stroke={`url(#${stroke})`}
        strokeWidth="6.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="0.8"
        y="0.8"
        width="62.4"
        height="62.4"
        rx="15.2"
        fill="none"
        stroke="#FFFFFF"
        strokeOpacity="0.16"
        strokeWidth="1.6"
      />
    </svg>
  );
}
