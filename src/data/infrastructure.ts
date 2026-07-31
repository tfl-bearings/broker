import type { InfraCard, Metric } from "@/lib/types";

/**
 * TODO(launch): 99.9% and <15 min are written as TARGETS. If they cannot be
 * evidenced, lower them or remove the metric row entirely.
 */
export const metrics: Metric[] = [
  {
    label: "Platform uptime target",
    parts: [
      { kind: "count", to: 99.9, decimals: 1 },
      { kind: "text", value: "%" },
    ],
  },
  { label: "NOC monitoring", parts: [{ kind: "text", value: "24/7" }] },
  {
    label: "Critical response target",
    parts: [
      { kind: "text", value: "<" },
      { kind: "count", to: 15 },
      { kind: "text", value: " min" },
    ],
  },
  {
    label: "Provisioning time",
    parts: [
      { kind: "count", to: 2 },
      { kind: "text", value: "–" },
      { kind: "count", to: 3 },
      { kind: "text", value: " days" },
    ],
  },
];

export const infraCards: InfraCard[] = [
  {
    tag: "RESILIENCE",
    title: "Redundant by design",
    icon: "shield",
    description:
      "Failover hardware, redundant network paths and automated health checks, so a single component failure does not take your desk offline.",
  },
  {
    tag: "LATENCY",
    title: "Close to the venues",
    icon: "zap",
    description:
      "Optional colocation in tier-1 financial data centres, positioning your server near the liquidity you are actually routing to.",
  },
  {
    tag: "SECURITY",
    title: "Hardened perimeter",
    icon: "lock",
    description:
      "Managed firewalls, DDoS mitigation, encrypted transport, IP allow-listing on admin surfaces and scheduled vulnerability review.",
  },
  {
    tag: "CONTINUITY",
    title: "Backups you can restore",
    icon: "database",
    description:
      "Encrypted off-site backups with documented recovery objectives and periodic restore drills — tested, not assumed.",
  },
  {
    tag: "MAINTENANCE",
    title: "Patched on schedule",
    icon: "refresh",
    description:
      "Platform builds, plugin compatibility and security updates staged and tested before they ever touch your live environment.",
  },
  {
    tag: "SUPPORT",
    title: "Engineers, not scripts",
    icon: "headset",
    description:
      "Direct access to people who administer MetaTrader environments daily, on Telegram, email or a scheduled call.",
  },
];
