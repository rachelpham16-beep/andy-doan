# Redesign Plan (Proposed)

Status: **proposal only — nothing in this plan has been implemented.** See
`docs/IMPLEMENTATION-STATUS.md` for current state and `docs/DECISIONS.md`
for what's been approved vs. still open. Built on top of the findings in
`docs/CODEBASE-AUDIT.md`.

Goal: a premium, cinematic, editorial photography portfolio for Andy Doan,
with photography as the visual focus, on the current domain, still deployed
via Netlify.

Inspiration reference: [oryzo.ai](https://oryzo.ai) (built by Lusion) was
reviewed for animation quality, visual layering, and pacing only — see the
note at the end of this section. Per `CLAUDE.md`, nothing from Oryzo's
design, code, branding, content, or exact layout gets reproduced.

**What "inspiration only" means concretely here:** Oryzo is a satirical
product-marketing site for a fictional AI coaster, built by a WebGL/motion
studio (Lusion) — its actual content, product framing, and literal layout
have nothing to do with a photography portfolio and won't be referenced
again below. What's worth borrowing as a *feel*: heavy use of scroll-paced
reveals rather than everything appearing at once, a mix of very large
display type against small precise/technical-feeling labels, generous
full-bleed sections separated by deliberate pauses, subtle cursor/hover
reactivity, and a loading/entry moment that sets tone before content
appears. Below, this is translated into a photography-appropriate
vocabulary (image-led, not gimmick-led) — not into any specific Oryzo
component.

---

## 1. Recommended architecture

**Recommendation: rebuild on Astro, deployed to Netlify as a static site,
replacing the Quarkly/Gatsby export entirely.**

Why, weighed against the alternatives:

| Option | Verdict |
|---|---|
| **Stay on Gatsby, upgrade 3→5** | Rejected as primary path. Fixes most of the 76 `npm audit` findings, but Gatsby the company/project is no longer actively maintained upstream, GraphQL-data-layer overhead is unnecessary for a portfolio with no CMS, and it does nothing to remove the ~9,000 lines of Quarkly-generated markup — the audit's core "hard to maintain" finding survives. |
| **Astro** (recommended) | Ships zero JS by default, adds interactivity only where needed ("islands") — a natural fit for an image-heavy site where most of the page is static markup and only the lightbox/animation/nav need JS. First-class image tooling. Plain static output deploys to Netlify with no adapter. Content collections give a clean, typed way to define each gallery's image list (replacing today's hand-written `<Override slot="Item N">` JSX). Much simpler mental model than Gatsby's GraphQL layer — directly serves the "easy future maintenance" goal. |
| **Next.js** | Capable, but built for app-like, server-rendered products. Would need the Netlify Next.js runtime adapter and brings routing/data-fetching complexity a static portfolio doesn't need. |

**Core stack proposal:**
- Astro (static output) for pages/layout/routing.
- A small set of interactive islands (React or plain Web Components — lean
  toward plain/vanilla or a minimal library to keep the JS budget small)
  for: mobile nav, gallery grid, lightbox, scroll-reveal system.
- Cloudinary stays the image host; Astro's `astro:assets` or a thin
  Cloudinary URL-builder helper generates responsive `srcset`/`sizes` from
  the existing asset URLs (no re-upload needed — see migration plan).
- Content: a single typed data source (Astro content collection or JSON/YAML)
  per category, holding ordered image entries (Cloudinary public ID, alt
  text, optional caption/credit, aspect ratio). This replaces the
  duplicated per-page JSX and is the fix for the audit's #8 duplication
  finding and the missing `alt` text.
- Netlify: plain static deploy (`astro build` → publish `dist/`), same
  model as today's `gatsby build` → `public/`, so the Netlify site
  configuration barely changes it just needs a new build command and
  publish directory once approved.
- Formspree stays as the contact form backend (no reason to change it).

This is a rebuild, not a refactor, of the presentation layer — but it's a
narrow rebuild: same domain, same host, same form backend, same image host,
same content. See §8 for how that transition happens safely, and §9 for the
risk this introduces.

**This is a proposal, not a decision.** Recorded as an open item in
`docs/DECISIONS.md`; needs explicit approval before any scaffolding begins.

## 2. Proposed page structure

Preserve every existing route (per `CLAUDE.md`, URLs aren't to change
without approval):

```
/                 → Home
/music            → Category: Music
/portraits        → Category: Portraits
/sports           → Category: Sports
/bts               → Category: BTS
/film             → Category: Film
/landscape        → Category: Landscape
/automotive       → Category: Automotive
/contact          → Contact
/404              → Not found
```

Structural change (internal, not URL-facing): all seven category pages
become one Astro dynamic route (e.g. `src/pages/[category].astro`) driven
by the shared content collection, instead of seven separately hand-copied
files. This is what directly eliminates the audit's page-level duplication
(identical nav CSS/JS block and `.collage` CSS repeated verbatim in every
file).

Not proposed as part of this redesign (flagging so it's a conscious
decision, not scope creep): adding new routes such as `/about` or a blog.
If wanted, raise separately — would need its own approval and a
`docs/DECISIONS.md` entry.

## 3. Proposed homepage sections

Paced top to bottom, image-led throughout, each section allowed to breathe
before the next reveals on scroll (see §5 for how):

1. **Full-bleed hero** — one strong hero image/short muted looping clip,
   Andy Doan's name and a short positioning line, minimal nav overlay.
   Replaces today's fixed hero + separately duplicated inline nav.
2. **Category navigator** — the seven categories presented as large
   editorial tiles/links (not a cramped dropdown), each with a
   representative image and hover/tap preview motion. This is the "better
   category browsing" goal made concrete on the homepage itself, not just
   in the nav.
3. **Featured work strip** — a curated, editorially-sequenced set of
   standout images across categories (not "most recent," a deliberate
   selection), in a distinctive (non-uniform-grid) layout.
4. **Statement / about blurb** — short, a few lines, establishes voice;
   photography stays visually dominant, text is brief.
5. **Selected category deep-link** (optional, e.g. spotlight one category
   per season/shoot) — reuses the featured-work pattern, keeps the
   homepage from feeling static between visits without needing a CMS.
6. **Contact / booking CTA** — clear, single call to action, links to
   `/contact` (keeps the Formspree form itself on its own page as today).
7. **Footer** — contact details, Instagram/LinkedIn, minimal.

No homepage section duplicates the category-page gallery grid — the
homepage teases, category pages deliver the full set.

## 4. Gallery and lightbox behavior

**Grid:**
- Each category page renders its images from that category's content
  collection entry — editorial/masonry-style layout (varied image sizes
  driven by real aspect ratio, not a uniform crop grid), distinct per
  category if useful (e.g. landscape favors wide tiles, portraits favors
  taller tiles) but built from one shared, configurable grid component
  rather than one-off markup per page.
- Lazy-loaded below the fold; first viewport's images load eager/high
  priority (see §7).

**Lightbox:**
- Fullscreen, opens on click/tap of any grid image.
- Keyboard support: arrow keys to navigate, `Esc` to close, focus trapped
  inside while open, focus returned to the triggering thumbnail on close.
- Touch support: swipe left/right to navigate, swipe down (or a visible
  close control) to dismiss.
- Loads the Cloudinary full/high-res transform only when opened (grid
  itself uses a lighter preview transform) — avoids paying full-res cost
  for images never opened.
- Caption/credit area (currently no alt text exists anywhere — this is the
  natural place to finally add it, sourced from the content collection).
- Respects `prefers-reduced-motion`: cross-fade/instant swap instead of any
  slide/zoom transition when set.
- URL state is a nice-to-have, not required for v1: deep-linking a specific
  lightbox image via query/hash param. Flag as optional, not committed.

This replaces `@quarkly/community-kit`'s `Gallery`/`Lightbox` entirely with
a purpose-built, dependency-light component — removing the audit's "vendored
package, not in `src`, can't be edited" problem.

## 5. Animation system

Principle: motion supports the photography, it never competes with it.
Every animation must have a `prefers-reduced-motion` fallback that shows
the same end state instantly.

- **Scroll-triggered reveals**: sections/images fade+rise into place once
  in view (IntersectionObserver-based), staggered slightly for groups of
  images — this is the specific pacing quality worth taking from Oryzo
  (content arrives deliberately, not all at once), implemented as a small
  first-party utility rather than a heavy animation library where possible.
- **Hover/tap micro-interactions**: subtle scale/opacity shift on gallery
  tiles and nav links; nothing that shifts layout or causes jank.
- **Page/route transitions**: a brief, consistent cross-fade between pages
  (Astro View Transitions API is a good native fit) rather than a hard
  cut — restrained, not a signature gimmick.
- **Nav**: mobile menu open/close gets a deliberate, smooth transition
  (replacing today's dead `.nav-menu` CSS/JS that isn't even wired up).
- **No WebGL/canvas particle effects, no cursor-follow gimmicks, no
  scroll-jacking** are proposed for v1 — those are the most
  Oryzo/Lusion-recognizable techniques, and copying them would cross from
  "inspiration" into "reproduction," which `CLAUDE.md` rules out. If
  something like a subtle custom cursor is wanted later, it should be
  raised and decided explicitly, not assumed.
- Library choice: prefer the platform where possible (CSS transitions/
  animations, native View Transitions, IntersectionObserver) and reach for
  a small animation library only where the platform genuinely can't do it
  cleanly. Keeps the JS budget (§7) and the "easy future maintenance" goal
  intact.

## 6. Mobile behavior

Mobile-first per `CLAUDE.md` — designed for the small viewport first, not
adapted down from desktop:

- Full-screen mobile nav (hamburger → full-screen overlay menu), single
  clear list of categories + contact, no nested dropdown/submenu (removes
  the audit's dead hover-submenu code entirely rather than porting it).
- Gallery grid collapses to a single or double column depending on
  category, sized for touch scanning, not shrunk desktop tiles.
  breakpoint decisions driven by content, not the existing Quarkly
  `phone`/`tablet`/`desktop` prop scheme, but the audit's actual pixel
  breakpoints (576/768/992/1200) are a reasonable starting reference.
- Lightbox is swipe-first; no reliance on hover states anywhere in the
  experience (all interactions must have a tap equivalent).
- Animation is intentionally lighter on mobile — shorter durations,
  reduced/no parallax, since mobile is also where reduced-motion and
  battery/performance sensitivity matter most.
- Tap targets sized per standard accessibility guidance (~44px minimum).

## 7. Performance plan

Fast image loading is a stated goal and the site is almost entirely images,
so this is the highest-leverage area:

- **Cloudinary transformations on every image URL**: `f_auto` (best format
  per browser, e.g. AVIF/WebP), `q_auto` (automatic quality), `dpr_auto`,
  and explicit `w_`/responsive `srcset` breakpoints generated from a single
  helper function — replacing today's raw, untransformed Cloudinary URLs
  pasted directly into JSX.
- **Lazy loading**: native `loading="lazy"` for below-the-fold grid images;
  hero/first-viewport images marked eager/high `fetchpriority`.
- **Minimal JS shipped**: Astro islands mean pages with no interactive
  gallery/lightbox on screen ship ~no JS; even category pages ship only
  the gallery/lightbox/nav islands, not a full framework runtime.
- **Fonts**: self-hosted or `font-display: swap`, subset if practical,
  loaded with `preload` for the primary display face — avoids the current
  render-blocking Google Fonts `<link>` in `<head>`.
- **Static output + Netlify CDN + far-future cache headers** on hashed
  build assets.
- **Targets**: Core Web Vitals in the "good" band on mobile (LCP < 2.5s,
  CLS < 0.1, INP < 200ms) as the working bar; validate with Lighthouse on
  representative category pages, not just the homepage, before cutover.
- **CLS discipline**: every image reserves its aspect ratio (from the
  content collection's stored aspect-ratio field) so nothing shifts as
  images load in — the masonry/editorial grid in §4 depends on this too.

## 8. Migration plan

Phased, with the current live site untouched until an explicit go-ahead at
the final step:

1. **Data extraction** — pull every existing Cloudinary URL, per category,
   out of `src/pages/*.js` into the new structured content source. This is
   mechanical (the audit already has per-page counts) and is the step most
   worth double-checking by hand against the live site, since it's the
   one place a URL could silently get dropped.
2. **Scaffold** — new Astro project structure on a branch (not `main`,
   per `CLAUDE.md`), with the shared layout, nav, gallery, and lightbox
   components built once.
3. **Build pages** — homepage first (§3), then the category dynamic route,
   then contact (re-wire the existing Formspree endpoint unchanged), then
   404.
4. **Parity QA against the live site** — checklist per page: same route,
   same images present (count match against §1's extraction), meta
   title/description present (even if content is later improved — nothing
   goes *blank*), contact form actually submits to the same Formspree
   endpoint, `/index → /` redirect behavior preserved, sitemap/robots
   present.
5. **Netlify preview deploy** — use a Netlify deploy preview (branch/PR
   deploy) to review the new build on a real Netlify URL without touching
   production — this does not require the "no deploy without approval"
   rule to be waived, since preview deploys aren't production, but should
   still be confirmed with the user before triggering, per `CLAUDE.md`.
6. **Cutover** — only with explicit approval: point the Netlify production
   build at the new branch/build command/publish directory. Domain/DNS and
   Netlify site itself don't change, only what gets built and published.
7. **Post-cutover monitoring** — check real Cloudinary bandwidth/analytics,
   Netlify build logs, and spot-check the live domain across a few
   devices/browsers.
8. **Decommission old code** only after the new site has been live and
   verified stable — don't delete the Quarkly/Gatsby source in the same
   change that ships the new site.

## 9. Risks

- **Silent content loss during data extraction** (§8 step 1) — an image or
  category entry dropped while transcribing Cloudinary URLs out of the
  Quarkly JSX. Mitigation: automated count-check against the audit's
  per-page URL counts, plus manual spot-check against the live site before
  cutover.
- **SEO regression** — even though current meta descriptions are identical
  across every page (a pre-existing weakness), a botched migration could
  make things worse (missing titles, broken canonical URLs, sitemap gaps).
  Mitigation: parity QA step explicitly checks this before it's allowed to
  improve on it.
- **Scope creep toward literal Oryzo reproduction** — WebGL/cursor/
  scroll-jacking effects are the most visually memorable part of that site
  and the most tempting to imitate closely; `CLAUDE.md` explicitly forbids
  that. Mitigation: §5 deliberately excludes those techniques from v1.
- **Netlify build misconfiguration** — no `netlify.toml` exists in-repo
  today (build settings live in the Netlify dashboard only), so the actual
  current production build command/publish directory must be confirmed
  from the dashboard, not assumed, before proposing the new ones.
- **Formspree/contact breakage** — losing or mistyping the existing
  endpoint (`https://formspree.io/f/xwpryoej`) during rebuild would take
  down the only lead-generation path on the site. Mitigation: copy the
  endpoint verbatim, test a real submission on the preview deploy before
  cutover.
- **Animation performance on real mobile devices** — scroll-reveal and
  transition code that feels smooth in desktop dev tools can jank on
  actual phones. Mitigation: test on real/throttled mobile, keep the
  animation budget deliberately small (§5), always ship the
  reduced-motion fallback.
- **Astro/content-collection learning curve for future maintenance** —
  different mental model than the current (admittedly worse) Quarkly
  export; worth confirming this trade-off is acceptable for whoever
  maintains the site long-term.
- **Two-site period risk** — while old and new coexist on branches,
  someone could edit the old Quarkly export (e.g. swap a Cloudinary image)
  and have that change lost when the new site cuts over. Mitigation: freeze
  content edits to the old site once migration starts, or explicitly track
  any interim change so it's ported over.

## 10. Small first prototype scope

Purpose: validate the architecture and animation direction cheaply before
committing to the full migration — not a partial launch.

**In scope:**
- New Astro project scaffold, on a new branch, not touching `main` or the
  live Quarkly/Gatsby source.
- One layout + nav (desktop and mobile) built from scratch per §5/§6.
- Homepage hero + category navigator sections only (§3, items 1–2) —
  enough to judge type, pacing, and the scroll-reveal system.
- **One** category page end-to-end — recommend `/music` (it's the
  largest/most complex existing gallery per the audit, 110 Cloudinary
  references, so it stress-tests the grid and lightbox well) — with the
  real gallery grid and fullscreen lightbox from §4.
- Real Cloudinary URLs for that one category, run through the
  transformation helper in §7 (validates the performance approach with
  real images, not placeholders).
- Manual Lighthouse/mobile check on that one page.

**Explicitly out of scope for the prototype:**
- The other six category pages.
- The contact page/Formspree re-wiring.
- Any Netlify deploy, preview or production.
- Any SEO/meta rewrite.
- Any dependency on this being "launch-ready" — it's a throwaway-or-keep
  proof of direction, to be reviewed and explicitly approved (or sent back
  for changes) before the rest of the migration plan proceeds.

**Exit criteria:** review the prototype together, confirm the architecture
(§1) and animation system (§5) feel right, then decide whether to proceed
into full migration (§8) — logged as a decision in `docs/DECISIONS.md`
either way.
