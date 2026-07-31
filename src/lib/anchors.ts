/**
 * Anchor IDs are derived from titles rather than stored alongside them, so a
 * nav link and the card it points at can never drift out of sync. Rename a
 * service and both ends move together.
 */
export function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/[‘’']/g, "")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export const serviceAnchor = (title: string) => `svc-${slugify(title)}`;
export const pluginAnchor = (title: string) => `plugin-${slugify(title)}`;
