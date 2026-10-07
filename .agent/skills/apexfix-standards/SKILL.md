---
name: apexfix-standards
description: >-
  ApexFix Appliance Repair Engineering & Design System Standards.
  Enforces identical master brand footer across all pages, typography & font weight
  consistency, section spacing rhythm matching home page, navy/accent palette,
  light/dark theme architecture, pill-shaped buttons, zero-void mobile hero presentation,
  and robust responsive rules down to 250px.
---

# ApexFix Web Platform Engineering & Design System Specification

This document defines the core architecture, visual design standards, typography scales, spacing rhythm, responsive rules, and brand guidelines for the **ApexFix Appliance Repair** website platform.

---

## 1. Master Brand Footer Standard (Strict Rule)

> [!IMPORTANT]
> **EVERY page on the website MUST use the identical Master Brand Footer (`<footer class="site-footer-master" id="contact">`).**
> Never use or create simplified 3-column generic footers (`footer-clean`).

### Required Structure & Elements
1. **Top Identity & Social Bar (`.footer-top-brand`)**:
   - Official ApexFix Gear & Wrench Silhouette SVG Logo with speed motion trails.
   - Brand Statement: Certified same-day appliance repair across Dubai & UAE.
   - Social & Dispatch Channels: Circular action buttons for WhatsApp (`+923143110259`), Direct Phone, Facebook, and Instagram.
2. **Floating Elevated Card (`.footer-card-container` > `.footer-card-grid`)**:
   - **Column 1 — Quick Links**: Home, Services, About Us, Service Areas, How It Works, Customer Reviews (with `.footer-col-accent-bar` and chevron icons). *On sub-pages, these must link to `index.html#section`.*
   - **Column 2 — Our Services**: Washing Machine, Dishwasher, Refrigerator, Cooker & Oven, Dryer, Central AC (each bound to `.book-trigger` with `data-service`).
   - **Column 3 — Contact & Emergency Dispatch (`.footer-col-contact`)**:
     - Location: United Arab Emirates
     - Direct Phone: `+92 314 3110259`
     - WhatsApp Live Chat: with green pulsating active beacon (`.dot-online`)
     - Availability: 24/7 Support | 365 Days Available
     - Action CTA: "Book Appointment Online" button triggering `#bookingModal`.
3. **Bottom Legal & Attribution Bar (`.footer-bottom-bar`)**:
   - Copyright © 2026 ApexFix Appliance Co. All Rights Reserved.
   - Designer Credit: **"Designed & Developed with ❤️ by Hywiz Technologies"** (linking to `https://hywiz.com`).
   - Legal Links: Privacy Policy, Terms of Service, Warranty Guarantee.

---

## 2. Typography Hierarchy & Consistency (Matching Home Page)

> [!IMPORTANT]
> All sub-pages (e.g. `services.html`) and newly added components MUST strictly match the typography scale, font family, font weights, and letter-spacing of `index.html`.

### Unified Font Family
- All elements MUST inherit from:
  `--font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;`
- No secondary or rogue font families are permitted.

### Font Weight Scale
- **`800` (ExtraBold) / `900` (Black)**: Logo brand text, Section H2 titles, Eyebrow pills/tags, and key trust numbers (e.g., "4.9/5.0", "99.4%").
- **`700` (Bold)**: Hero H1 headline, Card titles (H3), buttons, action pills, and bold inline highlights.
- **`600` (SemiBold)**: Navigation links, modal form labels, stat labels, secondary pills.
- **`500` (Medium)**: Hero description, section subtitles, lead descriptions, and card body paragraphs.
- **`400` (Regular)**: Meta captions, disclaimers, and legal footer links.

### Heading & Type Size Token Rhythm
| Element | Token / Recommended CSS | Desktop | Tablet ($\le 992px$) | Mobile ($\le 768px$) | Line Height | Tracking |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero H1** | Display Headline | `clamp(2.5rem, 3.6vw, 3.75rem)` | `clamp(2rem, 4.5vw, 2.9rem)` | `clamp(1.85rem, 6.2vw, 2.5rem)` | `1.14–1.2` | `-0.02em` |
| **Section H2** | `--text-h2` | `clamp(1.85rem, 2.8vw, 2.5rem)` | `clamp(1.7rem, 3vw, 2.2rem)` | `clamp(1.4rem, 6.8vw, 1.95rem)` | `1.22` | `-0.025em` |
| **Card H3** | Card Title | `18px` – `21px` | `17px` – `19px` | `16px` – `18px` | `1.25` | `-0.015em` |
| **Eyebrow Tag** | `--eyebrow-fs` | `11.5px` (Caps) | `11px` (Caps) | `10.5px` (Caps) | `1.0` | `0.08em` |
| **Body / Sub** | `--text-subtitle` | `16px` | `15px` | `14px` | `1.6` | `normal` |
| **Micro Copy** | Meta / Labels | `11px` – `12.5px` | `10.5px` – `12px` | `10px` – `11.5px` | `1.25` | `normal` |

### Dual-Color Section Headings Standard (Strict Rule)

> [!IMPORTANT]
> **EVERY section heading across ALL pages (Home, Services, Portfolio, Blog, Service Detail pages), EXCLUDING hero sections, MUST use a dual-color visual hierarchy matching `index.html`.**
> Monochromatic section headings are strictly prohibited.
>
> - **Light Mode (`:root`)**:
>   - **Base text**: Deep Charcoal `#121217` (`var(--text-dark)`).
>   - **Highlight text**: Enclosed in `<span class="highlight-navy">...</span>` rendering in Signature Brand Navy `#0f2b5c` (`var(--brand-accent)`).
> - **Dark Mode (`body.dark-theme`)**:
>   - **Base text**: Pure White `#ffffff` / `#f8fafc`.
>   - **Highlight text**: Luminous Electric Blue `#60a5fa` (`body.dark-theme .highlight-navy`).
> - **Dark Container Cards / Banners** (e.g., Process featured bento card, Urgent Pre-Footer banner):
>   - **Base text**: Pure White `#ffffff`.
>   - **Highlight text**: Luminous Electric Blue `#60a5fa` (`.highlight-navy`).

---

## 3. Spacing & Vertical Rhythm Standards (Matching Home Page)

### Section Vertical Rhythm
- **Major Section Margins / Padding**: `var(--section-py)` = `clamp(40px, 4.2vw, 56px)`
- **Sub-Section / Secondary Spacing**: `var(--section-py-sm)` = `clamp(30px, 3.5vw, 42px)`

### Outer Canvas Padding Matrix
- **Desktop ($\ge 993px$)**: `30px 48px 46px 48px;`
- **Tablet ($\le 992px$)**: `24px 20px 36px 20px;`
- **Mobile ($\le 768px$)**: `20px 14px 30px 14px;`
- **Small Screens ($\le 360px$)**: `14px 8px 18px 8px;`
- **Ultra-Compact ($\le 300px$)**: `10px 5px 16px 5px;`

### Card Inner Paddings & Grid Gaps
- **Large Bento / Hero Feature Cards**: `26px 24px` to `32px 28px`.
- **Standard Service / Feature Cards**: `20px 24px` (Desktop) $\rightarrow$ `14px 16px` (Mobile).
- **Grid Gaps**: `24px` to `36px` (Desktop), `20px` to `24px` (Tablet), `12px` to `16px` (Mobile).

---

## 4. Brand Identity & Color Palette

- **Brand Primary Accent (Navy)**: `#0f2b5c` (`var(--brand-accent)`)
- **Brand Accent Hover**: `#183f80` (`var(--brand-accent-hover)`)
- **Secondary Action (Green / Call)**: `#059669` / `#10b981` (Phone rings, WhatsApp, emergency pulse)
- **Canvas Background (Light)**: `#fbfbfe` / `#f3f4f8` with pure white (`#ffffff`) card containers
- **Text Primary (Light)**: `#121217` / `#0f172a`
- **Text Secondary**: `#475569` / `#64748b`
- **Dark Theme (`body.dark-theme`)**:
  - Background Canvas: `#0c1017` / `#121217`
  - Card Backgrounds: `#181924` / `#0c1424`
  - Borders: `rgba(255, 255, 255, 0.08)` to `0.12`
  - Text Primary: `#f8fafc` / `#ffffff`
  - Theme Toggle: Circular button `#themeToggleBtn` persisting state in `localStorage.getItem('apexfix-theme')`.

---

## 5. UI Geometry & Component Standards

- **Pill Buttons (`var(--radius-pill)`)**:
  - All interactive action buttons (Book Repair, Emergency Call, Schedule Service, Modal Submit) MUST use full pill border-radius (`9999px`).
  - Sharp rectangle buttons are prohibited for primary CTA buttons.
- **Card Radii**:
  - Outer Frame / Canvas: `32px` desktop, `26px` tablet, `22px` mobile (`var(--radius-outer)`).
  - Feature & Service Cards: `18px` to `24px`.
- **Brand Cards Border**:
  - All 20 brand logos must feature the signature ApexFix Navy border (`1.5px solid #0f2b5c`) with smooth hover lift.

---

## 6. Responsive Engineering Rules (250px to 4K)

> [!IMPORTANT]
> The layout must be fully responsive down to **250px width** (Galaxy Fold outer cover, smartwatch, embedded webviews).

### Breakpoint Matrix
1. **$\le 992px$ (Tablet & Small Desktop)**:
   - **Navbar**: Negative margins reset to `0`. Mobile toggle hamburger button enabled (`display: flex`). Navigation menu collapses into floating drawer (`.nav-menu.open`).
   - **Hero Section**: Switches from 2 columns to 1 column.
   - **Visual Stage**: Main technician image becomes full-width (`width: 100%; height: 380px;`). Diagonal SVG clip path is disabled (`clip-path: none !important;`). Sub-image is hidden (`display: none !important;`). Social proof card centers at bottom. **Zero empty white void.**
   - **Canvas Padding**: Adjusted to `24px 20px 36px 20px` to prevent horizontal clipping.
2. **$\le 768px$ (Mobile)**:
   - **Navbar**: Compact `padding: 8px 12px; margin-bottom: 12px;`. Schedule button collapses into a circular 40px phone action icon.
   - **Trust Proof Card**: Sleek horizontal 2-part card (`.hero-trust-proof-row`): Google badge on left, 1px vertical divider, 3 bullet items with blue tick marks on right. Fits in $\le 300\text{px}$ width.
   - **Hero Image**: Height scaled to `290px`, border-radius `22px`.
   - **Hero CTA**: Stacked column layout (`flex-direction: column`).
3. **$\le 576px$ (Compact Mobile)**:
   - Image height: `260px`. Brand grid: 2 columns.
4. **$\le 480px$ (Extra Compact)**:
   - Image height: `230px`. Brand grid: 1 clean column.
5. **$\le 360px$ (Small Screens - iPhone SE)**:
   - Image height: `220px`. Canvas padding: `14px 8px`.
6. **$\le 300px$ down to $250px$ (Ultra-Compact)**:
   - Trust proof card switches to clean vertical column with horizontal divider.
   - Image height: `180px–190px`.
   - All text clamped and word-wrapped safely.

---

## 7. Touch Targets & Form Best Practices
- Every button, hamburger toggle, and theme switch MUST have a minimum tap hitbox of **$44 \times 44\text{px}$** (`min-width: 44px; min-height: 44px;`).
- All text inputs, selects, and textareas MUST have `font-size: 16px !important` on screens $\le 768px$ to prevent iOS Safari auto-zooming.

---

## 8. Button Animation Smoothness & Micro-Timing Standard (Mandatory Rule)

> [!IMPORTANT]
> **Smoothness Matters — Zero Compromise on Animation Polish.**
> Every button across all pages MUST match the silky, organic liquid-collision smoothness demonstrated by the Master Navbar Button (`.btn-schedule`). Abrupt, rushed, or uncalibrated animations are strictly prohibited.

1. **Cubic Bezier Standard**: All bubble expansions (`.btn-circle`) must use the calibrated ease-out cubic-bezier: `cubic-bezier(0.25, 0.46, 0.45, 0.94)`.
2. **Staggered Micro-Timing (Mandatory)**: Each bubble circle must arrive at an organically offset speed:
   - **Circle 1**: `1.75s cubic-bezier(0.25, 0.46, 0.45, 0.94)`
   - **Circle 2**: `2.0s cubic-bezier(0.25, 0.46, 0.45, 0.94)`
   - **Circle 3**: `1.65s cubic-bezier(0.25, 0.46, 0.45, 0.94)`
   - **Circle 4**: `2.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)`
   - **Circle 5**: `1.9s cubic-bezier(0.25, 0.46, 0.45, 0.94)`
3. **Bubble Scale Calibration**:
   - **Pill & Standard Buttons**: `scale(12)` (384px coverage) matching `.btn-schedule`. NEVER apply excessive warp-speed scales (e.g. `scale(42)` / 1344px) to pill buttons, as excessive scale causes the bubbles to fly past abruptly in milliseconds.
   - **Full-Width & Extra-Wide Form Buttons**: MUST use `scale(30)` (960px coverage) to guarantee 100% edge-to-edge coverage across all desktop form widths (650px–850px), completely preventing exposed red caps or uncovered edges on hover.
4. **Mouse Leave & Idle Restoration**: Bubbles must return smoothly to parked off-canvas coordinates over `0.85s cubic-bezier(0.25, 0.46, 0.45, 0.94)` with zero pop or snap.
5. **Text & Icon Stacking Protection**: Always target button text using `> span:not(.btn-circle)` with `position: relative !important; z-index: 3 !important;`. Never apply `> span` without `:not(.btn-circle)`.

---

## 9. Zero Red Glow / Zero Messy Icon Shadows Standard (Mandatory Rule)

> [!CAUTION]
> **No Red/Colored Box-Shadows on Icons or Badges against White/Light Backgrounds.**
> Colored or crimson drop-shadows on icon badges, icon boxes, or medallions against white surfaces bleed and create a dirty, smudged appearance.
> All card icon badges (`.why-card-icon-badge`, `.why-card-icon-box`, `.why-stat-icon-wrap`) must use `box-shadow: none;` on both default and hover states. Clean SVG contrast and organic scaling (`transform: scale(1.08)`) deliver luxury precision without messy shadows.


