import { useId, useState } from "react";
import { useTranslation } from "react-i18next";

import reviewsData from "../../data/reviews.json";
import Container from "../ui/Container.jsx";

const cardTones = [
  "border-brand/15 bg-surface-lilac",
  "border-accent-cyan/20 bg-surface-aqua",
  "border-accent-pink/15 bg-surface-pink",
];
const cardAngles = ["lg:-rotate-1", "lg:rotate-1", "lg:-rotate-[0.6deg]"];

function Stars({ rating }) {
  return (
    <span className="flex gap-1 text-[#d3900b]" aria-hidden="true">
      {Array.from({ length: 5 }, (_, index) => (
        <svg key={index} viewBox="0 0 24 24" className="size-4" fill={index < rating ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5">
          <path d="m12 2.5 2.9 5.9 6.5.9-4.7 4.6 1.1 6.5-5.8-3.1-5.8 3.1 1.1-6.5L2.6 9.3l6.5-.9L12 2.5Z" />
        </svg>
      ))}
    </span>
  );
}

function Arrow({ className = "size-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M7 17 17 7M7 7h10v10" />
    </svg>
  );
}

function getPreview(text) {
  if (text.length <= 300) return text;
  const beginning = text.slice(0, 280);
  const lastSpace = beginning.lastIndexOf(" ");
  return `${beginning.slice(0, lastSpace > 180 ? lastSpace : 280).trimEnd()}…`;
}

function ReviewCard({ review, language, index, t }) {
  const [expanded, setExpanded] = useState(false);
  const textId = useId();
  const author = review.author || t(`authors.${review.authorLabel || "parent"}`);
  const textLanguage = review.text[language] ? language : "ru";
  const text = review.text[textLanguage] || "";
  const preview = getPreview(text);
  const isLong = preview !== text;
  const isGoogleReview = review.source === "google";

  return (
    <li className={`min-w-0 ${index === 0 ? "sm:col-span-2" : ""}`}>
      <figure className={`relative m-0 h-full rounded-[1.6rem] border p-6 shadow-[0_12px_38px_rgba(51,39,73,0.065)] transition-transform duration-200 motion-safe:hover:rotate-0 sm:p-7 ${cardTones[index % cardTones.length]} ${cardAngles[index % cardAngles.length]}`}>
        <div className="mb-4 flex min-h-7 items-center justify-between gap-4">
          <span className="font-serif text-5xl leading-none text-brand/50" aria-hidden="true">“</span>
          {isGoogleReview && review.rating ? (
            <span role="img" aria-label={t("ratingAria", { rating: review.rating, scale: 5 })}>
              <Stars rating={review.rating} />
            </span>
          ) : (
            <span className="size-2 rounded-full bg-accent-pink/60" aria-hidden="true" />
          )}
        </div>

        <blockquote>
          <p id={textId} lang={textLanguage} className={`${index === 0 ? "text-lg sm:text-xl" : "text-base"} whitespace-pre-line leading-[1.8] tracking-[-0.015em] text-ink [overflow-wrap:anywhere]`}>
            {expanded ? text : preview}
          </p>
        </blockquote>

        {isLong && (
          <button
            type="button"
            aria-expanded={expanded}
            aria-controls={textId}
            aria-label={t(expanded ? "collapseAria" : "expandAria", { author })}
            onClick={() => setExpanded((value) => !value)}
            className="mt-2 inline-flex min-h-11 items-center gap-2 rounded-lg text-xs font-extrabold text-brand underline decoration-brand/25 underline-offset-4 transition-colors hover:text-brand-dark"
          >
            {t(expanded ? "collapse" : "expand")}
            <span aria-hidden="true">{expanded ? "−" : "+"}</span>
          </button>
        )}

        <figcaption className="mt-5 flex items-center gap-3 border-t border-ink/8 pt-4">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white bg-white/85 text-sm font-extrabold text-brand" aria-hidden="true">
            {review.author ? Array.from(review.author)[0] : "♡"}
          </span>
          <span className="min-w-0">
            <span className="block text-xs font-extrabold leading-5 text-ink [overflow-wrap:anywhere]">{author}</span>
            {isGoogleReview ? (
              <a href={reviewsData.settings.googleMapsUrl} target="_blank" rel="noopener noreferrer" aria-label={t("sourceAria", { author })} className="inline-flex min-h-8 items-center gap-1.5 rounded text-[11px] font-medium text-muted underline decoration-muted/25 underline-offset-4 hover:text-brand">
                Google Maps <Arrow className="size-3" />
              </a>
            ) : (
              <span className="mt-1 block text-[11px] leading-5 text-muted">{t("sources.message")}</span>
            )}
          </span>
        </figcaption>
      </figure>
    </li>
  );
}

function GoogleRating({ t }) {
  const { googleRating, googleMapsUrl } = reviewsData.settings;
  if (!googleRating) return null;

  return (
    <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" aria-label={t("googleRatingAria", googleRating)} className="group mt-8 flex w-full max-w-sm items-center gap-5 rounded-[1.5rem] border border-brand/12 bg-white px-5 py-5 shadow-[0_12px_34px_rgba(51,39,73,0.06)] transition-colors hover:border-brand/35 sm:px-6">
      <span className="text-5xl font-extrabold leading-none tracking-[-0.07em] text-ink">{googleRating.value}<span className="ml-1 text-base font-bold tracking-normal text-muted">/ {googleRating.scale}</span></span>
      <span className="min-w-0 flex-1">
        <Stars rating={googleRating.value} />
        <span className="mt-2 block text-xs font-extrabold text-ink">{t("googleRatingLabel")}</span>
        <span className="mt-1 block text-[11px] leading-5 text-muted">Google Maps</span>
      </span>
      <Arrow className="size-5 shrink-0 text-brand transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  );
}

export default function ReviewsSection({ variant = "home", id, className = "" }) {
  const headingId = useId();
  const { t, i18n } = useTranslation("reviews");
  const requestedLanguage = (i18n.resolvedLanguage || i18n.language || "et").split("-")[0];
  const language = ["et", "en", "ru"].includes(requestedLanguage) ? requestedLanguage : "et";
  const reviews = reviewsData[variant];
  if (!Array.isArray(reviews) || reviews.length === 0) return null;

  return (
    <section id={id} aria-labelledby={headingId} className={`relative isolate overflow-hidden bg-white py-16 sm:py-20 lg:py-28 ${className}`}>
      <div className="pointer-events-none absolute -right-40 top-0 size-[32rem] rounded-full bg-surface-lilac blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-40 bottom-0 size-80 rounded-full bg-surface-aqua blur-3xl" aria-hidden="true" />

      <Container className="relative">
        <div className="grid min-w-0 gap-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-14 xl:gap-24">
          <div className="min-w-0 lg:sticky lg:top-28 lg:self-start">
            <p className="flex items-center gap-3 text-[10px] font-extrabold uppercase tracking-[0.18em] text-brand sm:text-xs">
              <span className="h-0.5 w-7 rounded-full bg-current" aria-hidden="true" />
              {t(`pages.${variant}.eyebrow`)}
            </p>
            <h2 id={headingId} className="mt-5 max-w-xl text-[clamp(2.4rem,3.9vw,4.2rem)] font-extrabold leading-[1.06] tracking-[-0.055em] text-balance text-ink">
              {t(`pages.${variant}.title`)}{" "}
              <span className="font-serif font-normal italic tracking-[-0.04em] text-brand">{t(`pages.${variant}.accent`)}</span>
            </h2>
            <p className="mt-6 max-w-md text-sm leading-7 text-muted sm:text-base sm:leading-8">{t(`pages.${variant}.description`)}</p>

            {variant === "home" && <GoogleRating t={t} />}

            <a href={variant === "home" ? reviewsData.settings.googleMapsUrl : reviewsData.settings.instagramUrl} target="_blank" rel="noopener noreferrer" className="group mt-7 inline-flex min-h-11 items-center gap-2 rounded-lg text-sm font-extrabold text-brand underline decoration-brand/25 underline-offset-8 hover:text-brand-dark">
              {t(variant === "home" ? "googleLink" : "instagramLink")}
              <Arrow className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            {language !== "ru" && <p className="mt-4 max-w-md text-[11px] leading-5 text-muted">{t("translationNote")}</p>}
          </div>

          <ul className="grid min-w-0 items-start gap-5 sm:grid-cols-2 sm:gap-6 lg:py-2" aria-label={t(`pages.${variant}.listLabel`)}>
            {reviews.map((review, index) => (
              <ReviewCard key={`${variant}-${review.id}-${language}`} review={review} language={language} index={index} t={t} />
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
