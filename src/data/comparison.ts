import type { ComparisonColumn, ComparisonRow } from "@/lib/types";

export const comparisonColumns: ComparisonColumn[] = [
  { key: "ours", label: "Manager Rental", sub: "What we provide", highlight: true },
  { key: "white", label: "White Label" },
  { key: "main", label: "Main Label" },
  { key: "full", label: "Full Licence" },
];

/**
 * Competitor ranges reflect published 2026 market data for MT5 white label
 * and full-licence routes. Review annually.
 */
export const comparisonRows: ComparisonRow[] = [
  {
    label: "Typical monthly cost",
    values: {
      ours: "$1,999 – $5,000",
      white: "$3,000 – $11,000 all-in",
      main: "Higher, plus revenue share",
      full: "Highest, plus staffing",
    },
  },
  {
    label: "Setup fee",
    values: {
      ours: "$0",
      white: "$5,000 – $30,000",
      main: "Substantial",
      full: "Very substantial",
    },
  },
  {
    label: "Time to live",
    values: {
      ours: "2–3 days",
      white: "2–4 weeks",
      main: "4–10 weeks",
      full: "3–12 months",
    },
  },
  {
    label: "Server environment",
    values: {
      ours: "Managed, shared infrastructure",
      white: "Dedicated environment",
      main: "Own server instance",
      full: "Own licensed server",
    },
  },
  {
    label: "Own entity required",
    values: {
      ours: "Not to begin",
      white: "Usually yes",
      main: "Yes",
      full: "Yes, regulated",
    },
  },
  {
    label: "Server name",
    values: {
      ours: "Generic, from a shortlist",
      white: "Your brand",
      main: "Your brand",
      full: "Your brand",
    },
  },
  {
    label: "Group & symbol control",
    values: {
      ours: "Full within your groups",
      white: "Full",
      main: "Full",
      full: "Absolute",
    },
  },
  {
    label: "A-book / B-book routing",
    values: {
      ours: "Included from Tier 02",
      white: "Available",
      main: "Available",
      full: "Available",
    },
  },
  {
    label: "CRM included",
    values: {
      ours: "Yes, every tier",
      white: "Often extra",
      main: "Usually extra",
      full: "Build or buy",
    },
  },
  {
    label: "Current availability",
    values: {
      ours: "Available now",
      white: "Constrained — issuance paused",
      main: "Limited inventory",
      full: "Effectively closed to new applicants",
    },
  },
  {
    label: "Best suited to",
    values: {
      ours: "New brokers, IBs, prop desks",
      white: "Funded, established brokers",
      main: "Scaling multi-brand groups",
      full: "Institutional operators",
    },
  },
];
