import { ImageResponse } from "next/og";

/**
 * iOS home-screen icon. Must be a raster, so it is generated rather than
 * reusing icon.svg. Apple applies its own corner mask, hence the full-bleed
 * background and slightly larger inset than the favicon.
 */
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(150deg, #1D4680 0%, #0E2951 52%, #07182F 100%)",
        }}
      >
        <svg width="132" height="132" viewBox="0 0 64 64">
          <path
            d="M32 12.5 V51.5"
            stroke="#B49BFF"
            strokeOpacity="0.35"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <path
            d="M16.5 46.5 V23 L32 36.2 L47.5 23 V46.5"
            fill="none"
            stroke="#8FBCFF"
            strokeWidth="6.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    size,
  );
}
