# Meridian Broker Tech

Marketing site for an MT5 Manager rental / grey label / Forex CRM business.

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind v4 · no runtime dependencies beyond the framework.

```bash
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint     # eslint
```

## Where things live

Content is data, not markup. Adding a service, plan, jurisdiction or FAQ entry
means adding one typed object — no JSX changes.

```
src/
  app/
    layout.tsx          fonts (Archivo / Inter / IBM Plex Mono) + metadata
    page.tsx            section composition order
    globals.css         design tokens + all component CSS
  components/
    ScrollEffects.tsx   the only global client JS: reveal-on-scroll,
                        header progress bar, count-up metrics
    layout/             AnnounceBar, Nav, Footer, FloatingContact
    sections/           one component per page section
    ui/                 Brand, SectionHead
  data/
    site.ts             brand, contact details, footer, legal disclaimers
    nav.ts              header nav + mega menu
    plans.ts            pricing tiers and add-ons
    services.ts         8 categories / 41 services, plus server plugins
    comparison.ts       Manager Rental vs White / Main / Full Licence
    jurisdictions.ts    13 licensing regimes
    crm.ts              CRM modules, mock dashboard, lifecycle stages
    infrastructure.ts   uptime metrics and infra cards
    content.ts          hero, ticker, steps, testimonials, FAQ, form options
  lib/
    types.ts            every content shape
    utils.ts            delay() stagger helper, cx()
```

## Design system

Tokens are defined once on `:root` in `globals.css` and re-exported to Tailwind
via `@theme inline`, so both hand-written CSS (`var(--gold)`) and utilities
(`text-gold`, `bg-panel`) resolve to the same values.

Current scheme is **Azure** — deep navy, azure blue, white.

| Token | Value | Use |
| --- | --- | --- |
| `--panel` / `--ink` | `#0A1F3C` | dark sections, primary text |
| `--accent` | `#1D6FE8` | accent **on light surfaces** (4.7:1 on white) |
| `--accent-2` | `#7FB2FF` | accent **on navy panels** (7.7:1 on `--panel`) |
| `--accent-soft` | `#C9DEFF` | checkmarks, bullets, soft fills |
| `--signal` / `--signal-light` | `#047857` / `#6EE7B7` | live and positive states, light / dark |
| `--bg` / `--paper` | `#F4F7FC` / `#FFF` | page and card surfaces |

**The two accent weights matter.** A single blue cannot serve both a white card
and a navy panel — `--accent` disappears on navy (3.5:1) and `--accent-2` is
unreadable on white (2.1:1). Pick by surface.

### The category spectrum

`src/data/hues.ts` holds eight hues, each verified to ≥4.5:1 on white so they
can carry label text rather than only decoration.

| Hue | Hex | Contrast | Owns |
| --- | --- | --- | --- |
| azure | `#1D6FE8` | 4.7:1 | Trading platforms |
| violet | `#6D3FE0` | 6.1:1 | CRM & back office |
| cyan | `#0B7C93` | 4.9:1 | Liquidity & risk · mid-tier jurisdictions |
| amber | `#8A5A08` | 5.9:1 | Payments · entry jurisdictions |
| teal | `#0F766E` | 5.3:1 | Infrastructure |
| indigo | `#4348C8` | 7.0:1 | Licensing · tier-1 jurisdictions |
| rose | `#C2416B` | 4.9:1 | Growth & marketing |
| emerald | `#047857` | 5.6:1 | Prop firm |

Components set their colour with one property via `hueVar()`:

```tsx
<article className="svc edge" style={hueVar(category.hue)}>
```

Everything downstream reads `rgb(var(--hue-rgb))` for the solid and
`rgba(var(--hue-rgb), n)` for tints, so a single value recolours the badge,
border, hover shadow and active state together. Anything without a category
inherits azure from `:root`.

Jurisdictions are coloured by **tier**, not individually — thirteen arbitrary
colours would be noise; three meaningful ones are information.

### Depth

- `--ease-spring` (`cubic-bezier(.34,1.56,.64,1)`) on hover lifts and icon pops
- `--e-hue` tints a card's hover shadow with its own colour
- `.mesh` / `.mesh-b` paint two-hue radial glows behind light sections
- `.grad-text` for a single emphasised phrase (azure → violet)
- `--surface-glass` + `backdrop-filter` on service and jurisdiction cards

`rgba()` tints reference `--accent-rgb`, `--signal-rgb` and `--shadow-rgb`, so
a palette swap needs no other edits.

### Swapping the palette

Two alternates ship commented out at the top of `globals.css` — **Midnight**
(near-black slate + electric cyan) and **Navy & Gold** (the original). Comment
out the live `:root` block and uncomment one of them; nothing else changes.

Client components are only those that need state: `Nav`, `Pricing` (billing
toggle), `ServiceExplorer` (tabs), `Faq` (accordion), `Contact` (form).
Everything else is a server component.

All eight service tab panels are rendered into the HTML and hidden with
`[hidden]` rather than unmounted, so search engines index all 41 services
instead of only the first tab.

## Before launch

See **[LAUNCH-CHECKLIST.md](LAUNCH-CHECKLIST.md)** — every placeholder and
unverified claim currently on the page, with the file to edit for each.

The short version:

- Replace placeholder testimonials with approved client quotes, or delete the section
- Set real, mutually consistent contact details in `src/data/site.ts`
- Verify uptime/response targets, tier allowances and jurisdiction figures
- Wire the lead form to a real endpoint
- Write the privacy policy and terms pages

## Reference

`design-reference/index.html` is the original standalone HTML mockup this was
ported from. Kept for visual diffing; not part of the build.
# broker
