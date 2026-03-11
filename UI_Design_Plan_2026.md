# S4S Website: 2026 Modern UI/UX Design Plan

> **Role Context**: Acting as UI/UX Master (Figma Expert) to deliver a premium, modern 2026 design system for the S4S Website update, encompassing the English (`/en/home-english/`) and Malay (`/`) pages.

## 1. 2026 Design Philosophy & Aesthetics

To create a stunning first impression that feels "state of the art" for 2026, the S4S website will incorporate the following design patterns:

- **Brand Color Palette**: Integrate the core physical SIM card colors into the digital space to maintain brand consistency:
  - **Primary Vibrant Blue (`#5DA9DD`)**: Used for main thematic backgrounds and large branded elements.
  - **Action Red (`#D91F26`)**: Used for high-emphasis elements, badges, or bold accents.
  - **Premium Metallic Gold (gradient from `#FFD700` to `#D4AF37`)**: Used for premium textures, highlights, or high-value focal points.
  - **Interactive Deep Blue (`#2563EB`)**: Used for primary call-to-action buttons (like the back-of-card "Order Now" button).
- **Bento-Box Grid System**: Organize the plan cards (`1X-18`, `1X-22`, etc.) into a cohesive, responsive bento grid that elegantly scales from desktop to mobile.
- **Glassmorphism & Depth**: Overlay soft, frosted-glass effects (translucent backgrounds with background blur) on content cards over dynamic, subtle background gradients featuring the `#5DA9DD` brand blue.
- **Vibrant, Layered Gradients**: Move away from flat, generic colors. Utilize fluid mesh gradients incorporating the primary blue and gold behind primary call-to-action (CTA) zones.
- **Premium Typography**: Integrate modern, highly legible fonts (e.g., *Outfit*, *Plus Jakarta Sans*, or *Inter*) substituting default browser fallbacks, utilizing large, bold weights for headings and sleek, high-contrast grays for body text.
- **Micro-Animations**: Add fluid motion to user interactions. Hover states on plan cards will gently elevate (scale structural elements by `1.02`), while subtle glowing drop-shadows activate on focus.

## 2. Component Design Breakdown

### A. Hero Banner (`A.PNG` Section)

- **Visuals**: Full-width impact layout, ensuring text "THE ONLY MOBILE SIM WITH 6 MONTH VALIDITY" is distinct and highly readable against the background.
- **Interaction**: Parallax scroll effect for the banner image to create a sense of depth, with staggered, fade-up reveal animations on page load for the typography.

### B. Promotional Section (`No.1.jpg` & `No.3.jpg`)

- **Layout**: Split-screen or asymmetrical bento layout.
- **Details**: "RM30 FOR 6 MONTHS" to be highlighted with the bold **Action Red (`#D91F26`)** or a **Premium Gold** metallic badge. The "How to Reload?" steps will be presented as a staggered list with micro-interactions on hover, utilizing deep slate colors for high-contrast readability against lighter backgrounds.

### C. Plan Cards (`No.2.jpg` Section)

- **Card Design**: Glassmorphic styling with a 1px soft-white/semi-transparent border floating over a subtle **Primary Blue (`#5DA9DD`)** background aura.
- **Hover Effects**: Floating elevation (`transform: translateY(-4px)`) paired with a dynamic colored shadow matching the card's accent color. Hover states might reveal a sweeping gold glare effect (matching the SIM chip detail) across the card.

## 3. Anti-Mistake Checklist

To ensure the execution is flawless across multiple breakpoints:

- [ ] **Content Integrity**: Ensure all instances of "Postpaid & Phone Bundling" are entirely eradicated from the layout flow, leaving zero empty gaps or disjointed margins.
- [ ] **Image Aspect Ratios**: Use `object-fit: cover` or `contain` securely on `A.PNG`, `No.1/3.jpg`, and the plan cards to prevent stretching on odd viewport sizes (especially 1366px laptops and 390px mobiles).
- [ ] **Z-Index Layering**: Confirm that glassmorphic cards and floating nav elements do not overlap or hide critical text content on smaller screens.
- [ ] **Contrast Verification**: Run color contrast tests to ensure text placed over images or gradients exceeds the WCAG AA standard (4.5:1 ratio).

## 4. Accessibility (a11y) Audit

- [ ] **Alt Text for Replacements**: Explicit, descriptive `alt` tags must be added to the new images:
  - `A.PNG`: "S4S Mobile SIM with 6-month validity linked to Mastercard"
  - `No.1.jpg` / `No.3.jpg`: "RM30 for 6 months validity, linked to SWIMS program instructions"
  - `No.2.jpg`: "S4S Plan Details: 1X-18, 1X-22, 1X-35, and 1X-48"
- [ ] **Tap Target Sizes**: Ensure all updated interactive elements (like the "How to Reload" triggers or any accompanying buttons) meet the minimum mobile tap target size of **44x44px**.
- [ ] **Keyboard Navigation**: Any links or swiper controls added for the plan cards must have a visible `:focus-visible` outline for keyboard-only users.
- [ ] **Semantic Structure**: Ensure the sections holding the new images use proper semantic HTML5 tags (`<section>`, `<article>`, `<header>`) and maintain a logical `<h1>` to `<h3>` heading hierarchy.

---
*Ready for approval before moving to the `ai-orchestrator` / `logic-engineer` / implementation phases.*
