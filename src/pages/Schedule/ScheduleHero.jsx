import { useTranslation } from "react-i18next";

import InnerPageHero from "../../components/sections/InnerPageHero.jsx";

export default function ScheduleHero() {
  const { t } = useTranslation("schedule");

  return (
    <InnerPageHero
      titleId="schedule-hero-title"
      eyebrow={t("hero.eyebrow")}
      title={t("hero.title")}
      description={t("hero.description")}
      pageNumber="04 / 06"
      accent="cyan"
    >
      <div className="relative mx-auto max-w-xl overflow-hidden rounded-[2rem] border border-white/90 bg-white/85 p-4 shadow-[0_24px_80px_rgba(51,39,73,0.12)] backdrop-blur-xl sm:rounded-[2.5rem] sm:p-6">
        <div
          className="pointer-events-none absolute -right-16 -top-20 size-52 rounded-full bg-accent-cyan/10 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative flex items-center justify-between gap-4 px-1 pb-4 sm:px-2 sm:pb-5">
          <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-accent-cyan sm:text-xs">
            {t("hero.card.label")}
          </p>

          <span className="flex items-center gap-2 text-[10px] font-bold text-muted sm:text-xs">
            <span
              className="size-2 rounded-full bg-accent-pink shadow-[0_0_0_5px_rgba(239,79,136,0.10)]"
              aria-hidden="true"
            />
            {t("hero.card.status")}
          </span>
        </div>

        <div className="relative grid gap-3 sm:grid-cols-2">
          <div className="flex min-h-40 flex-col justify-between rounded-[1.5rem] bg-gradient-to-br from-surface-lilac to-[#f3ecff] p-5 sm:min-h-48 sm:p-6">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-brand">
              {t("hero.card.groupLabel")}
            </p>

            <div className="mt-8">
              <span className="text-[4.5rem] font-extrabold leading-none tracking-[-0.08em] text-ink sm:text-[5.25rem]">
                {t("hero.card.groupCount")}
              </span>
              <p className="mt-2 max-w-[11rem] text-sm font-bold leading-6 text-ink">
                {t("hero.card.groupCaption")}
              </p>
            </div>
          </div>

          <div className="flex min-h-40 flex-col justify-between rounded-[1.5rem] bg-gradient-to-br from-surface-aqua to-[#e4f7f7] p-5 sm:min-h-48 sm:p-6">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-accent-cyan">
              {t("hero.card.weekLabel")}
            </p>

            <div className="mt-8">
              <span className="text-[4.5rem] font-extrabold leading-none tracking-[-0.08em] text-ink sm:text-[5.25rem]">
                {t("hero.card.dayCount")}
              </span>
              <p className="mt-2 max-w-[11rem] text-sm font-bold leading-6 text-ink">
                {t("hero.card.dayCaption")}
              </p>
            </div>
          </div>
        </div>

        <div className="relative mt-3 flex items-center gap-4 rounded-[1.35rem] bg-surface-pink px-5 py-4 sm:px-6">
          <span
            className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white text-accent-pink shadow-[0_8px_22px_rgba(51,39,73,0.06)]"
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
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 2" />
            </svg>
          </span>

          <div>
            <p className="text-sm font-extrabold text-ink">
              {t("hero.card.individualTitle")}
            </p>
            <p className="mt-1 text-xs leading-5 text-muted">
              {t("hero.card.individualText")}
            </p>
          </div>
        </div>
      </div>
    </InnerPageHero>
  );
}
