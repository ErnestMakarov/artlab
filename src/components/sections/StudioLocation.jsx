import { useId } from "react";
import { useTranslation } from "react-i18next";

import Container from "../ui/Container.jsx";

const studioAddress = "Peterburi tee 46, 11415 Tallinn, Estonia";
const studioPlaceId = "ChIJi9rZEqbskkYRbTs5cACbQ20";
const studioMapCid = "7873306999758863213";
const mapsUrl =
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(studioAddress)}&query_place_id=${studioPlaceId}`;
const directionsUrl =
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(studioAddress)}&destination_place_id=${studioPlaceId}`;
// Select this building directly: a text search can highlight multiple matches.
const mapEmbedUrl =
  `https://maps.google.com/maps?cid=${studioMapCid}&z=17&output=embed`;
const phone = "+372 566 378 00";
const phoneUrl = "tel:+37256637800";

function LocationIcon({ type = "pin", className = "size-5" }) {
  const paths = {
    pin: (
      <>
        <path d="M20 10c0 6-8 11-8 11S4 16 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    floor: <path d="M3 20h18M4 20v-5h5v-5h5V5h6v15" />,
    room: (
      <>
        <path d="M4 21h16M6 21V3h12v18" />
        <path d="M9 21V6h6v15M12.5 13h.01" />
      </>
    ),
    phone: (
      <path d="m7.2 3.8 2.8 3.4-1.5 2.2a15.2 15.2 0 0 0 6.1 6.1l2.2-1.5 3.4 2.8-.8 3c-.2.7-.8 1.2-1.6 1.2C9.6 20.5 3.5 14.4 3 6.2c0-.8.5-1.4 1.2-1.6l3-.8Z" />
    ),
    route: (
      <>
        <path d="m21 3-6.5 18-3.4-8.1L3 9.5 21 3Z" />
        <path d="m11.1 12.9 5-5" />
      </>
    ),
    arrow: <path d="M7 17 17 7M7 7h10v10" />,
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[type]}
    </svg>
  );
}

export default function StudioLocation({ id, className = "" }) {
  const headingId = useId();
  const { t, i18n } = useTranslation("common");
  const requestedLanguage = (i18n.resolvedLanguage || i18n.language || "et")
    .split("-")[0];
  const mapLanguage = ["et", "en", "ru"].includes(requestedLanguage)
    ? requestedLanguage
    : "et";

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`relative isolate overflow-hidden bg-gradient-to-br from-surface-lilac via-white to-surface-aqua py-16 sm:py-20 lg:py-24 ${className}`}
    >
      <div
        className="pointer-events-none absolute -left-32 top-0 size-80 rounded-full bg-accent-pink/8 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 size-96 rounded-full bg-brand/8 blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white p-5 shadow-[0_28px_90px_rgba(51,39,73,0.10)] sm:rounded-[2.75rem] sm:p-8 lg:p-10 xl:p-12">
          <div
            className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand via-accent-pink to-accent-cyan"
            aria-hidden="true"
          />

          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-10 xl:gap-14">
            <div className="min-w-0 py-2 sm:py-3">
              <p className="flex items-center gap-3 text-[10px] font-extrabold uppercase tracking-[0.18em] text-accent-pink sm:text-xs">
                <span className="h-0.5 w-8 rounded-full bg-current" aria-hidden="true" />
                {t("location.eyebrow")}
              </p>

              <h2
                id={headingId}
                className="mt-5 max-w-xl text-[clamp(2.35rem,4.2vw,4.5rem)] font-extrabold leading-[1.02] tracking-[-0.055em] text-balance text-ink"
              >
                {t("location.title")}
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-7 text-muted sm:text-base">
                {t("location.description")}
              </p>

              <address className="mt-7 not-italic sm:mt-8">
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex w-fit items-start gap-3 rounded-xl text-ink transition-colors hover:text-brand sm:gap-4"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-surface-lilac text-brand sm:size-12">
                    <LocationIcon className="size-6" />
                  </span>
                  <span className="min-w-0 pt-0.5">
                    <span className="block text-[10px] font-extrabold uppercase tracking-[0.13em] text-muted sm:text-xs">
                      {t("location.addressLabel")}
                    </span>
                    <span className="mt-1 block text-lg font-extrabold leading-snug tracking-[-0.025em] sm:text-2xl">
                      {t("location.address")}
                    </span>
                  </span>
                  <LocationIcon
                    type="arrow"
                    className="mt-1 size-4 shrink-0 text-brand/60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 sm:size-5"
                  />
                </a>
              </address>

              <dl className="mt-6 grid grid-cols-2 gap-3 sm:gap-4">
                {[
                  { type: "floor", label: "floorLabel", value: "4", surface: "bg-surface-lilac", color: "text-brand" },
                  { type: "room", label: "roomLabel", value: "417", surface: "bg-surface-pink", color: "text-accent-pink" },
                ].map((item) => (
                  <div key={item.type} className={`rounded-[1.4rem] px-4 py-4 sm:px-5 sm:py-5 ${item.surface}`}>
                    <dt className="flex items-center gap-2 text-xs font-bold text-muted sm:text-sm">
                      <LocationIcon type={item.type} className={`size-4 shrink-0 ${item.color}`} />
                      {t(`location.${item.label}`)}
                    </dt>
                    <dd className={`mt-2 text-4xl font-extrabold leading-none tracking-[-0.055em] sm:text-5xl ${item.color}`}>
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-5 rounded-[1.4rem] border border-accent-cyan/15 bg-surface-aqua px-4 py-4 sm:px-5">
                <p className="text-sm font-extrabold text-ink">
                  {t("location.helpTitle")}
                </p>
                <p className="mt-1.5 text-sm leading-6 text-muted">
                  {t("location.helpDescription")}
                </p>
                <a
                  href={phoneUrl}
                  aria-label={t("location.callLabel", { phone })}
                  className="mt-1 inline-flex min-h-11 items-center gap-2.5 rounded-lg text-base font-extrabold tracking-[-0.02em] text-brand transition-colors hover:text-brand-dark sm:text-lg"
                >
                  <LocationIcon type="phone" className="size-4 shrink-0" />
                  {phone}
                </a>
              </div>

              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-6 inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-brand to-[#7d45dc] px-6 text-center text-sm font-extrabold text-white shadow-button transition-all duration-200 hover:-translate-y-0.5 hover:shadow-button-hover sm:w-auto sm:px-7"
              >
                <LocationIcon type="route" className="size-5 shrink-0" />
                {t("location.directions")}
                <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
              </a>
            </div>

            <div className="flex min-w-0 flex-col overflow-hidden rounded-[1.5rem] border border-line bg-surface-aqua sm:rounded-[2rem]">
              <div className="flex items-center justify-between gap-4 border-b border-line bg-white px-4 py-4 sm:px-6 sm:py-5">
                <div className="flex min-w-0 items-center gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                    <LocationIcon className="size-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-base font-extrabold tracking-[-0.025em] text-ink">ART Lab</p>
                    <p className="mt-0.5 text-xs leading-5 text-muted">{t("location.mapLabel")}</p>
                  </div>
                </div>
                <span className="shrink-0 rounded-full bg-surface-lilac px-3 py-2 text-[10px] font-extrabold uppercase tracking-[0.1em] text-brand">Tallinn</span>
              </div>

              <div className="relative h-[340px] sm:h-[420px] lg:h-auto lg:min-h-[420px] lg:flex-1">
                <iframe
                  src={`${mapEmbedUrl}&hl=${mapLanguage}`}
                  title={t("location.mapTitle", { address: t("location.address") })}
                  width="640"
                  height="560"
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="absolute inset-0 block h-full w-full border-0"
                />
              </div>

              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-14 items-center justify-between gap-3 border-t border-line bg-white px-4 py-4 text-sm font-extrabold text-brand transition-colors hover:bg-surface-lilac sm:px-6"
              >
                {t("location.openMap")}
                <LocationIcon type="arrow" className="size-5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
