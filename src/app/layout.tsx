import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { site } from "@/data/site";
import ScrollEffects from "@/components/ScrollEffects";
import "./globals.css";

/**
 * Type pairing:
 *  - Plus Jakarta Sans (display) — geometric-humanist, distinctive at 800,
 *    much less blocky than Archivo at large sizes.
 *  - Inter (body) — still the most legible UI face at 13–16px.
 *  - JetBrains Mono (labels, figures) — crisper and more engineered than
 *    IBM Plex Mono, with a taller x-height that holds up at 10–12px.
 *
 * All three are variable fonts, so the weight ranges below cost one file each.
 */
const jakarta = Plus_Jakarta_Sans({
  variable: "--font-display-src",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans-src",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono-src",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  // TODO(launch): point at the real production domain.
  metadataBase: new URL(`https://${site.domain}`),
  title: `${site.name} — MT5 Manager Rental, Forex CRM & Turnkey Brokerage Infrastructure`,
  description: site.description,
  openGraph: {
    title: `${site.name} — MT5 Manager Rental & Forex CRM`,
    description: site.description,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <body>
        {children}
        <ScrollEffects />
      </body>
    </html>
  );
}
