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

export default function CreativeFormatPage({ formatKey }) {
  const { t } = useTranslation("directions");
  const config = pageConfig[formatKey];
  const paragraphs = t(`formatPages.${formatKey}.content.paragraphs`, {
    returnObjects: true,
  });
  const steps = t(`formatPages.${formatKey}.content.steps`, {
    returnObjects: true,
  });
  const features = t(`formatPages.${formatKey}.features`, {
    returnObjects: true,
  });

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

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.86fr)_minmax(420px,1.14fr)] lg:gap-16 xl:gap-24">
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

              <h2 className="mt-6 max-w-3xl text-[clamp(2.6rem,4.8vw,5rem)] font-extrabold leading-[0.97] tracking-[-0.055em] text-ink">
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

            <div className={`rounded-[2rem] p-5 sm:rounded-[2.75rem] sm:p-8 ${config.softBackground}`}>
              <p className={`text-xs font-extrabold uppercase tracking-[0.17em] ${config.accentText}`}>
                {t(`formatPages.${formatKey}.content.listTitle`)}
              </p>

              <ol className="mt-5 grid gap-3">
                {Array.isArray(steps) &&
                  steps.map((step, index) => (
                    <li
                      key={step.title}
                      className="grid grid-cols-[44px_minmax(0,1fr)] gap-4 rounded-[1.35rem] border border-white/90 bg-white/80 p-4 shadow-[0_10px_32px_rgba(51,39,73,0.06)] sm:p-5"
                    >
                      <span
                        className={`flex size-11 items-center justify-center rounded-full text-[10px] font-extrabold tracking-[0.12em] text-white ${config.accentBackground}`}
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

              <p className="mt-5 border-l-2 border-current/15 pl-4 text-sm font-bold leading-7 text-ink">
                {t(`formatPages.${formatKey}.content.note`)}
              </p>
            </div>
          </div>

          <ul className="mt-14 grid gap-4 md:grid-cols-3 lg:mt-20">
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
