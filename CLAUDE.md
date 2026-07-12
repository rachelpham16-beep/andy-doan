# CLAUDE.md

Guidance for Claude Code (and any other AI agent) working in this repository.
This is Andy Doan's photography portfolio site (andydoanut.com) — a Gatsby 3 /
React 17 site originally exported from Quarkly, deployed via Netlify, with
images hosted on Cloudinary. The site is currently going through a major
redesign (see `docs/DECISIONS.md` and `docs/IMPLEMENTATION-STATUS.md` for
where that stands).

## Permanent rules

These apply to every session in this repo, regardless of what a specific task
asks for. If a request conflicts with one of these, stop and ask before
proceeding.

1. **Do not push to GitHub or deploy without explicit approval.** Local
   commits are fine when asked for; `git push`, opening PRs against a remote,
   triggering a Netlify deploy, or any other action that publishes work
   requires the user to explicitly say so in the current conversation.
2. **Do not modify the main branch.** All work happens on feature/redesign
   branches (e.g. `website-redesign-2026`). Never commit directly to `main`,
   merge into it, or run destructive git operations against it.
3. **Preserve existing content, URLs, SEO metadata, contact information, and
   Cloudinary image URLs unless the user approves a change.** This includes
   page routes/paths, `<title>`/meta description content, the Formspree
   endpoint, phone/email/social links, and every `res.cloudinary.com/...`
   asset URL currently referenced in `src/`. Swapping, re-uploading, or
   restructuring Cloudinary assets requires explicit sign-off first.
4. **Keep Netlify compatibility.** The build must keep working with
   Netlify's standard static-site build/deploy flow (build command + publish
   directory). Don't introduce a runtime/server dependency Netlify's static
   hosting can't serve without discussing it first.
5. **Build mobile-first.** Design and implement for small viewports first,
   then progressively enhance for tablet/desktop — matching how the current
   Quarkly export's `phone-*` / `tablet-*` / `desktop-*` breakpoint props are
   already organized.
6. **Prioritize image performance, accessibility, and reduced-motion
   support.** Lazy-load and size images appropriately (this is an
   image-heavy photography portfolio), meet basic a11y expectations (alt
   text, keyboard nav, focus states, contrast), and respect
   `prefers-reduced-motion` for any animation/transition work.
7. **Use Oryzo only as visual and motion inspiration.** Do not copy its
   code, branding, content, or exact layout. Reference it for a general
   feel/interaction style only.
8. **Record important decisions in `docs/DECISIONS.md`.** Any non-trivial
   architectural or scope decision (refactor vs. rebuild, dependency
   upgrades, structural changes, anything that reverses a prior decision)
   gets logged there with rationale, not just implemented silently.

## Where to look

- `docs/CODEBASE-AUDIT.md` — findings from the initial repo audit (versions,
  structure, duplication, risks). Read this before making structural changes.
- `docs/DECISIONS.md` — running log of decisions made during the redesign.
- `docs/IMPLEMENTATION-STATUS.md` — current state of the redesign effort.

## Working conventions

- Confirm before installing packages, running upgrades, or running builds
  that write outside the repo.
- When in doubt about scope (e.g. "does this count as changing SEO
  metadata?"), ask rather than assume.
