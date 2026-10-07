# ApexFix Project Architecture & Design Rules

This project follows strict engineering and visual standards. Every change must adhere to the following rules:

## 1. Master Brand Footer Rule
- **EVERY page on the website MUST use the identical Master Brand Footer (`<footer class="site-footer-master" id="contact">`) matching `index.html`.**
- Do NOT use or create simplified 3-column generic footers (`footer-clean`).
- The footer includes:
  - `.footer-top-brand`: ApexFix SVG logo with gear/wrench, brand statement, circular social buttons (WhatsApp, Phone, Facebook, Instagram).
  - `.footer-card-container`: 3-column elevated card with Quick Links (Column 1), Our Services with `book-trigger` modal links (Column 2), Contact Us with WhatsApp active pulse dot + direct phone + appointment button (Column 3).
  - `.footer-bottom-bar`: Copyright & "Designed & Developed with ❤️ by Hywiz Technologies", plus legal links.
  - On sub-pages like `services.html`, Quick Links must reference `index.html#section` (e.g. `index.html#home`, `index.html#about`).

## 2. Brand Identity & Theme Palette
- Primary Brand Accent: Brand Action Red `#d71c1b` (`var(--brand-accent)`) with `#b00403` on hover (`var(--brand-accent-hover)`)
- Primary Action Gradient (CTA / Call Now button): `linear-gradient(135deg, #d71c1b 0%, #c41412 50%, #b00403 100%)`
- Primary Action Hover Gradient: `linear-gradient(135deg, #e52524 0%, #d71c1b 50%, #b00403 100%)`
- Secondary Call / Emergency: `#059669` / `#10b981` (Phone rings, WhatsApp pulse dot)
- Canvas Light: Pure White `#ffffff` / Alt slate `#f4f5f5` with Charcoal `#192023` typography & headings
- Dark Theme (`body.dark-theme`): Canvas `#0f1315`, Cards `#171c1f`, Raised `#1f2529`, Borders `#2a3136`
- Theme Toggle: `#themeToggleBtn` storing in `localStorage.getItem('dubaifix-theme')`

## 3. UI Component Geometry & Full-Bleed Layout
- Primary & Action Buttons: MUST use pill shape (`border-radius: var(--radius-pill);` or `9999px`) styled with the signature Call Now crimson gradient.
- Brand Grid: All 20 brand logo cards MUST have `1.5px solid #e3e7e9` border with `#d71c1b` and soft elevation on hover.
- Full-Bleed Architecture: Unified edge-to-edge canvas with zero outer frame border or grey gutters. Content centered inside 1360px container with clean internal padding. No outer floating card borders.

## 4. Typography Hierarchy & Consistency (Matching Home Page)
- **Unified Font Family**: All pages MUST use `'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif` (`var(--font-family)`). Rogue font families are strictly prohibited.
- **Font Weight Scale**:
  - `800` (ExtraBold) / `900` (Black): Logo text, major Section H2 headings, Eyebrow tags/pills, and primary trust metrics.
  - `700` (Bold): Hero H1 headline, Card titles (H3), buttons, action pills, and highlights.
  - `600` (SemiBold): Navigation links, modal labels, stat labels, secondary pills.
  - `500` (Medium): Lead descriptions, card paragraphs, body copy.
  - `400` (Regular): Meta captions, disclaimers, legal links.
- **Headings & Type Sizes**:
  - **Hero H1**: Desktop `clamp(2.5rem, 3.6vw, 3.75rem)` $\rightarrow$ Tablet `clamp(2rem, 4.5vw, 2.9rem)` $\rightarrow$ Mobile `clamp(1.85rem, 6.2vw, 2.5rem)`. Line-height: `1.14` to `1.2`. Letter-spacing: `-0.02em`.
  - **Section H2 (Major Titles across all pages)**: MUST use `var(--text-h2)` (`clamp(1.85rem, 2.8vw, 2.5rem)`) with `font-weight: 800; line-height: 1.22; letter-spacing: -0.025em;`. No arbitrary section title sizes allowed.
  - **Card Titles (H3)**: `18px` to `21px` (`font-weight: 700; line-height: 1.25;`).
  - **Eyebrow Tags / Badges**: `11px` to `12px` (`font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase;`).
  - **Body / Subtitles**: `15px` to `16px` (`font-weight: 500; line-height: 1.6; color: var(--text-sub, #475056)`).
  - **Micro-copy / Labels**: `10.5px` to `12.5px`.
- **Dual-Color Section Headings Standard**:
  - **EVERY section heading across ALL pages (excluding hero sections) MUST use dual colors** matching `index.html`.
  - Light mode: Base text in dark charcoal `var(--text-dark)` (`#192023`), emphasis text in `<span class="highlight-navy">` styled with signature Brand Crimson gradient (`linear-gradient(135deg, #d71c1b 0%, #e02a24 50%, #b00403 100%)`) with text clip.
  - Dark mode (`body.dark-theme`): Base text in `#eceff1` / `#ffffff`, emphasis text in `<span class="highlight-navy">` styled with signature Coral Red gradient (`linear-gradient(135deg, #ff5a52 0%, #e02a24 50%, #ff837d 100%)`) with text clip.
  - Dark cards/banners: Base text in `#ffffff`, emphasis text in Coral Red gradient (`#ff5a52`).

## 5. Spacing & Vertical Rhythm Standards (Matching Home Page)
- **Section Spacing**:
  - Major sections: `var(--section-py)` (`clamp(40px, 4.2vw, 56px)`).
  - Sub-sections: `var(--section-py-sm)` (`clamp(30px, 3.5vw, 42px)`).
- **Canvas Paddings**:
  - Desktop: `30px 48px 46px 48px;`
  - Tablet ($\le 992px$): `24px 20px 36px 20px;`
  - Mobile ($\le 768px$): `20px 14px 30px 14px;`
  - Compact ($\le 360px$): `14px 8px 18px 8px;`
- **Card Paddings**:
  - Featured Bento Cards: `26px 24px` to `32px 28px`.
  - Grid Cards: `20px` to `24px` (Desktop) $\rightarrow$ `14px` to `16px` (Mobile).
- **Grid Gaps**:
  - Desktop: `24px` to `36px`.
  - Tablet ($\le 992px$): `20px` to `28px`.
  - Mobile ($\le 768px$): `12px` to `16px`.

## 6. Responsive Rules (Down to 250px)
- Breakpoints: `992px` (Tablet), `768px` (Mobile), `576px`, `480px`, `360px`, `300px` (down to 250px).
- Navigation: Collapses to mobile hamburger drawer at $\le 992px$ with zero overflow.
- Visual Stage:
  - Desktop ($\ge 993px$): Uses diagonal SVG clip-path `#main-hero-cut` with secondary sub-card.
  - Tablet & Mobile ($\le 992px$): `clip-path: none !important;`, full width 100%, sub-card hidden, social proof card centered at bottom. **No white voids.**
- Touch targets $\ge 44 \times 44\text{px}$, inputs $\ge 16\text{px}$ on mobile.

## 7. Button Animation Smoothness & Micro-Timing Standard (Mandatory Rule)
- **Smoothness is a Tier-1 Non-Negotiable Standard**: All buttons across all pages MUST match the silky, organic liquid-collision smoothness of the Master Navbar Button (`.btn-schedule`). Abrupt, fast, or uncalibrated animations are strictly prohibited.
- **Micro-Timing & Curve Calibration**:
  - Ease curve: `cubic-bezier(0.25, 0.46, 0.45, 0.94)` (easeOutQuad).
  - Staggered circle arrival times: Circle 1 (`1.75s`), Circle 2 (`2.0s`), Circle 3 (`1.65s`), Circle 4 (`2.1s`), Circle 5 (`1.9s`).
- **Expansion Scale Calibration**:
  - Standard & Pill Action Buttons: MUST use `scale(12)` (384px coverage) matching `.btn-schedule`. NEVER apply excessive scales like `scale(42)` (1344px) to pill buttons.
  - Extra-wide full-width desktop form submit buttons: Capped at `scale(18)` (576px).
- **Idle Restoration**: Mouse leave transitions smoothly over `0.85s cubic-bezier(0.25, 0.46, 0.45, 0.94)`.
- **Text & Icon Protection**: Button text and SVG children must always be protected via `> span:not(.btn-circle)` with `position: relative !important; z-index: 3 !important;`. Never apply `> span` without `:not(.btn-circle)`.

## 8. Zero Red Glow / Zero Messy Icon Shadows Standard (Mandatory Rule)
- **Zero Red Shadows on Icons**: Never apply red-tinted box-shadows or glows (`rgba(215, 28, 27, ...)`, `rgba(197, 18, 16, ...)`, `rgba(255, 90, 82, ...)`) to icons, icon badges, or medallions (`.why-card-icon-badge`, `.why-card-icon-box`, `.why-stat-icon-wrap`) on white or light backgrounds. Red shadows against white surfaces look messy, smudged, and dirty.
- **Clean Flat Geometry**: All card icon badges must use `box-shadow: none;` on both default and hover states. Interactive feedback must be driven by micro-scaling (`transform: scale(1.08)`) and gradient shift, never colored blur halos.


- **Colour-Flip Sync**: Hover text/icon colour must flip only after bubbles cover the button (`transition: color 0.45s <same curve> 0.3s` on :hover), never instantly, and pill buttons must have no border ring (`border: 0`) so bubbles fill edge to edge. On dark cards use crimson bubbles, not black.
