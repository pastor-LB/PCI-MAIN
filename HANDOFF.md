# Park City Initiative Website — Handoff

Last updated: 2026-11-12

## 1. Summary

Next.js 16 (App Router, TypeScript, Tailwind v4) rebuild of parkcityinitiative.org for
Park City Initiative (PCI), a Bridgeport, CT nonprofit. Replaces the old Wix site.

- GitHub: https://github.com/pastor-LB/PCI-MAIN (branch `main`)
- Latest commit on GitHub: `d9f8a6d` — "Apply remaining audit fixes (non-donation scope)"
- Local build: `npm run build` passes (all routes prerender)

## 2. Hosting status

- Vercel project `pci-website` has been transferred to team `team-pci` (Team PCI,
  team ID `team_9Epv2YBWq3o03WJjSCNAzHFc`). Project ID `prj_j5IDNFlmyJOlfVVEv98DKjonWjFh`.
- Commit `d9f8a6d` is deployed to production on Team PCI:
  `https://pci-website-m7ywc53xh-team-pci.vercel.app`. Verified via authenticated CLI:
  new H1, header buttons, robots rules, and `noindex` on Transparency all correct.
- The project is behind Vercel deployment protection (SSO). That is the default, and it
  stays on. Public visitors only reach the site through the custom domain, since the default
  protection excludes custom domains. Do not disable protection to test; add the domain
  instead.
- GitHub pushes do not yet auto-deploy. Connect the repo in Team PCI's project settings.
- Only `NEXT_PUBLIC_SITE_URL` is set on Vercel so far (Production). See section 5.

## 3. Audit fixes applied

Source: PCI Website Audit (outside donations and EIN, per the owner's request).

| Area | Change | Checked |
|---|---|---|
| Titles | Removed duplicate "\| Park City Initiative" from page titles; root template adds it once. `/donate` left as original (still duplicates — donations out of scope) | curl |
| Homepage H1 | Added `<h1>` in `components/sections/Hero.tsx` | curl |
| Header CTAs | Removed "GIVE MONTHLY"; header is GET HELP / VOLUNTEER / DONATE | curl |
| Gold contrast | `--color-brand-gold` `#E09612` → `#C17D1C` (`app/globals.css`) | Not checked in browser |
| Stat counters | Count-up runs once (`components/ui/StatCard.tsx`) | Not checked in browser |
| Spanish | `app/es/layout.tsx` sets `lang="es"`; hreflang in root and es layouts | Not checked |
| Search schema | Removed `SearchAction` from `lib/schema.ts` | Not checked |
| Robots | `app/robots.ts` disallows all crawling unless `VERCEL_ENV=production` | curl (local) |
| Program name | "Kidz Academy" everywhere (replaced "Park City Kidz Academy" and "PCK Academy") | curl |
| Contact email | `help@parkcityinitiative.org` only; unused `info@` constant removed | Build |
| Stats labels | Homepage and Our Impact figures labeled as 2025 annual; "over 900+" typo fixed | curl |
| Founder | Bishop Jean Williams added to About as "Founder" — **title needs owner confirmation** | curl |
| Transparency | Hidden: removed from footer, sitemap and Our Impact; page marked `noindex` | curl |

## 4. Still open

Blocked on owner input:
- **Transparency page** (`app/transparency/page.tsx`): still has placeholder figures
  ("2025 (Placeholder)", "TBD") and a "(link placeholder)" GuideStar/Candid link. Replace
  with real figures and restore the footer link, sitemap entry and `index` robots setting.
- **One Block stories** (`app/one-block/page.tsx`): add a real story, quote, or photo for
  each of the three sub-programs. Do not invent quotes.
- **Donation form:** `NEXT_PUBLIC_ZEFFY_FORM_ID` is blank (Zeffy placeholder). Excluded from
  this audit scope but still open.
- **EIN:** still shows `[ INSERT EIN ]` on the Donate and Transparency pages (`ein` in
  `lib/constants.ts`). Excluded from this audit scope but still open.
- **Donate page title:** still has the duplicate "\| Park City Initiative" suffix.

Not yet verified:
- Stat counter animation, gold contrast on white, and the Spanish hreflang output
  need a real browser check.
- Lighthouse / PageSpeed on the live production URL.

## 5. Environment variables

Documented in `.env.local.example`. None are committed. Set them in the new Vercel project
(Settings → Environment Variables). Values must come from the owner.

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical and sitemap URLs (`https://www.parkcityinitiative.org`) |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 (optional) |
| `RESEND_API_KEY`, `EMAIL_TO`, `EMAIL_FROM` | Form notification email (without the key, forms only log) |
| `MAILCHIMP_API_KEY`, `MAILCHIMP_LIST_ID`, `MAILCHIMP_SERVER_PREFIX` | Newsletter signups (optional) |
| `NEXT_PUBLIC_ZEFFY_FORM_ID` | Donation embed — currently blank |

Confirm `.env*` is in `.gitignore` before handing off the repo.

## 6. Launch checklist (new Vercel account)

1. Transfer the project to the new team (Project → Settings → Advanced → Transfer Project),
   or import `pastor-LB/PCI-MAIN` fresh in the new account.
2. Connect the GitHub repo and branch `main` so pushes auto-deploy.
3. Add the environment variables from section 5.
4. Redeploy and check the live site: homepage H1, header buttons, counters, page titles.
5. Add domain `www.parkcityinitiative.org` (and apex redirect). Change DNS only after the
   deployment checks out.
6. Confirm production allows indexing: `/robots.txt` should allow crawling, and `/sitemap.xml`
   should not list Transparency.
7. Run PageSpeed / Lighthouse on the production URL.

## 7. Local development

```bash
cd /Users/luisburgos/Claude/pci-website
npm install
npm run dev        # http://localhost:3000
npm run build      # production check
```

## 8. Repo conventions

- `AGENTS.md`: this is Next.js with breaking changes. Read `node_modules/next/dist/docs/`
  before writing code.
- Page metadata: use `generatePageMetadata` in `lib/metadata.ts`. Do not add
  "| Park City Initiative" to titles; the root layout adds it.
- Brand colors are CSS variables in `app/globals.css` (`@theme`).
- `vercel.json` holds legacy redirects from the old Wix URLs.

## 9. Access

- GitHub: `pastor-LB/PCI-MAIN`. The new owner needs write access.
- Vercel: the project is on `lb86-projects1` until transferred.
