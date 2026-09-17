import { Link } from "react-router";
import { useTranslation } from "react-i18next";

import Container from "../ui/Container.jsx";
import giftCardBack from "../../assets/images/gift-cards/back.jpg";
import giftCardFront from "../../assets/images/gift-cards/front.jpg";

export default function GiftCardsCta({ className = "" }) {
  const { t } = useTranslation("common");

  return (
    <section
      className={`overflow-hidden bg-white py-16 sm:py-20 lg:py-24 ${className}`}
      aria-labelledby="gift-cards-title"
    >
      <Container>
        <div className="group relative isolate overflow-hidden rounded-[2rem] border border-white/80 bg-gradient-to-br from-[#f6efff] via-[#fbf5ff] to-[#eefafa] px-6 py-9 shadow-[0_24px_75px_rgba(51,39,73,0.10)] sm:rounded-[2.75rem] sm:px-10 sm:py-12 lg:px-14 lg:py-14 xl:px-20">
          <div
            className="pointer-events-none absolute -left-20 -top-24 size-64 rounded-full bg-brand/8 blur-3xl"
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute -bottom-28 right-1/4 size-72 rounded-full bg-accent-cyan/10 blur-3xl"
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute right-8 top-7 size-16 rounded-full bg-accent-pink/10 sm:size-24"
            aria-hidden="true"
          />

          <div className="relative grid items-center gap-9 lg:grid-cols-[minmax(0,0.82fr)_minmax(440px,1.18fr)] lg:gap-10 xl:gap-16">
            <div className="relative z-10">
              <p className="flex items-center gap-4 text-[10px] font-extrabold uppercase tracking-[0.2em] text-accent-pink sm:text-xs">
                <span
                  className="h-0.5 w-8 rounded-full bg-current"
                  aria-hidden="true"
                />

                {t("giftCards.eyebrow")}
              </p>

              <h2
                id="gift-cards-title"
                className="mt-7 max-w-2xl text-[clamp(2.35rem,4.4vw,4.75rem)] font-extrabold leading-[0.98] tracking-[-0.055em] text-ink"
              >
                {t("giftCards.title")}
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-muted sm:text-base sm:leading-8">
                {t("giftCards.description")}
              </p>

              <Link
                to="/contacts#booking"
                className="group/link mt-7 inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-brand to-[#7d45dc] px-7 text-center text-sm font-bold text-white shadow-button transition-all duration-200 hover:-translate-y-0.5 hover:shadow-button-hover sm:w-auto"
              >
                {t("giftCards.cta")}

                <span
                  className="transition-transform duration-200 group-hover/link:translate-x-1"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            </div>

            <div className="relative mx-auto min-h-[235px] w-full max-w-[650px] sm:min-h-[340px] lg:min-h-[360px]">
              <svg
                className="pointer-events-none absolute -right-4 bottom-2 w-44 text-accent-cyan/55 sm:w-60"
                viewBox="0 0 250 90"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M10 58C70 15 119 89 178 42C204 21 220 21 240 8"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>

              <div className="absolute left-[2%] top-[4%] w-[74%] -rotate-[7deg] overflow-hidden rounded-xl border-[5px] border-white bg-white shadow-[0_24px_55px_rgba(51,39,73,0.18)] transition-transform duration-500 group-hover:-translate-y-2 group-hover:-rotate-[5deg] sm:rounded-2xl sm:border-[7px]">
                <img
                  src={giftCardBack}
                  alt={t("giftCards.backAlt")}
                  width="1063"
                  height="709"
                  loading="lazy"
                  decoding="async"
                  className="aspect-[3/2] w-full object-cover"
                />
              </div>

              <div className="absolute bottom-[2%] right-[1%] w-[74%] rotate-[6deg] overflow-hidden rounded-xl border-[5px] border-white bg-white shadow-[0_28px_65px_rgba(51,39,73,0.22)] transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-[4deg] sm:rounded-2xl sm:border-[7px]">
                <img
                  src={giftCardFront}
                  alt={t("giftCards.frontAlt")}
                  width="1063"
                  height="709"
                  loading="lazy"
                  decoding="async"
                  className="aspect-[3/2] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}