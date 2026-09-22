import { useTranslation } from "react-i18next";

import Container from "../../components/ui/Container.jsx";

const itemStyles = [
  {
    number: "text-brand",
    surface: "bg-surface-lilac",
    dot: "bg-brand",
  },
  {
    number: "text-accent-cyan",
    surface: "bg-white",
    dot: "bg-accent-cyan",
  },
  {
    number: "text-accent-pink",
    surface: "bg-surface-pink",
    dot: "bg-accent-pink",
  },
];

export default function DirectionsHowItWorks() {
  const { t } = useTranslation("directions");
  const items = t("howItWorks.items", { returnObjects: true });

  return (
    <section
      className="relative isolate overflow-hidden bg-surface-aqua py-20 sm:py-24 lg:py-28"
      aria-labelledby="directions-how-title"
    >
      <div
        className="pointer-events-none absolute -right-32 -top-28 size-80 rounded-full bg-brand/5 blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="grid gap-7 lg:grid-cols-[minmax(0,0.8fr)_minmax(360px,0.65fr)] lg:items-end lg:gap-20">
          <div>
            <p className="flex items-center gap-4 text-[10px] font-extrabold uppercase tracking-[0.2em] text-accent-cyan sm:text-xs">
              <span
                className="h-0.5 w-8 rounded-full bg-current"
                aria-hidden="true"
              />
              {t("howItWorks.eyebrow")}
            </p>

            <h2
              id="directions-how-title"
              className="mt-7 max-w-3xl text-[clamp(2.6rem,5vw,5rem)] font-extrabold leading-[0.97] tracking-[-0.055em] text-ink"
            >
              {t("howItWorks.title")}
            </h2>
          </div>

          <p className="max-w-xl text-base leading-8 text-muted sm:text-lg sm:leading-9">
            {t("howItWorks.description")}
          </p>
        </div>

        <div className="mt-11 grid gap-5 lg:mt-14 lg:grid-cols-3">
          {Array.isArray(items) &&
            items.map((item, index) => {
              const style = itemStyles[index];

              return (
                <article
                  key={item.title}
                  className={`relative overflow-hidden rounded-[1.75rem] border border-white/90 p-6 shadow-[0_18px_55px_rgba(51,39,73,0.07)] sm:p-8 ${style.surface}`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs font-extrabold tracking-[0.15em] ${style.number}`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`size-2.5 rounded-full ${style.dot}`}
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="mt-12 text-2xl font-extrabold leading-tight tracking-[-0.035em] text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-5 text-sm leading-7 text-muted sm:text-base sm:leading-8">
                    {item.description}
                  </p>
                </article>
              );
            })}
        </div>
      </Container>
    </section>
  );
}
