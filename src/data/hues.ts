import type { HueRgb, JurisdictionTier } from "@/lib/types";

/**
 * The category spectrum.
 *
 * Eight hues, each verified to at least 4.5:1 against white so they can carry
 * label text, not just decoration. Azure stays first because it is the primary
 * brand colour — the spectrum extends the identity rather than competing with
 * it.
 *
 *   azure   #1D6FE8  4.7:1      teal    #0F766E  5.3:1
 *   violet  #6D3FE0  6.1:1      indigo  #4348C8  7.0:1
 *   cyan    #0B7C93  4.9:1      rose    #C2416B  4.9:1
 *   amber   #8A5A08  5.9:1      emerald #047857  5.6:1
 */
export const hue = {
  azure: "29, 111, 232",
  violet: "109, 63, 224",
  cyan: "11, 124, 147",
  amber: "138, 90, 8",
  teal: "15, 118, 110",
  indigo: "67, 72, 200",
  rose: "194, 65, 107",
  emerald: "4, 120, 87",
} as const satisfies Record<string, HueRgb>;

/** Ordered spectrum, for anything that cycles rather than maps by name. */
export const spectrum: HueRgb[] = [
  hue.azure,
  hue.violet,
  hue.cyan,
  hue.amber,
  hue.teal,
  hue.indigo,
  hue.rose,
  hue.emerald,
];

export const tierHue: Record<JurisdictionTier, HueRgb> = {
  entry: hue.amber,
  mid: hue.cyan,
  premium: hue.indigo,
};

export const tierLabel: Record<JurisdictionTier, string> = {
  entry: "Entry",
  mid: "Mid-tier",
  premium: "Tier-1",
};
