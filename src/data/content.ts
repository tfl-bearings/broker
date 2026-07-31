import type {
  FaqItem,
  HeroStat,
  IncludedItem,
  Quote,
  SelectOption,
  ServerName,
  Step,
  Testimonial,
  TickerItem,
} from "@/lib/types";

/* ---------------- Hero ---------------- */

export const heroStats: HeroStat[] = [
  { value: "2–3 days", label: "Turnaround" },
  { value: "$0", label: "Setup fee" },
  { value: "40+", label: "Services" },
  { value: "A & B book", label: "Flow control" },
];

/** Illustrative sample quotes for the terminal preview. Not live market data. */
export const heroQuotes: Quote[] = [
  { symbol: "EURUSD", price: "1.08421", change: "+0.14%", direction: "up" },
  { symbol: "GBPUSD", price: "1.27153", change: "+0.09%", direction: "up" },
  { symbol: "USDJPY", price: "149.328", change: "−0.21%", direction: "down" },
  { symbol: "XAUUSD", price: "2,043.60", change: "+0.62%", direction: "up" },
  { symbol: "BTCUSD", price: "67,420.5", change: "−1.08%", direction: "down" },
  { symbol: "US30", price: "38,791.2", change: "+0.31%", direction: "up" },
];

/* ---------------- Ticker & trust ---------------- */

export const tickerItems: TickerItem[] = [
  { label: "MT5 MANAGER API", value: "INCLUDED" },
  { label: "LP BRIDGE", value: "A-BOOK READY", accent: true },
  { label: "FOREX CRM", value: "FULL SUITE" },
  { label: "PAMM / MAM", value: "AVAILABLE", accent: true },
  { label: "COPY TRADING", value: "AVAILABLE" },
  { label: "KYC / AML", value: "AUTOMATED", accent: true },
  { label: "IB ENGINE", value: "MULTI-TIER" },
  { label: "PSP GATEWAYS", value: "INTEGRATED", accent: true },
  { label: "WEBTRADER", value: "BRANDED" },
  { label: "iOS & ANDROID", value: "WHITE LABEL", accent: true },
  { label: "VIRTUAL DEALER", value: "PLUGIN" },
  { label: "ANTI-SCALPING", value: "PLUGIN", accent: true },
  { label: "24/7 NOC", value: "MONITORED" },
  { label: "COMPANY FORMATION", value: "13 JURISDICTIONS", accent: true },
];

export const trustChips = [
  "MetaTrader 5",
  "MetaTrader 4",
  "MT5 Manager API",
  "FIX 4.4 / 4.3",
  "REST & WebSocket",
  "Liquidity bridges",
  "PSP gateways",
  "Crypto rails",
  "KYC providers",
  "TradingView charts",
];

/* ---------------- Included as standard ---------------- */

export const includedItems: IncludedItem[] = [
  {
    icon: "api",
    title: "access",
    highlight: "Manager API",
    description:
      "Automate onboarding, reporting, balance operations and account management from day one.",
  },
  {
    icon: "sliders",
    title: "Custom",
    highlight: "spreads",
    description:
      "Set spreads, commissions and swaps per group, exactly the way you price your book.",
  },
  {
    icon: "devices",
    title: "Every",
    highlight: "device",
    description:
      "Client terminals for Desktop, Android and iOS — ready to carry your brand.",
  },
  {
    icon: "tag",
    title: "Zero",
    highlight: "setup",
    description:
      "No setup charges on any plan. A flat monthly rent, cancellable on 30 days’ notice.",
  },
];

/* ---------------- How it works ---------------- */

export const steps: Step[] = [
  {
    title: "Pick your plan & server name",
    description:
      "Choose Basic, Advanced or Full, and select one of the available generic server names from the current shortlist.",
  },
  {
    title: "We provision your environment",
    description:
      "Your MT5 Manager, trading groups, spreads, swaps and terminals are configured to your specification — with no setup fee.",
  },
  {
    title: "Connect liquidity & CRM",
    description:
      "Add coverage through the LP bridge on Advanced and Full, then we hand over the CRM with your branding and user roles in place.",
  },
  {
    title: "Onboard & go live",
    description:
      "Open the Trader’s Room, start onboarding clients and take your first deposits. Typically live within 2–3 days of sign-off.",
  },
];

/** TODO(launch): replace with the genuinely available shortlist. */
export const serverNames: ServerName[] = [
  { host: "markets-01.trade", available: true },
  { host: "prime-fx.live", available: true },
  { host: "core-markets.net", available: true },
  { host: "meridian-mt5.net", available: true },
];

/* ---------------- Testimonials ---------------- */

/**
 * TODO(launch): replace with real, written-approved client quotes including
 * names and logos, or delete the section. Fake social proof is exactly what
 * makes competing sites in this market look cheap.
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      "[ PLACEHOLDER — replace with a real, approved client quote. Ask for one sentence on what changed operationally, and one number. ]",
    name: "[ Name, role ]",
    company: "[ Company, jurisdiction ]",
    placeholder: true,
  },
  {
    quote:
      "[ PLACEHOLDER — replace with a real, approved client quote. Aim for one about launch speed or cost versus their previous provider. ]",
    name: "[ Name, role ]",
    company: "[ Company, jurisdiction ]",
    placeholder: true,
  },
  {
    quote:
      "[ PLACEHOLDER — replace with a real, approved client quote. A compliance or finance perspective works well as the third. ]",
    name: "[ Name, role ]",
    company: "[ Company, jurisdiction ]",
    placeholder: true,
  },
];

/* ---------------- Commitments ---------------- */

/**
 * Stands in for the testimonial section until real, approved client quotes
 * exist. Every line here is something you control and can honour, so it is
 * checkable rather than assertable — which is the only kind of trust signal
 * worth putting on a page in a market this sceptical.
 *
 * TODO(launch): confirm you will actually honour all six before publishing.
 * These are promises, not copy.
 */
export const commitments: Array<{ title: string; description: string }> = [
  {
    title: "No setup fee, on any tier",
    description:
      "A flat monthly rent and nothing else. You are never asked for a five-figure onboarding payment before you have seen the platform running.",
  },
  {
    title: "Thirty days’ notice, always",
    description:
      "Monthly rolling on every plan. No twenty-four month term that makes leaving more expensive than staying with something that is not working.",
  },
  {
    title: "Your data leaves with you",
    description:
      "If you move elsewhere, you get your client and account records in a documented export format. We do not hold your book hostage to keep your business.",
  },
  {
    title: "A written quote before you commit",
    description:
      "Scope, fixed monthly figure and a realistic go-live date, in writing. Nothing on this page becomes a price you are held to without a quotation.",
  },
  {
    title: "We will tell you if you need a licence",
    description:
      "If your model requires authorisation you do not hold in the markets you are targeting, we say so before you launch rather than after you have clients.",
  },
  {
    title: "One figure, no usage surprises",
    description:
      "The monthly rent is the monthly rent. No per-trade billing and no overage invoice arriving after a volatile month you did not budget for.",
  },
];

/* ---------------- FAQ ---------------- */

export const faqItems: FaqItem[] = [
  {
    question: "What exactly am I renting?",
    answer:
      "A MetaTrader 5 Manager environment: your own trading groups, symbol sets, spreads, commissions and swap rules, with full Manager API access, running on infrastructure we provision and maintain. You get operational control of your book without buying a server licence or waiting on a MetaQuotes issuance decision.",
  },
  {
    question: "Why is a white label harder to get than it used to be?",
    answer:
      "MetaQuotes paused issuance of new MT5 white label licences in late 2022, and full server licences remain difficult to obtain for new applicants. That is why Manager rental and grey label arrangements have become the practical route to market. Any provider promising you a brand-new white label licence on a short timeline is worth questioning closely.",
  },
  {
    question: "Do I need my own company or licence to start?",
    answer:
      "Not to begin on Tier 01. Many operators start on a rented Manager to learn the platform and build flow, then incorporate and licence in parallel. What you legally need depends entirely on where your clients are and how you solicit them — we will map that with you honestly before you launch, and we will tell you if your plan requires a licence you do not have.",
  },
  {
    question: "Will my clients know it is a rented environment?",
    answer:
      "Your Trader’s Room, WebTrader, mobile apps and all client communications carry your brand entirely. On Tier 01 the MetaTrader server entry itself uses a generic name from our shortlist rather than your own. A dedicated branded server entry is available as an add-on, and is included in the upgrade path to a full white label.",
  },
  {
    question: "What is the difference between A-book and B-book here?",
    answer:
      "B-book means the trade is processed internally against your own book — available from Tier 01. A-book means the position is passed to an external liquidity provider through the bridge, which is included from Tier 02. Most desks run a hybrid: routing rules decide, per client or symbol or volume, which flow gets covered externally and which stays internal.",
  },
  {
    question: "Is the CRM really included, or is it an upsell?",
    answer:
      "Included on every tier. Tier 01 ships CRM Starter — leads, KYC workflow, wallets and finance requests. Tier 02 adds the IB engine, automations and advanced reporting. Tier 03 includes the full enterprise back office plus the branded client portal, website and mobile apps. There is no tier where you have to buy a CRM separately to operate.",
  },
  {
    question: "Can I upgrade or move away later?",
    answer:
      "Yes. Moving from Tier 01 to a dedicated white label environment keeps your CRM, branding and client portal identical — only the underlying server changes, and clients experience no interruption. If you leave us entirely, you get your client and account data in a documented export format. We do not hold your book hostage.",
  },
  {
    question: "What is the contract term?",
    answer:
      "Monthly rolling, cancellable with 30 days’ notice, with no setup fee at any tier. Annual billing is offered at roughly a 17% discount, equivalent to paying for ten months. We would rather you stay because the platform works than because a 24-month contract makes leaving expensive.",
  },
  {
    question: "How is support handled?",
    answer:
      "Email support 24/5 on Tier 01; 24/7 priority support with a dedicated account manager on Tier 02 and above. Critical platform incidents carry a target first response inside 15 minutes, and you talk to engineers who administer MetaTrader environments daily rather than a first-line script.",
  },
];

/* ---------------- Contact form options ---------------- */

export const interestOptions: SelectOption[] = [
  { value: "basic", label: "MT5 Manager Rental — Basic" },
  { value: "advanced", label: "MT5 Manager Rental — Advanced", selected: true },
  { value: "full", label: "MT5 Manager Rental — Full" },
  { value: "grey", label: "MT5 / MT4 Grey Label" },
  { value: "white", label: "MT5 / MT4 White Label" },
  { value: "main", label: "Main Label acquisition" },
  { value: "crm", label: "Forex CRM only" },
  { value: "prop", label: "Prop firm setup" },
  { value: "licensing", label: "Licensing & company formation" },
  { value: "payments", label: "Payments & PSP integration" },
  { value: "other", label: "Something else" },
];

export const timelineOptions: SelectOption[] = [
  { value: "asap", label: "As soon as possible" },
  { value: "30d", label: "Within 30 days", selected: true },
  { value: "1-3m", label: "1–3 months" },
  { value: "3-6m", label: "3–6 months" },
  { value: "research", label: "Just researching" },
];
