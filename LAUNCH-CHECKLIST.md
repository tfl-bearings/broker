# Launch checklist

Everything here is placeholder content or an unverified claim currently sitting
on the live page. Replace each with your own facts, or delete the element.
**Do not publish with any of it left as-is.**

This used to render as a yellow box at the bottom of the site. It now lives
here instead — same content, nothing visible to visitors.

---

## Must fix before taking a single enquiry

### 1. Testimonials — currently replaced, not resolved
**`src/components/sections/Commitments.tsx`, `src/data/content.ts` → `commitments`**

The placeholder testimonial section has been swapped for a **Commitments**
section, so nothing fabricated ships. `Testimonials.tsx` is still in the repo
and wired to `src/data/content.ts → testimonials`; to bring it back, fill in
real quotes and swap the component in `src/app/page.tsx`.

**Before publishing, confirm you will honour all six commitments.** They are
promises, not marketing copy — no setup fee, 30 days' notice, data export on
exit, written quote before engagement, honest licensing advice, direct engineer
access. Each is checkable, which is what makes them worth more than praise.

Do not substitute invented testimonials. Fake consumer testimonials — including
quotes attributed to people or companies that do not exist — are prohibited by
the FTC's Rule on Consumer Reviews and Testimonials (16 CFR Part 465), the UK
CAP Code, and Annex I of the EU Unfair Commercial Practices Directive. In a
regulated financial-services context the exposure is not theoretical.

### 2. Contact details
**`src/data/site.ts`**

Telegram handle, WhatsApp number and registered address are placeholders. Also
the two floating buttons in `src/components/layout/FloatingContact.tsx`.

Make the phone number, address and stated jurisdiction **consistent with each
other**. Three of the six sites we reviewed fail this visibly — one pairs an
Indian mobile with a "Business Bay, Hongkong" address, another a UK mobile with
a Brooklyn street address. It is the fastest way to lose a serious buyer.

### 3. Legal pages
**`src/data/site.ts` → `footerColumns`**

Privacy policy and terms of service are `href="#"` stubs. Both are required
before you collect a single form submission.

### 4. Lead form
**`src/components/sections/Contact.tsx`**

Front-end only — it validates and shows a message but sends nothing. Wire the
submit handler to a route handler that forwards to your CRM, mail provider or
a webhook.

---

## Verify before publishing

### 5. Uptime and response targets
**`src/data/infrastructure.ts`**

`99.9%` and `<15 min` are written as *targets*, which is defensible. If you
cannot evidence them, lower the numbers or remove the metric row.

### 6. Tier inclusions
**`src/data/plans.ts`**

Group counts, account limits, PAMM availability and support hours were inferred
from the original brief, not confirmed. Check every line against what you
actually deliver.

### 7. Jurisdiction figures
**`src/data/jurisdictions.ts`**

Capital requirements and timelines are indicative market estimates as at 2026,
not legal advice. Have a licensing partner verify before publishing. The page
already carries a disclaimer to this effect — keep it.

### 8. Server names
**`src/data/content.ts` → `serverNames`**

Replace the four sample hostnames with your genuinely available shortlist.

---

## Keep as-is

### 9. Ticker and dashboard data
**`src/data/content.ts`, `src/data/crm.ts`**

Illustrative sample data. Both are already labelled on the page
("Interface preview — sample data shown for illustration"). **Keep those
labels** — they are what makes the mockup honest rather than misleading.

### 10. Comparison table figures
**`src/data/comparison.ts`**

Competitor cost ranges come from published 2026 market data. Fine to keep;
review annually.
