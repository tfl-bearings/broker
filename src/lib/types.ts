/**
 * Shared domain types for the Meridian Broker Tech site.
 * Every piece of page content is typed here so a new service, plan or
 * jurisdiction is a data change, not a markup change.
 */

/* ---------------- Icons ---------------- */

/** Keys of the inline SVG set in components/ui/Icon.tsx. */
export type IconName =
  | "api"
  | "sliders"
  | "devices"
  | "tag"
  | "mail"
  | "send"
  | "message"
  | "pin"
  | "clock"
  | "shield"
  | "zap"
  | "lock"
  | "database"
  | "refresh"
  | "headset"
  | "arrowRight"
  | "chevronDown"
  | "check"
  | "globe";

/* ---------------- Navigation ---------------- */

export interface NavLink {
  label: string;
  href: string;
  /** Optional small line under the link inside the mega menu. */
  note?: string;
}

export interface MegaColumn {
  title: string;
  links: NavLink[];
}

export interface NavItem {
  label: string;
  href?: string;
  /** Present when this item opens a mega menu instead of navigating. */
  columns?: MegaColumn[];
}

/* ---------------- Pricing ---------------- */

export type BillingCycle = "monthly" | "annual";

export interface Plan {
  id: string;
  tier: string;
  name: string;
  description: string;
  /** Display strings, already formatted. Keeps currency rendering explicit. */
  price: Record<BillingCycle, string>;
  note: Record<BillingCycle, string>;
  featured?: boolean;
  badge?: string;
  /** Rendered as "Everything in X, plus:" above the feature list. */
  inherits?: string;
  features: string[];
  audience: string;
  cta: string;
}

export interface AddOn {
  name: string;
  description: string;
  price: string;
}

/* ---------------- Services ---------------- */

export interface Service {
  title: string;
  description: string;
  tags: string[];
}

/**
 * An "R, G, B" triple, e.g. "29, 111, 232".
 *
 * Stored as a triple rather than a hex string so it can drive both the solid
 * colour and its translucent tints from one value:
 *   color: rgb(var(--hue-rgb));
 *   background: rgba(var(--hue-rgb), 0.09);
 *
 * Every hue in the spectrum is checked to at least 4.5:1 on white.
 */
export type HueRgb = string;

export interface ServiceCategory {
  id: string;
  label: string;
  /** Uppercase label used in the "01 / PLATFORMS" card eyebrow. */
  prefix: string;
  hue: HueRgb;
  services: Service[];
}

export interface Plugin {
  title: string;
  description: string;
  hue: HueRgb;
}

/* ---------------- Comparison ---------------- */

export interface ComparisonColumn {
  key: string;
  label: string;
  /** Small sub-label, only used on the highlighted column. */
  sub?: string;
  highlight?: boolean;
}

export interface ComparisonRow {
  label: string;
  values: Record<string, string>;
}

/* ---------------- CRM ---------------- */

export interface CrmModule {
  name: string;
  description: string;
}

export interface WorkflowStage {
  dept: string;
  title: string;
  points: string[];
}

export interface DashboardKpi {
  label: string;
  value: string;
  delta: string;
}

export type ClientStatus = "ok" | "wait" | "new";

export interface DashboardRow {
  client: string;
  stage: string;
  balance: string;
  status: ClientStatus;
  statusLabel: string;
}

export interface DashboardNavGroup {
  group: string;
  items: string[];
}

/* ---------------- Infrastructure ---------------- */

export type MetricPart =
  | { kind: "text"; value: string }
  | { kind: "count"; to: number; decimals?: number };

export interface Metric {
  label: string;
  parts: MetricPart[];
}

export interface InfraCard {
  tag: string;
  title: string;
  description: string;
  icon: IconName;
}

/* ---------------- Licensing ---------------- */

/**
 * Jurisdictions are coloured by tier rather than individually — thirteen
 * arbitrary colours would be noise, three meaningful ones are information.
 */
export type JurisdictionTier = "entry" | "mid" | "premium";

export interface Jurisdiction {
  name: string;
  regulator: string;
  capital: string;
  timeline: string;
  profile: string;
  tier: JurisdictionTier;
}

/* ---------------- Misc content ---------------- */

export interface Step {
  title: string;
  description: string;
}

export interface ServerName {
  host: string;
  available: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  company: string;
  /** True while the entry is still a placeholder awaiting a real client. */
  placeholder?: boolean;
}

export interface Quote {
  symbol: string;
  price: string;
  change: string;
  direction: "up" | "down";
}

export interface TickerItem {
  label: string;
  value: string;
  accent?: boolean;
}

export interface HeroStat {
  value: string;
  label: string;
}

export interface IncludedItem {
  icon: IconName;
  title: string;
  highlight: string;
  description: string;
}

export interface FooterColumn {
  title: string;
  links: NavLink[];
}

export interface ContactChannel {
  icon: IconName;
  label: string;
  value: string;
  href?: string;
}

export interface SelectOption {
  value: string;
  label: string;
  selected?: boolean;
}
