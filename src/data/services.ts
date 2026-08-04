import type { Plugin, ServiceCategory } from "@/lib/types";
import { hue, spectrum } from "./hues";

/** Eight disciplines, 40 services. Add a service by adding an object. */
export const serviceCategories: ServiceCategory[] = [
  {
    id: "platforms",
    hue: hue.azure,
    label: "Trading platforms",
    prefix: "PLATFORMS",
    services: [
      {
        title: "MT5 Manager Rental",
        description:
          "A fully provisioned MetaTrader 5 Manager environment on a flat monthly rent. Your groups, your spreads, your commissions — with no capital outlay for a server licence.",
        tags: ["Core product", "2–3 days", "API included"],
      },
      {
        title: "MT5 & MT4 Grey Label",
        description:
          "Operate under an established Main Label without incorporating your own entity first. The lowest-friction way to start taking client flow while you build toward a licence.",
        tags: ["MT4", "MT5", "Fastest launch"],
      },
      {
        title: "MT5 Main Label & acquisition",
        description:
          "Access to established Main Label entities — including ready-registered structures with existing account capacity, for operators who need to move immediately.",
        tags: ["Entity transfer", "Due diligence"],
      },
      {
        title: "WebTrader platform",
        description:
          "A browser-based trading terminal for your clients. Advanced charting, one-click trading, watchlists, and full order-type support with no download required.",
        tags: ["50+ indicators", "No download"],
      },
      {
        title: "iOS & Android apps",
        description:
          "Mobile trading on the standard MetaTrader apps for iOS and Android, with push notifications, biometric login and the full order lifecycle on device.",
        tags: ["App Store", "Google Play", "Biometrics"],
      },
    ],
  },
  {
    id: "crm",
    hue: hue.violet,
    label: "CRM & back office",
    prefix: "CRM",
    services: [
      {
        title: "Forex CRM & back office",
        description:
          "The operational spine of the brokerage. Lead pipeline, client profiles, trading account operations, finance approvals and reporting in one permissioned system.",
        tags: ["Role-based", "Audit trails", "Multi-brand"],
      },
      {
        title: "Trader’s Room / client portal",
        description:
          "Your clients’ self-service home: registration, document upload, account opening, internal transfers, deposits, withdrawals and statements — fully branded.",
        tags: ["Self-service", "Multi-language"],
      },
      {
        title: "KYC & AML automation",
        description:
          "Document capture with automated verification, sanctions and PEP screening, risk scoring, review queues, expiry reminders and a complete evidential audit trail.",
        tags: ["Screening", "Review queues", "Retention"],
      },
      {
        title: "IB & affiliate engine",
        description:
          "Unlimited-depth partner trees with per-symbol, per-group and per-lot commission rules, sub-IB overrides, live partner dashboards and automated payout runs.",
        tags: ["Multi-tier", "Auto payouts", "Referral links"],
      },
      {
        title: "Wallets & finance workflows",
        description:
          "Client wallets, internal transfers, deposit and withdrawal approval chains with maker-checker controls, reconciliation exports and per-action accountability.",
        tags: ["Maker-checker", "Reconciliation"],
      },
      {
        title: "Reporting, BI & automation",
        description:
          "Live dashboards for desk, finance and compliance, scheduled report delivery, retention triggers, and an email/SMS automation layer driven by client behaviour.",
        tags: ["Scheduled reports", "Triggers", "Exports"],
      },
    ],
  },
  {
    id: "liquidity",
    hue: hue.cyan,
    label: "Liquidity & risk",
    prefix: "LIQUIDITY",
    services: [
      {
        title: "LP Bridge & aggregation",
        description:
          "Connect one or many liquidity providers, aggregate the book, apply your own markup, and route orders with full fill transparency and rejection analytics.",
        tags: ["FIX 4.4", "Aggregation", "Markup rules"],
      },
      {
        title: "A-book / B-book routing",
        description:
          "Rule-driven hybrid routing by client, group, symbol, volume or profitability — so exposure you want covered goes out, and the rest stays internal.",
        tags: ["Hybrid", "Per-client rules"],
      },
      {
        title: "Risk & exposure management",
        description:
          "Live net exposure by symbol and desk, configurable alerts, margin monitoring, stop-out supervision and end-of-session risk reporting.",
        tags: ["Live exposure", "Alerting"],
      },
      {
        title: "Dealing desk operations",
        description:
          "Optional managed dealing support: session management, toxic-flow identification, DST and rollover supervision, and evening risk reports to your inbox.",
        tags: ["Managed", "Toxic flow", "DST"],
      },
      {
        title: "Multi-asset instrument setup",
        description:
          "FX majors, minors and exotics, metals, energies, indices, share CFDs and crypto — with correct sessions, swaps, contract sizes and margin tiers configured for you.",
        tags: ["FX", "Metals", "Indices", "Crypto"],
      },
    ],
  },
  {
    id: "payments",
    hue: hue.amber,
    label: "Payments",
    prefix: "PAYMENTS",
    services: [
      {
        title: "PSP gateway integration",
        description:
          "Card acquiring, local rails and alternative methods wired directly into the Trader’s Room, with automatic account crediting on settlement.",
        tags: ["Cards", "Local rails", "APMs"],
      },
      {
        title: "Crypto deposits & payouts",
        description:
          "Stablecoin and major-asset rails with per-client deposit addresses, on-chain confirmation tracking and automated conversion to account currency.",
        tags: ["USDT", "On-chain tracking"],
      },
      {
        title: "Payment orchestration",
        description:
          "Route each transaction to the best-performing provider, with automatic cascading on decline, per-region rules and consolidated settlement reporting.",
        tags: ["Cascading", "Smart routing"],
      },
      {
        title: "Withdrawal controls",
        description:
          "Approval chains, limits by client tier, anti-fraud rules, same-method-return enforcement and full audit history on every payout decision.",
        tags: ["Approvals", "Fraud rules"],
      },
      {
        title: "Reconciliation & settlement",
        description:
          "Daily automated matching between PSP settlement files, wallet ledgers and MT5 balance operations, with exception queues for anything that does not tie out.",
        tags: ["Daily matching", "Exception queue"],
      },
    ],
  },
  {
    id: "infra",
    hue: hue.teal,
    label: "Infrastructure",
    prefix: "INFRA",
    services: [
      {
        title: "Managed hosting",
        description:
          "Your Manager environment runs on hardware we provision, patch, monitor and back up — so platform uptime is our responsibility, not a job on your list.",
        tags: ["Managed", "Patching"],
      },
      {
        title: "Low-latency colocation",
        description:
          "Optional placement in tier-1 financial data centres alongside major liquidity venues, to cut round-trip time between your server and your LP.",
        tags: ["Tier-1 DC", "Low latency"],
      },
      {
        title: "Trader & EA VPS",
        description:
          "Dedicated virtual servers for your clients’ Expert Advisors, provisioned from your CRM and billed through your own pricing.",
        tags: ["Client VPS", "Resold"],
      },
      {
        title: "Security & DDoS protection",
        description:
          "Hardened firewalls, filtered ingress, DDoS mitigation, encrypted transport, IP allow-listing on admin surfaces and regular vulnerability review.",
        tags: ["DDoS", "Hardening", "TLS"],
      },
      {
        title: "Backup & disaster recovery",
        description:
          "Scheduled encrypted backups with off-site retention, documented recovery objectives and periodic restore testing — not just a backup job nobody has ever run.",
        tags: ["Off-site", "Restore tested"],
      },
    ],
  },
  {
    id: "corporate",
    hue: hue.indigo,
    label: "Licensing & corporate",
    prefix: "CORPORATE",
    services: [
      {
        title: "Company formation",
        description:
          "Incorporation across thirteen jurisdictions, with registered office, nominee options where lawful, and a realistic view of what each regime actually requires.",
        tags: ["13 jurisdictions", "Registered office"],
      },
      {
        title: "Licence applications",
        description:
          "Application drafting, business plans, financial projections, compliance manuals and regulator correspondence handled by people who have filed them before.",
        tags: ["Drafting", "Manuals"],
      },
      {
        title: "Banking & EMI introductions",
        description:
          "Introductions to corporate banking and EMI partners that will actually onboard a brokerage, with document packs prepared to their standard.",
        tags: ["Corporate accounts", "EMI"],
      },
      {
        title: "Compliance & renewals",
        description:
          "Ongoing filings, annual renewals, AML policy maintenance, audit coordination and change-of-control notifications so nothing lapses quietly.",
        tags: ["Annual filings", "AML policy"],
      },
      {
        title: "Legal documentation",
        description:
          "Client agreements, risk disclosures, terms of business, privacy and cookie policies, and IB contracts drafted for your jurisdiction and model.",
        tags: ["Client agreements", "Disclosures"],
      },
    ],
  },
  {
    id: "growth",
    hue: hue.rose,
    label: "Growth & marketing",
    prefix: "GROWTH",
    services: [
      {
        title: "Broker website development",
        description:
          "A fast, multi-language marketing site engineered for conversion, wired directly into your CRM so every enquiry lands as a tracked lead.",
        tags: ["Multi-language", "CRM-wired"],
      },
      {
        title: "Brand identity & design",
        description:
          "Logo, colour system, typography, terminal skins, app store assets and a collateral library your team can actually keep using.",
        tags: ["Identity", "Terminal skins"],
      },
      {
        title: "SEO & content",
        description:
          "Technical SEO, market-specific landing pages, education content and a link strategy aimed at the search terms traders in your region genuinely use.",
        tags: ["Technical SEO", "Content"],
      },
      {
        title: "Paid acquisition",
        description:
          "Campaign build and management across the channels that still accept financial advertisers, with cost-per-funded-account as the reported metric.",
        tags: ["CPA tracking", "Creative"],
      },
      {
        title: "Retention & lifecycle",
        description:
          "Behavioural email and SMS journeys, dormancy win-back, deposit-drop alerts and IB engagement programmes driven from CRM data.",
        tags: ["Lifecycle", "Win-back"],
      },
    ],
  },
  {
    id: "prop",
    hue: hue.emerald,
    label: "Prop firm",
    prefix: "PROP",
    services: [
      {
        title: "Prop firm launch",
        description:
          "The full evaluation business in one package: challenge engine, rule enforcement, trader dashboard, payout workflow and the MT5 environment beneath it.",
        tags: ["Turnkey", "Challenge engine"],
      },
      {
        title: "Rule & breach engine",
        description:
          "Daily and overall drawdown, profit targets, minimum trading days, consistency rules and news-trading restrictions — enforced server-side, in real time.",
        tags: ["Real-time", "Server-side"],
      },
      {
        title: "Trader dashboard",
        description:
          "A branded portal where candidates track objectives, drawdown headroom, phase progress and payout eligibility without opening a support ticket.",
        tags: ["Branded", "Live metrics"],
      },
      {
        title: "Payout & scaling plans",
        description:
          "Profit-split configuration, payout scheduling, scaling ladders and funded-account provisioning wired into the same finance approval chain as the brokerage.",
        tags: ["Profit split", "Scaling"],
      },
    ],
  },
];

export const totalServices = serviceCategories.reduce(
  (n, c) => n + c.services.length,
  0,
);

/** Plugins cycle the same spectrum, so the grid reads as one family. */
const pluginContent: Array<Omit<Plugin, "hue">> = [
  {
    title: "PAMM & MAM",
    description:
      "Pooled and multi-account management with proportional allocation, performance fees, high-water marks and investor statements.",
  },
  {
    title: "Copy & social trading",
    description:
      "Strategy leaderboards, follower risk multipliers, low-latency replication and provider revenue sharing.",
  },
  {
    title: "Virtual dealer",
    description:
      "Configurable execution logic with per-group delay, slippage and requote rules under your dealing policy.",
  },
  {
    title: "Anti-scalping & latency guard",
    description:
      "Detection and handling of latency arbitrage, tick-scalping and toxic patterns before they reach your book.",
  },
  {
    title: "Bonus & credit engine",
    description:
      "Deposit bonuses, credit lines, loyalty tiers and turnover-based release rules with automatic clawback.",
  },
  {
    title: "Trade copier",
    description:
      "Mirror flow between accounts, groups or entirely separate servers, with ratio and symbol mapping.",
  },
  {
    title: "Risk & exposure monitor",
    description:
      "Live net position by symbol and desk, threshold alerting and automated hedge triggers.",
  },
  {
    title: "Custom EA & MQL5 build",
    description:
      "Bespoke Expert Advisors, indicators and server plugins written to your specification and maintained.",
  },
];

export const plugins: Plugin[] = pluginContent.map((p, i) => ({
  ...p,
  hue: spectrum[i % spectrum.length],
}));
