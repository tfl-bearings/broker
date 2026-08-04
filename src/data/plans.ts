import type { AddOn, Plan } from "@/lib/types";

const MONTHLY_NOTE = "Billed monthly · cancel with 30 days’ notice";
const ANNUAL_NOTE = "Billed annually · equivalent to 10 months";

/**
 * TODO(launch): confirm every allowance below (group counts, account limits,
 * PAMM availability, support hours) against what is actually delivered.
 */
export const plans: Plan[] = [
  {
    id: "basic",
    tier: "Tier 01",
    name: "Basic",
    description:
      "Your own MT5 Manager for internal B-book flow — full control over margins, groups and pricing.",
    price: { monthly: "1,999", annual: "1,659" },
    note: { monthly: MONTHLY_NOTE, annual: ANNUAL_NOTE },
    features: [
      "MT5 Manager with full API access",
      "Up to 3 trading groups",
      "Up to 500 live accounts",
      "Custom spreads on every instrument",
      "Custom commission & swap structures",
      "B-book — internal processing",
      "Desktop, Android & iOS terminals",
      "Generic server name (choice of 3)",
      "CRM Starter — leads, KYC, wallets",
      "Email support, 24/5",
    ],
    audience: "Ideal for new brokers & prop-style desks",
    cta: "Get Basic",
  },
  {
    id: "advanced",
    tier: "Tier 02",
    name: "Advanced",
    description:
      "Everything in Basic, plus an LP bridge for genuine A-book liquidity coverage and hybrid risk routing.",
    price: { monthly: "3,500", annual: "2,905" },
    note: { monthly: MONTHLY_NOTE, annual: ANNUAL_NOTE },
    featured: true,
    badge: "Most popular",
    inherits: "Basic",
    features: [
      "LP Bridge for A-book coverage",
      "Connect any MT5 account for hedging",
      "Flexible A-book / B-book risk routing",
      "Rule-based exposure & symbol routing",
      "Up to 10 groups · 2,500 accounts",
      "PAMM / MAM module included",
      "CRM Pro — IB engine & automations",
      "Dedicated account manager",
      "Priority support, 24/7",
    ],
    audience: "For brokers managing real risk & exposure",
    cta: "Get Advanced",
  },
  {
    id: "full",
    tier: "Tier 03",
    name: "Full",
    description:
      "The complete turnkey package — your own broker website, an integrated CRM and the full A-book / B-book stack, ready to onboard clients.",
    price: { monthly: "5,000", annual: "4,150" },
    note: { monthly: MONTHLY_NOTE, annual: ANNUAL_NOTE },
    inherits: "Advanced",
    features: [
      "Branded broker website",
      "Integrated CRM for onboarding & leads",
      "Full A-book / B-book infrastructure",
      "LP bridge & API access included",
      "Custom spreads & commissions",
      "Desktop, Android & iOS terminals",
    ],
    audience: "For brokers taking on their own client base",
    cta: "Get Full",
  },
];

export const addOns: AddOn[] = [
  {
    name: "Extra trading groups",
    description: "Beyond your plan allowance, configured to your pricing model.",
    price: "Quoted per group",
  },
  {
    name: "Additional account blocks",
    description: "Scale live account capacity in blocks as you grow.",
    price: "Quoted per block",
  },
  {
    name: "Company formation",
    description: "Incorporation across 13 jurisdictions, with bank introductions.",
    price: "Quoted per jurisdiction",
  },
  {
    name: "Licensing advisory",
    description: "Application drafting, compliance manuals, renewal management.",
    price: "Quoted",
  },
  {
    name: "Custom EA / MQL5 dev",
    description: "Expert Advisors, indicators and bespoke server-side plugins.",
    price: "Hourly or fixed-bid",
  },
  {
    name: "Payment orchestration",
    description: "Multi-PSP cascading, crypto rails, chargeback tooling.",
    price: "Setup + per-transaction",
  },
  {
    name: "Brand & design package",
    description: "Logo, identity system, terminal skins, marketing collateral.",
    price: "Fixed-bid",
  },
  {
    name: "SEO & growth retainer",
    description: "Technical SEO, content programme, paid acquisition management.",
    price: "Monthly retainer",
  },
  {
    name: "Prop firm module",
    description: "Challenge engine, evaluation rules, trader dashboard, payouts.",
    price: "Quoted",
  },
  {
    name: "Data migration",
    description: "Move accounts, history and client records from your old provider.",
    price: "Fixed-bid",
  },
  {
    name: "Dedicated colocation",
    description: "Private hardware in a tier-1 financial data centre.",
    price: "Monthly",
  },
];
