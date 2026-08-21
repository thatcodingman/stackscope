// StackScope — Category reports data
// All published reports live here now, including CRM as of the
// reports/crm-software.html migration.
//
// To publish: copy reports/_template.html to reports/your-category.html,
// fill it in, then set that entry's "live" to true, "slug" to match
// your filename (without .html), and "date" to the real publish date.

const REPORTS = [
  {
    slug: "crm-software",
    title: "CRM Software",
    summary: "HubSpot, Salesforce, Pipedrive, Zoho — pricing tiers and sentiment compared.",
    toolCount: 4,
    live: true,
    date: "2026-08-20"
  },
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
    summary: "Mailchimp, Klaviyo, ActiveCampaign, Kit — compared on list-size pricing curves.",
    toolCount: 4,
    live: true,
    date: "2026-08-20"
  },
  {
    slug: "e-signature",
    title: "E-Signature Software",
    summary: "DocuSign, PandaDoc, Dropbox Sign, SignNow — compared on seat pricing and send limits.",
    toolCount: 4,
    live: true,
    date: "2026-08-20"
  },
  {
    slug: "scheduling",
    title: "Scheduling Software",
    summary: "Calendly, Acuity, SavvyCal, YouCanBookMe — compared on per-seat and per-calendar pricing.",
    toolCount: 4,
    live: true,
    date: "2026-08-21"
  },
  {
    slug: "design-tools",
    title: "Design & Prototyping Tools",
    summary: "Figma, Framer, Sketch, Canva — compared on seat pricing and free-plan limits.",
    toolCount: 4,
    live: true,
    date: "2026-08-21"
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
