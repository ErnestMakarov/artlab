import { useEffect } from "react";
import { useLocation } from "react-router";
import { useTranslation } from "react-i18next";

const DEFAULT_SITE_URL = "https://www.artlabstudio.ee";
const configuredSiteUrl = import.meta.env.VITE_SITE_URL?.trim();

function resolveSiteUrl(value) {
  if (!value || value.includes("example.")) return DEFAULT_SITE_URL;

  try {
    return new URL(value).origin;
  } catch {
    return DEFAULT_SITE_URL;
  }
}

const siteUrl = resolveSiteUrl(configuredSiteUrl);

const supportedLanguages = ["et", "en", "ru"];
const localeByLanguage = {
  et: "et_EE",
  en: "en_GB",
  ru: "ru_RU",
};
const htmlLanguageByLanguage = {
  et: "et-EE",
  en: "en",
  ru: "ru",
};
const homeLabelByLanguage = {
  et: "Avaleht",
  en: "Home",
  ru: "Главная",
};
const organizationDescriptionByLanguage = {
  et: "Loovstuudio lastele ja täiskasvanutele Tallinnas.",
  en: "A creative studio for children and adults in Tallinn.",
  ru: "Творческая студия для детей и взрослых в Таллине.",
};
const defaultImageAltByLanguage = {
  et: "ART Labi loovstuudio lastele ja täiskasvanutele Tallinnas",
  en: "ART Lab creative studio for children and adults in Tallinn",
  ru: "Творческая студия ART Lab для детей и взрослых в Таллине",
};

function normalizePath(pathname) {
  if (!pathname || pathname === "/") return "/";
  return `/${pathname.replace(/^\/+|\/+$/g, "")}`;
}

function getLocalizedUrl(pathname, language) {
  const url = new URL(normalizePath(pathname), `${siteUrl}/`);

  if (language !== "et") {
    url.searchParams.set("lang", language);
  }

  return url.toString();
}

function getAbsoluteUrl(pathname) {
  if (/^https?:\/\//i.test(pathname)) return pathname;
  return new URL(pathname, `${siteUrl}/`).toString();
}

export default function Seo({
  title,
  description,
  path,
  image = "/og/artlab-studio-tallinn.jpg",
  imageAlt,
  noIndex = false,
}) {
  const { pathname } = useLocation();
  const { i18n } = useTranslation();
  const resolvedLanguage = (i18n.resolvedLanguage || "et").split("-")[0];
  const language = supportedLanguages.includes(resolvedLanguage)
    ? resolvedLanguage
    : "et";
  const pagePath = normalizePath(path || pathname);
  const canonicalUrl = getLocalizedUrl(pagePath, language);
  const imageUrl = getAbsoluteUrl(image);
  const socialImageAlt = imageAlt || defaultImageAltByLanguage[language];
  const robotsContent = noIndex
    ? "noindex, nofollow, noarchive"
    : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";
  const facebookUrl = import.meta.env.VITE_FACEBOOK_URL?.trim();
  const validFacebookUrl =
    facebookUrl?.startsWith("http") &&
    !facebookUrl.includes("ссылка-на-страницу")
      ? facebookUrl
      : null;
  const sameAs = [
    "https://www.instagram.com/artlab_est/",
    ...(validFacebookUrl ? [validFacebookUrl] : []),
  ];
  const organizationId = `${siteUrl}/#organization`;
  const websiteId = `${siteUrl}/#website`;
  const webpageId = `${canonicalUrl}#webpage`;
  const breadcrumbItems = [
    {
      "@type": "ListItem",
      position: 1,
      name: homeLabelByLanguage[language],
      item: getLocalizedUrl("/", language),
    },
  ];

  if (pagePath !== "/") {
    breadcrumbItems.push({
      "@type": "ListItem",
      position: 2,
      name: title.split("|")[0].trim(),
      item: canonicalUrl,
    });
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["EducationalOrganization", "LocalBusiness"],
        "@id": organizationId,
        name: "ART Lab",
        legalName: "ARTLAB STUDIO OÜ",
        description: organizationDescriptionByLanguage[language],
        url: `${siteUrl}/`,
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}/android-chrome-512x512.png`,
          width: 512,
          height: 512,
        },
        image: imageUrl,
        email: "artlabtallinn@gmail.com",
        telephone: "+37256637800",
        priceRange: "€€",
        currenciesAccepted: "EUR",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Peterburi tee 46, ruum 417",
          postalCode: "11415",
          addressLocality: "Tallinn",
          addressRegion: "Harju maakond",
          addressCountry: "EE",
        },
        areaServed: {
          "@type": "City",
          name: "Tallinn",
        },
        founder: {
          "@type": "Person",
          name: "Marina Volodina",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+37256637800",
          email: "artlabtallinn@gmail.com",
          contactType: "customer service",
          availableLanguage: ["Estonian", "Russian", "English"],
        },
        hasMap:
          "https://www.google.com/maps/search/?api=1&query=Peterburi+tee+46+Tallinn",
        knowsLanguage: ["et", "ru", "en"],
        sameAs,
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: `${siteUrl}/`,
        name: "ART Lab",
        alternateName: "ARTLab Studio",
        inLanguage: ["et-EE", "en", "ru"],
        publisher: { "@id": organizationId },
      },
      {
        "@type": "WebPage",
        "@id": webpageId,
        url: canonicalUrl,
        name: title,
        description,
        inLanguage: htmlLanguageByLanguage[language],
        isPartOf: { "@id": websiteId },
        about: { "@id": organizationId },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: imageUrl,
          width: 1200,
          height: 630,
        },
        breadcrumb: { "@id": `${canonicalUrl}#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumb`,
        itemListElement: breadcrumbItems,
      },
    ],
  };

  useEffect(() => {
    document
      .querySelectorAll("[data-seo-fallback]")
      .forEach((element) => element.remove());
    document.title = title;
  }, [title]);

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content="ARTLab Studio OÜ" />
      <meta name="application-name" content="ART Lab" />
      <meta name="robots" content={robotsContent} />
      <meta name="googlebot" content={robotsContent} />
      <meta name="geo.region" content="EE-37" />
      <meta name="geo.placename" content="Tallinn" />

      <link rel="canonical" href={canonicalUrl} />
      {supportedLanguages.map((alternateLanguage) => (
        <link
          key={alternateLanguage}
          rel="alternate"
          hrefLang={htmlLanguageByLanguage[alternateLanguage]}
          href={getLocalizedUrl(pagePath, alternateLanguage)}
        />
      ))}
      <link
        rel="alternate"
        hrefLang="x-default"
        href={getLocalizedUrl(pagePath, "et")}
      />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="ART Lab" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:locale" content={localeByLanguage[language]} />
      {supportedLanguages
        .filter((alternateLanguage) => alternateLanguage !== language)
        .map((alternateLanguage) => (
          <meta
            key={alternateLanguage}
            property="og:locale:alternate"
            content={localeByLanguage[alternateLanguage]}
          />
        ))}
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:secure_url" content={imageUrl} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={socialImageAlt} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={socialImageAlt} />

      <script type="application/ld+json">
        {JSON.stringify(structuredData).replace(/</g, "\\u003c")}
      </script>
    </>
  );
}
