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
      pageNumber="03 / 05"
      accent="pink"
    >
      <div className="mx-auto max-w-xl overflow-hidden rounded-[2rem] border border-white/90 bg-white/85 p-5 shadow-[0_24px_80px_rgba(51,39,73,0.12)] backdrop-blur-xl sm:p-7">
        <div className="grid gap-4 sm:grid-cols-[0.8fr_1.2fr]">
          <div className="flex flex-col justify-between rounded-[1.5rem] bg-surface-lilac p-6">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-brand">
              {t("hero.card.label")}
            </p>

            <div className="mt-8">
              <div className="flex items-start gap-2 text-ink">
                <span className="text-[4.5rem] font-extrabold leading-none tracking-[-0.07em]">
                  {t("hero.card.price")}
                </span>
                <span className="mt-2 text-2xl font-extrabold">
                  {t("hero.card.currency")}
                </span>
              </div>
              <p className="mt-2 text-xs leading-5 text-muted">
                {t("hero.card.caption")}
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-[1.5rem] bg-surface-pink p-6">
            <span
              className="flex size-10 items-center justify-center rounded-full bg-white text-accent-pink shadow-[0_8px_20px_rgba(51,39,73,0.06)]"
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

            <div className="mt-8">
              <p className="text-sm leading-7 text-muted">
                {t("hero.card.condition")}
              </p>
              <p className="mt-3 text-base font-extrabold leading-7 text-accent-pink">
                {t("hero.card.accent")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </InnerPageHero>
  );
}
