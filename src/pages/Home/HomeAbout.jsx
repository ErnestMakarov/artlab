import { useTranslation } from "react-i18next";

import Container from "../../components/ui/Container.jsx";
import studioImage from "../../assets/images/home/artlab-studio-interior.jpg";

export default function HomeAbout() {
  const { t } = useTranslation("home");

  return (
    <section
      className="relative isolate overflow-hidden bg-white py-20 sm:py-24 lg:py-28 xl:py-32"
      aria-labelledby="home-about-title"
    >
      <div
        className="pointer-events-none absolute -right-40 top-16 size-[30rem] rounded-full bg-surface-aqua/65 blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative">
        <p className="flex items-center gap-4 text-[11px] font-extrabold uppercase tracking-[0.2em] text-accent-cyan sm:text-xs">
          <span
            className="h-0.5 w-8 rounded-full bg-current"
            aria-hidden="true"
          />

          {t("about.eyebrow")}
        </p>

        <div className="mt-8 grid gap-7 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.75fr)] lg:items-end lg:gap-16 xl:gap-24">
          <h2
            id="home-about-title"
            className="max-w-4xl text-[clamp(2.7rem,5.2vw,5.5rem)] font-extrabold leading-[0.98] tracking-[-0.055em] text-ink"
          >
            {t("about.title")}
          </h2>

          <p className="max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8 lg:pb-1">
            {t("about.intro")}
          </p>
        </div>

        <div className="mt-10 grid items-stretch gap-9 lg:mt-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.75fr)] lg:gap-10 xl:gap-16">
          <div className="relative">
            <div
              className="absolute -bottom-5 -left-5 size-28 rounded-full bg-surface-lilac"
              aria-hidden="true"
            />

            <div className="relative overflow-hidden rounded-[1.75rem] bg-surface-lilac shadow-[0_24px_70px_rgba(51,39,73,0.12)] sm:rounded-[2.25rem]">
              <img
                src={studioImage}
                alt={t("about.imageAlt")}
                width="1600"
                height="900"
                loading="lazy"
                decoding="async"
                className="aspect-video h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="relative flex flex-col justify-center border-l-2 border-accent-cyan/25 pl-6 sm:pl-9 lg:py-5 xl:pl-12">
            <p className="max-w-xl text-base leading-8 text-muted sm:text-lg sm:leading-9">
              {t("about.description")}
            </p>

            <blockquote className="mt-8 border-t border-line pt-8 sm:mt-10 sm:pt-10">
              <span
                className="mb-4 block text-4xl font-extrabold leading-none text-accent-pink/70"
                aria-hidden="true"
              >
                “
              </span>

              <p className="max-w-xl text-lg font-extrabold leading-8 tracking-[-0.02em] text-ink sm:text-xl sm:leading-9">
                {t("about.statement")}
              </p>
            </blockquote>
          </div>
        </div>
      </Container>
    </section>
  );
}