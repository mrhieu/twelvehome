---
name: new-app-legal-pages
description: Generate Privacy Policy and Terms & Conditions pages (plus a per-app navbar) for a new app being submitted to the App Store. Use when the user asks to add legal pages for a new app — e.g. "create privacy/terms for {app}", "add legal pages for new app {app}", "scaffold App Store legal pages for {app}". Generates files under src/pages/{slug}/, a dedicated navbar at src/components/{App}Navbar/, and a constants file at src/constants/{slug}.ts. Reads source markdown from content/{slug}/PRIVACY.md and content/{slug}/TERMS.md.
---

# new-app-legal-pages

Scaffolds Privacy Policy and Terms & Conditions pages for a new app inside this Gatsby site, following the conventions established by the Magnetick precedent (`src/pages/magnetick/`, `src/components/MagnetickNavbar/`). Each invocation produces five files: a constants module, a per-app navbar component (with `.tsx` + `.scss`), and the two legal pages.

## When to use

Trigger when the user asks to add legal pages for a new app being submitted to the App Store. Examples:
- "create privacy and terms pages for {app}"
- "add legal pages for new app {app}"
- "scaffold App Store legal pages for {app}"
- "generate privacy/terms for {app}"

Do **not** trigger for edits to the existing Twelve O'clock pages (`src/pages/privacy-policy.tsx`, `src/pages/terms-and-conditions.tsx`).

## Inputs

Ask the user for any of these that are not given in the invoking message. Use a single batched question rather than asking one at a time.

| Input | Required | Notes |
| --- | --- | --- |
| **App name** (display) | yes | e.g. `Magnetick`. Used in titles, navbar label, SEO. |
| **Slug** | yes | e.g. `magnetick`. Lowercase, kebab-case. Used for `src/pages/{slug}/`, `src/components/{App}Navbar/`, `static/images/{slug}/`, `src/constants/{slug}.ts`. If the user gives only the app name, derive the slug as the lowercased name with spaces replaced by hyphens, then confirm. |
| **App Store URL** | no | If absent, write a placeholder string `https://apps.apple.com/app/{slug}/id0000000000` into the constants file and end your reply with a one-line reminder to fill it in once App Store Connect issues the real ID. |

Hardcoded defaults (do not ask):
- Developer: `Hieu Pham`
- Contact: `hieupv.global@gmail.com`

The skill should still parse any `**Developer:**` / `**Contact:**` lines from the markdown header block and prefer those if present, so the source markdown remains the source of truth.

## Preconditions to verify before generating

1. `static/images/{slug}/icon.png` must exist. If not, abort with: "Logo not found at `static/images/{slug}/icon.png`. Add the icon, then re-invoke the skill."
2. `content/{slug}/PRIVACY.md` and `content/{slug}/TERMS.md` must both exist. If either is missing, abort with a clear message naming the missing path. Do not generate placeholder markdown — the user authors the legal text themselves before invoking.

## Files to generate

Use the path conventions below exactly. `{App}` = PascalCase form of the slug (e.g. `magnetick` → `Magnetick`, `my-cool-app` → `MyCoolApp`). `{SLUG_UPPER}` = slug with hyphens replaced by underscores and uppercased (e.g. `my-cool-app` → `MY_COOL_APP`).

### 1. `src/constants/{slug}.ts`

```ts
export const {SLUG_UPPER}_APP_STORE_URL = '{appStoreUrl}';
```

### 2. `src/components/{App}Navbar/index.scss`

```scss
.navBar {
  background-color: rgba(255, 255, 255, .97);

  &--dark {
    background-color: rgba(11, 8, 32, .7);
    backdrop-filter: saturate(140%) blur(14px);
    -webkit-backdrop-filter: saturate(140%) blur(14px);
    border-bottom: 1px solid rgba(255, 255, 255, .08);
    box-shadow: none;
  }
}
```

### 3. `src/components/{App}Navbar/index.tsx`

Mirror the Magnetick navbar structure: `light` / `dark` variants, `homeHref` prop defaulting to `/{slug}/policy`, logo from `/images/{slug}/icon.png`, App Store link sourced from the constants module, single Apple icon on the right.

### 4. `src/pages/{slug}/policy.tsx` and `src/pages/{slug}/terms.tsx`

Each page is a standalone React component (no shared `Layout` import — wrap the content directly):

```tsx
<div className="min-h-screen">
  <{App}Navbar />
  <main aria-label="Content">
    <div className="container max-w-5xl mx-auto px-4">
      <article className="col-lg-8 offset-lg-2">
        <div className="post-content">
          {/* converted markdown */}
        </div>
      </article>
    </div>
  </main>
</div>
```

Both pages import `'../../styles/article.scss'` for typography. Both export a `Head` component for SEO with `<title>{App} — Privacy Policy</title>` (or Terms) and a one-line description meta tag.

The terms page additionally imports `Link` from `gatsby` to render the cross-link to the privacy page.

## Markdown → JSX conversion rules

Apply these rules consistently across both files:

| Markdown | JSX |
| --- | --- |
| `# Title` (top of file) | `<h2 id="why">Title</h2>` |
| Header block (consecutive `**App:** …` / `**Developer:** …` / `**Contact:** …` / `**Effective date:** …` lines at the top) | A single `<p className="post-body-text">` with `<br />` separators; each label rendered as `<span className="font-semibold">Label:</span>`. Email addresses become `<a href="mailto:…">`. |
| `## Section` | `<p className="post-body-text"><strong>Section</strong></p>` (no numbering removed — keep e.g. `1. License` verbatim) |
| Plain paragraph | `<p className="post-body-text">…</p>` |
| `**bold**` inside body text | `<span className="font-semibold">bold</span>` |
| Bullet list `- item` | `<ul><li>item</li></ul>` (group consecutive items into one `<ul>`) |
| `[text](mailto:…)` | `<a href="mailto:…">text</a>` |
| `[text](https://…)` | `<a href="…" target="_blank" rel="noreferrer noopener">text</a>` |
| `[Privacy Policy](PRIVACY.md)` | `<Link to="/{slug}/policy">Privacy Policy</Link>` (only in `terms.tsx`) |
| `&` literal | `&amp;` |
| Smart quotes / em-dashes | preserved as-is |

Strip the markdown headers' leading `#` characters cleanly. Do not invent text or summarise — emit one JSX element per markdown block.

## Generation steps

1. Resolve and validate inputs (ask the user for anything missing in a single batched question).
2. Verify preconditions (logo + both markdown files exist). Abort cleanly if not.
3. Read both markdown files.
4. Convert each markdown file to JSX using the rules above.
5. Write the five files in this order: constants → navbar `.scss` → navbar `.tsx` → `policy.tsx` → `terms.tsx`.
6. Run `yarn typecheck` and report the result. Ignore pre-existing errors in `src/pages/privacy-policy.tsx` and `src/pages/terms-and-conditions.tsx` — those are baseline noise unrelated to this skill.
7. End with a one-line summary listing the generated files. If the App Store URL was a placeholder, append a one-line reminder to fill it in.

## Out of scope

- Do not modify `src/components/Navbar/`, `src/components/Layout/`, or any other shared components.
- Do not modify the legacy Twelve O'clock legal pages.
- Do not edit `gatsby-config.ts` or routing — Gatsby's filesystem-based routing picks up `src/pages/{slug}/*.tsx` automatically.
- Do not author the source markdown. If `content/{slug}/PRIVACY.md` or `TERMS.md` is missing, abort and tell the user to author it first.
- Do not create or modify the icon. If `static/images/{slug}/icon.png` is missing, abort.

## Reference: Magnetick precedent

When in doubt about a styling or structural detail, mirror these files:
- `src/components/MagnetickNavbar/index.tsx`
- `src/components/MagnetickNavbar/index.scss`
- `src/pages/magnetick/policy.tsx`
- `src/pages/magnetick/terms.tsx`
- `src/constants/magnetick.ts` (if present — otherwise infer from the navbar's import)
