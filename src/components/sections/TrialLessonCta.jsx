import { Link } from "react-router";
import { useTranslation } from "react-i18next";

import Container from "../ui/Container.jsx";

export default function TrialLessonCta({ className = "" }) {
  const { t } = useTranslation("common");

  return (
    <section
      className={`relative isolate overflow-hidden bg-gradient-to-br from-surface-lilac via-white to-surface-aqua py-16 sm:py-20 lg:py-24 ${className}`}
      aria-labelledby="trial-lesson-title"
    >
      <div
        className="pointer-events-none absolute -left-24 top-8 size-72 rounded-full bg-accent-pink/8 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 size-80 rounded-full bg-accent-cyan/10 blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/90 bg-white/88 shadow-[0_28px_90px_rgba(51,39,73,0.12)] backdrop-blur-xl sm:rounded-[3rem]">
          <div
            className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand via-accent-pink to-accent-cyan"
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute -left-20 -top-20 size-56 rounded-full border-[34px] border-brand/[0.035]"
            aria-hidden="true"
          />

          <div className="relative grid gap-9 p-6 sm:p-9 lg:grid-cols-[minmax(0,0.88fr)_minmax(470px,1.12fr)] lg:items-stretch lg:gap-10 lg:p-10 xl:gap-16 xl:p-14">
            <div className="flex flex-col justify-center py-2 lg:py-6">
              <p className="flex items-center gap-4 text-xs font-extrabold uppercase tracking-[0.18em] text-accent-pink sm:text-sm">
                <span
                  className="h-0.5 w-8 rounded-full bg-current"
                  aria-hidden="true"
                />
                {t("trialLesson.eyebrow")}
              </p>

              <h2
                id="trial-lesson-title"
                className="mt-6 max-w-3xl text-[clamp(2.65rem,4.6vw,5rem)] font-extrabold leading-[0.96] tracking-[-0.06em] text-ink"
              >
                {t("trialLesson.title")}
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-muted sm:text-base sm:leading-8 lg:text-lg lg:leading-9">
                {t("trialLesson.description")}
              </p>

              <Link
                to="/prices"
                className="group mt-7 inline-flex min-h-12 w-fit items-center gap-3 rounded-full border border-brand/20 bg-surface-lilac px-5 text-sm font-extrabold text-brand transition-all duration-200 hover:border-brand/40 hover:bg-brand hover:text-white"
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

            <div className="relative isolate flex min-h-[420px] flex-col overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-ink via-[#4a2b75] to-brand p-6 text-white shadow-[0_24px_60px_rgba(63,35,105,0.28)] sm:rounded-[2.25rem] sm:p-8 lg:p-9">
              <div
                className="pointer-events-none absolute -right-16 -top-20 size-64 rounded-full border-[42px] border-white/[0.055]"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute -bottom-20 -left-14 size-52 rounded-full bg-accent-cyan/20 blur-3xl"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute right-8 top-1/2 grid grid-cols-3 gap-2 opacity-30"
                aria-hidden="true"
              >
                {Array.from({ length: 9 }).map((_, index) => (
                  <span key={index} className="size-1 rounded-full bg-white" />
                ))}
              </div>

              <div className="relative flex items-start justify-between gap-5">
                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#ff9fc1] sm:text-xs">
                    {t("trialLesson.priceLabel")}
                  </p>
                  <p className="mt-2 max-w-40 text-xs leading-5 text-white/60">
                    {t("trialLesson.priceCaption")}
                  </p>
                </div>

                <div className="flex shrink-0 items-start gap-1.5">
                  <span className="text-[4rem] font-extrabold leading-[0.82] tracking-[-0.08em] sm:text-[4.75rem]">
                    {t("trialLesson.price")}
                  </span>
                  <span className="mt-1 text-2xl font-extrabold text-white/80 sm:text-3xl">
                    {t("trialLesson.currency")}
                  </span>
                </div>
              </div>

              <div
                className="relative my-6 h-px bg-white/15"
                aria-hidden="true"
              />

              <p className="relative max-w-xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
                {t("trialLesson.condition")}
              </p>

              <div className="relative mt-5 -rotate-[0.8deg] rounded-[1.4rem] bg-gradient-to-r from-accent-pink to-[#ff76a8] p-[2px] shadow-[0_16px_40px_rgba(239,79,136,0.28)] transition-transform duration-300 hover:rotate-0">
                <div className="flex items-center gap-4 rounded-[calc(1.4rem-2px)] bg-white px-4 py-4 sm:px-6 sm:py-5">
                  <span
                    className="flex size-11 shrink-0 items-center justify-center rounded-full bg-accent-pink text-white shadow-[0_8px_20px_rgba(239,79,136,0.28)] sm:size-12"
                    aria-hidden="true"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="size-5 sm:size-6"
                      stroke="currentColor"
                      strokeWidth="2.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m5 12 4 4L19 6" />
                    </svg>
                  </span>

                  <div className="min-w-0">
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.13em] text-accent-pink sm:text-xs">
                      {t("trialLesson.conditionAccent")}
                    </p>
                    <p className="mt-1 whitespace-nowrap text-[clamp(1.9rem,7vw,4.4rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.065em] text-ink">
                      {t("trialLesson.freeLabel")}
                    </p>
                  </div>
                </div>
              </div>

              <Link
                to="/contacts#booking"
                className="group relative mt-7 inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-white px-6 pt-0.5 text-center text-sm font-extrabold text-brand shadow-[0_12px_30px_rgba(20,10,38,0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#fff5f9] sm:text-base"
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
