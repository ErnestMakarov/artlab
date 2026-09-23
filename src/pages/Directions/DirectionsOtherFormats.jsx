import { Link } from "react-router";
import { useTranslation } from "react-i18next";

import acrylicImage from "../../assets/images/workshops/acrylic-canvas.webp";
import plasterImage from "../../assets/images/workshops/plaster-art.webp";
import feltingImage from "../../assets/images/workshops/wool-felting.webp";
import beadworkImage from "../../assets/images/workshops/beadwork.webp";
import threeDImage from "../../assets/images/workshops/three-d-art.webp";
import celebrationImage from "../../assets/images/events/celebration.jpg";
import WorkshopCard from "../../components/sections/WorkshopCard.jsx";
import Container from "../../components/ui/Container.jsx";

const instagramUrl = "https://www.instagram.com/artlab_est/";

const workshops = [
  {
    key: "acrylic",
    number: "01",
    image: acrylicImage,
    tone: "brand",
    imageFit: "cover",
  },
  {
    key: "plaster",
    number: "02",
    image: plasterImage,
    tone: "pink",
    imageFit: "cover",
  },
  {
    key: "felting",
    number: "03",
    image: feltingImage,
    tone: "cyan",
    imageFit: "cover",
  },
  {
    key: "beadwork",
    number: "04",
    image: beadworkImage,
    tone: "brand",
    imageFit: "cover",
  },
  {
    key: "threeD",
    number: "05",
    image: threeDImage,
    tone: "peach",
    imageFit: "cover",
  },
];

export default function DirectionsOtherFormats() {
  const { t } = useTranslation("directions");

  return (
    <section
      className="relative isolate overflow-hidden bg-gradient-to-br from-surface-lilac via-white to-surface-pink py-20 sm:py-24 lg:py-28"
      aria-labelledby="other-formats-title"
    >
      <div
        className="pointer-events-none absolute -left-36 top-1/3 size-80 rounded-full bg-accent-cyan/8 blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative">
        <p className="flex items-center gap-4 text-[10px] font-extrabold uppercase tracking-[0.2em] text-brand sm:text-xs">
          <span
            className="h-0.5 w-8 rounded-full bg-current"
            aria-hidden="true"
          />
          {t("otherFormats.eyebrow")}
        </p>

        <div className="mt-7 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.65fr)] lg:items-end lg:gap-16">
          <h2
            id="other-formats-title"
            className="max-w-4xl text-[clamp(2.6rem,5vw,5rem)] font-extrabold leading-[0.97] tracking-[-0.055em] text-ink"
          >
            {t("otherFormats.title")}
          </h2>

          <p className="max-w-xl text-base leading-8 text-muted sm:text-lg sm:leading-9">
            {t("otherFormats.description")}
          </p>
        </div>

        <article className="mt-12 overflow-hidden rounded-[2rem] border border-white/90 bg-white/85 p-5 shadow-[0_24px_75px_rgba(51,39,73,0.10)] backdrop-blur-xl sm:rounded-[2.75rem] sm:p-8 lg:p-10">
          <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.72fr)] lg:items-end lg:gap-16">
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-accent-cyan sm:text-xs">
                {t("otherFormats.workshops.eyebrow")}
              </p>
              <h3 className="mt-5 max-w-4xl text-[clamp(2.35rem,4.5vw,4.5rem)] font-extrabold leading-[0.98] tracking-[-0.05em] text-ink">
                {t("otherFormats.workshops.title")}
              </h3>
            </div>

            <div>
              <p className="text-sm leading-7 text-muted sm:text-base sm:leading-8">
                {t("otherFormats.workshops.description")}
              </p>
              <p className="mt-4 border-l-2 border-accent-cyan/35 pl-4 text-sm font-bold leading-7 text-ink">
                {t("otherFormats.workshops.note")}
              </p>
            </div>
          </div>

          <p className="mt-8 text-xs font-bold text-muted lg:hidden">
            {t("otherFormats.workshops.swipeHint")}
          </p>

          <ul
            className="-mx-5 mt-5 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain px-5 pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:-mx-8 sm:px-8 lg:mx-0 lg:grid lg:grid-cols-5 lg:overflow-visible lg:px-0 lg:pb-0"
            aria-label={t("otherFormats.workshops.listAria")}
          >
            {workshops.map((workshop) => (
              <li
                key={workshop.key}
                className="w-[76vw] max-w-[300px] shrink-0 snap-start lg:w-auto lg:max-w-none"
              >
                <WorkshopCard
                  number={workshop.number}
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
                  imageFit={workshop.imageFit}
                />
              </li>
            ))}
          </ul>

          <div className="mt-4 flex justify-center sm:mt-7">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex min-h-13 w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-brand to-[#7d45dc] px-7 text-center text-sm font-bold text-white shadow-button transition-all duration-200 hover:-translate-y-0.5 hover:shadow-button-hover sm:w-auto"
            >
              {t("otherFormats.workshops.cta")}
              <span
                className="transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              >
                →
              </span>
            </a>
          </div>
        </article>

        <article className="mt-6 grid overflow-hidden rounded-[2rem] border border-white/90 bg-white shadow-[0_24px_75px_rgba(51,39,73,0.10)] lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <div className="relative min-h-[280px] lg:min-h-[500px]">
            <img
              src={celebrationImage}
              alt={t("otherFormats.celebrations.imageAlt")}
              width="1200"
              height="900"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 size-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center bg-surface-pink p-6 sm:p-9 lg:p-12 xl:p-16">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-accent-pink sm:text-xs">
              {t("otherFormats.celebrations.eyebrow")}
            </p>
            <h3 className="mt-5 max-w-2xl text-[clamp(2.2rem,4vw,4.25rem)] font-extrabold leading-[0.98] tracking-[-0.05em] text-ink">
              {t("otherFormats.celebrations.title")}
            </h3>
            <p className="mt-6 max-w-xl text-sm leading-7 text-muted sm:text-base sm:leading-8">
              {t("otherFormats.celebrations.description")}
            </p>
            <p className="mt-6 max-w-xl border-t border-accent-pink/15 pt-6 text-sm font-bold leading-7 text-ink">
              {t("otherFormats.celebrations.note")}
            </p>

            <Link
              to="/contacts#booking"
              className="group mt-8 inline-flex min-h-13 w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-brand to-[#7d45dc] px-7 text-center text-sm font-bold text-white shadow-button transition-all duration-200 hover:-translate-y-0.5 hover:shadow-button-hover sm:w-fit"
            >
              {t("otherFormats.celebrations.cta")}
              <span
                className="transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              >
                →
              </span>
            </Link>
          </div>
        </article>
      </Container>
    </section>
  );
}
