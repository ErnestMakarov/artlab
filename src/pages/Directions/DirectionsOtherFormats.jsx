import { Link } from "react-router";
import { useTranslation } from "react-i18next";

import creativeImage from "../../assets/images/directions/creative-workshop.jpg";
import celebrationImage from "../../assets/images/events/celebration.jpg";
import acrylicImage from "../../assets/images/workshops/acrylic-canvas.webp";
import Container from "../../components/ui/Container.jsx";

const formats = [
  {
    key: "workshops",
    to: "/workshops",
    image: acrylicImage,
    number: "01",
    accent: "text-accent-cyan",
    dot: "bg-accent-cyan",
    surface: "bg-surface-aqua",
  },
  {
    key: "celebrations",
    to: "/celebrations",
    image: celebrationImage,
    number: "02",
    accent: "text-accent-pink",
    dot: "bg-accent-pink",
    surface: "bg-surface-pink",
  },
  {
    key: "camp",
    to: "/camp",
    image: creativeImage,
    number: "03",
    accent: "text-brand",
    dot: "bg-brand",
    surface: "bg-surface-lilac",
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
      <div
        className="pointer-events-none absolute -right-32 bottom-0 size-72 rounded-full bg-accent-pink/7 blur-3xl"
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

        <p className="mt-8 text-xs font-bold text-muted lg:hidden">
          {t("otherFormats.swipeHint")}
        </p>

        <ul className="-mx-5 mt-5 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain px-5 pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:-mx-8 sm:px-8 lg:mx-0 lg:mt-12 lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:px-0 lg:pb-0 xl:gap-8">
          {formats.map((format) => (
            <li
              key={format.key}
              className="w-[82vw] max-w-[380px] shrink-0 snap-start lg:w-auto lg:max-w-none"
            >
              <Link
                to={format.to}
                className={`group flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/90 p-3.5 shadow-[0_20px_60px_rgba(51,39,73,0.09)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_75px_rgba(51,39,73,0.14)] sm:p-4 ${format.surface}`}
                aria-label={t(`otherFormats.cards.${format.key}.openAria`)}
              >
                <div className="relative overflow-hidden rounded-[1.4rem] bg-white sm:rounded-[1.65rem]">
                  <img
                    src={format.image}
                    alt={t(`otherFormats.cards.${format.key}.imageAlt`)}
                    width="900"
                    height="600"
                    loading="lazy"
                    decoding="async"
                    className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-[1.035]"
                  />

                  <span className="absolute left-3 top-3 flex size-11 items-center justify-center rounded-full bg-white/90 text-[10px] font-extrabold tracking-[0.12em] text-ink shadow-lg backdrop-blur-lg">
                    {format.number}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-3 pb-2 pt-6 sm:p-4 sm:pb-3 sm:pt-7">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p
                        className={`text-[10px] font-extrabold uppercase tracking-[0.18em] ${format.accent}`}
                      >
                        {t(`otherFormats.cards.${format.key}.eyebrow`)}
                      </p>
                      <h3 className="mt-3 text-[1.75rem] font-extrabold leading-[1.04] tracking-[-0.045em] text-ink sm:text-[2rem]">
                        {t(`otherFormats.cards.${format.key}.title`)}
                      </h3>
                    </div>

                    <span
                      className={`mt-1 size-2.5 shrink-0 rounded-full ${format.dot}`}
                      aria-hidden="true"
                    />
                  </div>

                  <p className="mt-4 flex-1 text-sm leading-7 text-muted sm:text-[15px]">
                    {t(`otherFormats.cards.${format.key}.description`)}
                  </p>

                  <span className="mt-7 flex items-center justify-between border-t border-white pt-5 text-sm font-extrabold text-ink">
                    {t("otherFormats.more")}
                    <span
                      className={`flex size-10 items-center justify-center rounded-full text-lg text-white transition-transform duration-300 group-hover:translate-x-1 ${format.dot}`}
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
