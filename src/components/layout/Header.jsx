import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { useTranslation } from "react-i18next";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { t, i18n } = useTranslation("common");

  const languages = ["en", "et", "ru"];
  const currentLanguage = i18n.resolvedLanguage || "en";

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function changeLanguage(language) {
    i18n.changeLanguage(language);
    closeMenu();
  }

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="relative z-50 px-5 py-5 md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:px-8">
        <NavLink
          to="/"
          onClick={closeMenu}
          className="relative z-50 text-xl font-bold"
        >
          LOGO
        </NavLink>

        <nav className="hidden items-center gap-8 md:flex">
          <NavLink to="/">{t("navigation.home")}</NavLink>

          <NavLink to="/about">
            {t("navigation.about")}
          </NavLink>

          <NavLink to="/contacts">
            {t("navigation.contacts")}
          </NavLink>
        </nav>

        <div className="hidden justify-self-end gap-3 md:flex">
          {languages.map((language) => (
            <button
              key={language}
              type="button"
              onClick={() => changeLanguage(language)}
              className={
                currentLanguage === language
                  ? "font-bold underline"
                  : "opacity-50"
              }
            >
              {language.toUpperCase()}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((current) => !current)}
          className="absolute right-5 top-1/2 z-50 flex -translate-y-1/2 flex-col gap-1.5 md:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          <span
            className={`h-0.5 w-6 bg-black transition-transform ${
              isMenuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />

          <span
            className={`h-0.5 w-6 bg-black transition-opacity ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />

          <span
            className={`h-0.5 w-6 bg-black transition-transform ${
              isMenuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </header>

      <div
        className={`fixed inset-0 z-40 flex flex-col bg-white px-5 py-5 transition-all duration-300 md:hidden ${
          isMenuOpen
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
      >
        <NavLink
          to="/"
          onClick={closeMenu}
          className="text-xl font-bold"
        >
          LOGO
        </NavLink>

        <nav className="flex flex-1 flex-col items-center justify-center gap-7 text-3xl">
          <NavLink to="/" onClick={closeMenu}>
            {t("navigation.home")}
          </NavLink>

          <NavLink to="/about" onClick={closeMenu}>
            {t("navigation.about")}
          </NavLink>

          <NavLink to="/contacts" onClick={closeMenu}>
            {t("navigation.contacts")}
          </NavLink>
        </nav>

        <div className="flex justify-center gap-5 pb-5">
          {languages.map((language) => (
            <button
              key={language}
              type="button"
              onClick={() => changeLanguage(language)}
              className={
                currentLanguage === language
                  ? "font-bold underline"
                  : "opacity-50"
              }
            >
              {language.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}