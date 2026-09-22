import { Link } from "react-router";
import { useTranslation } from "react-i18next";

import Container from "../../components/ui/Container.jsx";
import acrylicImage from "../../assets/images/workshops/acrylic-canvas.webp";
import plasterImage from "../../assets/images/workshops/plaster-art.webp";
import feltingImage from "../../assets/images/workshops/wool-felting.webp";
import beadworkImage from "../../assets/images/workshops/beadwork.webp";
import threeDImage from "../../assets/images/workshops/three-d-art.webp";

const instagramUrl = "https://www.instagram.com/artlab_est/";

const workshops = [
  {
    key: "acrylic",
    number: "01",
    image: acrylicImage,
    surface: "bg-[#f8f4ff]",
    accent: "bg-brand",
    text: "text-brand",
  },
  {
    key: "plaster",
    number: "02",
    image: plasterImage,
    surface: "bg-[#fff4f8]",
    accent: "bg-accent-pink",
    text: "text-accent-pink",
  },
  {
    key: "felting",
    number: "03",
    image: feltingImage,
    surface: "bg-[#effafa]",
    accent: "bg-accent-cyan",
    text: "text-accent-cyan",
  },
  {
    key: "beadwork",
    number: "04",
    image: beadworkImage,
    surface: "bg-[#f8f4ff]",
    accent: "bg-brand",
    text: "text-brand",
  },
  {
    key: "threeD",
    number: "05",
    image: threeDImage,
    surface: "bg-[#fff8f4]",
    accent: "bg-accent-pink",
    text: "text-accent-pink",
  },
];

export default function HomeWorkshops() {
  const { t } = useTranslation("home");

  return (
    <section
      id="workshops"
      className="relative isolate overflow-hidden bg-white py-20 sm:py-24 lg:py-28 xl:py-32"
      aria-labelledby="home-workshops-title"
    >
      <div
        className="pointer-events-none absolute -right-32 top-24 size-80 rounded-full bg-surface-pink/70 blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative">
        <p className="flex items-center gap-4 text-[11px] font-extrabold uppercase tracking-[0.2em] text-accent-cyan sm:text-xs">
          <span
            className="h-0.5 w-8 rounded-full bg-current"
            aria-hidden="true"
          />
          {t("workshops.eyebrow")}
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.62fr)] lg:items-end lg:gap-16 xl:gap-24">
          <h2
            id="home-workshops-title"
            className="max-w-4xl text-[clamp(2.7rem,5vw,5.25rem)] font-extrabold leading-[0.98] tracking-[-0.055em] text-ink"
          >
            {t("workshops.title")}
          </h2>

          <p className="max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8 lg:pb-1">
            {t("workshops.description")}
          </p>
        </div>

        <p className="mt-8 text-xs font-bold text-muted lg:hidden">
          {t("workshops.swipeHint")}
        </p>

        <ul
          className="-mx-5 mt-5 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain px-5 pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:-mx-8 sm:mt-8 sm:gap-5 sm:px-8 lg:mx-0 lg:grid lg:grid-cols-5 lg:overflow-visible lg:px-0 lg:pb-0 xl:mt-12"
          aria-label={t("workshops.listAria")}
        >
          {workshops.map((workshop) => (
            <li
              key={workshop.key}
              className="w-[76vw] max-w-[280px] shrink-0 snap-start lg:w-auto lg:max-w-none"
            >
              <article
                className={`group relative flex h-full min-h-[360px] flex-col overflow-hidden rounded-[1.75rem] border border-line/70 ${workshop.surface} shadow-[0_16px_45px_rgba(51,39,73,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-card`}
              >
                <span
                  className={`absolute inset-x-0 top-0 h-1 ${workshop.accent}`}
                  aria-hidden="true"
                />

                <div className="flex items-center justify-between px-5 pt-6">
                  <span
                    className={`text-[10px] font-extrabold tracking-[0.16em] ${workshop.text}`}
                  >
                    {workshop.number}
                  </span>

                  <span
                    className={`size-2.5 rounded-full ${workshop.accent}`}
                    aria-hidden="true"
                  />
                </div>

                <div className="flex min-h-0 flex-1 items-center justify-center p-4 sm:p-5">
                  <img
                    src={workshop.image}
                    alt={t(`workshops.items.${workshop.key}.imageAlt`)}
                    width="640"
                    height="640"
                    loading="lazy"
                    decoding="async"
                    className="aspect-square max-h-[230px] w-full object-contain transition-transform duration-500 group-hover:scale-[1.035] lg:max-h-[210px]"
                  />
                </div>

                <div className="flex items-end justify-between gap-4 px-5 pb-5">
                  <h3 className="max-w-[12rem] text-lg font-extrabold leading-[1.15] tracking-[-0.035em] text-ink xl:text-xl">
                    {t(`workshops.items.${workshop.key}.title`)}
                  </h3>

                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex size-10 shrink-0 items-center justify-center rounded-full text-lg text-white shadow-[0_8px_20px_rgba(51,39,73,0.12)] transition-transform duration-300 group-hover:translate-x-1 ${workshop.accent}`}
                    aria-label={t("workshops.openAria", {
                      title: t(`workshops.items.${workshop.key}.title`),
                    })}
                  >
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <div className="mt-5 grid gap-3 sm:mt-8 lg:grid-cols-[minmax(0,1fr)_auto_auto] lg:items-center">
          <p className="flex min-h-13 items-center gap-3 rounded-full bg-surface-aqua px-5 text-sm font-bold leading-6 text-ink sm:px-6">
            <span
              className="size-2.5 shrink-0 rounded-full bg-accent-cyan"
              aria-hidden="true"
            />
            {t("workshops.materials")}
          </p>

          <Link
            to="/prices"
            className="group inline-flex min-h-13 items-center justify-center gap-3 rounded-full border border-brand/35 bg-white px-7 text-center text-sm font-extrabold text-brand transition-all duration-200 hover:border-brand hover:bg-surface-lilac"
          >
            {t("workshops.pricesCta")}
            <span
              className="transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            >
              →
            </span>
          </Link>

          <a
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex min-h-13 items-center justify-center gap-3 rounded-full bg-gradient-to-r from-brand to-[#7d45dc] px-7 text-center text-sm font-bold text-white shadow-button transition-all duration-200 hover:-translate-y-0.5 hover:shadow-button-hover"
          >
            {t("workshops.instagramCta")}

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
          </a>
        </div>
      </Container>
    </section>
  );
}