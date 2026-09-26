import { Link } from "react-router";
import { useTranslation } from "react-i18next";

import Container from "../../components/ui/Container.jsx";
import celebrationImage from "../../assets/images/events/celebration.jpg";

export default function HomeCelebrations() {
  const { t } = useTranslation("home");

  return (
    <section
      className="relative isolate overflow-hidden bg-white py-20 sm:py-24 lg:py-28 xl:py-32"
      aria-labelledby="home-celebrations-title"
    >
      <div
        className="pointer-events-none absolute -right-40 top-20 size-[30rem] rounded-full bg-surface-pink blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-40 bottom-0 size-80 rounded-full bg-surface-lilac blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative">
        <p className="flex items-center gap-4 text-xs font-extrabold uppercase tracking-[0.18em] text-accent-pink sm:text-sm">
          <span className="h-0.5 w-8 rounded-full bg-current" aria-hidden="true" />
          {t("celebrations.eyebrow")}
        </p>

        <div className="mt-8 grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.72fr)] lg:items-end lg:gap-16 xl:gap-24">
          <h2
            id="home-celebrations-title"
            className="max-w-4xl text-[clamp(2.7rem,5vw,5.25rem)] font-extrabold leading-[0.98] tracking-[-0.055em] text-ink"
          >
            {t("celebrations.title")}
          </h2>

          <p className="max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8 lg:pb-1">
            {t("celebrations.intro")}
          </p>
        </div>

        <div className="mt-10 grid items-stretch gap-5 lg:mt-14 lg:grid-cols-[minmax(0,1.08fr)_minmax(360px,0.92fr)] lg:gap-6 xl:gap-8">
          <div className="relative overflow-hidden rounded-[1.75rem] bg-surface-lilac shadow-[0_24px_70px_rgba(51,39,73,0.12)] sm:rounded-[2.25rem]">
            <img
              src={celebrationImage}
              alt={t("celebrations.imageAlt")}
              width="1600"
              height="1100"
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] h-full w-full object-cover sm:aspect-[16/10] lg:aspect-auto lg:min-h-[510px]"
            />

            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/20 to-transparent"
              aria-hidden="true"
            />
          </div>

          <article className="relative flex h-full flex-col justify-center overflow-hidden rounded-[1.75rem] border border-white/80 bg-surface-pink p-6 shadow-[0_20px_60px_rgba(51,39,73,0.08)] sm:rounded-[2.25rem] sm:p-9 lg:p-8 xl:p-12">
            <div
              className="pointer-events-none absolute -right-16 -top-16 size-44 rounded-full bg-accent-pink/8 blur-2xl"
              aria-hidden="true"
            />

            <div className="relative">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-accent-pink sm:text-xs">
                {t("celebrations.cardLabel")}
              </p>

              <h3 className="mt-5 text-xl font-extrabold leading-8 tracking-[-0.025em] text-ink sm:text-2xl sm:leading-9">
                {t("celebrations.formats")}
              </h3>

              <p className="mt-7 border-t border-accent-pink/15 pt-7 text-sm leading-7 text-muted sm:text-base sm:leading-8">
                {t("celebrations.description")}
              </p>

              <div className="mt-6 flex items-start gap-3 rounded-2xl border border-white/90 bg-white/70 p-4 shadow-[0_8px_25px_rgba(51,39,73,0.05)]">
                <span
                  className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand"
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

                <p className="pt-1.5 text-sm font-extrabold leading-6 text-ink">
                  {t("celebrations.location")}
                </p>
              </div>

              <Link
                to="/contacts#booking"
                className="group mt-7 inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-brand to-[#7d45dc] px-7 text-center text-sm font-bold text-white shadow-button transition-all duration-200 hover:-translate-y-0.5 hover:shadow-button-hover"
              >
                {t("celebrations.cta")}
                <span
                  className="transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            </div>
          </article>
        </div>

        <div className="mt-6 flex items-start gap-4 rounded-[1.5rem] border border-line/80 bg-white px-5 py-5 shadow-[0_12px_35px_rgba(51,39,73,0.05)] sm:mt-8 sm:px-7">
          <span
            className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent-cyan/10 text-accent-cyan"
            aria-hidden="true"
          >
            ✦
          </span>

          <p className="max-w-5xl pt-1 text-sm leading-7 text-muted sm:text-[15px]">
            {t("celebrations.note")}
          </p>
        </div>
      </Container>
    </section>
  );
}
