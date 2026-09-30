# ART Lab website

Responsive website for ART Lab creative studio in Tallinn.

## Development

```bash
npm install
npm run dev
```

## Quality check

```bash
npm run check
```

## Production

```bash
npm run build
npm run preview
```

Copy `.env.example` to `.env.local` and add the EmailJS and Facebook values when needed.

## SEO

The production domain is `https://www.artlabstudio.ee`.

- `public/sitemap.xml` contains all public routes and language alternates.
- `public/robots.txt` points search engines to the sitemap.
- `src/components/seo/Seo.jsx` manages canonical URLs, hreflang, social metadata and JSON-LD.
- Estonian is the default language. English and Russian pages use `?lang=en` and `?lang=ru` canonical URLs.
