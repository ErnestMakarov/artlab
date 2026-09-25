import { useTranslation } from "react-i18next";

import InnerPageHero from "../../components/sections/InnerPageHero.jsx";

export default function PricesHero() {
  const { t } = useTranslation("prices");

  return (
    <InnerPageHero
      titleId="prices-hero-title"
      eyebrow={t("hero.eyebrow")}
      title={t("hero.title")}
      description={t("hero.description")}
      pageNumber="03 / 06"
      accent="pink"
    >
      <div className="relative mx-auto max-w-xl overflow-hidden rounded-[2rem] border border-white/90 bg-white/90 p-3 shadow-[0_26px_85px_rgba(51,39,73,0.13)] backdrop-blur-xl sm:rounded-[2.5rem] sm:p-4">
        <div
          className="pointer-events-none absolute -right-14 -top-14 size-44 rounded-full border-[30px] border-accent-pink/5"
          aria-hidden="true"
        />

        <div className="relative overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-surface-lilac via-white to-surface-aqua p-5 sm:rounded-[2rem] sm:p-7">
          <div className="flex items-center justify-between gap-4">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-brand sm:text-xs">
              {t("hero.card.label")}
            </p>

            <span className="rounded-full border border-white bg-white/80 px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-[0.16em] text-muted shadow-sm">
              ART LAB
            </span>
          </div>

          <div className="mt-6 flex flex-wrap items-end justify-between gap-x-7 gap-y-4 sm:mt-8">
            <div className="flex items-start gap-2 text-ink">
              <span className="text-[clamp(4.5rem,9vw,6.4rem)] font-extrabold leading-[0.82] tracking-[-0.085em]">
                {t("hero.card.price")}
              </span>
              <span className="mt-1 text-2xl font-extrabold sm:text-3xl">
                {t("hero.card.currency")}
              </span>
            </div>

            <p className="max-w-[11rem] pb-1 text-xs font-bold leading-5 text-muted sm:text-sm sm:leading-6">
              {t("hero.card.caption")}
            </p>
          </div>
        </div>

        <div className="relative mt-3 overflow-hidden rounded-[1.5rem] bg-gradient-to-r from-accent-pink to-[#ff78a7] p-5 text-white shadow-[0_16px_38px_rgba(239,79,136,0.24)] sm:rounded-[2rem] sm:p-7">
          <div
            className="pointer-events-none absolute -right-10 -top-14 size-40 rounded-full bg-white/10"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-16 right-16 size-28 rounded-full border-[20px] border-white/8"
            aria-hidden="true"
          />

          <div className="relative">
            <div className="flex items-start gap-3">
              <span
                className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-white text-accent-pink shadow-sm"
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="size-4"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m5 12 4 4L19 6" />
                </svg>
              </span>

              <p className="max-w-md text-xs font-bold leading-5 text-white/85 sm:text-sm sm:leading-6">
                {t("hero.card.condition")}
              </p>
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
              <p className="whitespace-nowrap text-[clamp(2rem,6vw,3.65rem)] font-extrabold leading-none tracking-[-0.065em]">
                {t("hero.card.freeLabel")}
              </p>

              <span className="rounded-full border border-white/35 bg-white px-4 py-2 text-lg font-extrabold tracking-[-0.04em] text-accent-pink shadow-sm sm:text-xl">
                {t("hero.card.zeroPrice")}
              </span>
            </div>

            <p className="mt-3 text-xs font-bold leading-5 text-white/72">
              {t("hero.card.accent")}
            </p>
          </div>
        </div>
      </div>
    </InnerPageHero>
  );
}
