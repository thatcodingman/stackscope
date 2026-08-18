// StackScope — Category reports data
// CRM is currently built directly into index.html (the original demo),
// not through this template system yet. Everything below is the next
// wave — add real reports here as they get published.
//
// To publish: copy reports/_template.html to reports/your-category.html,
// fill it in, then set that entry's "live" to true, "slug" to match
// your filename (without .html), and "date" to the real publish date.

const REPORTS = [
  {
    slug: "help-desk",
    title: "Help Desk Software",
    summary: "Zendesk, Freshdesk, Intercom, Help Scout — compared on seat cost and automation depth.",
    toolCount: 4,
    live: true,
    date: "2026-08-18"
  },
  {
    slug: "project-management",
    title: "Project Management",
    summary: "Asana, Monday, ClickUp, Notion — from lightweight boards to enterprise portfolio suites.",
    toolCount: 4,
    live: true,
    date: "2026-08-18"
  },
  {
    slug: "email-marketing",
    title: "Email Marketing",
    summary: "Mailchimp, Klaviyo, ActiveCampaign, ConvertKit — compared on list-size pricing curves.",
    toolCount: 4,
    live: false,
    date: null
  },
  {
    slug: "payroll-hr",
    title: "Payroll & HR",
    summary: "Gusto, Rippling, ADP, Justworks — per-employee pricing and compliance coverage.",
    toolCount: 4,
    live: false,
    date: null
  },
  {
    slug: "accounting",
    title: "Accounting Software",
    summary: "QuickBooks, Xero, FreshBooks, Wave — tier limits and add-on costs compared.",
    toolCount: 4,
    live: false,
    date: null
  }
];

if (typeof module !== "undefined") module.exports = REPORTS;
