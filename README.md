# MEEZZY — iptvmeezzy.app

German-language sales site for **MEEZZY** premium IPTV subscriptions, targeting
Germany. Vite + React 19 + Tailwind 4 SPA with a prerendered blog.

The published site language is German (`SITE_LANG` in `src/i18n.ts`). The header
language switcher stays and still offers the other nine UI languages; German is
simply the default and the language every page is prerendered and canonicalised
in.

## Run locally

**Prerequisites:** Node.js 20+

```bash
npm install
npm run dev
```

The dev server listens on <http://localhost:3000>.

## Build

```bash
npm run build
```

This runs `vite build` and then `scripts/prerender.ts`, which writes a real static
HTML file per blog route into `dist/` (own `<title>`, meta description, canonical,
Open Graph tags, Article JSON-LD and the article text baked in) so every post is
crawlable. It also regenerates `dist/sitemap.xml`.

## Before going live

This project began as a copy of the 8kiptv.nl site and was rebranded to **MEEZZY**
on the domain **iptvmeezzy.app**. Everything that pointed back at the source site
has been removed or replaced. Each item below is still owed some attention.
Search the tree for `TODO` to find them in place.

- **Git** — this copy has no repository. Run `git init` and add your own remote
  when you are ready.
- **Hosting** — nothing is configured. Pick a static host, serve the bare apex
  `iptvmeezzy.app` directly with 200s (the canonical tags use the apex, no
  apex → www redirect), and add an SPA rewrite so every non-asset path serves
  `/index.html`.
- **Domain** — the canonical origin is `https://iptvmeezzy.app`, set in
  `src/App.tsx` (`SITE_ORIGIN`) and `scripts/prerender.ts` (`SITE`). The two must
  match.
- **Search Console** — add a property for `iptvmeezzy.app`, drop its
  `google-site-verification` token into `index.html` (there is a `TODO` there),
  then submit `https://iptvmeezzy.app/sitemap.xml` under Sitemaps once the domain
  is live.
- **Bing** — add the `msvalidate.01` token in `index.html` once a Bing
  Webmaster property exists.
- **GA4** — create a property for `iptvmeezzy.app` and paste its
  `G-XXXXXXXXXX` id into the commented-out gtag block in `index.html`, then
  uncomment it. The old property `G-71P7H647WV` was removed.
- **Google Ads** — set `ADS_CONVERSION_SEND_TO` in `src/analytics.ts`. While it
  is empty, `trackWaConversion()` is a no-op. The old conversion action
  `AW-18242640156/_pqZCNyRt8AcEJyy4vpD` was removed so WhatsApp clicks on this
  domain can no longer be credited to the other account's campaigns.
- **Logos / favicons** — the favicons, apple-touch-icon and hero plate
  (`public/hero-bg.jpg`) were regenerated from `public/nn12.jpg`. The header,
  footer and terms wordmark is now plain text ("MEEZZY"), not an image, so
  `public/logo-wordmark.png` is unused. `npm run brand` / `scripts/gen-brand-assets.mjs`
  still points at the old blue source art in `assets/brand/` — rewrite or drop it
  if you want a repeatable pipeline. The brand blues in `src/index.css`
  (`--color-brand-sky` and friends) were **not** changed.
- **Instagram** — `INSTA` in every `src/data/*BlogPosts*.ts` file and the link in
  `src/components/BlogPost.tsx` were pointed at
  `https://www.instagram.com/iptvmeezzy/` (handle shown as `@meezzy`). Confirm or
  create that account, or change the URL/handle.
- **WhatsApp number** — `WA_NUMBER` in `src/types.ts` is still `447462229301`
  (inherited from the source site). Replace it with MEEZZY's number.
- **Social links** — `src/socialLinks.ts` ships every URL empty (they render as
  dimmed, non-clickable icons).
- **Payment methods** — `idealDesc` in `src/i18nExtra.ts` still describes iDEAL,
  a Dutch method. Replace it with what the store actually accepts.
