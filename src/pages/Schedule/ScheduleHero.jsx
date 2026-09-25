import { useTranslation } from "react-i18next";

import InnerPageHero from "../../components/sections/InnerPageHero.jsx";

export default function ScheduleHero() {
  const { t } = useTranslation("schedule");
  const weekDays = t("hero.card.weekDays", { returnObjects: true });

  return (
    <InnerPageHero
      titleId="schedule-hero-title"
      eyebrow={t("hero.eyebrow")}
      title={t("hero.title")}
      description={t("hero.description")}
      pageNumber="04 / 06"
      accent="cyan"
    >
      <div className="relative mx-auto max-w-xl overflow-hidden rounded-[2rem] border border-white/90 bg-white/88 p-3 shadow-[0_26px_85px_rgba(51,39,73,0.13)] backdrop-blur-xl sm:rounded-[2.5rem] sm:p-4">
        <div
          className="pointer-events-none absolute -right-16 -top-20 size-52 rounded-full bg-accent-cyan/10 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-surface-aqua via-white to-surface-lilac p-5 sm:rounded-[2rem] sm:p-7">
          <div
            className="pointer-events-none absolute -right-12 -top-14 size-44 rounded-full border-[28px] border-accent-cyan/7"
            aria-hidden="true"
          />

          <div className="relative flex items-center justify-between gap-4">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-accent-cyan sm:text-xs">
              {t("hero.card.label")}
            </p>

            <span className="flex items-center gap-2 rounded-full border border-white bg-white/75 px-3 py-2 text-[9px] font-bold text-muted shadow-sm sm:text-[10px]">
              <span
                className="size-2 rounded-full bg-accent-pink shadow-[0_0_0_4px_rgba(239,79,136,0.10)]"
                aria-hidden="true"
              />
              {t("hero.card.status")}
            </span>
          </div>

          <div className="relative mt-7 flex items-start gap-4">
            <span
              className="flex size-12 shrink-0 items-center justify-center rounded-[1rem] bg-white text-accent-cyan shadow-[0_10px_28px_rgba(51,39,73,0.07)]"
              aria-hidden="true"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="size-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="5" width="18" height="16" rx="3" />
                <path d="M8 3v4M16 3v4M3 10h18" />
              </svg>
            </span>

            <div>
              <p className="max-w-sm text-2xl font-extrabold leading-tight tracking-[-0.04em] text-ink sm:text-[2rem]">
                {t("hero.card.scheduleTitle")}
              </p>
              <p className="mt-3 max-w-md text-sm leading-7 text-muted sm:text-base sm:leading-8">
                {t("hero.card.scheduleText")}
              </p>
            </div>
          </div>

          <ul className="relative mt-7 grid grid-cols-7 gap-1.5 sm:gap-2">
            {Array.isArray(weekDays) &&
              weekDays.map((day, index) => (
                <li
                  key={`${day}-${index}`}
                  className={`flex aspect-square min-w-0 items-center justify-center rounded-[0.85rem] border border-white/90 text-[9px] font-extrabold uppercase shadow-[0_7px_20px_rgba(51,39,73,0.05)] sm:rounded-[1rem] sm:text-xs ${
                    index % 3 === 0
                      ? "bg-surface-lilac text-brand"
                      : index % 3 === 1
                        ? "bg-white text-accent-cyan"
                        : "bg-surface-pink text-accent-pink"
                  }`}
                >
                  {day}
                </li>
              ))}
          </ul>
        </div>

        <a
          href="#schedule-calendar"
          className="group relative mt-3 flex items-center gap-4 overflow-hidden rounded-[1.5rem] bg-gradient-to-r from-surface-pink to-[#fff8fb] px-5 py-5 transition-transform duration-200 hover:-translate-y-0.5 sm:rounded-[2rem] sm:px-6"
          aria-label={t("hero.card.openSchedule")}
        >
          <div
            className="pointer-events-none absolute -bottom-12 -right-8 size-28 rounded-full bg-accent-pink/7"
            aria-hidden="true"
          />

          <span
            className="relative flex size-11 shrink-0 items-center justify-center rounded-full bg-white text-accent-pink shadow-[0_8px_22px_rgba(51,39,73,0.06)]"
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

          <div className="relative min-w-0 flex-1">
            <p className="text-base font-extrabold leading-6 text-ink sm:text-lg">
              {t("hero.card.individualTitle")}
            </p>
            <p className="mt-1 text-xs leading-5 text-muted sm:text-sm sm:leading-6">
              {t("hero.card.individualText")}
            </p>
          </div>

          <span
            className="relative flex size-10 shrink-0 items-center justify-center rounded-full bg-accent-pink text-lg text-white shadow-[0_8px_22px_rgba(239,79,136,0.2)] transition-transform duration-200 group-hover:translate-x-1"
            aria-hidden="true"
          >
            ↓
          </span>
        </a>
      </div>
    </InnerPageHero>
  );
}
