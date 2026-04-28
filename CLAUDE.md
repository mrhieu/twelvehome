# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing/homepage site for the **Twelve O'clock** watch-accuracy tracking app, deployed at `twelveoclock.app`. Built with **Gatsby 5 + TypeScript**, styled with **Tailwind CSS** plus **Sass** (for `article.scss`). Node version pinned to **v18.16.0** (`.nvmrc`).

## Commands

- `yarn dev` / `yarn start` — `gatsby develop` on `http://localhost:8000`
- `yarn build` — production build into `public/`
- `yarn serve` — serve a built site locally (`yarn prod` chains build + serve)
- `yarn clean` — clears `.cache/` and `public/` (run when GraphQL typegen or plugin config changes seem stuck)
- `yarn typecheck` — `tsc --noEmit` (no test framework is configured)
- `yarn deploy` — builds, copies `CNAME` and `robots.txt` into `public/`, then publishes via `gh-pages`. Deployment target is GitHub Pages with a custom apex domain — see `README.md` for the GoDaddy A-record setup.
- `yarn release-major | release-minor | release-patch` — `standard-version` release; the script deletes `package-lock.json` first because the project uses **yarn** (only `yarn.lock` is committed).

## Architecture notes

- **Routing is filesystem-based** under `src/pages/` (Gatsby convention). `index.tsx` composes `Hero → Reviews → Connect → Footer` inside `Layout`. Static legal pages live alongside (`privacy-policy.tsx`, `terms-and-conditions.tsx`, `404.tsx`). The `src/pages/app/` subtree (e.g. `welcome.tsx`) renders under `/app/*` routes used as deep-link landing targets from the mobile app.
- **SEO is driven by Gatsby Head API.** Each page exports a `Head` component that renders `<SEO />` from `src/components/Seo`. `SEO` reads site metadata via `useSiteMetadata` (which queries `siteMetadata` from `gatsby-config.ts`) and lets pages override `title`, `description`, and `pathname`. `siteUrl` switches between `https://twelveoclock.app` (prod) and `http://localhost:8000` based on `NODE_ENV`.
- **Layout pattern:** `Layout` wraps every page with `<Navbar>` + `<main>`. It also exports a named `InnerContainer` (`container max-w-5xl mx-auto px-4`) used to constrain content width inside sections — reuse it instead of redefining the same Tailwind classes.
- **Styling layers:** Tailwind is the default (configured in `tailwind.config.js` to scan `src/pages` and `src/components`). Global resets and font imports go in `src/styles/global.css`, which is registered through `gatsby-browser.js`. `src/styles/article.scss` is Sass-only and is for long-form prose pages (privacy/terms).
- **GraphQL typegen is enabled** (`graphqlTypegen: true` in `gatsby-config.ts`); generated types appear in `src/gatsby-types.d.ts`. Don't hand-edit that file — re-run `gatsby develop` (or `gatsby clean` first) to refresh after changing a GraphQL query.
- **Plugins active:** `gatsby-plugin-postcss` (Tailwind), `gatsby-plugin-sass`, `gatsby-plugin-sitemap`, `gatsby-plugin-google-gtag` (GA4 ID `G-YHKNDEH3PX`), and `gatsby-plugin-manifest` (PWA icon at `static/images/icon.png`).
- **Env files:** `.env.development` and `.env.production` are loaded by `gatsby-config.ts` via `dotenv` keyed on `NODE_ENV`. Both are checked in empty — add vars there if needed.

## Deployment gotchas

- The deploy script copies `CNAME` and `robots.txt` into `public/` because `gh-pages` publishes only that directory; the apex-domain CNAME would otherwise be wiped on each push.
- `static/` files are copied verbatim into the site root by Gatsby. Manifest/PWA icons live at `static/images/`.
