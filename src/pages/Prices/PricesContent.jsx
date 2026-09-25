import { Link } from "react-router";
import { useTranslation } from "react-i18next";

import Container from "../../components/ui/Container.jsx";

const lessonStyles = [
  {
    surface: "from-[#fbf9ff] to-[#f1ebff]",
    accent: "text-brand",
    dot: "bg-brand",
    soft: "bg-white/75",
    button: "bg-brand text-white shadow-button hover:shadow-button-hover",
  },
  {
    surface: "from-[#f8ffff] to-[#e8fafa]",
    accent: "text-accent-cyan",
    dot: "bg-accent-cyan",
    soft: "bg-white/75",
    button:
      "bg-accent-cyan text-white shadow-[0_10px_28px_rgba(42,175,180,0.22)] hover:shadow-[0_14px_34px_rgba(42,175,180,0.3)]",
  },
  {
    surface: "from-[#fffafd] to-[#ffedf4]",
    accent: "text-accent-pink",
    dot: "bg-accent-pink",
    soft: "bg-white/75",
    button:
      "bg-accent-pink text-white shadow-[0_10px_28px_rgba(239,79,136,0.2)] hover:shadow-[0_14px_34px_rgba(239,79,136,0.28)]",
  },
];

const lessonLinks = ["/schedule", "/contacts#booking", "/workshops"];

const campStyles = [
  {
    card: "border-brand/15 bg-gradient-to-br from-surface-lilac to-white text-ink shadow-[0_18px_50px_rgba(51,39,73,0.09)]",
    eyebrow: "text-brand",
    muted: "text-muted",
    pill: "bg-brand text-white",
    dot: "bg-brand",
  },
  {
    card: "border-accent-cyan/15 bg-gradient-to-br from-surface-aqua to-white text-ink shadow-[0_18px_50px_rgba(51,39,73,0.08)]",
    eyebrow: "text-accent-cyan",
    muted: "text-muted",
    pill: "bg-surface-aqua text-accent-cyan",
    dot: "bg-accent-cyan",
  },
  {
    card: "border-accent-pink/15 bg-gradient-to-br from-surface-pink to-white text-ink shadow-[0_18px_50px_rgba(51,39,73,0.08)]",
    eyebrow: "text-accent-pink",
    muted: "text-muted",
    pill: "bg-surface-pink text-accent-pink",
    dot: "bg-accent-pink",
  },
];

function ArrowIcon() {
  return (
    <span
      className="transition-transform duration-200 group-hover:translate-x-1"
      aria-hidden="true"
    >
      →
    </span>
  );
}

export default function PricesContent() {
  const { t } = useTranslation("prices");
  const lessonCards = t("lessons.cards", { returnObjects: true });
  const campCards = t("camp.cards", { returnObjects: true });

  return (
    <>
      <section
        className="relative isolate overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
        aria-labelledby="lesson-prices-title"
      >
        <div
          className="pointer-events-none absolute -left-32 top-28 size-80 rounded-full bg-surface-aqua blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-40 bottom-8 size-96 rounded-full bg-surface-pink blur-3xl"
          aria-hidden="true"
        />

        <Container className="relative">
          <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(300px,0.58fr)] lg:items-end lg:gap-16 xl:gap-24">
            <div>
              <p className="flex items-center gap-4 text-[10px] font-extrabold uppercase tracking-[0.2em] text-brand sm:text-xs">
                <span
                  className="h-0.5 w-8 rounded-full bg-current"
                  aria-hidden="true"
                />
                {t("lessons.eyebrow")}
              </p>

              <h2
                id="lesson-prices-title"
                className="mt-6 max-w-4xl text-balance text-[clamp(2.7rem,5vw,5.2rem)] font-extrabold leading-[0.96] tracking-[-0.06em] text-ink"
              >
                {t("lessons.title")}
              </h2>
            </div>

            <p className="max-w-xl text-base leading-8 text-muted sm:text-lg sm:leading-9">
              {t("lessons.description")}
            </p>
          </div>

          <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
            {Array.isArray(lessonCards) &&
              lessonCards.map((card, index) => {
                const style = lessonStyles[index] ?? lessonStyles[0];

                return (
                  <li
                    key={card.title}
                    className="min-w-0 md:last:col-span-2 lg:last:col-span-1"
                  >
                    <article
                      className={`group relative flex h-full min-h-[31rem] flex-col overflow-hidden rounded-[2rem] border border-white/90 bg-gradient-to-br p-6 shadow-[0_20px_65px_rgba(51,39,73,0.09)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_75px_rgba(51,39,73,0.14)] sm:p-7 ${style.surface}`}
                    >
                      <div
                        className={`pointer-events-none absolute -right-14 -top-16 size-44 rounded-full ${style.soft}`}
                        aria-hidden="true"
                      />

                      <div className="relative flex items-center justify-between gap-4">
                        <p
                          className={`text-[10px] font-extrabold uppercase tracking-[0.18em] sm:text-xs ${style.accent}`}
                        >
                          {card.eyebrow}
                        </p>
                        <span
                          className={`size-2.5 shrink-0 rounded-full ${style.dot}`}
                          aria-hidden="true"
                        />
                      </div>

                      <h3 className="relative mt-7 max-w-[15rem] text-[1.7rem] font-extrabold leading-[1.08] tracking-[-0.045em] text-ink sm:text-[2rem]">
                        {card.title}
                      </h3>

                      <div className="relative mt-7 flex flex-wrap items-end gap-x-2 gap-y-1 text-ink">
                        {card.pricePrefix && (
                          <span className="mb-2 text-sm font-extrabold uppercase tracking-[0.12em] text-muted">
                            {card.pricePrefix}
                          </span>
                        )}
                        <span className="text-[3.7rem] font-extrabold leading-none tracking-[-0.075em] sm:text-[4.25rem]">
                          {card.price}
                        </span>
                        <span className="mb-1.5 text-sm font-extrabold text-muted sm:text-base">
                          {card.unit}
                        </span>
                      </div>

                      <p className="relative mt-5 text-sm leading-7 text-muted sm:text-base sm:leading-8">
                        {card.description}
                      </p>

                      <div className="relative mt-6 rounded-[1.25rem] border border-white/90 bg-white/70 p-4 backdrop-blur-sm">
                        <p className={`text-sm font-extrabold leading-6 ${style.accent}`}>
                          {card.highlight}
                        </p>
                        <p className="mt-1 text-xs leading-5 text-muted">
                          {card.note}
                        </p>
                      </div>

                      <Link
                        to={lessonLinks[index] ?? "/contacts#booking"}
                        className={`group mt-auto inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full px-5 text-center text-sm font-extrabold transition-all duration-200 ${style.button}`}
                      >
                        {card.cta}
                        <ArrowIcon />
                      </Link>
                    </article>
                  </li>
                );
              })}
          </ul>

          <div className="mt-6 flex items-start gap-3 rounded-[1.5rem] border border-accent-cyan/10 bg-surface-aqua px-5 py-4 sm:items-center sm:px-6">
            <span
              className="mt-1 size-2.5 shrink-0 rounded-full bg-accent-cyan sm:mt-0"
              aria-hidden="true"
            />
            <p className="text-sm font-bold leading-6 text-ink">
              {t("lessons.note")}
            </p>
          </div>
        </Container>
      </section>

      <section
        className="bg-gradient-to-br from-surface-lilac via-white to-surface-aqua py-20 sm:py-24 lg:py-28"
        aria-labelledby="camp-prices-title"
      >
        <Container>
          <div className="relative isolate overflow-hidden rounded-[2.25rem] border border-white/90 bg-white/88 px-5 py-8 text-ink shadow-[0_24px_75px_rgba(51,39,73,0.1)] backdrop-blur-xl sm:rounded-[3rem] sm:px-8 sm:py-10 lg:px-12 lg:py-14 xl:px-14">
            <div
              className="pointer-events-none absolute -right-24 -top-28 size-80 rounded-full bg-brand/8 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-36 -left-20 size-72 rounded-full bg-accent-cyan/10 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(300px,0.58fr)] lg:items-end lg:gap-16">
              <div>
                <p className="flex items-center gap-4 text-[10px] font-extrabold uppercase tracking-[0.2em] text-brand sm:text-xs">
                  <span
                    className="h-0.5 w-8 rounded-full bg-current"
                    aria-hidden="true"
                  />
                  {t("camp.eyebrow")}
                </p>
                <h2
                  id="camp-prices-title"
                  className="mt-6 max-w-4xl text-balance text-[clamp(2.55rem,4.7vw,4.8rem)] font-extrabold leading-[0.96] tracking-[-0.055em]"
                >
                  {t("camp.title")}
                </h2>
              </div>

              <p className="max-w-xl text-base leading-8 text-muted sm:text-lg sm:leading-9">
                {t("camp.description")}
              </p>
            </div>

            <ul className="relative mt-10 grid gap-4 md:grid-cols-2 lg:mt-12 lg:grid-cols-3">
              {Array.isArray(campCards) &&
                campCards.map((card, index) => {
                  const style = campStyles[index] ?? campStyles[1];

                  return (
                    <li
                      key={card.title}
                      className="min-w-0 md:last:col-span-2 lg:last:col-span-1"
                    >
                      <article
                        className={`relative flex h-full min-h-[25rem] flex-col overflow-hidden rounded-[1.75rem] border p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-7 ${style.card}`}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <p
                            className={`text-[10px] font-extrabold uppercase tracking-[0.18em] sm:text-xs ${style.eyebrow}`}
                          >
                            {card.eyebrow}
                          </p>
                          <span
                            className={`mt-1 size-2.5 shrink-0 rounded-full ${style.dot}`}
                            aria-hidden="true"
                          />
                        </div>

                        <h3 className="mt-7 text-2xl font-extrabold leading-tight tracking-[-0.04em] sm:text-[1.7rem]">
                          {card.title}
                        </h3>

                        <div className="mt-7 flex flex-wrap items-end gap-x-2 gap-y-1">
                          {card.pricePrefix && (
                            <span className={`mb-2 text-xs font-extrabold uppercase tracking-[0.12em] ${style.muted}`}>
                              {card.pricePrefix}
                            </span>
                          )}
                          <span className="text-[3.6rem] font-extrabold leading-none tracking-[-0.075em] sm:text-[4rem]">
                            {card.price}
                          </span>
                          <span className={`mb-1.5 text-sm font-extrabold ${style.muted}`}>
                            {card.unit}
                          </span>
                        </div>

                        <p className={`mt-6 text-sm leading-7 sm:text-base sm:leading-8 ${style.muted}`}>
                          {card.description}
                        </p>

                        {card.badge && (
                          <p className={`mt-auto w-fit rounded-full px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.14em] ${style.pill}`}>
                            {card.badge}
                          </p>
                        )}
                      </article>
                    </li>
                  );
                })}
            </ul>

            <div className="relative mt-10 border-t border-line pt-8 lg:flex lg:items-end lg:justify-between lg:gap-12">
              <div className="max-w-2xl">
                <h3 className="text-[clamp(1.7rem,3vw,2.6rem)] font-extrabold leading-tight tracking-[-0.04em]">
                  {t("camp.cta.title")}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted sm:text-base">
                  {t("camp.cta.description")}
                </p>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:mt-0 lg:shrink-0">
                <Link
                  to="/contacts#booking"
                  className="group inline-flex min-h-13 items-center justify-center gap-3 rounded-full bg-gradient-to-r from-brand to-[#7d45dc] px-7 text-center text-sm font-extrabold text-white shadow-button transition-all duration-200 hover:-translate-y-0.5 hover:shadow-button-hover"
                >
                  {t("camp.cta.primary")}
                  <ArrowIcon />
                </Link>
                <Link
                  to="/schedule"
                  className="group inline-flex min-h-13 items-center justify-center gap-3 rounded-full border border-brand/25 bg-white px-7 text-center text-sm font-extrabold text-brand transition-colors duration-200 hover:border-brand hover:bg-surface-lilac"
                >
                  {t("camp.cta.secondary")}
                  <ArrowIcon />
                </Link>
              </div>
            </div>

            <p className="relative mt-6 text-xs leading-6 text-muted/75">
              {t("camp.note")}
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
