import { Link } from "react-router";
import { useTranslation } from "react-i18next";

import TrialLessonCta from "../../components/sections/TrialLessonCta.jsx";
import Seo from "../../components/seo/Seo.jsx";
import Container from "../../components/ui/Container.jsx";
import AboutHero from "./AboutHero.jsx";

const directionStyles = [
  {
    accent: "text-brand",
    line: "bg-brand",
    surface: "from-surface-lilac to-white",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="m14.8 4.2 5 5M13.2 5.8l5 5M4 20l3.7-.8L19.4 7.5a1.7 1.7 0 0 0 0-2.4l-.5-.5a1.7 1.7 0 0 0-2.4 0L4.8 16.3 4 20Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    accent: "text-accent-cyan",
    line: "bg-accent-cyan",
    surface: "from-surface-aqua to-white",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 3.5a8.5 8.5 0 1 0 0 17h1.4a1.8 1.8 0 0 0 0-3.6h-.7a1.35 1.35 0 0 1 0-2.7h2.8A5 5 0 0 0 20.5 9c0-3-3.8-5.5-8.5-5.5Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.5 9.2h.01M10.3 6.8h.01M14.2 6.8h.01M17 9.2h.01"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    accent: "text-accent-pink",
    line: "bg-accent-pink",
    surface: "from-surface-pink to-white",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M7 4.5c2.7 0 4.2 2.1 5 4.2.8-2.1 2.3-4.2 5-4.2 2.2 0 3.5 1.7 3.5 3.7 0 4.6-5.4 8.7-8.5 11.3C8.9 16.9 3.5 12.8 3.5 8.2c0-2 1.3-3.7 3.5-3.7Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.8 7.6c1.5 1 2.8 2.4 4.2 4.2 1.4-1.8 2.7-3.2 4.2-4.2"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

const formatStyles = [
  { number: "01", accent: "text-brand", surface: "bg-surface-lilac" },
  { number: "02", accent: "text-accent-pink", surface: "bg-surface-pink" },
];

export default function AboutPage() {
  const { t } = useTranslation("about");
  const directions = t("directions.items", { returnObjects: true });
  const formats = t("formats.items", { returnObjects: true });

  return (
    <>
      <Seo
        title={t("meta.title")}
        description={t("meta.description")}
        path="/about"
      />

      <div className="overflow-hidden">
        <AboutHero />

        <section className="relative bg-surface-aqua py-20 sm:py-24 lg:py-28">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[minmax(280px,0.72fr)_minmax(0,1.28fr)] lg:gap-20 xl:gap-28">
              <div>
                <p className="flex items-center gap-4 text-[11px] font-extrabold uppercase tracking-[0.2em] text-accent-cyan sm:text-xs">
                  <span
                    className="h-0.5 w-8 rounded-full bg-current"
                    aria-hidden="true"
                  />
                  {t("approach.eyebrow")}
                </p>

                <h2 className="mt-7 max-w-2xl text-[clamp(2.6rem,5vw,5rem)] font-extrabold leading-[0.97] tracking-[-0.055em] text-ink">
                  {t("approach.title")}
                </h2>
              </div>

              <div className="flex flex-col justify-center lg:border-l lg:border-accent-cyan/25 lg:pl-12 xl:pl-16">
                <p className="max-w-3xl text-lg leading-9 text-muted sm:text-xl sm:leading-10">
                  {t("approach.description")}
                </p>

                <div className="mt-9 rounded-[1.75rem] border border-white/90 bg-white/75 p-6 shadow-[0_18px_55px_rgba(51,39,73,0.07)] backdrop-blur-lg sm:p-8">
                  <div className="flex gap-4">
                    <span
                      className="mt-1 flex size-10 shrink-0 items-center justify-center rounded-full bg-surface-pink text-accent-pink"
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
                        <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z" />
                      </svg>
                    </span>
                    <p className="text-base font-bold leading-8 text-ink sm:text-lg sm:leading-9">
                      {t("approach.accent")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-white py-20 sm:py-24 lg:py-28">
          <Container>
            <div className="grid gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(360px,0.65fr)] lg:items-end lg:justify-between lg:gap-16">
              <div>
                <p className="flex items-center gap-4 text-[11px] font-extrabold uppercase tracking-[0.2em] text-brand sm:text-xs">
                  <span
                    className="h-0.5 w-8 rounded-full bg-current"
                    aria-hidden="true"
                  />
                  {t("directions.eyebrow")}
                </p>

                <h2 className="mt-7 max-w-3xl text-[clamp(2.6rem,5vw,5rem)] font-extrabold leading-[0.97] tracking-[-0.055em] text-ink">
                  {t("directions.title")}
                </h2>
              </div>

              <p className="max-w-xl text-base leading-8 text-muted sm:text-lg sm:leading-9 lg:pb-1">
                {t("directions.description")}
              </p>
            </div>

            <div className="mt-11 grid gap-5 lg:mt-14 lg:grid-cols-3">
              {Array.isArray(directions) &&
                directions.map((direction, index) => {
                  const style = directionStyles[index];

                  return (
                    <article
                      key={direction.title}
                      className={`group relative overflow-hidden rounded-[1.75rem] border border-line/80 bg-gradient-to-br ${style.surface} p-6 shadow-[0_16px_50px_rgba(51,39,73,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-card sm:p-8`}
                    >
                      <span
                        className={`absolute inset-x-0 top-0 h-1 ${style.line}`}
                        aria-hidden="true"
                      />

                      <div className="flex items-start justify-between gap-5">
                        <span
                          className={`flex size-13 items-center justify-center rounded-2xl bg-white shadow-[0_10px_28px_rgba(51,39,73,0.08)] ${style.accent}`}
                        >
                          <span className="size-6">{style.icon}</span>
                        </span>
                        <span
                          className={`text-xs font-extrabold tracking-[0.13em] ${style.accent}`}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <h3 className="mt-10 text-2xl font-extrabold leading-tight tracking-[-0.035em] text-ink sm:text-[1.75rem]">
                        {direction.title}
                      </h3>
                      <p className="mt-5 text-sm leading-7 text-muted sm:text-base sm:leading-8">
                        {direction.description}
                      </p>
                    </article>
                  );
                })}
            </div>

            <Link
              to="/directions"
              className="group mt-9 inline-flex items-center gap-3 border-b border-brand/30 pb-1 text-sm font-extrabold text-brand transition-colors hover:border-brand"
            >
              {t("directions.cta")}
              <span
                className="transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              >
                →
              </span>
            </Link>
          </Container>
        </section>

        <section className="relative isolate overflow-hidden bg-surface-lilac py-20 sm:py-24 lg:py-28">
          <div
            className="pointer-events-none absolute -bottom-40 -right-32 size-[30rem] rounded-full bg-surface-pink blur-3xl"
            aria-hidden="true"
          />

          <Container className="relative">
            <div className="grid gap-10 lg:grid-cols-[minmax(280px,0.65fr)_minmax(0,1.35fr)] lg:gap-16 xl:gap-24">
              <div>
                <p className="flex items-center gap-4 text-[11px] font-extrabold uppercase tracking-[0.2em] text-accent-pink sm:text-xs">
                  <span
                    className="h-0.5 w-8 rounded-full bg-current"
                    aria-hidden="true"
                  />
                  {t("formats.eyebrow")}
                </p>

                <h2 className="mt-7 max-w-xl text-[clamp(2.6rem,5vw,5rem)] font-extrabold leading-[0.97] tracking-[-0.055em] text-ink">
                  {t("formats.title")}
                </h2>

                <p className="mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg sm:leading-9">
                  {t("formats.description")}
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {Array.isArray(formats) &&
                  formats.map((format, index) => {
                    const style = formatStyles[index];

                    return (
                      <article
                        key={format.title}
                        className="flex min-h-[20rem] flex-col rounded-[1.75rem] border border-white/90 bg-white p-6 shadow-[0_20px_65px_rgba(51,39,73,0.09)] sm:p-8"
                      >
                        <div className="flex items-center justify-between gap-4">
                          <span
                            className={`flex size-12 items-center justify-center rounded-full ${style.surface} ${style.accent} text-xs font-extrabold`}
                          >
                            {style.number}
                          </span>
                          <span
                            className={`h-2.5 w-2.5 rounded-full ${
                              index === 0 ? "bg-brand" : "bg-accent-pink"
                            }`}
                            aria-hidden="true"
                          />
                        </div>

                        <div className="mt-auto pt-12">
                          <h3 className="text-2xl font-extrabold leading-tight tracking-[-0.035em] text-ink sm:text-[1.75rem]">
                            {format.title}
                          </h3>
                          <p className="mt-5 text-sm leading-7 text-muted sm:text-base sm:leading-8">
                            {format.description}
                          </p>
                        </div>
                      </article>
                    );
                  })}
              </div>
            </div>

            <div className="mt-12 border-t border-brand/15 pt-10 sm:mt-16 sm:pt-12">
              <p className="max-w-5xl text-[clamp(1.6rem,3.2vw,3rem)] font-extrabold leading-[1.15] tracking-[-0.04em] text-ink">
                {t("closing.prefix")}{" "}
                <span className="text-brand">{t("closing.accent")}</span>
              </p>
            </div>
          </Container>
        </section>
      </div>

      <TrialLessonCta />
    </>
  );
}
