import { pluginAnchor, serviceAnchor } from "@/lib/anchors";
import type { ContactChannel, FooterColumn } from "@/lib/types";

/**
 * Single source of truth for brand and contact details.
 *
 * TODO(launch): every value marked PLACEHOLDER must be replaced with real,
 * mutually consistent details before this site goes live. Keep the phone
 * number, address and stated jurisdiction coherent with each other.
 */
export const site = {
  name: "Meridian Broker Tech",
  wordmark: "MERIDIAN",
  submark: "BROKER TECH",
  domain: "meridianbrokertech.com",
  email: "hello@meridianbrokertech.com",
  telegram: "@meridianbrokertech",
  whatsapp: "+00 0000 000000", // PLACEHOLDER
  address: "[ Registered address ]", // PLACEHOLDER
  responseTime: "Within one business day",
  year: 2026,
  tagline:
    "MetaTrader 5 Manager environments, Forex CRM, liquidity connectivity, payments and licensing support for brokerages, introducing brokers and proprietary trading firms.",
  description:
    "Rent a fully managed MetaTrader 5 Manager environment on a flat monthly fee. Forex CRM, LP bridge, A-book/B-book routing, PAMM, payments and licensing support. Live in 2-3 days, no setup fee.",
} as const;

export const announcement = {
  prefix: "Market note:",
  text: "MetaQuotes has paused issuance of new MT5 white label licences — Manager rental is now the fastest route to a live desk.",
  linkLabel: "See the comparison",
  href: "#compare",
};

export const contactChannels: ContactChannel[] = [
  { icon: "mail", label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: "send", label: "Telegram", value: site.telegram, href: "#" },
  { icon: "message", label: "WhatsApp", value: site.whatsapp, href: "#" },
  { icon: "pin", label: "Office", value: site.address },
  { icon: "clock", label: "Response time", value: site.responseTime },
];

/** Footer links resolve to the same generated anchors as the nav. */
const svc = (title: string, label?: string) => ({
  label: label ?? title,
  href: `#${serviceAnchor(title)}`,
});
const plug = (title: string, label?: string) => ({
  label: label ?? title,
  href: `#${pluginAnchor(title)}`,
});

export const footerColumns: FooterColumn[] = [
  {
    title: "Platforms",
    links: [
      { label: "MT5 Manager Rental", href: "#pricing" },
      svc("MT5 & MT4 Grey Label", "MT5 & MT4 Grey Label"),
      svc("MT5 Main Label & acquisition", "MT5 Main Label"),
      svc("WebTrader platform"),
      svc("iOS & Android apps"),
      { label: "Compare structures", href: "#compare" },
    ],
  },
  {
    title: "CRM & back office",
    links: [
      svc("Forex CRM & back office", "Forex CRM"),
      svc("Trader’s Room / client portal", "Trader’s Room"),
      svc("KYC & AML automation", "KYC & AML"),
      svc("IB & affiliate engine"),
      svc("Wallets & finance workflows", "Wallets & finance"),
      svc("Reporting, BI & automation", "Reporting & BI"),
      { label: "CRM modules", href: "#crm" },
    ],
  },
  {
    title: "Trading & risk",
    links: [
      svc("LP Bridge & aggregation", "LP Bridge"),
      svc("A-book / B-book routing"),
      plug("PAMM & MAM"),
      plug("Copy & social trading", "Copy trading"),
      plug("Virtual dealer"),
      plug("Anti-scalping & latency guard", "Anti-scalping"),
      plug("Custom EA & MQL5 build", "Custom EA development"),
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Infrastructure", href: "#infrastructure" },
      { label: "Licensing & formation", href: "#jurisdictions" },
      svc("Prop firm launch", "Prop firm setup"),
      svc("Company formation"),
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#contact" },
      { label: "Privacy policy", href: "#" },
      { label: "Terms of service", href: "#" },
    ],
  },
];

export const disclaimers = [
  `${site.name} provides MetaTrader 5 Manager environments and related brokerage technology on a rental and service basis. MetaTrader 4, MetaTrader 5, MT4 and MT5 are products of MetaQuotes Ltd; ${site.name} is an independent service provider and is not affiliated with, endorsed by, or acting as an agent of MetaQuotes.`,
  `${site.name} is a technology and consulting provider. We do not offer financial, investment, legal or tax advice, we do not solicit retail clients, and we do not hold client funds. Trading foreign exchange and contracts for difference on margin carries a high level of risk and can result in losses exceeding your deposit. Product availability, features and pricing vary by jurisdiction, regulatory status and configuration; the figures on this page are indicative and are confirmed only in a written quotation. Operating a brokerage may require licensing in the territories where you solicit or serve clients — obtaining that authorisation is your responsibility.`,
];
