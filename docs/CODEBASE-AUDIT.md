# Codebase Audit

Date: 2026-07-12
Scope: full repository inspection, no files modified, no packages installed,
nothing deployed.

## 1. Versions

| Package | Installed | Latest available (as of audit) |
|---|---|---|
| Gatsby | 3.15.0 | 5.16.1 |
| React / React DOM | 17.0.2 | 19.2.7 |
| @quarkly/widgets, @quarkly/components | 0.2.75 | — |
| @quarkly/community-kit | 0.0.87 | 0.0.88 |
| @quarkly/atomize | 1.0.20 | 1.1.0 |

`README.md`'s badges (React 16 / Gatsby 2) are stale and should be ignored —
`package.json` and installed `node_modules` agree on Gatsby 3 / React 17.

## 2. Repository structure

Standard Gatsby v3 site:

- `gatsby-config.js`, `gatsby-node.js`, `gatsby-ssr.js`, `qapi.js` — Gatsby
  and Quarkly runtime config.
- `.quarkly/qpages.js` — Quarkly's page registry, used by `gatsby-node.js` to
  prune any Gatsby-auto-created page not in this allowlist.
- `src/pages/*.js` — one file per route (Gatsby file-based routing).
- `src/components/*.js` — shared widgets; several are thin re-exports of
  `@quarkly/community-kit` primitives.
- `src/theme/index.js` — Quarkly design tokens (colors, fonts, breakpoints).
- `src/global-page-styles.js`, `src/html.js` — global HTML shell / style
  injection.
- No `netlify.toml`, `_redirects`, or `_headers` in the repo — Netlify's
  build command and publish directory are configured in the Netlify
  dashboard, not in-repo.

## 3. Homepage

`src/pages/index.js` — **8,095 lines**, the largest file in the repo by far.
Inlines a full hero section, a hand-coded "music" preview grid (hardcoded
artist names/years), a `Gallery` instance, and duplicates the entire
nav/menu markup instead of using `Components.Destophead` like every other
page. It's also the only page rendering `Gridstructure` (10 times) and
`Sectionforbutton` (2 times); `Buttonshomepage` is exported but never
actually rendered anywhere in the site.

## 4. Navigation

- Desktop/tablet nav for every page except the homepage is
  `src/components/Destophead.js` (703 lines), which wraps
  `QuarklycommunityKitMobileSidePanel.js` (a re-export of
  `@quarkly/community-kit/MobileSidePanel`) for the mobile hamburger menu.
- The homepage reimplements this same nav inline instead of reusing
  `Destophead` — a duplication to resolve in any redesign.
- Every page independently injects an identical `<RawHtml>` block containing
  raw `<style>`/`<script>` for a `.nav-menu` dropdown-submenu behavior
  (vanilla JS, `DOMContentLoaded` listener). This logic isn't wired to the
  current nav markup at all — there's no `.nav-menu` class anywhere in
  `Destophead.js` — so it appears to be dead code left over from an earlier
  nav design.

## 5. Photography category pages

`music.js`, `portraits.js`, `sports.js`, `bts.js`, `film.js`, `landscape.js`,
`automotive.js` are structurally identical: `Destophead` for nav, then 2–3
`Components.QuarklycommunityKitGallery` instances side by side (masonry-style
columns), each with `<Override slot="Item N" fullSrc=... previewSrc=...>`
children hardcoding Cloudinary URLs, then the same duplicated `RawHtml`
footer block described above. `music.js` additionally renders `EmbedStyle`
and `Collage` (rendered 4 times), of unclear purpose since it just injects
the same CSS grid class repeatedly.

## 6. Galleries and lightbox

- `src/components/QuarklycommunityKitGallery.js` is a 2-line re-export of
  `@quarkly/community-kit/Gallery`.
- The real implementation lives in
  `node_modules/@quarkly/community-kit/Gallery/Gallery.js` (vendored
  package, not in `src`): it lazy-loads images via scroll/click listeners
  (`loaderFormatProp`: `all` / `scroll` / `click`), computes a responsive
  grid via `ResizeObserver`, and renders a separate `Lightbox` sub-component
  (`Gallery/components/Lightbox.js`) that opens on item click and supports
  zoom, reading full-res image params from each item's `fullSrc` /
  `fullSrcSet` / `fullObjectFit` props.
- Per-page image lists are entirely defined as `<Override slot="Item N" .../>`
  JSX props, not pulled from any CMS or data file — content is hardcoded per
  page.

## 7. Cloudinary URLs

Stored directly inline as string literals in JSX props (`fullSrc`,
`previewSrc`, `background`, etc.) across `src/pages/*.js` and
`src/components/Gridstructure.js` — no central data file, no
`gatsby-source-cloudinary`, no `.env`. All under one cloud name:
`res.cloudinary.com/dgan17f48`.

Approximate reference counts: index.js 103, music.js 110, portraits.js 74,
film.js 82, sports.js 50, landscape.js 40, bts.js 26, automotive.js 16,
Gridstructure.js 6.

There is also a second, older asset host (`uploads.quarkly.io`, Quarkly's
own CDN) still referenced ~26 times for the logo/favicon — two image hosting
sources in play simultaneously.

## 8. Duplication

Significant duplication confirmed across all 10 pages:

- The identical `nav-menu` dropdown `RawHtml` block (CSS + JS), byte-for-byte,
  in every page file.
- The identical `.collage` CSS grid block, byte-for-byte, in every page file
  (also separately duplicated between `Collage.js` and `EmbedStyle.js`,
  which are near-identical files differing only in class/gap values).
- The homepage duplicates the entire nav markup instead of reusing
  `Destophead`.
- Every page repeats an identical `<Helmet>` title/description/favicon — a
  static site-wide default never varied per photography category, which
  also hurts per-page SEO.

## 9. Quarkly-generated files

Essentially everything is Quarkly export boilerplate: all of
`src/pages/*.js`, all of `src/components/*.js`, `src/theme/index.js`,
`src/global-page-styles.js`, `src/html.js`, `.quarkly/qpages.js`, `qapi.js`,
`gatsby-ssr.js`, and the page-pruning logic in `gatsby-node.js`. Recognizable
by the `quarkly-title` props, breakpoint-prefixed props
(`phone-*`/`tablet-*`/`desktop-*`), and the `useOverrides`/`Override` slot
pattern from `@quarkly/components`/`@quarkly/widgets`. None of it is meant
to be hand-edited comfortably — Quarkly expects visual editing in its own
tool followed by re-export, which is why the JSX is so verbose (8,095 lines
for one homepage).

## 10. Refactor vs. rebuild

Open question, logged as a decision to make explicitly — see
`docs/DECISIONS.md`. Key considerations: the current code is Quarkly's
*export* format (dense, breakpoint-prop-per-line, not meant for manual
editing), so hand-refactoring means fighting that structure throughout. A
clean rebuild would let the valuable asset — the Cloudinary URLs/asset
organization plus the Formspree/Netlify wiring — carry over, while dropping
~9,000 lines of generated markup and the duplicated nav/CSS blocks entirely.

## 11. Netlify build

No in-repo Netlify config was found; build command and publish directory
are set in the Netlify site dashboard. From `package.json`, the natural
build command is `npm run build` (`gatsby build`, with `build:clean` /
`build:ci` variants using `cross-env CI=false`); publish directory would be
`public/`. `gatsby-plugin-meta-redirect` is installed (generates meta-refresh
redirects). `gatsby-node.js` sets up an `/index → /` permanent redirect and
deletes any Gatsby-auto-created page not in `qpages.js`'s allowlist.
`gatsby-plugin-sitemap` auto-generates a sitemap at `/`.

## 12. Outdated dependencies / technical risks

- `npm audit` reports **76 vulnerabilities (9 critical, 39 high, 21
  moderate, 7 low)**, almost entirely from Gatsby 3's own transitive
  dependency tree (old `@babel/core`, `ansi-html`, `axios`, `ws`, etc.), not
  application code. `npm audit fix --force` would force a jump to Gatsby 5,
  a breaking change.
- Gatsby 3 and React 17 are both multiple majors behind current, and Gatsby
  itself is effectively unmaintained upstream — the single biggest
  technical risk for a long-lived rebuild.
- No `package-lock.json` was committed before this audit (it showed as
  untracked in `git status`) — dependency resolution wasn't previously
  locked in version control.
- Two competing image CDNs in use (`uploads.quarkly.io` + Cloudinary) with
  no fallback/error handling if either goes down.
- No environment variables/`.env` file — the Formspree endpoint and
  Cloudinary cloud name are hardcoded directly in JSX. Fine for a static
  portfolio, but worth knowing if the Formspree form ID is ever rotated.

## Verification notes

This audit was produced by direct inspection (`Read`, `grep`, `find`,
`npm outdated`, `npm audit`) with no packages installed and no files
changed. Line/reference counts are approximate greps, not exhaustive
static analysis — re-verify exact counts before relying on them for
planning estimates.
