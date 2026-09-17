import { useTranslation } from "react-i18next";

import Container from "../../components/ui/Container.jsx";

const reasons = [
  {
    key: "formats",
    number: "01",
    color: "text-brand",
    dot: "bg-brand",
  },
  {
    key: "teachers",
    number: "02",
    color: "text-accent-cyan",
    dot: "bg-accent-cyan",
  },
  {
    key: "techniques",
    number: "03",
    color: "text-accent-pink",
    dot: "bg-accent-pink",
  },
  {
    key: "materials",
    number: "04",
    color: "text-brand",
    dot: "bg-brand",
  },
  {
    key: "atmosphere",
    number: "05",
    color: "text-accent-cyan",
    dot: "bg-accent-cyan",
  },
  {
    key: "beginners",
    number: "06",
    color: "text-accent-pink",
    dot: "bg-accent-pink",
  },
  {
    key: "ages",
    number: "07",
    color: "text-brand",
    dot: "bg-brand",
  },
];

export default function HomeWhyUs() {
  const { t } = useTranslation("home");

  return (
    <section
      className="relative isolate overflow-hidden bg-surface-aqua py-20 sm:py-24 lg:py-28 xl:py-32"
      aria-labelledby="home-why-us-title"
    >
      <div
        className="pointer-events-none absolute -left-40 top-10 size-[28rem] rounded-full bg-white/60 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-32 bottom-0 size-80 rounded-full bg-accent-cyan/6 blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(520px,1.1fr)] lg:gap-16 xl:gap-24">
          <div>
            <p className="flex items-center gap-4 text-[11px] font-extrabold uppercase tracking-[0.2em] text-accent-cyan sm:text-xs">
              <span
                className="h-0.5 w-8 rounded-full bg-current"
                aria-hidden="true"
              />

              {t("whyUs.eyebrow")}
            </p>

            <h2
              id="home-why-us-title"
              className="mt-8 max-w-3xl text-[clamp(2.7rem,5vw,5.25rem)] font-extrabold leading-[0.98] tracking-[-0.055em] text-ink"
            >
              {t("whyUs.title")}
            </h2>
          </div>

          <ol className="border-y border-ink/10">
            {reasons.map((reason) => (
              <li
                key={reason.key}
                className="group grid grid-cols-[2.5rem_minmax(0,1fr)_auto] items-center gap-3 border-b border-ink/10 py-5 last:border-b-0 sm:grid-cols-[3rem_minmax(0,1fr)_auto] sm:gap-5 sm:py-6"
              >
                <span
                  className={`text-xs font-extrabold tabular-nums ${reason.color}`}
                >
                  {reason.number}
                </span>

                <p className="text-sm font-extrabold leading-6 tracking-[-0.015em] text-ink transition-transform duration-300 group-hover:translate-x-1 sm:text-base sm:leading-7">
                  {t(`whyUs.reasons.${reason.key}`)}
                </p>

                <span
                  className={`size-2 rounded-full opacity-35 transition-all duration-300 group-hover:scale-150 group-hover:opacity-100 ${reason.dot}`}
                  aria-hidden="true"
                />
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-16 border-t border-ink/10 pt-10 sm:mt-20 sm:pt-12 lg:mt-24 lg:pt-14">
          <div className="flex max-w-5xl items-start gap-5 sm:gap-7">
            <span
              className="flex size-12 shrink-0 items-center justify-center rounded-full border border-accent-pink/15 bg-white/80 text-accent-pink shadow-[0_10px_30px_rgba(51,39,73,0.06)] sm:size-14"
              aria-hidden="true"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="size-5 sm:size-6"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
              </svg>
            </span>

            <p className="pt-1 text-lg font-extrabold leading-8 tracking-[-0.025em] text-ink sm:text-2xl sm:leading-10">
              <span className="block">
                {t("whyUs.statementLead")}
              </span>

              <span className="mt-1 block text-brand sm:mt-2">
                {t("whyUs.statementAccent")}
              </span>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}