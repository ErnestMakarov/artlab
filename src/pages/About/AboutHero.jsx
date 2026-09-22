import { useTranslation } from "react-i18next";

import studioImage from "../../assets/images/home/artlab-studio-interior.jpg";
import InnerPageHero from "../../components/sections/InnerPageHero.jsx";

export default function AboutHero() {
  const { t } = useTranslation("about");

  return (
    <InnerPageHero
      titleId="about-hero-title"
      eyebrow={t("hero.eyebrow")}
      title={t("hero.title")}
      description={t("hero.description")}
      pageNumber="01 / 06"
      accent="cyan"
    >
      <div className="relative mx-auto max-w-2xl">
        <span
          className="absolute -left-5 -top-5 size-24 rounded-full bg-accent-pink sm:-left-7 sm:-top-7 sm:size-28"
          aria-hidden="true"
        />
        <span
          className="absolute -bottom-5 -right-5 size-28 rounded-full bg-accent-cyan/80 sm:-bottom-7 sm:-right-7 sm:size-32"
          aria-hidden="true"
        />

        <div className="relative overflow-hidden rounded-[2rem] border-[10px] border-white bg-white shadow-[0_26px_80px_rgba(51,39,73,0.15)] sm:rounded-[2.75rem] sm:border-[12px]">
          <img
            src={studioImage}
            alt={t("hero.imageAlt")}
            width="1600"
            height="900"
            decoding="async"
            fetchPriority="high"
            className="aspect-[16/11] w-full object-cover"
          />

          <p className="absolute bottom-4 left-4 rounded-full border border-white/80 bg-white/88 px-5 py-3 text-[10px] font-extrabold uppercase tracking-[0.15em] text-brand shadow-[0_10px_28px_rgba(51,39,73,0.12)] backdrop-blur-xl sm:bottom-5 sm:left-5 sm:text-xs">
            {t("hero.imageLabel")}
          </p>
        </div>
      </div>
    </InnerPageHero>
  );
}
