import { ImageResponse } from "next/og";
import { site } from "@/data/site";

/**
 * Social share card, generated at build time — no binary asset to maintain,
 * and it stays in sync with the brand tokens automatically.
 */
export const alt = `${site.name} — MT5 Manager rental, Forex CRM and brokerage infrastructure`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(140deg, #14345E 0%, #0A1F3C 55%)",
        }}
      >
        {/* Brand row */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="64" height="64" viewBox="0 0 64 64">
            <rect width="64" height="64" rx="16" fill="#12315C" />
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
            <rect
              x="0.8"
              y="0.8"
              width="62.4"
              height="62.4"
              rx="15.2"
              fill="none"
              stroke="#FFFFFF"
              strokeOpacity="0.18"
              strokeWidth="1.6"
            />
          </svg>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 34, fontWeight: 800, color: "#fff", letterSpacing: -1 }}>
              {site.wordmark}
            </div>
            <div style={{ fontSize: 15, color: "#93A5BC", letterSpacing: 5 }}>
              {site.submark}
            </div>
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div
            style={{
              fontSize: 66,
              fontWeight: 800,
              color: "#fff",
              letterSpacing: -2.6,
              lineHeight: 1.08,
              maxWidth: 940,
            }}
          >
            Run your own MT5 desk.
          </div>
          <div style={{ fontSize: 30, color: "#AEBBCA", maxWidth: 880, lineHeight: 1.4 }}>
            Managed MetaTrader 5 Manager environments, Forex CRM and liquidity —
            live in 2–3 days, no setup fee.
          </div>
        </div>

        {/* Stat row */}
        <div style={{ display: "flex", gap: 18 }}>
          {["2–3 days to live", "$0 setup fee", "41 services", "A-book / B-book"].map((t) => (
            <div
              key={t}
              style={{
                fontSize: 21,
                color: "#7FB2FF",
                border: "1px solid rgba(127,178,255,0.32)",
                background: "rgba(127,178,255,0.09)",
                borderRadius: 100,
                padding: "11px 24px",
                display: "flex",
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
