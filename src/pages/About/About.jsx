import { useTranslation } from "react-i18next";

import TrialLessonCta from "../../components/sections/TrialLessonCta.jsx";
import Seo from "../../components/seo/Seo.jsx";
import Container from "../../components/ui/Container.jsx";
import AboutHero from "./AboutHero.jsx";
import AboutTeam from "./AboutTeam.jsx";

const formatStyles = [
  {
    number: "01",
    accent: "text-brand",
    surface: "bg-surface-lilac",
    line: "bg-brand",
  },
  {
    number: "02",
    accent: "text-accent-pink",
    surface: "bg-surface-pink",
    line: "bg-accent-pink",
  },
];

export default function AboutPage() {
  const { t } = useTranslation("about");
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

        <AboutTeam />

        <section className="relative isolate overflow-hidden bg-surface-lilac py-16 sm:py-20 lg:py-24">
          <div
            className="pointer-events-none absolute -bottom-40 -right-32 size-[30rem] rounded-full bg-surface-pink blur-3xl"
            aria-hidden="true"
          />

          <Container className="relative">
            <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.8fr)] lg:gap-14 xl:gap-20">
              <div className="min-w-0">
                <p className="flex items-center gap-4 text-[11px] font-extrabold uppercase tracking-[0.2em] text-accent-pink sm:text-xs">
                  <span
                    className="h-0.5 w-8 rounded-full bg-current"
                    aria-hidden="true"
                  />
                  {t("formats.eyebrow")}
                </p>

                <h2 className="mt-7 max-w-[14ch] text-balance text-[clamp(2.35rem,4vw,4.25rem)] font-extrabold leading-[0.98] tracking-[-0.05em] text-ink">
                  {t("formats.title")}
                </h2>

                <p className="mt-5 max-w-xl text-base leading-8 text-muted sm:text-lg sm:leading-9">
                  {t("formats.description")}
                </p>
              </div>

              <div className="grid w-full gap-4 lg:max-w-[38rem] lg:justify-self-end">
                {Array.isArray(formats) &&
                  formats.map((format, index) => {
                    const style = formatStyles[index];

                    return (
                      <article
                        key={format.title}
                        className="group relative grid min-w-0 gap-5 overflow-hidden rounded-[1.5rem] border border-white/90 bg-white/90 p-5 shadow-[0_16px_50px_rgba(51,39,73,0.08)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_60px_rgba(51,39,73,0.11)] sm:grid-cols-[3.5rem_minmax(0,1fr)] sm:gap-6 sm:p-6 lg:p-7"
                      >
                        <span
                          className={`absolute inset-y-6 left-0 w-1 rounded-r-full ${style.line}`}
                          aria-hidden="true"
                        />

                        <span
                          className={`pointer-events-none absolute -right-10 -top-12 size-32 rounded-full ${style.surface} opacity-70 transition-transform duration-500 group-hover:scale-110`}
                          aria-hidden="true"
                        />

                        <span
                          className={`absolute right-6 top-6 size-2.5 rounded-full ${style.line}`}
                          aria-hidden="true"
                        />

                        <div className="relative z-10">
                          <span
                            className={`flex size-11 items-center justify-center rounded-full ${style.surface} ${style.accent} text-xs font-extrabold`}
                          >
                            {style.number}
                          </span>
                        </div>

                        <div className="relative z-10 min-w-0 pr-5 sm:pr-4">
                          <h3 className="text-xl font-extrabold leading-tight tracking-[-0.035em] text-ink sm:text-2xl">
                            {format.title}
                          </h3>
                          <p className="mt-3 text-sm leading-7 text-muted sm:text-base sm:leading-8">
                            {format.description}
                          </p>
                        </div>
                      </article>
                    );
                  })}
              </div>
            </div>

            <div className="mt-12 border-t border-brand/15 pt-9 sm:mt-14 sm:pt-10">
              <p className="max-w-5xl text-[clamp(1.6rem,3.2vw,3rem)] font-extrabold leading-[1.15] tracking-[-0.04em] text-ink">
                {t("closing.prefix")} {" "}
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
