import { Link } from "react-router";
import { useTranslation } from "react-i18next";

import creativeImage from "../../assets/images/directions/creative-workshop.jpg";
import celebrationImage from "../../assets/images/events/celebration.jpg";
import acrylicImage from "../../assets/images/workshops/acrylic-canvas.webp";
import beadworkImage from "../../assets/images/workshops/beadwork.webp";
import plasterImage from "../../assets/images/workshops/plaster-art.webp";
import threeDImage from "../../assets/images/workshops/three-d-art.webp";
import woolImage from "../../assets/images/workshops/wool-felting.webp";
import InnerPageHero from "../../components/sections/InnerPageHero.jsx";
import WorkshopCard from "../../components/sections/WorkshopCard.jsx";
import Seo from "../../components/seo/Seo.jsx";
import Container from "../../components/ui/Container.jsx";

const instagramUrl = "https://www.instagram.com/artlab_est/";

const pageConfig = {
  workshops: {
    path: "/workshops",
    accent: "cyan",
    image: acrylicImage,
    imagePosition: "object-center",
    accentText: "text-accent-cyan",
    accentBackground: "bg-accent-cyan",
    softBackground: "bg-surface-aqua",
    ctaAccentText: "text-[#71e2e5]",
  },
  celebrations: {
    path: "/celebrations",
    accent: "pink",
    image: celebrationImage,
    imagePosition: "object-center",
    accentText: "text-accent-pink",
    accentBackground: "bg-accent-pink",
    softBackground: "bg-surface-pink",
    ctaAccentText: "text-[#ff8db5]",
  },
  camp: {
    path: "/camp",
    accent: "brand",
    image: creativeImage,
    imagePosition: "object-center",
    accentText: "text-brand",
    accentBackground: "bg-brand",
    softBackground: "bg-surface-lilac",
    ctaAccentText: "text-[#c8b5ff]",
  },
};

const workshopCards = [
  { key: "acrylic", image: acrylicImage, tone: "brand" },
  { key: "plaster", image: plasterImage, tone: "pink" },
  { key: "felting", image: woolImage, tone: "cyan" },
  { key: "beadwork", image: beadworkImage, tone: "brand" },
  { key: "threeD", image: threeDImage, tone: "peach" },
];

function HeroVisual({ formatKey, config, t }) {
  const tags = t(`formatPages.${formatKey}.hero.tags`, {
    returnObjects: true,
  });

  return (
    <div className="mx-auto max-w-xl">
      <div className="relative overflow-hidden rounded-[2rem] border-[9px] border-white bg-white shadow-[0_26px_80px_rgba(51,39,73,0.14)] sm:rounded-[2.75rem] sm:border-[12px]">
        <img
          src={config.image}
          alt={t(`formatPages.${formatKey}.hero.imageAlt`)}
          width="1100"
          height="825"
          decoding="async"
          className={`aspect-[4/3] w-full object-cover ${config.imagePosition}`}
        />

        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-ink/40 to-transparent"
          aria-hidden="true"
        />

        <span className="absolute bottom-4 left-4 rounded-full border border-white/70 bg-white/88 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.16em] text-ink shadow-lg backdrop-blur-xl sm:bottom-5 sm:left-5 sm:text-xs">
          ART LAB · TALLINN
        </span>
      </div>

      <ul className="relative -mt-3 grid gap-2 px-3 sm:grid-cols-3 sm:px-5">
        {Array.isArray(tags) &&
          tags.map((tag) => (
            <li
              key={tag}
              className="flex min-h-12 items-center justify-center rounded-full border border-white/90 bg-white/90 px-4 text-center text-[11px] font-extrabold leading-4 text-ink shadow-[0_10px_30px_rgba(51,39,73,0.09)] backdrop-blur-xl"
            >
              {tag}
            </li>
          ))}
      </ul>
    </div>
  );
}

function WorkshopsShowcase({ t }) {
  return (
    <section className="bg-gradient-to-br from-surface-lilac via-white to-surface-aqua py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(300px,0.65fr)] lg:items-end lg:gap-16">
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-accent-cyan sm:text-xs">
              {t("formatPages.workshops.showcase.eyebrow")}
            </p>
            <h2 className="mt-5 max-w-4xl text-[clamp(2.5rem,4.8vw,4.8rem)] font-extrabold leading-[0.97] tracking-[-0.055em] text-ink">
              {t("formatPages.workshops.showcase.title")}
            </h2>
          </div>

          <p className="max-w-xl text-base leading-8 text-muted sm:text-lg sm:leading-9">
            {t("formatPages.workshops.showcase.description")}
          </p>
        </div>

        <p className="mt-8 text-xs font-bold text-muted lg:hidden">
          {t("otherFormats.workshops.swipeHint")}
        </p>

        <ul className="-mx-5 mt-5 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain px-5 pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:-mx-8 sm:px-8 lg:mx-0 lg:grid lg:grid-cols-5 lg:overflow-visible lg:px-0 lg:pb-0 xl:mt-10">
          {workshopCards.map((workshop) => (
            <li
              key={workshop.key}
              className="w-[76vw] max-w-[300px] shrink-0 snap-start lg:w-auto lg:max-w-none"
            >
              <WorkshopCard
                image={workshop.image}
                imageAlt={t(
                  `otherFormats.workshops.items.${workshop.key}.imageAlt`,
                )}
                title={t(
                  `otherFormats.workshops.items.${workshop.key}.title`,
                )}
                href={instagramUrl}
                linkLabel={t("otherFormats.workshops.openAria", {
                  title: t(
                    `otherFormats.workshops.items.${workshop.key}.title`,
                  ),
                })}
                tone={workshop.tone}
                imageFit="cover"
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function WorkshopsPricingNotice({ t }) {
  return (
    <section
      className="relative isolate overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
      aria-labelledby="workshops-pricing-title"
    >
      <div
        className="pointer-events-none absolute -left-28 bottom-0 size-72 rounded-full bg-accent-cyan/8 blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/90 bg-gradient-to-br from-surface-aqua via-[#fbffff] to-surface-lilac p-5 shadow-[0_24px_75px_rgba(51,39,73,0.1)] sm:rounded-[2.75rem] sm:p-8 lg:p-10 xl:p-12">
          <div
            className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full border-[32px] border-white/55"
            aria-hidden="true"
          />

          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(420px,1.1fr)] lg:items-center lg:gap-14 xl:gap-20">
            <div>
              <p className="flex items-center gap-4 text-xs font-extrabold uppercase tracking-[0.18em] text-accent-cyan sm:text-sm">
                <span
                  className="h-0.5 w-8 rounded-full bg-current"
                  aria-hidden="true"
                />
                {t("formatPages.workshops.pricing.eyebrow")}
              </p>

              <h2
                id="workshops-pricing-title"
                className="mt-6 max-w-2xl text-[clamp(2.4rem,4.25vw,4.5rem)] font-extrabold leading-[0.98] tracking-[-0.055em] text-ink"
              >
                {t("formatPages.workshops.pricing.title")}
              </h2>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <div className="rounded-[1.5rem] border border-white/90 bg-white/85 p-5 shadow-[0_12px_34px_rgba(51,39,73,0.065)]">
                  <p className="text-xs font-bold leading-5 text-muted">
                    {t("formatPages.workshops.pricing.minimum.label")}
                  </p>
                  <p className="mt-2 text-xl font-extrabold leading-7 tracking-[-0.035em] text-ink sm:text-2xl">
                    {t("formatPages.workshops.pricing.minimum.value")}
                  </p>
                </div>

                <div className="rounded-[1.5rem] border border-white/90 bg-white/85 p-5 shadow-[0_12px_34px_rgba(51,39,73,0.065)]">
                  <p className="text-xs font-bold leading-5 text-muted">
                    {t("formatPages.workshops.pricing.perPerson.label")}
                  </p>
                  <p className="mt-2 text-xl font-extrabold leading-7 tracking-[-0.035em] text-ink sm:text-2xl">
                    {t("formatPages.workshops.pricing.perPerson.value")}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-white/90 bg-white/90 p-6 shadow-[0_18px_50px_rgba(51,39,73,0.08)] sm:p-8">
              <span
                className="flex size-11 items-center justify-center rounded-full bg-surface-aqua text-accent-cyan shadow-[0_8px_24px_rgba(31,173,180,0.12)]"
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="size-5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z" />
                  <path d="M8 9h8M8 13h5" />
                </svg>
              </span>

              <p className="mt-5 text-base leading-8 text-muted sm:text-lg sm:leading-9">
                {t("formatPages.workshops.pricing.description")}
              </p>

              <Link
                to="/prices#workshop-prices"
                className="group mt-6 inline-flex min-h-13 w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-brand to-[#7d45dc] px-6 text-center text-sm font-extrabold text-white shadow-button transition-all duration-200 hover:-translate-y-0.5 hover:shadow-button-hover sm:w-auto"
              >
                {t("formatPages.workshops.pricing.cta")}
                <span
                  className="transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function CampAnnouncement({ t }) {
  const facts = t("formatPages.camp.announcement.facts", {
    returnObjects: true,
  });
  const programme = t("formatPages.camp.announcement.programme.items", {
    returnObjects: true,
  });
  const participationFormats = t(
    "formatPages.camp.announcement.formats.items",
    { returnObjects: true },
  );
  const formatStyles = [
    "border-[#f6c979] bg-[#fff8e9]",
    "border-brand/15 bg-surface-lilac",
    "border-accent-pink/15 bg-surface-pink",
  ];

  return (
    <section
      className="relative isolate overflow-hidden bg-gradient-to-b from-[#fffaf4] via-white to-surface-lilac/35 py-20 sm:py-24 lg:py-28"
      aria-labelledby="camp-announcement-title"
    >
      <div
        className="pointer-events-none absolute -left-24 top-20 size-72 rounded-full bg-[#ffb451]/12 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-28 bottom-0 size-80 rounded-full bg-brand/8 blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="relative isolate overflow-hidden rounded-[2rem] border border-white/90 bg-white/88 p-5 shadow-[0_26px_85px_rgba(51,39,73,0.11)] backdrop-blur-xl sm:rounded-[2.75rem] sm:p-8 lg:p-11 xl:p-12">
          <div
            className="pointer-events-none absolute -right-16 -top-20 size-64 rounded-full border-[42px] border-[#ffb451]/10"
            aria-hidden="true"
          />

          <div className="relative grid gap-9 lg:grid-cols-[minmax(0,0.82fr)_minmax(440px,1.18fr)] lg:items-start lg:gap-12 xl:gap-16">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#d96f24] sm:text-xs">
                  {t("formatPages.camp.announcement.eyebrow")}
                </p>
                <span className="rounded-full bg-[#e9f8ef] px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.13em] text-[#257453] sm:text-[11px]">
                  {t("formatPages.camp.announcement.status")}
                </span>
              </div>

              <h2
                id="camp-announcement-title"
                className="mt-5 max-w-3xl text-[clamp(2.65rem,5vw,5.2rem)] font-extrabold leading-[0.94] tracking-[-0.06em] text-ink"
              >
                {t("formatPages.camp.announcement.title")}
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg sm:leading-9">
                {t("formatPages.camp.announcement.description")}
              </p>

              <ul className="mt-7 grid gap-2 sm:grid-cols-3 sm:gap-3">
                {Array.isArray(facts) &&
                  facts.map((fact) => (
                    <li
                      key={fact.label}
                      className="rounded-[1.25rem] border border-[#f1e7dc] bg-[#fffaf5] px-3 py-4 sm:px-4 sm:py-5"
                    >
                      <span className="block text-[9px] font-extrabold uppercase tracking-[0.13em] text-muted sm:text-[10px]">
                        {fact.label}
                      </span>
                      <span className="mt-1.5 block text-sm font-extrabold leading-5 text-ink sm:text-base sm:leading-6">
                        {fact.value}
                      </span>
                    </li>
                  ))}
              </ul>

              <p className="mt-6 flex items-start gap-3 text-sm font-bold leading-6 text-ink">
                <span
                  className="flex size-9 shrink-0 items-center justify-center rounded-full bg-surface-lilac text-brand"
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="size-4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </span>
                <span className="pt-1.5">
                  {t("formatPages.camp.announcement.location")}
                </span>
              </p>

              <Link
                to="/contacts#booking"
                className="group mt-7 inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-brand to-[#7d45dc] px-7 text-center text-sm font-extrabold text-white shadow-button transition-all duration-200 hover:-translate-y-0.5 hover:shadow-button-hover sm:w-auto"
              >
                {t("formatPages.camp.announcement.cta")}
                <span
                  className="transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            </div>

            <div className="rounded-[1.75rem] border border-white bg-gradient-to-br from-surface-lilac via-white to-surface-aqua p-5 shadow-[0_18px_55px_rgba(51,39,73,0.08)] sm:rounded-[2.25rem] sm:p-7 lg:p-8">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-brand sm:text-xs">
                {t("formatPages.camp.announcement.programme.eyebrow")}
              </p>
              <h3 className="mt-3 text-2xl font-extrabold tracking-[-0.04em] text-ink sm:text-3xl">
                {t("formatPages.camp.announcement.programme.title")}
              </h3>

              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {Array.isArray(programme) &&
                  programme.map((item) => (
                    <li
                      key={item}
                      className="flex min-h-16 items-start gap-3 rounded-[1.15rem] border border-white/90 bg-white/80 p-4 text-sm font-bold leading-6 text-ink shadow-[0_8px_24px_rgba(51,39,73,0.05)]"
                    >
                      <span
                        className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent-cyan text-[11px] text-white"
                        aria-hidden="true"
                      >
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
              </ul>
            </div>
          </div>

          <div className="relative mt-10 border-t border-line/80 pt-8 sm:mt-12 sm:pt-10">
            <div className="grid gap-3 lg:grid-cols-[minmax(0,0.72fr)_minmax(520px,1.28fr)] lg:items-end lg:gap-12">
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-accent-pink sm:text-xs">
                  {t("formatPages.camp.announcement.formats.eyebrow")}
                </p>
                <h3 className="mt-3 text-2xl font-extrabold tracking-[-0.04em] text-ink sm:text-3xl">
                  {t("formatPages.camp.announcement.formats.title")}
                </h3>
              </div>
              <p className="max-w-2xl text-sm leading-7 text-muted sm:text-base">
                {t("formatPages.camp.announcement.formats.description")}
              </p>
            </div>

            <ul className="mt-6 grid gap-3 md:grid-cols-3">
              {Array.isArray(participationFormats) &&
                participationFormats.map((item, index) => (
                  <li
                    key={item.title}
                    className={`rounded-[1.5rem] border p-5 sm:p-6 ${formatStyles[index]}`}
                  >
                    <span className="text-[10px] font-extrabold tracking-[0.15em] text-brand">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h4 className="mt-5 text-xl font-extrabold tracking-[-0.035em] text-ink sm:text-2xl">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-sm leading-7 text-muted">
                      {item.description}
                    </p>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default function CreativeFormatPage({ formatKey }) {
  const { t } = useTranslation("directions");
  const config = pageConfig[formatKey];
  const isWorkshopsPage = formatKey === "workshops";
  const isCelebrationsPage = formatKey === "celebrations";
  const isCampPage = formatKey === "camp";
  const hasEnhancedContentCard = isWorkshopsPage || isCelebrationsPage;
  const paragraphs = t(`formatPages.${formatKey}.content.paragraphs`, {
    returnObjects: true,
  });
  const steps = t(`formatPages.${formatKey}.content.steps`, {
    returnObjects: true,
  });
  const features = t(`formatPages.${formatKey}.features`, {
    returnObjects: true,
  });
  const contentNote = t(`formatPages.${formatKey}.content.note`);

  return (
    <>
      <Seo
        title={t(`formatPages.${formatKey}.meta.title`)}
        description={t(`formatPages.${formatKey}.meta.description`)}
        path={config.path}
      />

      <InnerPageHero
        titleId={`${formatKey}-hero-title`}
        eyebrow={t(`formatPages.${formatKey}.hero.eyebrow`)}
        title={t(`formatPages.${formatKey}.hero.title`)}
        description={t(`formatPages.${formatKey}.hero.description`)}
        accent={config.accent}
      >
        <HeroVisual formatKey={formatKey} config={config} t={t} />
      </InnerPageHero>

      {formatKey === "camp" && <CampAnnouncement t={t} />}

      <section
        className={`relative isolate overflow-hidden py-20 sm:py-24 lg:py-28 ${
          isWorkshopsPage
            ? "bg-gradient-to-b from-white via-surface-aqua/35 to-white"
            : isCelebrationsPage
              ? "bg-gradient-to-b from-white via-surface-pink/45 to-white"
              : "bg-white"
        }`}
      >
        {hasEnhancedContentCard && (
          <>
            <div
              className={`pointer-events-none absolute -left-32 top-24 size-80 rounded-full blur-3xl ${
                isCelebrationsPage
                  ? "bg-accent-pink/10"
                  : "bg-accent-cyan/10"
              }`}
              aria-hidden="true"
            />
            <div
              className={`pointer-events-none absolute -right-32 bottom-16 size-96 rounded-full blur-3xl ${
                isCelebrationsPage ? "bg-brand/10" : "bg-brand/8"
              }`}
              aria-hidden="true"
            />
          </>
        )}

        <Container className="relative">
          <div
            className={`grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(420px,1.1fr)] lg:gap-14 xl:gap-20 ${
              hasEnhancedContentCard
                ? "overflow-hidden rounded-[2rem] border border-white/90 bg-white/88 p-5 shadow-[0_26px_85px_rgba(51,39,73,0.1)] backdrop-blur-xl sm:rounded-[2.75rem] sm:p-8 lg:p-10 xl:p-12"
                : ""
            }`}
          >
            <div>
              <p
                className={`flex items-center gap-4 text-[10px] font-extrabold uppercase tracking-[0.2em] sm:text-xs ${config.accentText}`}
              >
                <span
                  className={`h-0.5 w-8 rounded-full ${config.accentBackground}`}
                  aria-hidden="true"
                />
                {t(`formatPages.${formatKey}.content.eyebrow`)}
              </p>

              <h2
                className={`mt-6 max-w-3xl font-extrabold leading-[0.97] tracking-[-0.055em] text-ink ${
                  hasEnhancedContentCard
                    ? "text-[clamp(2.5rem,4.25vw,4.65rem)]"
                    : "text-[clamp(2.6rem,4.8vw,5rem)]"
                }`}
              >
                {t(`formatPages.${formatKey}.content.title`)}
              </h2>

              <div className="mt-7 space-y-5">
                {Array.isArray(paragraphs) &&
                  paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="max-w-2xl text-base leading-8 text-muted sm:text-lg sm:leading-9"
                    >
                      {paragraph}
                    </p>
                  ))}
              </div>
            </div>

            <div
              className={`relative overflow-hidden rounded-[2rem] p-5 sm:rounded-[2.5rem] sm:p-7 ${
                isWorkshopsPage
                  ? "border border-accent-cyan/15 bg-gradient-to-br from-surface-aqua via-[#f9ffff] to-surface-lilac shadow-[0_20px_60px_rgba(31,173,180,0.12)]"
                  : isCelebrationsPage
                    ? "border border-accent-pink/15 bg-gradient-to-br from-surface-pink via-[#fffafd] to-surface-lilac shadow-[0_20px_60px_rgba(239,79,136,0.11)]"
                    : config.softBackground
              }`}
            >
              {hasEnhancedContentCard && (
                <div
                  className="pointer-events-none absolute -right-14 -top-14 size-40 rounded-full border-[28px] border-white/55"
                  aria-hidden="true"
                />
              )}

              <div className="relative">
                <p
                  className={`text-xs font-extrabold uppercase tracking-[0.17em] ${config.accentText}`}
                >
                  {t(`formatPages.${formatKey}.content.listTitle`)}
                </p>

                <ol className="mt-5 grid gap-3">
                  {Array.isArray(steps) &&
                    steps.map((step, index) => (
                      <li
                        key={step.title}
                        className={`grid grid-cols-[44px_minmax(0,1fr)] gap-4 rounded-[1.35rem] border border-white/90 bg-white/85 p-4 shadow-[0_10px_32px_rgba(51,39,73,0.06)] sm:grid-cols-[48px_minmax(0,1fr)] sm:p-5 ${
                          isWorkshopsPage
                            ? "transition duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_15px_38px_rgba(51,39,73,0.1)]"
                            : isCelebrationsPage
                              ? "transition duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_15px_38px_rgba(239,79,136,0.1)]"
                            : ""
                        }`}
                      >
                        <span
                          className={`flex size-11 items-center justify-center rounded-full text-[10px] font-extrabold tracking-[0.12em] text-white shadow-[0_8px_20px_rgba(31,173,180,0.2)] sm:size-12 ${config.accentBackground}`}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span>
                          <span className="block text-sm font-extrabold leading-6 text-ink sm:text-base">
                            {step.title}
                          </span>
                          <span className="mt-1 block text-xs leading-5 text-muted sm:text-sm sm:leading-6">
                            {step.description}
                          </span>
                        </span>
                      </li>
                    ))}
                </ol>

                {isWorkshopsPage ? (
                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="group mt-5 flex min-h-14 w-full items-center justify-between gap-4 rounded-[1.25rem] bg-gradient-to-r from-brand via-[#7a43e4] to-accent-pink px-5 py-3 text-sm font-extrabold leading-5 text-white shadow-[0_14px_32px_rgba(108,56,216,0.24)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(108,56,216,0.32)] sm:px-6"
                  >
                    <span>
                      {t("formatPages.workshops.content.instagramCta")}
                    </span>
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/16 ring-1 ring-white/25">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="size-4"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <rect x="3" y="3" width="18" height="18" rx="5" />
                        <circle cx="12" cy="12" r="4" />
                        <path d="M17.5 6.5h.01" />
                      </svg>
                    </span>
                  </a>
                ) : (
                  contentNote && (
                    <p className="mt-5 border-l-2 border-current/15 pl-4 text-sm font-bold leading-7 text-ink">
                      {contentNote}
                    </p>
                  )
                )}
              </div>
            </div>

            {isCelebrationsPage && (
              <div className="grid gap-4 lg:col-span-2 md:grid-cols-2 xl:grid-cols-[minmax(0,1.35fr)_minmax(260px,0.75fr)_minmax(230px,0.55fr)]">
                <article className="relative overflow-hidden rounded-[1.75rem] border border-accent-pink/15 bg-surface-pink p-5 sm:p-6">
                  <div
                    className="pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-accent-pink/10"
                    aria-hidden="true"
                  />

                  <div className="relative">
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-accent-pink sm:text-xs">
                      {t("formatPages.celebrations.content.price.eyebrow")}
                    </p>
                    <div className="mt-3 flex flex-wrap items-end gap-x-3 gap-y-1">
                      <strong className="text-[clamp(2rem,3.5vw,3.35rem)] font-extrabold leading-none tracking-[-0.055em] text-ink">
                        {t("formatPages.celebrations.content.price.value")}
                      </strong>
                      <span className="pb-1 text-sm font-extrabold text-ink sm:text-base">
                        {t("formatPages.celebrations.content.price.caption")}
                      </span>
                    </div>
                    <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
                      {t("formatPages.celebrations.content.price.description")}
                    </p>
                  </div>
                </article>

                <article className="relative overflow-hidden rounded-[1.75rem] border border-brand/12 bg-surface-lilac p-5 sm:p-6">
                  <span
                    className="absolute right-5 top-5 flex size-10 items-center justify-center rounded-full bg-white text-xs font-extrabold text-brand shadow-[0_8px_24px_rgba(51,39,73,0.08)]"
                    aria-hidden="true"
                  >
                    13
                  </span>
                  <p className="pr-12 text-[10px] font-extrabold uppercase tracking-[0.18em] text-brand sm:text-xs">
                    {t("formatPages.celebrations.content.capacity.eyebrow")}
                  </p>
                  <h3 className="mt-4 max-w-xs text-2xl font-extrabold leading-8 tracking-[-0.04em] text-ink sm:text-3xl sm:leading-9">
                    {t("formatPages.celebrations.content.capacity.title")}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {t("formatPages.celebrations.content.capacity.description")}
                  </p>
                </article>

                <Link
                  to="/contacts#booking"
                  className="group flex min-h-28 items-center justify-between gap-5 rounded-[1.75rem] bg-gradient-to-br from-accent-pink to-brand px-6 py-6 text-base font-extrabold text-white shadow-[0_16px_38px_rgba(159,62,201,0.24)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_20px_46px_rgba(159,62,201,0.32)] md:col-span-2 xl:col-span-1"
                >
                  <span>
                    {t("formatPages.celebrations.content.bookingCta")}
                  </span>
                  <span
                    className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/16 text-xl ring-1 ring-white/25 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </Link>
              </div>
            )}
          </div>

          {isCampPage && (
            <div className="mt-14 max-w-4xl lg:mt-20">
              <p className="flex items-center gap-4 text-[10px] font-extrabold uppercase tracking-[0.2em] text-brand sm:text-xs">
                <span
                  className="h-0.5 w-8 rounded-full bg-current"
                  aria-hidden="true"
                />
                ART CAMP
              </p>
              <h2 className="mt-5 text-balance text-[clamp(2.35rem,4.1vw,4.25rem)] font-extrabold leading-[0.98] tracking-[-0.055em] text-ink">
                {t("formatPages.camp.featuresTitle")}
              </h2>
            </div>
          )}

          <ul
            className={`grid gap-4 md:grid-cols-3 ${
              isCampPage ? "mt-8 lg:mt-10" : "mt-14 lg:mt-20"
            }`}
          >
            {Array.isArray(features) &&
              features.map((feature, index) => (
                <li
                  key={feature.title}
                  className="rounded-[1.75rem] border border-line/80 bg-white p-6 shadow-[0_16px_50px_rgba(51,39,73,0.07)] sm:p-7"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span
                      className={`text-xs font-extrabold tracking-[0.15em] ${config.accentText}`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`size-2.5 rounded-full ${config.accentBackground}`}
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="mt-8 text-xl font-extrabold leading-7 tracking-[-0.03em] text-ink sm:text-2xl">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    {feature.description}
                  </p>
                </li>
              ))}
          </ul>
        </Container>
      </section>

      {formatKey === "workshops" && <WorkshopsShowcase t={t} />}

      {formatKey === "workshops" && <WorkshopsPricingNotice t={t} />}

      <section className="bg-white pb-20 sm:pb-24 lg:pb-28">
        <Container>
          <div className="relative isolate overflow-hidden rounded-[2rem] bg-ink px-6 py-10 text-white shadow-[0_24px_75px_rgba(51,39,73,0.18)] sm:rounded-[2.75rem] sm:px-10 sm:py-12 lg:flex lg:items-center lg:justify-between lg:gap-14 lg:px-14">
            <div
              className={`pointer-events-none absolute -right-20 -top-28 size-72 rounded-full opacity-25 blur-3xl ${config.accentBackground}`}
              aria-hidden="true"
            />

            <div className="relative max-w-3xl">
              <p className={`text-[10px] font-extrabold uppercase tracking-[0.2em] sm:text-xs ${config.ctaAccentText}`}>
                {t(`formatPages.${formatKey}.cta.eyebrow`)}
              </p>
              <h2 className="mt-4 text-[clamp(2.2rem,4vw,4rem)] font-extrabold leading-[0.98] tracking-[-0.05em]">
                {t(`formatPages.${formatKey}.cta.title`)}
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
                {t(`formatPages.${formatKey}.cta.description`)}
              </p>
            </div>

            <Link
              to="/contacts#booking"
              className="group relative mt-8 inline-flex min-h-14 w-full shrink-0 items-center justify-center gap-3 rounded-full bg-white px-7 text-center text-sm font-extrabold text-ink shadow-[0_12px_35px_rgba(0,0,0,0.18)] transition-transform duration-200 hover:-translate-y-0.5 sm:w-auto lg:mt-0"
            >
              {t(`formatPages.${formatKey}.cta.button`)}
              <span
                className="text-brand transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              >
                →
              </span>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
