const siteUrl = import.meta.env.VITE_SITE_URL?.replace(/\/+$/, "");

export default function Seo({ title, description, path = "/", noIndex = false }) {
  const canonicalUrl = siteUrl ? `${siteUrl}${path}` : null;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="ART Lab" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {canonicalUrl ? <link rel="canonical" href={canonicalUrl} /> : null}
      {canonicalUrl ? <meta property="og:url" content={canonicalUrl} /> : null}
      {noIndex ? <meta name="robots" content="noindex, nofollow" /> : null}
    </>
  );
}
