import { mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const siteUrl = "https://www.artlabstudio.ee";
const languages = [
  { code: "et-EE", query: "" },
  { code: "en", query: "?lang=en" },
  { code: "ru", query: "?lang=ru" },
];
const routes = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/about", changefreq: "monthly", priority: "0.8" },
  { path: "/directions", changefreq: "weekly", priority: "0.9" },
  { path: "/workshops", changefreq: "weekly", priority: "0.9" },
  { path: "/celebrations", changefreq: "monthly", priority: "0.8" },
  { path: "/camp", changefreq: "weekly", priority: "0.9" },
  { path: "/prices", changefreq: "monthly", priority: "0.8" },
  { path: "/schedule", changefreq: "weekly", priority: "0.9" },
  { path: "/gallery", changefreq: "weekly", priority: "0.8" },
  { path: "/contacts", changefreq: "monthly", priority: "0.7" },
  { path: "/privacy", changefreq: "yearly", priority: "0.2" },
];

function escapeXml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function localizedUrl(routePath, query) {
  return `${siteUrl}${routePath}${query}`;
}

const entries = routes.flatMap((route) =>
  languages.map((language) => {
    const alternates = languages
      .map(
        (alternate) =>
          `    <xhtml:link rel="alternate" hreflang="${alternate.code}" href="${escapeXml(
            localizedUrl(route.path, alternate.query),
          )}" />`,
      )
      .join("\n");
    const xDefault = `    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(
      localizedUrl(route.path, ""),
    )}" />`;

    return [
      "  <url>",
      `    <loc>${escapeXml(localizedUrl(route.path, language.query))}</loc>`,
      alternates,
      xDefault,
      `    <changefreq>${route.changefreq}</changefreq>`,
      `    <priority>${route.priority}</priority>`,
      "  </url>",
    ].join("\n");
  }),
);

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
  '        xmlns:xhtml="http://www.w3.org/1999/xhtml">',
  entries.join("\n"),
  "</urlset>",
  "",
].join("\n");

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const publicDirectory = path.resolve(scriptDirectory, "../public");

await mkdir(publicDirectory, { recursive: true });
await writeFile(path.join(publicDirectory, "sitemap.xml"), sitemap, "utf8");

console.log(`Generated sitemap with ${routes.length * languages.length} URLs.`);
