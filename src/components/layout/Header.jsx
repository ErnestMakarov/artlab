import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { useTranslation } from "react-i18next";

import Container from "../ui/Container.jsx";

const navigation = [
  { to: "/", label: "navigation.home", end: true },
  { to: "/about", label: "navigation.about" },
  { to: "/directions", label: "navigation.directions" },
  { to: "/prices", label: "navigation.prices" },
  { to: "/schedule", label: "navigation.schedule" },
  { to: "/gallery", label: "navigation.gallery" },
  { to: "/contacts", label: "navigation.contacts" },
];

const languages = ["et", "en", "ru"];

function desktopLinkClass({ isActive }) {
  return [
    "relative py-3 text-[13px] font-semibold whitespace-nowrap transition-colors duration-200",
    "after:absolute after:inset-x-0 after:-bottom-[21px] after:h-0.5 after:origin-center after:rounded-full after:bg-brand after:transition-transform after:duration-300",
    isActive
      ? "text-ink after:scale-x-100"
      : "text-muted hover:text-ink after:scale-x-0",
  ].join(" ");
}

function mobileLinkClass({ isActive }) {
  return [
    "flex items-center justify-between border-b border-line/80 py-4 text-2xl font-semibold tracking-[-0.03em] transition-colors",
    isActive ? "text-brand" : "text-ink hover:text-brand",
  ].join(" ");
}

function LanguageSwitcher({ className = "" }) {
  const { t, i18n } = useTranslation("common");
  const currentLanguage = (i18n.resolvedLanguage || "et").split("-")[0];

  function changeLanguage(language) {
    localStorage.setItem("artlab-language", language);
    i18n.changeLanguage(language);
  }

  return (
    <div
      className={`flex items-center rounded-full border border-white/80 bg-white/65 p-1 shadow-[0_8px_24px_rgba(51,39,73,0.08)] backdrop-blur-xl ${className}`}
      role="group"
      aria-label={t("language.label")}
    >
      {languages.map((language) => {
        const isActive = currentLanguage === language;

        return (
          <button
            key={language}
            type="button"
            onClick={() => changeLanguage(language)}
            className={`min-w-8 rounded-full px-2 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.08em] transition-all duration-200 ${
              isActive
                ? "bg-ink text-white shadow-sm"
                : "text-muted hover:bg-white hover:text-ink"
            }`}
            aria-pressed={isActive}
            aria-label={t("language.change", {
              language: t(`language.names.${language}`),
            })}
          >
            {language}
          </button>
        );
      })}
    </div>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();
  const { t, i18n } = useTranslation("common");

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 12);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const language = (i18n.resolvedLanguage || "et").split("-")[0];
    document.documentElement.lang = language;

    function syncDocumentLanguage(nextLanguage) {
      document.documentElement.lang = nextLanguage.split("-")[0];
    }

    i18n.on("languageChanged", syncDocumentLanguage);

    return () => {
      i18n.off("languageChanged", syncDocumentLanguage);
    };
  }, [i18n]);

  useEffect(() => {
    if (!isMenuOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event) {
      if (event.key === "Escape") setIsMenuOpen(false);
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1280px)");

    function closeMenuOnDesktop(event) {
      if (event.matches) setIsMenuOpen(false);
    }

    desktopQuery.addEventListener("change", closeMenuOnDesktop);

    return () => {
      desktopQuery.removeEventListener("change", closeMenuOnDesktop);
    };
  }, []);

  return (
    <>
      <a
        href="#main-content"
        className="fixed left-4 top-3 z-[70] -translate-y-20 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white transition-transform focus:translate-y-0"
      >
        {t("accessibility.skipToContent")}
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-2xl transition-all duration-300 ${
          isScrolled
            ? "border-white/80 bg-white/[0.78] shadow-[0_12px_45px_rgba(51,39,73,0.10)]"
            : "border-white/60 bg-white/[0.62] shadow-[0_5px_25px_rgba(51,39,73,0.05)]"
        }`}
      >
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/35 via-transparent to-brand/5"
          aria-hidden="true"
        />

        <Container className="relative grid h-16 grid-cols-[1fr_auto_1fr] items-center sm:h-[72px] xl:h-20">
          <Link
            to="/"
            className="relative z-[60] inline-flex w-fit items-center justify-self-start rounded-md focus-visible:outline-offset-4"
            aria-label={t("navigation.home")}
            onClick={() => setIsMenuOpen(false)}
          >
            <img
              src="/images/brand/artlab-logo.png"
              alt="ART Lab"
              width="70"
              height="60"
              className="h-11 w-auto object-contain sm:h-[52px]"
            />
          </Link>

          <nav
            className="hidden items-center justify-self-center gap-5 xl:flex 2xl:gap-7"
            aria-label={t("navigation.ariaLabel")}
          >
            {navigation.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={desktopLinkClass}
              >
                {t(item.label)}
              </NavLink>
            ))}
          </nav>

          <div className="relative z-[60] flex items-center justify-self-end gap-2 sm:gap-3">
            <LanguageSwitcher className="hidden sm:flex" />

            <Link
              to="/contacts#booking"
              className="group hidden min-h-11 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand to-[#7d45dc] px-6 text-sm font-bold text-white shadow-button transition-all duration-200 hover:-translate-y-0.5 hover:shadow-button-hover xl:inline-flex"
            >
              {t("actions.book")}
              <span className="transition-transform group-hover:translate-x-0.5" aria-hidden="true">
                →
              </span>
            </Link>

            <button
              type="button"
              className="flex size-11 items-center justify-center rounded-full border border-white/90 bg-white/70 text-ink shadow-sm backdrop-blur-xl transition-colors hover:text-brand xl:hidden"
              onClick={() => setIsMenuOpen((current) => !current)}
              aria-label={
                isMenuOpen
                  ? t("accessibility.closeMenu")
                  : t("accessibility.openMenu")
              }
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
            >
              <span className="relative block h-4 w-5" aria-hidden="true">
                <span
                  className={`absolute left-0 top-0.5 h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ${
                    isMenuOpen ? "translate-y-[6px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current transition-opacity duration-200 ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute bottom-0.5 left-0 h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ${
                    isMenuOpen ? "-translate-y-[6px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </Container>
      </header>

      <div
        id="mobile-navigation"
        className={`fixed inset-0 z-40 overflow-y-auto bg-white/[0.88] backdrop-blur-3xl transition-[opacity,visibility] duration-300 xl:hidden ${
          isMenuOpen
            ? "visible opacity-100"
            : "invisible pointer-events-none opacity-0"
        }`}
        aria-hidden={!isMenuOpen}
      >
        <div
          className="pointer-events-none absolute -right-24 top-20 size-72 rounded-full bg-brand/10 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -left-24 bottom-10 size-64 rounded-full bg-accent-cyan/10 blur-3xl"
          aria-hidden="true"
        />

        <Container className="relative flex min-h-full flex-col pb-6 pt-24 sm:pt-28">
          <nav
            className="flex flex-1 flex-col"
            aria-label={t("navigation.ariaLabel")}
          >
            {navigation.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={mobileLinkClass}
                tabIndex={isMenuOpen ? 0 : -1}
              >
                {t(item.label)}
                <span className="text-base text-brand" aria-hidden="true">
                  ↗
                </span>
              </NavLink>
            ))}
          </nav>

          <div className="mt-8 flex flex-col gap-4">
            <LanguageSwitcher className="w-fit sm:hidden" />

            <Link
              to="/contacts#booking"
              tabIndex={isMenuOpen ? 0 : -1}
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand to-[#7d45dc] px-7 text-base font-bold text-white shadow-button"
            >
              {t("actions.book")}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
}
