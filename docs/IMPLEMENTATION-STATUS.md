# Implementation Status

Tracks where the andydoanut.com redesign actually stands. Update this as
work happens — this should always reflect current reality, not a plan.

Last updated: 2026-07-12

## Current phase: Redesign plan proposed, awaiting approval (no source code changed yet)

Nothing in `src/`, `gatsby-config.js`, `gatsby-node.js`, `gatsby-ssr.js`, or
`qapi.js` has been modified. No packages installed or upgraded. No commits
pushed, no Netlify deploy triggered. No new project (Astro or otherwise)
has been scaffolded.

## Completed

- [x] Full read-only codebase audit — see `docs/CODEBASE-AUDIT.md`.
- [x] Permanent working rules established — see `CLAUDE.md`.
- [x] Decisions log initialized — see `docs/DECISIONS.md`.
- [x] Full redesign plan proposed (architecture, page structure, homepage
      sections, gallery/lightbox, animation system, mobile behavior,
      performance plan, migration plan, risks, first-prototype scope) —
      see `docs/REDESIGN-PLAN.md`. Recommends an Astro rebuild; reviewed
      oryzo.ai live for pacing/animation inspiration only, per `CLAUDE.md`.

## Not started

- [ ] **Approval decision**: accept, reject, or revise the Astro rebuild
      direction in `docs/REDESIGN-PLAN.md` §1 — blocks everything below.
- [ ] Small first prototype (`docs/REDESIGN-PLAN.md` §10): new branch,
      homepage hero + category nav + one full category page (`/music`),
      no deploy. Not started — needs approval first.
- [ ] Cloudinary URL data extraction into a structured content source
      (migration plan §8 step 1).
- [ ] Navigation rebuild (dedupe homepage vs. `Destophead`, drop the dead
      `.nav-menu` CSS/JS rather than port it).
- [ ] Gallery/lightbox rebuild (replace
      `@quarkly/community-kit/Gallery`/`Lightbox` per plan §4).
- [ ] SEO metadata pass (currently identical `<Helmet>` content on every
      page — needs per-page titles/descriptions, pending approval per
      `CLAUDE.md`).
- [ ] Cloudinary/asset host consolidation decision (`uploads.quarkly.io`
      vs. Cloudinary-only) — still open, not required for the prototype.
- [ ] Full migration through cutover (plan §8) — only after the prototype
      is reviewed and approved.
- [ ] Netlify build reconfiguration (new build command/publish directory)
      — only at cutover, with explicit approval.
- [ ] Accessibility pass (alt text, keyboard nav, focus states, contrast).
- [ ] Reduced-motion support for any new animation/motion work.
- [ ] Mobile-first implementation pass.

## Known blockers / open questions

- Astro-rebuild approval decision blocks all implementation work — see
  `docs/DECISIONS.md` open decisions section.
- No `netlify.toml` in-repo; build command/publish directory live in the
  Netlify dashboard only, so any build-affecting change should be verified
  against Netlify's actual configured settings, not assumed from
  `package.json` alone. Relevant again at cutover (plan §8 step 6).
