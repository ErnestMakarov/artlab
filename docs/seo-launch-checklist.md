# ART Lab SEO launch checklist

## 1. Deploy

```bash
npm install
npm run seo:sitemap
npm run check
```

Push the changes to GitHub and wait for the production deployment on Vercel.

The production environment should contain:

```env
VITE_SITE_URL=https://www.artlabstudio.ee
```

The code also uses this domain as a safe default if the variable is missing.

## 2. Check the public SEO files

Open these URLs after deployment:

- https://www.artlabstudio.ee/robots.txt
- https://www.artlabstudio.ee/sitemap.xml
- https://www.artlabstudio.ee/site.webmanifest
- https://www.artlabstudio.ee/og/artlab-studio-tallinn.jpg

All four URLs must open without a redirect loop or a 404 error.

## 3. Google Search Console

1. Add the Domain property `artlabstudio.ee` and verify it with the DNS TXT record in Zone.ee.
2. Open **Indexing → Sitemaps**.
3. Submit `sitemap.xml`.
4. Open **URL inspection** and request indexing for:
   - `https://www.artlabstudio.ee/`
   - `https://www.artlabstudio.ee/directions`
   - `https://www.artlabstudio.ee/workshops`
   - `https://www.artlabstudio.ee/prices`
   - `https://www.artlabstudio.ee/schedule`
   - `https://www.artlabstudio.ee/contacts`

The remaining Estonian, English and Russian URLs are listed in the sitemap and do not need to be submitted manually one by one.

## 4. Final tests

- Google Rich Results Test: https://search.google.com/test/rich-results
- Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/
- PageSpeed Insights: https://pagespeed.web.dev/

If the social preview still shows an old image, use the Facebook debugger to fetch the URL again.
