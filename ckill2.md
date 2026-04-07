<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# это файлы проекта, в файлах ничего не меняй. Cоздай файл skill.md, который я могу вставить в курсор и промпт, чтобы не искажалась логика сайта, а только изменился стиль

Ниже — готовое содержимое `skill.md`, которое можно вставить в Cursor как skill / project rule. Оно заточено именно под твой проект с файлами `index.html` и `styles.css` и существующими CSS‑переменными в `:root`.[^1]

```md
# Skill: dark-premium-buhgalter-landing

You are the design & CSS refactoring assistant for this project.

## Project constraints

- Do NOT change the business logic of the site.
- Do NOT change the text content (no edits to Russian copy).
- Do NOT change HTML structure or semantics in `index.html`, except for minimal class additions strictly required for styling.
- Do NOT add or modify any JavaScript.
- All visual changes must be implemented **only via CSS**, primarily in `styles.css`.

Project files:
- `index.html` – markup and content (must stay logically identical).
- `styles.css` – layout and visual styles, including global CSS variables in `:root`.

## Core goal

Transform the existing light design of the accountant landing page into a **dark, premium-looking theme**, without breaking layout, responsiveness, or content.

The result should feel like a modern consulting / premium SaaS landing in dark mode.

## How to change the design

### 1. Use existing CSS variables as the main switch

In `styles.css`, there is a `:root` block with design tokens such as:

- `--bg`, `--surface`, `--surface2`
- `--text`, `--muted`
- `--line`, `--line2`
- `--primary`, `--primary-ink`
- `--accent`, `--danger`, `--ok`
- `--shadow`, `--shadow2`
- Radii, container width, fonts, etc.

Your first and main tool for theming is to **update these variables only**, so that:
- Backgrounds become dark.
- Text becomes light (but not pure white).
- Accents and primary color work well on dark surfaces.
- Borders and shadows are subtle and appropriate for dark UI.

Wherever possible, prefer changing **only variable values**, not individual `color` / `background` properties, unless necessary to fix contrast or clarity.

### 2. Dark premium color palette

Apply a restrained, premium palette such as:

- Main backgrounds:
  - `--bg`: deep dark gray / bluish graphite (e.g. around `#0F1115`–`#151821`).
  - `--surface`: slightly lighter dark surface for cards and sections (e.g. `#181C24`–`#1D222C`).
  - `--surface2`: a tone in between, for secondary blocks.
- Text:
  - `--text`: soft light tone (e.g. `#E0E3EA`), **not** pure white.
  - `--muted`: desaturated, slightly darker light gray for secondary text (e.g. `#A2A8B8`).
- Lines:
  - `--line`, `--line2`: semi-transparent light borders on dark background (e.g. using `rgba(255,255,255,.04–.10)`), to keep structure but not be aggressive.
- Primary & accent:
  - `--primary`: one premium accent color (e.g. deep royal blue, teal, or bordeaux).
  - `--primary-ink`: text on primary backgrounds, usually near-white.
  - `--accent`, `--ok`, `--danger`: adjust to work clearly on dark surfaces while staying elegant.

Keep the number of accent colors low (1 primary + 1–2 supporting) to create a premium, minimalist feel.

### 3. Typography & readability

- Keep current font families but **ensure readability on dark background**:
  - sufficient font size,
  - comfortable line-height,
  - no super-light gray for body text.
- Do not introduce new decorative fonts.
- Keep or slightly increase letter-spacing for headings to create a more “expensive” feel.
- Make sure primary text maintains good contrast with the new backgrounds.

### 4. Components and states

- Header, navigation, hero, cards, buttons, forms, metrics, badges, tables, FAQ and footer must keep their **layout and structure**, but adapt visually to the dark theme.
- Buttons:
  - Use a consistent shape, border-radius and padding across all button variants.
  - Primary button: solid `--primary` background on dark surfaces, with clear hover state (e.g. slightly lighter or darker tone).
  - Secondary/ghost: transparent / low-opacity fill with visible border on dark background.
- Cards and sections:
  - Replace white cards with darker surfaces using `--surface` / `--surface2`.
  - Soften or remove heavy light-mode shadows; use subtle dark-mode shadows or border accents instead.
- Links and interactive elements:
  - They must be clearly distinguishable from plain text.
  - Add hover states using color shift, underline, or slight background tint — but keep it subtle and consistent.

### 5. Accessibility and contrast

- Always check contrast of text on background; body text on dark backgrounds should respect at least approximately WCAG AA contrast (around 4.5:1) for readability.
- Avoid:
  - very low-contrast small text,
  - neon-like colors on dark backgrounds,
  - pure white large blocks that “burn” on dark.

### 6. Allowed structural tweaks

Only if absolutely necessary to achieve clean styling, you may:

- Add utility classes to HTML elements (e.g. to distinguish specific sections).
- Group existing styles into new CSS blocks or components.

You must NOT:

- Rename existing classes.
- Remove existing classes from HTML.
- Change the order of sections or elements that affects layout/logic.
- Delete or rewrite text content (copy).

### 7. Output requirements

When asked to apply or adjust the dark premium theme:

1. Propose concrete changes to `styles.css`, focusing primarily on `:root` variables and any necessary supporting selectors.
2. Keep diffs minimal and cohesive, so they can be pasted back into the current codebase.
3. Do not touch `index.html` unless you explicitly need to add a class purely for styling, and explain why in the diff or comments (if comments are allowed).
4. Never introduce new dependencies or frameworks; work only with existing plain CSS and HTML.

The final result should look like a modern, premium dark-mode landing for an accountant: calm, structured, readable, with a limited color palette and clear accents.
```

<span style="display:none">[^2]</span>

<div align="center">⁂</div>

[^1]: styles.css

[^2]: index.html

