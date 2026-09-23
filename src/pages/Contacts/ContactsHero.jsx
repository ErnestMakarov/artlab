import { useTranslation } from "react-i18next";

import InnerPageHero from "../../components/sections/InnerPageHero.jsx";

export default function ContactsHero() {
  const { t } = useTranslation("contacts");

  return (
    <InnerPageHero
      titleId="contacts-hero-title"
      eyebrow={t("hero.eyebrow")}
      title={t("hero.title")}
      description={t("hero.description")}
      pageNumber="06 / 06"
      accent="brand"
    >
      <div className="relative mx-auto max-w-xl overflow-hidden rounded-[2rem] border border-white/90 bg-white/80 p-5 shadow-[0_24px_80px_rgba(51,39,73,0.12)] backdrop-blur-xl sm:rounded-[2.5rem] sm:p-7">
        <div
          className="pointer-events-none absolute -right-20 -top-20 size-60 rounded-full bg-brand/10 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative flex items-center justify-between gap-4">
          <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-brand sm:text-xs">
            {t("hero.preview.label")}
          </p>
          <span className="flex items-center gap-2 text-[10px] font-bold text-muted sm:text-xs">
            <span
              className="size-2 rounded-full bg-accent-cyan shadow-[0_0_0_5px_rgba(42,175,180,0.10)]"
              aria-hidden="true"
            />
            {t("hero.preview.status")}
          </span>
        </div>

        <div className="relative mt-6 space-y-3">
          <div className="mr-8 rounded-[1.35rem] rounded-bl-md bg-surface-lilac px-5 py-4 text-sm font-bold leading-6 text-ink sm:mr-16 sm:text-base sm:leading-7">
            {t("hero.preview.question")}
          </div>

          <div className="ml-8 rounded-[1.35rem] rounded-br-md bg-gradient-to-r from-brand to-[#7d45dc] px-5 py-4 text-sm font-bold leading-6 text-white shadow-button sm:ml-16 sm:text-base sm:leading-7">
            {t("hero.preview.answer")}
          </div>
        </div>

        <div className="relative mt-5 flex items-center gap-3 rounded-[1.2rem] bg-surface-aqua px-4 py-3.5 text-xs font-bold leading-5 text-accent-cyan sm:px-5 sm:text-sm">
          <span
            className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white"
            aria-hidden="true"
          >
            ✓
          </span>
          {t("hero.preview.note")}
        </div>
      </div>
    </InnerPageHero>
  );
}
