# Assets

- `logo/logo.svg` — the tdvizh.ai master symbol as a standalone vector file.
  The nav bar still renders its own inline copy of this same path (needed so
  hover rotation and `currentColor` theming work without an extra image
  request); this file is the reusable, standalone version of the same asset
  for anywhere else you need the mark (favicons, social previews, print, etc).

- `icons/close.svg` — the X / close icon used by the publication modal.
  Same reasoning as the logo: the live page keeps a small inline copy so the
  hover-rotate animation and `currentColor` stroke keep working, and this
  file is the standalone version of that icon.

- `images/` — reserved for future page imagery. Nothing lives here yet
  because the site currently has no images beyond the publication covers
  (see `/covers`) and the logo/icon assets above.
