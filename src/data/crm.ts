import type {
  CrmModule,
  DashboardKpi,
  DashboardNavGroup,
  DashboardRow,
  WorkflowStage,
} from "@/lib/types";

export const crmModules: CrmModule[] = [
  { name: "Admin back office", description: "the operator console for every desk" },
  { name: "Trader’s Room", description: "branded client self-service portal" },
  { name: "Partner hub", description: "IB dashboards, links and commission statements" },
  { name: "Mobile client app", description: "onboarding and funding on device" },
  { name: "Compliance console", description: "KYC queues, screening and audit history" },
  { name: "Finance console", description: "approvals, wallets and reconciliation" },
  { name: "Reporting layer", description: "scheduled exports and live dashboards" },
  { name: "Open REST API", description: "wire the CRM into anything you already run" },
];

/* ---- Mock dashboard content. Illustrative sample data only. ---- */

export const dashboardNav: DashboardNavGroup[] = [
  { group: "Operations", items: ["Dashboard", "Leads", "Clients", "Accounts"] },
  { group: "Compliance", items: ["KYC queue", "Screening"] },
  { group: "Finance", items: ["Deposits", "Withdrawals", "IB commissions"] },
];

export const dashboardKpis: DashboardKpi[] = [
  { label: "Live clients", value: "2,458", delta: "+6.2% wk" },
  { label: "Net deposits", value: "$1.24M", delta: "+11.4% wk" },
  { label: "KYC pending", value: "37", delta: "avg 4h" },
  { label: "IB payable", value: "$48.7K", delta: "42 partners" },
];

export const dashboardBars = [42, 58, 36, 71, 54, 88, 63, 49, 76, 60, 94, 68, 52, 81];

export const dashboardRows: DashboardRow[] = [
  { client: "A. Okonkwo", stage: "KYC review", balance: "$4,200", status: "wait", statusLabel: "Pending" },
  { client: "M. Haddad", stage: "Funded", balance: "$18,940", status: "ok", statusLabel: "Active" },
  { client: "S. Nakamura", stage: "Withdrawal", balance: "$7,510", status: "wait", statusLabel: "Approval" },
  { client: "L. Fernandes", stage: "New lead", balance: "—", status: "new", statusLabel: "Assigned" },
  { client: "R. Petrov", stage: "Funded", balance: "$62,300", status: "ok", statusLabel: "Active" },
];

export const workflowStages: WorkflowStage[] = [
  {
    dept: "Marketing & sales",
    title: "Acquire & convert",
    points: [
      "Source tracking and campaign attribution",
      "Statuses, follow-ups and reminders",
      "Lead notes and full activity timeline",
      "Conversion reporting per desk and agent",
    ],
  },
  {
    dept: "Compliance",
    title: "Onboard & verify",
    points: [
      "Document upload, review queues, approvals",
      "Sanctions, PEP and adverse-media screening",
      "Role-based access for sensitive actions",
      "Audit trails and immutable action history",
    ],
  },
  {
    dept: "Finance & operations",
    title: "Fund & operate",
    points: [
      "Deposit and withdrawal approval chains",
      "Wallet balances, transfers, reconciliation",
      "Trading account operations on MT5",
      "Settlement matching and exception queues",
    ],
  },
  {
    dept: "Partnerships & retention",
    title: "Grow & retain",
    points: [
      "IB tree, commission rules and payout runs",
      "Unified client profile for fast resolution",
      "Dormancy and deposit-drop triggers",
      "Retention reporting and cohort outcomes",
    ],
  },
];
