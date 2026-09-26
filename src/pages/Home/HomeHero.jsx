import { Link } from "react-router";
import { useTranslation } from "react-i18next";

import Container from "../../components/ui/Container.jsx";
import heroImage from "../../assets/images/home/artlab-home-hero.jpg";

const features = [
  { number: "01", key: "individual", color: "text-brand" },
  { number: "02", key: "materials", color: "text-accent-cyan" },
  { number: "03", key: "audience", color: "text-accent-pink" },
];

export default function HomeHero() {
  const { t } = useTranslation("home");

  return (
    <section className="relative isolate overflow-hidden bg-[#fcfbff]">
      <div
        className="pointer-events-none absolute -right-32 top-0 size-[34rem] rounded-full bg-surface-aqua/80 blur-2xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/3 size-80 rounded-full bg-surface-lilac blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative py-10 sm:py-14 lg:py-16 xl:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(440px,1.08fr)] lg:gap-10 xl:gap-20">
          <div className="relative z-10">
            <p className="mb-7 flex items-center gap-4 text-xs font-extrabold uppercase tracking-[0.18em] text-accent-cyan sm:text-sm">
              <span className="h-0.5 w-8 rounded-full bg-current" aria-hidden="true" />
              {t("hero.eyebrow")}
            </p>

            <h1 className="max-w-3xl text-[clamp(3rem,6vw,6.25rem)] font-extrabold leading-[0.95] tracking-[-0.06em] text-ink">
              <span className="block">{t("hero.title.first")}</span>
              <span className="mt-2 block">{t("hero.title.second")}</span>
              <span className="relative mt-2 inline-block w-fit text-brand">
                {t("hero.title.accent")}

                <svg
                  className="pointer-events-none absolute -bottom-4 left-0 h-4 w-full overflow-visible text-accent-pink"
                  viewBox="0 0 100 12"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 3C25 7 65 10 98 3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p className="mt-10 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
              {t("hero.description")}
            </p>

            <div className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8">
              <Link
                to="/contacts#booking"
                className="group inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-brand to-[#7d45dc] px-8 text-sm font-bold text-white shadow-button transition-all duration-200 hover:-translate-y-0.5 hover:shadow-button-hover sm:w-auto"
              >
                {t("hero.primaryCta")}
                <span
                  className="transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>

              <Link
                to="/schedule"
                className="group inline-flex items-center gap-2 border-b border-brand/35 pb-1 text-sm font-bold text-brand transition-colors hover:border-brand"
              >
                {t("hero.secondaryCta")}
                <span
                  className="transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[780px]">
            <div
              className="absolute -left-6 top-4 size-20 rounded-full bg-accent-pink sm:-left-8 sm:size-28"
              aria-hidden="true"
            />
            <div
              className="absolute -right-24 -top-10 size-60 rounded-full bg-surface-aqua sm:size-80"
              aria-hidden="true"
            />

            <div className="relative rounded-[2rem] bg-[#f2edfc] p-3 shadow-[0_25px_80px_rgba(51,39,73,0.10)] sm:rounded-[2.75rem] sm:p-4">
              <div className="overflow-hidden rounded-[1.5rem] bg-white sm:rounded-[2.2rem]">
                <img
                  src={heroImage}
                  alt={t("hero.imageAlt")}
                  width="1200"
                  height="1000"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="aspect-[6/5] h-full w-full object-cover object-center"
                />
              </div>
            </div>

            <svg
              className="pointer-events-none absolute -bottom-8 right-0 h-16 w-40 text-accent-cyan sm:-bottom-10 sm:w-52"
              viewBox="0 0 210 60"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M10 25C74 5 132 12 200 2"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <path
                d="M35 47C96 28 148 30 202 17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.7"
              />
            </svg>
          </div>
        </div>

        <div className="relative z-10 mt-16 overflow-hidden rounded-[1.75rem] border border-white/80 bg-white/90 shadow-[0_20px_60px_rgba(51,39,73,0.09)] backdrop-blur-xl lg:mt-20">
          <ul className="grid sm:grid-cols-3">
            {features.map((feature, index) => (
              <li
                key={feature.key}
                className={`flex min-h-24 items-center gap-5 px-6 py-5 sm:min-h-28 sm:px-7 lg:px-9 ${
                  index > 0
                    ? "border-t border-line sm:border-l sm:border-t-0"
                    : ""
                }`}
              >
                <span className={`text-sm font-extrabold ${feature.color}`}>
                  {feature.number}
                </span>
                <span className="text-sm font-bold leading-6 text-ink sm:text-[15px]">
                  {t(`hero.features.${feature.key}`)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
