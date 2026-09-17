import { Link } from "react-router";
import { useTranslation } from "react-i18next";

import Container from "../ui/Container.jsx";

export default function TrialLessonCta({ className = "" }) {
  const { t } = useTranslation("common");

  return (
    <section
      className={`relative isolate overflow-hidden bg-gradient-to-br from-surface-lilac via-[#fff8fb] to-surface-aqua py-16 sm:py-20 lg:py-24 ${className}`}
      aria-labelledby="trial-lesson-title"
    >
      <div
        className="pointer-events-none absolute -left-24 top-0 size-64 rounded-full bg-brand/6 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-24 bottom-0 size-72 rounded-full bg-accent-cyan/8 blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/90 bg-white/85 p-6 shadow-[0_25px_80px_rgba(51,39,73,0.11)] backdrop-blur-xl sm:rounded-[2.75rem] sm:p-9 lg:p-10 xl:p-12">
          <div
            className="pointer-events-none absolute -right-12 -top-12 size-40 rounded-full border-[26px] border-accent-pink/5"
            aria-hidden="true"
          />

          <div className="relative grid items-stretch gap-8 lg:grid-cols-[minmax(0,1fr)_190px_minmax(280px,0.9fr)] lg:gap-0">
            <div className="flex flex-col justify-center lg:pr-9 xl:pr-12">
              <p className="flex items-center gap-4 text-[10px] font-extrabold uppercase tracking-[0.2em] text-accent-pink sm:text-xs">
                <span
                  className="h-0.5 w-8 rounded-full bg-current"
                  aria-hidden="true"
                />

                {t("trialLesson.eyebrow")}
              </p>

              <h2
                id="trial-lesson-title"
                className="mt-6 max-w-2xl text-[clamp(2.5rem,4.2vw,4.5rem)] font-extrabold leading-[0.98] tracking-[-0.055em] text-ink"
              >
                {t("trialLesson.title")}
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-muted sm:text-base sm:leading-8">
                {t("trialLesson.description")}
              </p>

              <Link
                to="/prices"
                className="group mt-5 inline-flex w-fit items-center gap-2 border-b border-brand/30 pb-1 text-sm font-extrabold text-brand transition-colors hover:border-brand"
              >
                {t("trialLesson.pricesLink")}

                <span
                  className="transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            </div>

            <div className="flex flex-col justify-center rounded-[1.5rem] bg-surface-lilac px-6 py-7 text-center lg:rounded-none lg:border-x lg:border-line/90 lg:bg-transparent lg:px-7">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.17em] text-accent-pink">
                {t("trialLesson.priceLabel")}
              </p>

              <div className="mt-3 flex items-start justify-center gap-2 text-ink">
                <span className="text-[4.75rem] font-extrabold leading-none tracking-[-0.07em] sm:text-[5.5rem] lg:text-[5rem]">
                  {t("trialLesson.price")}
                </span>

                <span className="mt-3 text-2xl font-extrabold">
                  {t("trialLesson.currency")}
                </span>
              </div>

              <p className="mt-2 text-xs leading-5 text-muted">
                {t("trialLesson.priceCaption")}
              </p>
            </div>

            <div className="flex flex-col justify-between rounded-[1.75rem] bg-surface-pink p-6 sm:p-7 lg:ml-9 xl:ml-12">
              <div>
                <span
                  className="flex size-10 items-center justify-center rounded-full bg-white text-accent-pink shadow-[0_8px_22px_rgba(51,39,73,0.06)]"
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="size-5"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m5 12 4 4L19 6" />
                  </svg>
                </span>

                <p className="mt-5 text-sm leading-7 text-muted">
                  {t("trialLesson.condition")}
                </p>

                <p className="mt-3 text-base font-extrabold leading-7 text-accent-pink">
                  {t("trialLesson.conditionAccent")}
                </p>
              </div>

              <Link
                to="/contacts#booking"
                className="group mt-6 inline-flex min-h-13 w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-brand to-[#7d45dc] px-6 text-center text-sm font-bold text-white shadow-button transition-all duration-200 hover:-translate-y-0.5 hover:shadow-button-hover"
              >
                {t("trialLesson.cta")}

                <span
                  className="transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}