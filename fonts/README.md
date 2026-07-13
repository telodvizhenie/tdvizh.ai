# Fonts

This folder is reserved for self-hosted font files but is intentionally empty.

**Current setup:** the site loads Inter and IBM Plex Mono from Google Fonts CDN
(see the `<link>` tags in `index.html`'s `<head>`). This works out of the box
on any server with outbound internet access, which is the normal case for a
deployed website.

**Why nothing is bundled here:** self-hosting requires the actual Inter and
IBM Plex Mono font binaries (woff2 files). Producing real ones requires
downloading them from Google Fonts, and no placeholder/fake font files have
been added here since a fake font file would silently break text rendering
instead of failing loudly.

**To self-host instead of using the CDN:**
1. Download the font families you need:
   - Inter: https://fonts.google.com/specimen/Inter (weights 400, 500, 600, 700, 800)
   - IBM Plex Mono: https://fonts.google.com/specimen/IBM+Plex+Mono (weights 400, 500)
2. Place the `.woff2` files in this folder.
3. Replace the Google Fonts `<link>` tags in `index.html` with `@font-face`
   rules in `css/styles.css` pointing at `../fonts/...`.
