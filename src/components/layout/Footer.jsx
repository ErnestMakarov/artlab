import { Link } from "react-router";
import { useTranslation } from "react-i18next";

import logo from "../../assets/images/brand/artlab-logo.png";
import Container from "../ui/Container.jsx";

const navigation = [
  { to: "/", label: "navigation.home" },
  { to: "/about", label: "navigation.about" },
  { to: "/directions", label: "navigation.directions" },
  { to: "/prices", label: "navigation.prices" },
  { to: "/gallery", label: "navigation.gallery" },
  { to: "/contacts", label: "navigation.contacts" },
];

const instagramUrl = "https://www.instagram.com/artlab_est/";
const whatsappUrl = "https://wa.me/37256637800";

const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Peterburi+tee+46+Tallinn";

export default function Footer() {
  const { t } = useTranslation("common");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white">
      <Container>
        <div
          className="h-px bg-gradient-to-r from-brand via-accent-pink to-accent-cyan"
          aria-hidden="true"
        />

        <div className="grid gap-10 py-14 sm:grid-cols-2 sm:py-16 lg:grid-cols-[1.15fr_0.8fr_1fr_1fr] lg:gap-12 xl:gap-20 xl:py-20">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              to="/"
              className="inline-flex rounded-md focus-visible:outline-offset-4"
              aria-label={t("navigation.home")}
            >
              <img
                src={logo}
                alt="ART Lab"
                width="280"
                height="240"
                loading="lazy"
                decoding="async"
                className="h-[74px] w-[88px] object-contain"
              />
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-7 text-muted">
              {t("footer.description")}
            </p>
          </div>

          <nav aria-label={t("footer.navigationTitle")}>
            <h2 className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-accent-cyan sm:text-xs">
              {t("footer.navigationTitle")}
            </h2>

            <ul className="mt-5 space-y-3">
              {navigation.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="group inline-flex items-center gap-2 text-sm font-semibold text-muted transition-colors hover:text-brand"
                  >
                    <span
                      className="h-px w-0 bg-brand transition-all duration-200 group-hover:w-3"
                      aria-hidden="true"
                    />

                    {t(item.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-accent-cyan sm:text-xs">
              {t("footer.contactsTitle")}
            </h2>

            <address className="mt-5 space-y-3 text-sm font-semibold not-italic leading-6 text-muted">
              <p>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-brand"
                >
                  {t("footer.address")}
                </a>
              </p>

              <p>
                <a
                  href="tel:+37256637800"
                  className="transition-colors hover:text-brand"
                >
                  +372 566 378 00
                </a>
              </p>

              <p>
                <a
                  href="mailto:artlabtallinn@gmail.com"
                  className="break-all transition-colors hover:text-brand"
                >
                  artlabtallinn@gmail.com
                </a>
              </p>

              <p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-brand"
                >
                  WhatsApp
                </a>
              </p>
            </address>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <h2 className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-accent-cyan sm:text-xs">
              {t("footer.socialTitle")}
            </h2>

            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-5 inline-flex items-center gap-3 text-sm font-bold text-muted transition-colors hover:text-brand"
            >
              <span className="flex size-10 items-center justify-center rounded-full border border-line bg-white text-ink shadow-[0_8px_22px_rgba(51,39,73,0.06)] transition-colors group-hover:border-brand/25 group-hover:text-brand">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="size-[18px]"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                  />

                  <circle cx="12" cy="12" r="4" />

                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="0.8"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </span>

              @artlab_est
            </a>

            <Link
              to="/contacts#booking"
              className="group mt-7 inline-flex min-h-13 w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-brand to-[#7d45dc] px-6 text-center text-sm font-bold text-white shadow-button transition-all duration-200 hover:-translate-y-0.5 hover:shadow-button-hover sm:max-w-xs lg:max-w-none"
            >
              {t("footer.writeToUs")}

              <span
                className="transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              >
                →
              </span>
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-line py-6 text-xs leading-5 text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} {t("footer.copyright")}
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link
              to="/privacy"
              className="transition-colors hover:text-brand"
            >
              {t("footer.privacy")}
            </Link>

            <p>{t("footer.tagline")}</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}