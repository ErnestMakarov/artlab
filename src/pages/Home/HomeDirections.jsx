import { Link } from "react-router";
import { useTranslation } from "react-i18next";

import Container from "../../components/ui/Container.jsx";
import artImage from "../../assets/images/directions/art.jpg";
import creativeImage from "../../assets/images/directions/creative-workshop.jpg";
import handicraftImage from "../../assets/images/directions/handicraft.jpg";

const directions = [
  {
    key: "art",
    number: "01",
    anchor: "art",
    image: artImage,
    accent: "bg-brand",
    text: "text-brand",
    surface: "bg-surface-lilac",
  },
  {
    key: "creative",
    number: "02",
    anchor: "creative-workshop",
    image: creativeImage,
    accent: "bg-accent-cyan",
    text: "text-accent-cyan",
    surface: "bg-surface-aqua",
  },
  {
    key: "handicraft",
    number: "03",
    anchor: "handicraft-club",
    image: handicraftImage,
    accent: "bg-accent-pink",
    text: "text-accent-pink",
    surface: "bg-surface-pink",
  },
];

export default function HomeDirections() {
  const { t } = useTranslation("home");

  return (
    <section
      id="directions"
      className="relative isolate overflow-hidden bg-gradient-to-br from-surface-lilac via-[#fcfbff] to-surface-aqua py-20 sm:py-24 lg:py-28 xl:py-32"
      aria-labelledby="home-directions-title"
    >
      <div
        className="pointer-events-none absolute -left-32 top-1/3 size-80 rounded-full bg-brand/5 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-28 top-8 size-72 rounded-full bg-accent-cyan/8 blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative">
        <p className="flex items-center gap-4 text-[11px] font-extrabold uppercase tracking-[0.2em] text-accent-cyan sm:text-xs">
          <span className="h-0.5 w-8 rounded-full bg-current" aria-hidden="true" />
          {t("directions.eyebrow")}
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.7fr)] lg:items-end lg:gap-16 xl:gap-24">
          <h2
            id="home-directions-title"
            className="max-w-4xl text-[clamp(2.7rem,5vw,5.25rem)] font-extrabold leading-[0.98] tracking-[-0.055em] text-ink"
          >
            {t("directions.title")}
          </h2>

          <p className="max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8 lg:pb-1">
            {t("directions.intro")}
          </p>
        </div>

        <p className="mt-8 flex items-center gap-2 text-xs font-bold text-muted lg:hidden">
          {t("directions.swipeHint")}
        </p>

        <ul
          className="-mx-5 mt-5 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain px-5 pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:-mx-8 sm:mt-8 sm:gap-5 sm:px-8 lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:px-0 lg:pb-0 xl:mt-12 xl:gap-8"
          aria-label={t("directions.listAria")}
        >
          {directions.map((direction) => (
            <li
              key={direction.key}
              className="w-[84vw] max-w-[340px] shrink-0 snap-start lg:w-auto lg:max-w-none"
            >
              <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/90 bg-white shadow-[0_18px_55px_rgba(51,39,73,0.09)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(51,39,73,0.14)] sm:rounded-[2rem]">
                <div className={`h-1.5 w-full ${direction.accent}`} />

                <div className="p-3.5 pb-0 sm:p-4 sm:pb-0">
                  <div className="overflow-hidden rounded-[1.25rem] bg-surface-lilac sm:rounded-[1.5rem]">
                    <img
                      src={direction.image}
                      alt={t(`directions.items.${direction.key}.imageAlt`)}
                      width="720"
                      height="480"
                      loading="lazy"
                      decoding="async"
                      className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                    />
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-4">
                    <p
                      className={`text-[10px] font-extrabold uppercase tracking-[0.17em] ${direction.text}`}
                    >
                      {t("directions.cardLabel", {
                        number: direction.number,
                      })}
                    </p>

                    <span
                      className={`rounded-full px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.08em] ${direction.text} ${direction.surface}`}
                    >
                      {t(`directions.items.${direction.key}.ageBadge`)}
                    </span>
                  </div>

                  <h3 className="mt-4 text-[1.65rem] font-extrabold leading-[1.05] tracking-[-0.04em] text-ink sm:text-[1.8rem]">
                    {t(`directions.items.${direction.key}.title`)}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-muted sm:text-[15px] sm:leading-7">
                    {t(`directions.items.${direction.key}.description`)}
                  </p>

                  <div className="mt-7 flex items-center justify-between gap-4 border-t border-line pt-5 sm:mt-8">
                    <Link
                      to={`/directions#${direction.anchor}`}
                      className="inline-flex items-center gap-2 text-sm font-extrabold text-ink transition-colors hover:text-brand"
                      aria-label={t("directions.openAria", {
                        title: t(`directions.items.${direction.key}.title`),
                      })}
                    >
                      {t("directions.more")}
                      <span aria-hidden="true">→</span>
                    </Link>

                    <span
                      className={`flex size-10 shrink-0 items-center justify-center rounded-full text-lg text-white transition-transform duration-300 group-hover:translate-x-1 ${direction.accent}`}
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
