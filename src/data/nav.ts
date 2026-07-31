import { serviceAnchor } from "@/lib/anchors";
import type { NavItem, NavLink } from "@/lib/types";
import { serviceCategories } from "./services";

/**
 * The mega menu is generated from the service catalogue rather than typed out
 * by hand. Every link therefore resolves to a card that actually exists — the
 * previous hand-written version had 12 of 18 links pointing at the top of
 * #services regardless of what the label promised.
 */
const category = (id: string) => {
  const found = serviceCategories.find((c) => c.id === id);
  if (!found) throw new Error(`Unknown service category: ${id}`);
  return found;
};

const linksFor = (id: string, notes: Record<string, string> = {}): NavLink[] =>
  category(id).services.map((s) => ({
    label: s.title,
    href: `#${serviceAnchor(s.title)}`,
    note: notes[s.title],
  }));

const oneService = (categoryId: string, title: string, label?: string): NavLink => {
  const found = category(categoryId).services.find((s) => s.title === title);
  if (!found) throw new Error(`Unknown service: ${title}`);
  return { label: label ?? found.title, href: `#${serviceAnchor(found.title)}` };
};

export const navItems: NavItem[] = [
  {
    label: "Solutions",
    columns: [
      {
        title: "Trading platforms",
        links: linksFor("platforms", {
          "MT5 Manager Rental": "Our core product",
        }),
      },
      {
        title: "CRM & back office",
        links: linksFor("crm", {
          "Forex CRM & back office": "Full suite",
        }),
      },
      {
        title: "Risk, liquidity & more",
        links: [
          oneService("liquidity", "LP Bridge & aggregation"),
          oneService("liquidity", "A-book / B-book routing"),
          { label: "PAMM, MAM & copy trading", href: "#plugins" },
          { label: "Risk & dealing plugins", href: "#plugins" },
          oneService("payments", "PSP gateway integration", "Payments & PSP"),
          { label: "Hosting & colocation", href: "#infrastructure" },
          { label: "Licensing & formation", href: "#jurisdictions" },
          oneService("prop", "Prop firm launch", "Prop firm setup"),
        ],
      },
    ],
  },
  { label: "CRM", href: "#crm" },
  { label: "Pricing", href: "#pricing" },
  { label: "Compare", href: "#compare" },
  { label: "Infrastructure", href: "#infrastructure" },
  { label: "FAQ", href: "#faq" },
];
