# S4S Website Update Implementation Guide

## 1) Objective
Implement the website changes requested in `S4S Website Changes.docx` for:
- English page: https://s4s.my/en/home-english/
- Malay page: https://s4s.my/

This document translates the request into an execution plan with clear scope, detailed steps, and QA checks.

## 2) Source of Truth
Use these files as the only design/content references:
- `A.PNG`
- `No.1.jpg`
- `No.2.jpg`
- `No.3.jpg`
- `S4S Website Changes.docx`

Do not redesign beyond what is shown in the attachments.

## 3) Change Summary
### English page (`/en/home-english/`)
1. Replace image/banner using `A.PNG`.
2. Replace image/section using `No.1.jpg`.
3. Replace image/section using `No.2.jpg`.
4. Remove all content mentioning **Postpaid & Phone Bundling**.

### Malay page (`/`)
1. Replace image/section using `No.3.jpg`.
2. Replace image/section using `No.2.jpg`.
3. Remove all content mentioning **Postpaid & Phone Bundling**.

## 4) Content to Match Exactly
### `A.PNG` (visual message)
- `THE ONLY MOBILE SIM WITH 6 MONTH VALIDITY`
- `LINKED TO PREPAID MIPAY MASTERCARD`

### `No.1.jpg` (English section)
- `RM30 FOR 6 MONTHS VALIDITY PERIOD`
- `LINKED TO SWIMS PROGRAM`
- `How To Reload?`
- `Top-up airtime credit via S4S channels to purchase plan`

### `No.3.jpg` (Malay section)
- `RM30 UNTUK TEMPOH SAH SELAMA 6 BULAN`
- `KOMUNITI PROGRAM SWIMS`
- `Bagaimana Untuk Tambah Nilai ?`
- `Tambah nilai kredit masa siaran melalui saluran S4S untuk pelan pembelian`

### `No.2.jpg` (plan card image used in both languages)
Must display the 4 plan cards:
- `1X-18` (RM 18)
- `1X-22` (RM 22)
- `1X-35` (RM 35)
- `1X-48` (RM 48)

With the same plan details shown in the image.

## 5) Detailed Implementation Approach
## 5.1 Preparation
1. Create a backup/staging version of both pages before editing.
2. Keep original page revisions for rollback.
3. Upload new assets with clear names:
   - `s4s-en-banner-a.png` (from `A.PNG`)
   - `s4s-en-section-no1.jpg` (from `No.1.jpg`)
   - `s4s-plan-cards-no2.jpg` (from `No.2.jpg`)
   - `s4s-bm-section-no3.jpg` (from `No.3.jpg`)
4. Optimize images for web (without visible quality loss):
   - PNG/JPG compression
   - Keep ratio consistent with source image
   - Ensure mobile readability

## 5.2 English Page Updates (`https://s4s.my/en/home-english/`)
1. Open page editor and locate the section currently matching instruction bullet 1.
2. Replace the existing image with `A.PNG`.
3. Locate the section currently matching instruction bullet 2.
4. Replace existing image/content block with `No.1.jpg`.
5. Locate the section currently matching instruction bullet 3.
6. Replace existing image/content block with `No.2.jpg`.
7. Search the page for `Postpaid` and `Phone Bundling`.
8. Remove related blocks, cards, banners, buttons, or links.
9. Ensure layout spacing remains clean after removal (no empty gaps).

## 5.3 Malay Page Updates (`https://s4s.my/`)
1. Open Malay homepage editor.
2. Replace the requested image/content block with `No.3.jpg`.
3. Replace the requested image/content block with `No.2.jpg`.
4. Search the page for `Postpaid` and `Phone Bundling` references.
5. Remove related sections/cards/links completely.
6. Recheck alignment and spacing after section removal.

## 5.4 Navigation + Internal Link Safety
After removing Postpaid/Phone Bundling content:
1. Check top navigation, footer, and quick links.
2. Remove or update any menu item pointing to removed sections.
3. Remove orphan anchor links.
4. Verify no broken links or 404 targets remain.

## 5.5 Mobile/Responsive Check
For both URLs, verify on:
- Desktop (1920px and 1366px)
- Tablet (768px)
- Mobile (390px)

Confirm:
1. Images are not cropped incorrectly.
2. Text in image-based sections remains readable.
3. No overlap with neighboring sections.
4. Removed sections do not leave large blank areas.

## 6) QA Checklist (Must Pass)
Use this as sign-off criteria.

### English page
- [ ] `A.PNG` is visible in the intended section.
- [ ] `No.1.jpg` is visible in the intended section.
- [ ] `No.2.jpg` is visible in the intended section.
- [ ] No `Postpaid` or `Phone Bundling` content remains.
- [ ] No broken layout after content removal.

### Malay page
- [ ] `No.3.jpg` is visible in the intended section.
- [ ] `No.2.jpg` is visible in the intended section.
- [ ] No `Postpaid` or `Phone Bundling` content remains.
- [ ] No broken layout after content removal.

### Shared checks
- [ ] Navigation has no broken/obsolete links.
- [ ] Page load is normal after image replacement.
- [ ] Images are optimized and not excessively large.
- [ ] Desktop + mobile checks completed.

## 7) UAT / Approval Flow
1. Publish changes to staging (or draft preview) first.
2. Capture before/after screenshots for each edited section.
3. Share screenshots with stakeholder for sign-off.
4. Deploy to live only after approval.

## 8) Rollback Plan
If issues are found after publish:
1. Restore previous page revision.
2. Re-enable removed blocks only if needed for temporary stability.
3. Re-test layout and links.
4. Re-apply updates in smaller batches.

## 9) Final Deliverables
After implementation, provide:
1. List of updated URLs.
2. List of replaced assets (old -> new).
3. Confirmation that Postpaid/Phone Bundling is fully removed from both language pages.
4. Desktop + mobile screenshot proof.
