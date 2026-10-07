---
name: dubaifix-standards
description: >-
  Dubai Fix Appliances Master Engineering & Design System Standards.
  Enforces the 60-30-10 Luxury Industrial Color Architecture: Deep Charcoal (#192023)
  as authoritative structure, Brand Action Red (#D71C1B) and Deep Crimson (#B00403) as intentional action catalyst,
  crisp white (#FFFFFF) and cool slate (#F4F5F5) backgrounds, WCAG AA/AAA compliance,
  pill-shaped action buttons, dual-color section headings, and 250px responsive precision.
---

# Dubai Fix Appliances — Master Web Engineering & Color Design System

This standard defines the color tokens, visual hierarchy, typography, and component styling for **Dubai Fix Appliances**.

---

## 1. 60-30-10 Color Architecture (Veteran Agency Standard)

To prevent the common mistake of "fire-alarm / danger" visual fatigue associated with uncalibrated red interfaces, Dubai Fix uses the **60-30-10 Rule**:

- **60% Dominant Canvas (Architecture & Breathing Room)**:
  - **Light Mode**: Pure crisp white `#FFFFFF` (`--bg-canvas`) with cool architectural slate `#F4F5F5` (`--bg-alt`, bento card backgrounds, alternate bands).
  - **Dark Mode**: Deep blue-tinted OLED charcoal `#0F1315` (`--bg-canvas`) with `#171C1F` card surfaces and `#1F2529` elevated popup/footer cards.
- **30% Structural Luxury (Authority & Contrast)**:
  - **Light Mode**: Deep Charcoal `#192023` (`--text-dark`, `--charcoal-main`) sampled directly from the brand logo. Used for all primary H1/H2 headlines, navigation brand labels, card titles, and dark footer structure.
  - **Dark Mode**: Pure white `#ECEFF1` / `#FFFFFF` for headlines, muted slate `#A9B2B8` for body copy, and hairline borders `#2A3136`.
- **10% High-Voltage Action Spark (Conversion Catalyst)**:
  - **Light Mode**: Brand Action Red `#D71C1B` (`--brand-accent`) with hover Deep Crimson `#B00403` (`--brand-accent-hover`). Used strictly for Primary CTAs ("Call Now", "Book Repair"), active notification dots, price tags, and dual-color heading highlight words (`.highlight-navy` / `.highlight-accent`).
  - **Dark Mode**: Electric Crimson `#E02A24` for buttons and Coral Red `#FF5A52` for text accents, badges, and link hovers.

---

## 2. Master Color Token Matrix

### Light Mode (`:root`)
| Token | Hex Value | Purpose / Usage | WCAG Contrast |
| :--- | :--- | :--- | :--- |
| `--bg-canvas` | `#FFFFFF` | Main page background | Base |
| `--bg-alt` | `#F4F5F5` | Bento cards, alternate section backgrounds | Base |
| `--text-dark` | `#192023` | Logo text, H1/H2 headings, card titles | 16.51:1 (AAA) |
| `--text-sub` | `#475056` | Lead paragraphs, subtitles, body copy | 8.24:1 (AAA) |
| `--text-muted` | `#6B767E` | Meta captions, helper notes, timestamps | 5.20:1 (AA) |
| `--brand-accent` | `#D71C1B` | Primary brand red, call to actions, highlights | 6.06:1 (AA) |
| `--brand-accent-hover` | `#B00403` | Button hover, active link states | 7.82:1 (AAA) |
| `--brand-accent-light` | `#FDF2F2` | Subtle badge backgrounds, icon pill wash | Soft tint |
| `--border-light` | `#E3E7E9` | Crisp hairline dividers, card borders | Structure |
| `--border-active` | `rgba(215, 28, 27, 0.35)` | Focused inputs, hovered brand cards | Accent |
| `--btn-gradient-primary`| `linear-gradient(135deg, #d71c1b 0%, #c41412 50%, #b00403 100%)` | CTA Call Now / Book Repair | High-End Glow |
| `--btn-gradient-hover`  | `linear-gradient(135deg, #e52524 0%, #d71c1b 50%, #b00403 100%)` | Hover elevation | Active |
| `--btn-glow` | `0 8px 24px -4px rgba(215, 28, 27, 0.32)` | Dimensional button shadow | Depth |
| `--secondary-green` | `#25D366` | WhatsApp icon, live dispatch pulsing beacon | Dedicated |

### Dark Mode (`body.dark-theme`)
| Token | Hex Value | Purpose / Usage | WCAG Contrast |
| :--- | :--- | :--- | :--- |
| `--bg-canvas` | `#0F1315` | Deep OLED charcoal canvas | Base |
| `--dark-surface-1` | `#171C1F` | Standard card surface, inner grids | Base |
| `--dark-surface-2` | `#1F2529` | Raised popups, dropdown menus, footer card | Base |
| `--text-dark` | `#ECEFF1` | Primary headings, logo brand row | 16.17:1 (AAA) |
| `--text-sub` | `#A9B2B8` | Body paragraphs, card descriptions | 8.67:1 (AAA) |
| `--text-muted` | `#737F87` | Meta info, disabled indicators | 4.85:1 (AA) |
| `--brand-accent` | `#E02A24` | Primary button fill | 4.64:1 (AA) |
| `--brand-accent-hover` | `#FF5A52` | Button hover, interactive accents | Vibrant |
| `--brand-accent-light` | `rgba(224, 42, 36, 0.16)` | Badge backdrops | Soft glow |
| `--accent-coral-text` | `#FF5A52` | Red text highlights, link hovers on dark | 6.08:1 (AA) |
| `--dark-border` | `#2A3136` | Hairline card outlines | Structural |
| `--btn-gradient-primary`| `linear-gradient(135deg, #e02a24 0%, #b00403 100%)` | Dark mode primary CTA | Crisp |

---

## 3. Dual-Color Section Headings Standard

- **Every section title across the site (excluding the hero display title) must use dual-color contrast**:
  - **Base text**: Deep Charcoal `#192023` in Light Mode, `#ECEFF1` in Dark Mode.
  - **Highlight text**: Wrapped in `<span class="highlight-navy">` (or `.highlight-accent`) styled with the signature brand crimson gradient:
    ```css
    .highlight-navy {
      background: linear-gradient(135deg, #d71c1b 0%, #e02a24 50%, #b00403 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      color: #d71c1b;
      display: inline;
    }
    body.dark-theme .highlight-navy {
      background: linear-gradient(135deg, #ff5a52 0%, #e02a24 50%, #ff837d 100%) !important;
      -webkit-background-clip: text !important;
      -webkit-text-fill-color: transparent !important;
      background-clip: text !important;
      color: #ff5a52 !important;
    }
    ```

---

## 4. Logo Presentation Standards

1. **Light Navigation**:
   - Official brand mark with `#192023` Charcoal text "DUBAI FIX" and `#D71C1B` Crimson text "APPLIANCES".
   - Transparent background (`assets/logo/dubaifix-logo-light.png`).
2. **Dark Theme Navigation & Dark Footers**:
   - Switched to light variant with `#ECEFF1` typography + Crimson red house/wrench mark (`assets/logo/dubaifix-logo-dark.png`).
3. **Dimensions**: Height fixed at `42px` to `46px`, `width: auto`, preserving crisp pixel rendering on Retina / 4K displays.

---

## 5. UI Geometry & Conversion Mechanics

- **Pill Shape CTA Buttons (`border-radius: 9999px`)**:
  - Primary buttons use the Crimson gradient with a soft crimson glow (`box-shadow: 0 8px 24px -4px rgba(215, 28, 27, 0.32)`).
  - Hover state: Slight upward translation (`transform: translateY(-2px)`), expanded glow (`box-shadow: 0 12px 28px -2px rgba(215, 28, 27, 0.42)`).
- **Brand Cards Border**:
  - OEM Brand cards feature a refined border `1.5px solid #E3E7E9` in light mode, hovering to `1.5px solid #D71C1B` with soft elevation.
- **WhatsApp Channel**:
  - The color `#25D366` is strictly reserved for the WhatsApp floating button, the online pulse beacon, and WhatsApp direct links. Never mix with general UI action buttons.

---

## 6. Button Animation Smoothness & Micro-Timing Standard (Mandatory Rule)

> [!IMPORTANT]
> **Smoothness Matters — Zero Compromise on Animation Polish.**
> Every button and interactive action element across the platform MUST exhibit the exact silky, organic liquid-collision smoothness demonstrated by the Master Navbar Button (`.btn-schedule`).
> Fast, jarring, jerky, or uncalibrated animations are strictly prohibited.

### 1. Organic Liquid Bubble Timing
- **Cubic Bezier Standard**: All bubble expansions (`.btn-circle`) must use the calibrated ease-out cubic-bezier: `cubic-bezier(0.25, 0.46, 0.45, 0.94)`.
- **Staggered Micro-Timing (Mandatory)**: Each bubble circle must arrive at an organically offset speed to prevent synthetic uniform scaling:
  - **Circle 1**: `1.75s cubic-bezier(0.25, 0.46, 0.45, 0.94)`
  - **Circle 2**: `2.0s cubic-bezier(0.25, 0.46, 0.45, 0.94)`
  - **Circle 3**: `1.65s cubic-bezier(0.25, 0.46, 0.45, 0.94)`
  - **Circle 4**: `2.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)`
  - **Circle 5**: `1.9s cubic-bezier(0.25, 0.46, 0.45, 0.94)`

### 2. Bubble Scale Calibration
- **Pill & Standard Buttons**: `scale(12)` (384px coverage) matching `.btn-schedule`. NEVER apply excessive warp-speed scales (e.g. `scale(42)` / 1344px) to pill buttons, as excessive scale causes the bubbles to fly past abruptly in milliseconds, destroying organic smoothness.
- **Full-Width & Extra-Wide Form Buttons**: MUST use `scale(30)` (960px coverage) to guarantee 100% edge-to-edge coverage across all desktop form widths (650px–850px), completely preventing exposed red caps or uncovered edges on hover.

### 3. Mouse Leave & Idle Restoration
- When cursor leaves the button, bubbles must return smoothly to their parked off-canvas idle coordinates over `0.85s cubic-bezier(0.25, 0.46, 0.45, 0.94)` with zero pop or snap.

### 4. Tactile Hover Lift
- Button container elevation on hover: `transform: translateY(-2px)` with `transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1)`.
- Active / pressed state: `transform: scale(0.98)` or `translateY(0)` with instant tactile feedback.

### 5. Text & Icon Stacking Protection
- Button labels and SVG icons must always be wrapped and protected with `position: relative !important; z-index: 3 !important;`:
  ```css
  .button-class > span:not(.btn-circle),
  .button-class > svg {
    position: relative !important;
    z-index: 3 !important;
  }
  ```
- **CRITICAL**: Never apply `> span { position: relative; }` without `:not(.btn-circle)` as it turns absolute bubbles into flex items and breaks button layout geometry.

---

## 7. Zero Red Glow / Zero Messy Icon Shadows Standard (Mandatory Rule)

> [!CAUTION]
> **No Red/Colored Box-Shadows on Icons or Badges against White/Light Backgrounds.**
> Red or crimson tinted drop-shadows/glows (`rgba(215, 28, 27, ...)`, `rgba(197, 18, 16, ...)`, `rgba(255, 90, 82, ...)`) on icon badges, icon boxes, or medallions against white/light surfaces bleed into the background and create a dirty, smudged, messy visual appearance.

### Rules & Standards:
1. **Zero Shadow on Icons**:
   - All card icon badges, icon boxes, and medallions (`.why-card-icon-badge`, `.why-card-icon-box`, `.why-stat-icon-wrap`, etc.) must use `box-shadow: none;` on both default and hover states.
   - Clean, crisp geometry with pure SVG contrast is the luxury appliance standard (clean-cut precision).
2. **Icon Badge Styling**:
   - Default fill: `var(--btn-gradient-primary)` with crisp `#ffffff` SVG inside.
   - Default border: `1px solid transparent`.
   - Box-shadow: `none`.
3. **Hover Interaction**:
   - Interactive feedback is achieved via subtle organic scale (`transform: scale(1.08)`) and gradient shift to `var(--btn-gradient-hover)`, NEVER by projecting a fuzzy red halo or colored blur onto the white canvas.

---

## 8. Responsive Typography Hierarchy & Strict H1 > H2 Dominance Standard (Mandatory Rule)

> [!IMPORTANT]
> **Strict H1 > H2 Visual Dominance Scale Across All Viewports (Down to 250px)**
> Hero H1 headlines must ALWAYS remain visually authoritative and distinctly larger than Section H2 headings across all viewports (maintaining a ~1.25x to 1.35x dominance ratio).
> Under NO circumstances should Section H2 ever have a larger computed font size than the page's Hero H1 on mobile, tablet, or compact screens.

### 1. Calibrated Multi-Breakpoint Type Scale Matrix
| Viewport / Breakpoint | Hero H1 (Display Title) | Section H2 (`var(--text-h2)`) | Card Title (H3) | Dominance Ratio (H1 : H2) |
| :--- | :--- | :--- | :--- | :--- |
| **Desktop ($\ge 993px$)** | `clamp(2.45rem, 3.5vw, 3.45rem)` | `var(--text-h2, clamp(1.85rem, 2.8vw, 2.5rem))` | `18px` – `21px` | **~1.30 : 1** |
| **Tablet ($\le 992px$)** | `clamp(2.25rem, 4.6vw, 2.95rem)` | `clamp(1.75rem, 2.6vw, 2.25rem)` | `17px` – `19px` | **~1.30 : 1** |
| **Mobile ($\le 768px$)** | `clamp(2.00rem, 5.8vw, 2.55rem)` | `clamp(1.50rem, 3.8vw, 1.85rem)` | `16px` – `18px` | **~1.35 : 1** |
| **Small Mobile ($\le 576px$)** | `clamp(1.85rem, 6.2vw, 2.25rem)` | `clamp(1.35rem, 4.2vw, 1.65rem)` | `15.5px` – `17px` | **~1.35 : 1** |
| **Compact ($\le 480px$)** | `clamp(1.72rem, 6.4vw, 2.05rem)` | `clamp(1.25rem, 4.4vw, 1.48rem)` | `15px` – `16.5px` | **~1.38 : 1** |
| **Extra Small ($\le 360px$)** | `clamp(1.52rem, 6.5vw, 1.78rem)` | `clamp(1.15rem, 4.5vw, 1.32rem)` | `14px` – `15px` | **~1.35 : 1** |
| **Ultra-Compact ($\le 300px$–$250px$)** | `clamp(1.32rem, 5.8vw, 1.48rem)` | `clamp(1.02rem, 4.2vw, 1.18rem)` | `13px` – `14px` | **~1.30 : 1** |

### 2. Dual-Color & Text-Wrap Discipline
- Section H2 must use `text-wrap: balance;` to eliminate awkward single-word typographic orphans.
- H2 emphasis keywords MUST be wrapped in `<span class="highlight-navy">` with signature Brand Crimson gradient (`#d71c1b` $\rightarrow$ `#b00403`) in light mode and Coral Red gradient (`#ff5a52` $\rightarrow$ `#ff837d`) in dark mode.



