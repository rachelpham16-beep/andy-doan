# Decisions Log

Running record of non-trivial decisions made during the andydoanut.com
redesign. Newest entries at the top. Each entry: date, decision, rationale,
and who/what prompted it.

---

## 2026-07-12 — Ground rules for the redesign established in CLAUDE.md

**Decision:** Adopted a fixed set of permanent working rules for this repo
(see `CLAUDE.md`): no push/deploy without explicit approval, no direct
changes to `main`, preserve existing content/URLs/SEO metadata/contact
info/Cloudinary URLs unless approved, keep Netlify compatibility, build
mobile-first, prioritize image performance/accessibility/reduced-motion, use
Oryzo only as visual/motion inspiration (no copying code/branding/content/
layout), and log decisions here.

**Rationale:** This is a live portfolio site with real traffic, existing
SEO standing, and a working contact form. A major redesign carries real
risk of losing content, breaking URLs, or shipping something unapproved.
These rules bound the agent's autonomy to what's actually been agreed.

**Status:** Active, permanent.

---

## 2026-07-12 — Full codebase audit performed before any code changes

**Decision:** Ran a read-only audit of the entire repository (versions,
structure, navigation, galleries/lightbox, Cloudinary usage, duplication,
Quarkly-generated files, Netlify build setup, dependency risk) before
writing or changing any source code. Findings recorded in
`docs/CODEBASE-AUDIT.md`.

**Rationale:** The site was exported from Quarkly and is largely
machine-generated, dense JSX (8,095 lines for the homepage alone) with
confirmed duplication across every page. Understanding the current state
fully before touching anything reduces the risk of breaking existing
content, SEO, or the Netlify build.

**Status:** Complete. No packages installed, no files modified, nothing
deployed during the audit.

---

## 2026-07-12 — Redesign plan proposed (Astro rebuild), not yet approved

**Decision (proposed, not yet approved):** Wrote a full redesign plan —
`docs/REDESIGN-PLAN.md` — covering architecture, page structure, homepage
sections, gallery/lightbox behavior, animation system, mobile behavior,
performance plan, migration plan, risks, and a small first-prototype scope.
The plan recommends rebuilding the presentation layer on **Astro** (static
output, Netlify-deployed, no adapter needed) rather than upgrading Gatsby
in place or moving to Next.js, and recommends a small single-category
prototype (`/music`) as the first concrete step before full migration.

**Rationale:** Directly answers the audit's core finding — the Quarkly
export format isn't meant for hand-editing and the duplication it produces
(identical nav/CSS blocks on every page) can't be cleanly fixed without
restructuring. Astro was chosen over staying on Gatsby (unmaintained
upstream, GraphQL layer unneeded for a portfolio with no CMS) and over
Next.js (built for app-like/server-rendered products, unnecessary
complexity here) because it ships minimal JS by default, has first-class
image tooling, and deploys to Netlify as plain static output — closest fit
to the "easy future maintenance," "fast image loading," and "keep Netlify
compatibility" goals.

oryzo.ai (built by Lusion) was reviewed live for animation
pacing/layering/quality only, per the user's explicit instruction to treat
it as inspiration, not a template — see `docs/REDESIGN-PLAN.md`'s intro
note on what was and wasn't taken from it (pacing/reveal quality: yes;
WebGL/cursor/scroll-jacking gimmicks, content, layout, branding: explicitly
excluded from v1).

**Status:** Proposed only. No code, dependencies, or config have changed.
Requires explicit approval before scaffolding begins — see open decisions
below for the specific sub-decisions still outstanding.

---

## Open / pending decisions

These are flagged in the audit and/or the redesign plan but not yet
decided — do not act on them without explicit user sign-off, and log the
resolution here once decided.

- **Approve or reject the Astro rebuild direction in `docs/REDESIGN-PLAN.md`
  §1.** Nothing downstream in the plan should be built until this is
  decided.
- **Approve or reject building the small first prototype** described in
  `docs/REDESIGN-PLAN.md` §10 (new branch, homepage hero + category nav +
  one full category page, no deploy) as the next concrete step.
- **Gatsby/React major version upgrade, if the Astro rebuild is *not*
  approved.** Gatsby 3 → 5 and React 17 → 19 would resolve the bulk of the
  76 `npm audit` findings but are breaking changes; only relevant as a
  fallback path if rebuilding on Astro is rejected.
- **Dead nav-menu CSS/JS cleanup.** The duplicated `.nav-menu` dropdown
  `RawHtml` block appears to be dead code (not wired to current markup) —
  the redesign plan drops it by construction (§5/§6), but if the rebuild is
  rejected this would need its own standalone cleanup decision.
- **Second image CDN (`uploads.quarkly.io`).** Whether to migrate the
  remaining ~26 references (logo/favicon) onto Cloudinary or leave as-is —
  not yet decided; not required for the prototype (§10) since it only
  touches one category page.
