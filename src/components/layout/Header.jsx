import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { useTranslation } from "react-i18next";

import Container from "../ui/Container.jsx";

const navigation = [
  { to: "/", label: "navigation.home", end: true },
  { to: "/about", label: "navigation.about" },
  { type: "directions" },
  { to: "/prices", label: "navigation.prices" },
  { to: "/schedule", label: "navigation.schedule" },
  { to: "/gallery", label: "navigation.gallery" },
  { to: "/contacts", label: "navigation.contacts" },
];

const directionLinks = [
  {
    to: "/directions",
    label: "navigation.directionsMenu.items.directions.title",
    description: "navigation.directionsMenu.items.directions.description",
    number: "01",
    tone: "brand",
  },
  {
    to: "/workshops",
    label: "navigation.directionsMenu.items.workshops.title",
    description: "navigation.directionsMenu.items.workshops.description",
    number: "02",
    tone: "cyan",
  },
  {
    to: "/celebrations",
    label: "navigation.directionsMenu.items.celebrations.title",
    description: "navigation.directionsMenu.items.celebrations.description",
    number: "03",
    tone: "pink",
  },
  {
    to: "/camp",
    label: "navigation.directionsMenu.items.camp.title",
    description: "navigation.directionsMenu.items.camp.description",
    number: "04",
    tone: "brand",
  },
];

const directionToneClasses = {
  brand: {
    number: "text-brand",
    hover: "group-hover/item:border-brand/20 group-hover/item:bg-surface-lilac",
  },
  cyan: {
    number: "text-accent-cyan",
    hover:
      "group-hover/item:border-accent-cyan/20 group-hover/item:bg-surface-aqua",
  },
  pink: {
    number: "text-accent-pink",
    hover:
      "group-hover/item:border-accent-pink/20 group-hover/item:bg-surface-pink",
  },
};

const languages = ["et", "en", "ru"];

function isDirectionsPath(pathname) {
  return directionLinks.some(
    ({ to }) => pathname === to || pathname.startsWith(`${to}/`),
  );
}

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

function DesktopDirectionsMenu({ pathname, t }) {
  const isActive = isDirectionsPath(pathname);

  return (
    <div className="group/directions relative flex items-center">
      <NavLink
        to="/directions"
        className={({ isActive: isMainPage }) =>
          desktopLinkClass({ isActive: isMainPage || isActive })
        }
        aria-haspopup="true"
      >
        <span className="inline-flex items-center gap-1.5">
          {t("navigation.directions")}
          <svg
            viewBox="0 0 12 12"
            fill="none"
            className="size-3 transition-transform duration-200 group-hover/directions:rotate-180 group-focus-within/directions:rotate-180"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="m3 4.5 3 3 3-3" />
          </svg>
        </span>
      </NavLink>

      <div className="invisible absolute left-1/2 top-full w-[430px] -translate-x-1/2 translate-y-2 pt-5 opacity-0 transition-[opacity,transform,visibility] duration-200 group-hover/directions:visible group-hover/directions:translate-y-0 group-hover/directions:opacity-100 group-focus-within/directions:visible group-focus-within/directions:translate-y-0 group-focus-within/directions:opacity-100">
        <div className="overflow-hidden rounded-[1.75rem] border border-white/90 bg-white/95 p-3 shadow-[0_24px_70px_rgba(51,39,73,0.16)] backdrop-blur-2xl">
          <div className="flex items-center justify-between px-3 pb-3 pt-2">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.19em] text-muted">
              {t("navigation.directionsMenu.eyebrow")}
            </p>
            <span className="text-[10px] font-bold text-muted/65">ART LAB</span>
          </div>

          <div className="grid gap-1.5">
            {directionLinks.map((item) => {
              const tone = directionToneClasses[item.tone];
              const itemIsActive = pathname === item.to;

              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={`group/item grid grid-cols-[42px_minmax(0,1fr)_24px] items-center gap-3 rounded-[1.15rem] border px-3 py-3 transition-all duration-200 ${
                    itemIsActive
                      ? "border-brand/20 bg-surface-lilac"
                      : `border-transparent ${tone.hover}`
                  }`}
                >
                  <span
                    className={`flex size-10 items-center justify-center rounded-full bg-white text-[10px] font-extrabold tracking-[0.12em] shadow-[0_6px_18px_rgba(51,39,73,0.07)] ${tone.number}`}
                  >
                    {item.number}
                  </span>

                  <span className="min-w-0">
                    <span className="block text-sm font-extrabold leading-5 text-ink">
                      {t(item.label)}
                    </span>
                    <span className="mt-0.5 block text-[11px] leading-4 text-muted">
                      {t(item.description)}
                    </span>
                  </span>

                  <span
                    className="text-lg text-brand transition-transform duration-200 group-hover/item:translate-x-1"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileDirectionsMenu({ isMenuOpen, pathname, t }) {
  const [isOpen, setIsOpen] = useState(false);
  const isActive = isDirectionsPath(pathname);

  useEffect(() => {
    setIsOpen(isActive);
  }, [isActive, pathname]);

  return (
    <div className="border-b border-line/80">
      <div className="grid grid-cols-[minmax(0,1fr)_48px] items-center gap-2">
        <NavLink
          to="/directions"
          className={`py-4 text-2xl font-semibold tracking-[-0.03em] transition-colors ${
            isActive ? "text-brand" : "text-ink hover:text-brand"
          }`}
          tabIndex={isMenuOpen ? 0 : -1}
        >
          {t("navigation.directions")}
        </NavLink>

        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className={`flex size-11 items-center justify-center justify-self-end rounded-full border transition-colors ${
            isOpen
              ? "border-brand/15 bg-surface-lilac text-brand"
              : "border-line bg-white/70 text-ink"
          }`}
          aria-expanded={isOpen}
          aria-controls="mobile-directions-submenu"
          aria-label={
            isOpen
              ? t("navigation.directionsMenu.close")
              : t("navigation.directionsMenu.open")
          }
          tabIndex={isMenuOpen ? 0 : -1}
        >
          <svg
            viewBox="0 0 16 16"
            fill="none"
            className={`size-4 transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="m4 6 4 4 4-4" />
          </svg>
        </button>
      </div>

      <div
        id="mobile-directions-submenu"
        className={`grid transition-[grid-template-rows,opacity] duration-300 ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="mb-4 grid gap-2 rounded-[1.5rem] border border-white/90 bg-white/65 p-2 shadow-[0_12px_35px_rgba(51,39,73,0.07)] backdrop-blur-xl">
            {directionLinks.map((item) => {
              const tone = directionToneClasses[item.tone];
              const itemIsActive = pathname === item.to;

              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  tabIndex={isMenuOpen && isOpen ? 0 : -1}
                  className={`grid grid-cols-[38px_minmax(0,1fr)_20px] items-center gap-3 rounded-[1rem] px-3 py-3 transition-colors ${
                    itemIsActive ? "bg-surface-lilac" : "hover:bg-white"
                  }`}
                >
                  <span
                    className={`flex size-9 items-center justify-center rounded-full bg-white text-[9px] font-extrabold tracking-[0.1em] shadow-sm ${tone.number}`}
                  >
                    {item.number}
                  </span>
                  <span className="min-w-0 text-sm font-extrabold leading-5 text-ink">
                    {t(item.label)}
                  </span>
                  <span className="text-brand" aria-hidden="true">
                    →
                  </span>
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
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
            className="relative z-[60] col-start-1 row-start-1 inline-flex w-fit items-center justify-self-start rounded-md focus-visible:outline-offset-4"
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
            className="col-start-2 row-start-1 hidden items-center justify-self-center gap-5 xl:flex 2xl:gap-7"
            aria-label={t("navigation.ariaLabel")}
          >
            {navigation.map((item) =>
              item.type === "directions" ? (
                <DesktopDirectionsMenu
                  key="directions"
                  pathname={pathname}
                  t={t}
                />
              ) : (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  className={desktopLinkClass}
                >
                  {t(item.label)}
                </NavLink>
              ),
            )}
          </nav>

          <div className="relative z-[60] col-start-3 row-start-1 flex items-center justify-self-end gap-2 sm:gap-3">
            <LanguageSwitcher className="hidden sm:flex" />

            <Link
              to="/contacts#booking"
              className="group hidden min-h-11 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand to-[#7d45dc] px-6 text-sm font-bold text-white shadow-button transition-all duration-200 hover:-translate-y-0.5 hover:shadow-button-hover xl:inline-flex"
            >
              {t("actions.book")}
              <span
                className="transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              >
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
            {navigation.map((item) =>
              item.type === "directions" ? (
                <MobileDirectionsMenu
                  key="directions"
                  isMenuOpen={isMenuOpen}
                  pathname={pathname}
                  t={t}
                />
              ) : (
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
              ),
            )}
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
