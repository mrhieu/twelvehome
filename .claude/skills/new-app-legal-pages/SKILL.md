---
name: new-app-legal-pages
description: Generate Privacy Policy and Terms & Conditions source markdown plus matching webpages (and a per-app navbar) for a new app being submitted to the App Store. Use when the user asks to add legal pages for a new app — e.g. "create privacy/terms for {app}", "add legal pages for new app {app}", "scaffold App Store legal pages for {app}". Generates content/{slug}/PRIVACY.md + TERMS.md from app-fact answers, then derives src/pages/{slug}/policy.tsx + terms.tsx, a dedicated navbar at src/components/{App}Navbar/, and a constants module at src/constants/{slug}.ts.
---

# new-app-legal-pages

Two-phase scaffold: first generate the **source markdown** for Privacy Policy and Terms & Conditions under `content/{slug}/`, then derive the **TSX webpages** (and supporting navbar + constants) from that markdown. Markdown is the source of truth — anyone can re-run the page-generation phase later if the markdown changes.

This skill follows the conventions established by the Magnetick precedent (`src/pages/magnetick/`, `src/components/MagnetickNavbar/`, `content/magnetick/` once it exists). Each invocation produces seven files: two markdown files, a constants module, a per-app navbar component (`.tsx` + `.scss`), and the two legal pages.

## When to use

Trigger when the user asks to add legal pages for a new app being submitted to the App Store. Examples:
- "create privacy and terms pages for {app}"
- "add legal pages for new app {app}"
- "scaffold App Store legal pages for {app}"
- "generate privacy/terms for {app}"

Do **not** trigger for edits to the existing Twelve O'clock pages (`src/pages/privacy-policy.tsx`, `src/pages/terms-and-conditions.tsx`).

## Inputs

Ask for any of these that aren't given in the invoking message. Use a **single batched question** (via the AskUserQuestion tool when possible) rather than asking one at a time.

### Identity (always required)

| Input | Notes |
| --- | --- |
| **App name** (display) | e.g. `Magnetick`. Used in titles, navbar label, SEO, and the markdown header block. |
| **Slug** | e.g. `magnetick`. Lowercase, kebab-case. Used for `content/{slug}/`, `src/pages/{slug}/`, `src/components/{App}Navbar/`, `static/images/{slug}/`, `src/constants/{slug}.ts`. If the user gives only the app name, derive the slug as the lowercased name with spaces replaced by hyphens, then confirm in the same question batch. |
| **One-line app description** | A sentence the skill can drop into the markdown's "Intended use" section, e.g. "iOS app that displays the live magnetic field reading from the device's magnetometer." |
| **App Store URL** | If absent, write a placeholder string `https://apps.apple.com/app/{slug}/id0000000000` into the constants file and end your reply with a one-line reminder to fill it in once App Store Connect issues the real ID. |

### Data-practice facts (drive the markdown content)

Ask these as a batched question. The defaults match a privacy-respecting on-device-only app (the Magnetick shape), so a user can accept defaults for that case.

| Question | Default | Effect on markdown |
| --- | --- | --- |
| Does the app collect any personal data? | No | If No → "Information we collect: **None.**" If Yes → ask a follow-up for what is collected and write a matching section. |
| Does the app use any sensors or special permissions? (specify which) | None | If specified → write a "Sensor access" / "Permissions" section explaining what is read and how it is used. Otherwise omit the section. |
| Does the app make network requests? | No | If No → "Network access: the app does not make any network requests." If Yes → ask for what endpoints/purposes and write accordingly. |
| Does the app integrate any third-party SDKs (analytics, ads, crash reporting)? | None | If None → "Third parties: no third-party SDKs that collect data." Otherwise list them. |
| Effective date | Today's date | Used in both markdown files' header blocks. |

Hardcoded defaults (do not ask):
- Developer: `Hieu Pham`
- Contact: `hieupv.global@gmail.com`

## Preconditions to verify before generating

1. `static/images/{slug}/icon.png` must exist. If not, abort with: "Logo not found at `static/images/{slug}/icon.png`. Add the icon, then re-invoke the skill."
2. If `content/{slug}/PRIVACY.md` or `content/{slug}/TERMS.md` already exists, do **not** silently overwrite — ask the user whether to overwrite or skip the markdown phase and proceed to page regeneration from the existing files.

## Phase 1 — Generate source markdown

Write `content/{slug}/PRIVACY.md` and `content/{slug}/TERMS.md` using the templates below. Substitute placeholders from the user's answers; omit optional sections that don't apply.

### `content/{slug}/PRIVACY.md` template

```markdown
# Privacy Policy

**App:** {AppName}
**Developer:** Hieu Pham
**Contact:** hieupv.global@gmail.com
**Effective date:** {EffectiveDate}

## Summary

{AppName} {one-line summary tuned to data practices — e.g. "does not collect, store, transmit, or share any personal data. The app runs entirely on your device. There are no user accounts, no analytics, no advertising, and no third-party trackers." For data-collecting apps, replace with an honest summary of what is collected and why.}

## Information we collect

{If no collection: "**None.** {AppName} does not collect any personal information, device identifiers, usage statistics, crash reports, or any other data about you or your device."}
{Else: enumerate categories.}

## Sensor access  ← include only if sensors/permissions used

{Describe each sensor/permission, what is read, retention behaviour, whether transmitted.}

## Network access

{If offline: "{AppName} does not make any network requests. The app functions fully offline and does not need an internet connection."}
{Else: list endpoints and purposes.}

## Third parties

{If none: "{AppName} does not integrate any third-party SDKs that collect data. There are no advertising networks, no analytics providers, and no crash-reporting services bundled in the app."}
{Else: list each SDK.}

## Children's privacy

{AppName} is suitable for all ages and does not knowingly collect data from anyone, including children under 13.

## Your rights

{Tuned to data practices — for no-collection apps: "Because no data is collected, there is no personal data for us to access, correct, or delete on your behalf. Uninstalling the app removes any in-memory readings."}

## Changes to this policy

If this policy ever changes, the updated version will be published at the same URL with a new effective date. Material changes will be reflected in app updates.

## Contact

Questions about this policy can be sent to **hieupv.global@gmail.com**.
```

### `content/{slug}/TERMS.md` template

```markdown
# Terms and Conditions

**App:** {AppName}
**Developer:** Hieu Pham
**Contact:** hieupv.global@gmail.com
**Effective date:** {EffectiveDate}

By downloading, installing, or using {AppName} (the "App"), you agree to these Terms and Conditions. If you do not agree, do not install or use the App.

## 1. License

You are granted a personal, non-exclusive, non-transferable, revocable license to install and use the App on Apple-branded devices that you own or control, in accordance with the Apple Media Services Terms and the Apple App Store Usage Rules.

## 2. Intended use

{One-paragraph description of what the App is for, derived from the user-supplied one-line description.}

The App is **not** a calibrated scientific instrument and is **not** intended for:

- Medical, diagnostic, or safety-critical use of any kind.
- {Domain-specific misuse cases — tune to the app. For sensor apps include hazardous-detection cases; for utilities, drop or replace.}
- Industrial, navigational, or professional measurement.
- Any decision where an inaccurate output could result in injury, financial loss, or property damage.

## 3. No warranty

The App is provided **"AS IS" and "AS AVAILABLE"**, without warranty of any kind, whether express, implied, statutory, or otherwise. To the maximum extent permitted by law, the developer disclaims all warranties, including (without limitation) warranties of merchantability, fitness for a particular purpose, accuracy, reliability, non-infringement, and uninterrupted operation.

## 4. Limitation of liability

To the maximum extent permitted by applicable law, in no event shall the developer be liable for any indirect, incidental, special, consequential, exemplary, or punitive damages, or any loss of profits, data, goodwill, or other intangible losses, arising out of or relating to your use of, or inability to use, the App — even if the developer has been advised of the possibility of such damages.

In any case, the developer's aggregate liability arising out of or relating to the App shall not exceed the amount you paid for the App (which, for a free app, is zero).

## 5. User responsibility

You are solely responsible for how you use the App and for any decisions you make based on its output.

## 6. Intellectual property

All rights, title, and interest in and to the App — including its name, design, source code, and assets — remain with the developer. These Terms do not grant you any rights to the developer's trademarks or branding.

## 7. Privacy

Use of the App is also governed by the [Privacy Policy](PRIVACY.md), which is incorporated into these Terms by reference.

## 8. Apple's role

You acknowledge that these Terms are between you and the developer, not Apple, and that Apple has no responsibility for the App or its content. Apple is, however, a third-party beneficiary of these Terms and may enforce them against you. The standard Apple App Store EULA also applies to your use of the App.

## 9. Termination

These Terms remain in effect while you use the App. The developer may update or discontinue the App at any time without notice. You may stop using the App at any time by uninstalling it.

## 10. Changes to these Terms

The developer may revise these Terms from time to time. Material changes will be reflected in updated versions of the App. Continued use of the App after a change constitutes acceptance of the revised Terms.

## 11. Governing law

These Terms shall be governed by and construed in accordance with the laws of the developer's place of residence, without regard to its conflict-of-laws rules. Disputes shall be resolved in the courts of that jurisdiction, except where applicable consumer-protection law requires otherwise.

## 12. Contact

Questions about these Terms can be sent to **hieupv.global@gmail.com**.
```

After writing both markdown files, briefly tell the user where they were written and that the page-generation phase will begin. Do not pause for confirmation — the user can edit the markdown afterward and re-invoke for regeneration.

## Phase 2 — Generate webpages from the markdown

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

Apply these rules consistently across both files. Read the freshly-written `content/{slug}/PRIVACY.md` and `content/{slug}/TERMS.md` from disk for this phase — do not reuse the in-memory markdown string, so phase 2 also works when re-invoked against pre-existing markdown.

| Markdown | JSX |
| --- | --- |
| `# Title` (top of file) | `<h2 id="why">Title</h2>` |
| Header block (consecutive `**App:** …` / `**Developer:** …` / `**Contact:** …` / `**Effective date:** …` lines at the top) | A single `<p className="post-body-text">` with `<br />` separators; each label rendered as `<span className="font-semibold">Label:</span>`. Email addresses become `<a href="mailto:…">`. |
| `## Section` | `<p className="post-body-text"><strong>Section</strong></p>` (keep numbering verbatim, e.g. `1. License`) |
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

1. Resolve and validate inputs (single batched question for any missing identity + data-practice facts).
2. Verify preconditions (logo exists; markdown collision check). Abort or branch as described above.
3. **Phase 1:** write `content/{slug}/PRIVACY.md` and `content/{slug}/TERMS.md` from the templates, substituting user answers. Use the Write tool — do not Edit, since these are new files.
4. **Phase 2:** read both freshly-written markdown files from disk and convert each to JSX using the conversion rules.
5. Write the five code files in this order: constants → navbar `.scss` → navbar `.tsx` → `policy.tsx` → `terms.tsx`.
6. Run `yarn typecheck` and report the result. Ignore pre-existing errors in `src/pages/privacy-policy.tsx` and `src/pages/terms-and-conditions.tsx` — those are baseline noise unrelated to this skill.
7. End with a one-line summary listing all seven generated files. If the App Store URL was a placeholder, append a one-line reminder to fill it in.

## Re-invocation behaviour

If the user re-invokes the skill for a slug whose markdown already exists, offer to skip Phase 1 and re-derive only the webpages from the on-disk markdown — that lets the user hand-edit `content/{slug}/PRIVACY.md` after generation and regenerate the TSX without losing edits.

## Out of scope

- Do not modify `src/components/Navbar/`, `src/components/Layout/`, or any other shared components.
- Do not modify the legacy Twelve O'clock legal pages.
- Do not edit `gatsby-config.ts` or routing — Gatsby's filesystem-based routing picks up `src/pages/{slug}/*.tsx` automatically.
- Do not create or modify the icon. If `static/images/{slug}/icon.png` is missing, abort.
- Do not invent data-practice claims. If the user can't answer a question, ask follow-up — do not silently default to "no collection / offline / no SDKs" because those claims are legally meaningful.

## Reference: Magnetick precedent

When in doubt about a styling or structural detail, mirror these files:
- `src/components/MagnetickNavbar/index.tsx`
- `src/components/MagnetickNavbar/index.scss`
- `src/pages/magnetick/policy.tsx`
- `src/pages/magnetick/terms.tsx`
- `src/constants/magnetick.ts`
- `PRIVACY.md` and `TERMS.md` at the repo root (the original Magnetick source — note that the canonical home for new apps is `content/{slug}/`, not the repo root).
