import { useTranslation } from "react-i18next";

import InnerPageHero from "../../components/sections/InnerPageHero.jsx";

const cardStyles = [
  {
    number: "text-brand",
    dot: "bg-brand",
    surface: "bg-surface-lilac",
    rotate: "-rotate-2",
  },
  {
    number: "text-accent-cyan",
    dot: "bg-accent-cyan",
    surface: "bg-surface-aqua",
    rotate: "rotate-1",
  },
  {
    number: "text-accent-pink",
    dot: "bg-accent-pink",
    surface: "bg-surface-pink",
    rotate: "-rotate-1",
  },
];

export default function DirectionsHero() {
  const { t } = useTranslation("directions");
  const cards = t("hero.cards", { returnObjects: true });

  return (
    <InnerPageHero
      titleId="directions-hero-title"
      eyebrow={t("hero.eyebrow")}
      title={t("hero.title")}
      description={t("hero.description")}
      pageNumber="02 / 05"
      accent="brand"
    >
      <div className="mx-auto max-w-xl rounded-[2rem] border border-white/90 bg-white/75 p-4 shadow-[0_24px_75px_rgba(51,39,73,0.11)] backdrop-blur-xl sm:p-6">
        <div className="grid gap-3">
          {Array.isArray(cards) &&
            cards.map((card, index) => {
              const style = cardStyles[index];

              return (
                <div
                  key={card}
                  className={`flex min-h-20 items-center gap-5 rounded-[1.35rem] border border-white/90 px-5 py-4 shadow-[0_10px_30px_rgba(51,39,73,0.06)] transition-transform duration-300 hover:rotate-0 ${style.surface} ${style.rotate}`}
                >
                  <span
                    className={`text-xs font-extrabold tracking-[0.15em] ${style.number}`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="h-8 w-px bg-line" aria-hidden="true" />
                  <span className="flex-1 text-sm font-extrabold leading-6 text-ink sm:text-base">
                    {card}
                  </span>
                  <span
                    className={`size-2.5 shrink-0 rounded-full ${style.dot}`}
                    aria-hidden="true"
                  />
                </div>
              );
            })}
        </div>
      </div>
    </InnerPageHero>
  );
}
