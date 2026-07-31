import type { CSSProperties } from "react";

/**
 * Stagger helper for scroll-reveal animations.
 *
 * The `.reveal` class reads `--d` as its transition-delay, so this lets a
 * server component set a stagger without needing client-side JS:
 *
 *   <div className="reveal" style={delay(80)} />
 */
export function delay(ms: number): CSSProperties {
  return { "--d": `${ms}ms` } as CSSProperties;
}

/** Joins class names, dropping falsy values. */
export function cx(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}

/**
 * Sets the local accent for a card or control.
 *
 * Everything downstream reads `rgb(var(--hue-rgb))` for the solid colour and
 * `rgba(var(--hue-rgb), n)` for tints, so one property recolours a whole
 * component — badge, border, shadow and hover state together.
 */
export function hueVar(rgb: string, extra?: CSSProperties): CSSProperties {
  return { "--hue-rgb": rgb, ...extra } as CSSProperties;
}
