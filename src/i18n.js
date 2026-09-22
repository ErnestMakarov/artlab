import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import etCommon from "./locales/et/common.json";
import etHome from "./locales/et/home.json";
import etAbout from "./locales/et/about.json";
import etDirections from "./locales/et/directions.json";
import etPrices from "./locales/et/prices.json";
import etSchedule from "./locales/et/schedule.json";
import etGallery from "./locales/et/gallery.json";
import etContacts from "./locales/et/contacts.json";
import etPrivacy from "./locales/et/privacy.json";
import etNotFound from "./locales/et/notFound.json";

import enCommon from "./locales/en/common.json";
import enHome from "./locales/en/home.json";
import enAbout from "./locales/en/about.json";
import enDirections from "./locales/en/directions.json";
import enPrices from "./locales/en/prices.json";
import enSchedule from "./locales/en/schedule.json";
import enGallery from "./locales/en/gallery.json";
import enContacts from "./locales/en/contacts.json";
import enPrivacy from "./locales/en/privacy.json";
import enNotFound from "./locales/en/notFound.json";

import ruCommon from "./locales/ru/common.json";
import ruHome from "./locales/ru/home.json";
import ruAbout from "./locales/ru/about.json";
import ruDirections from "./locales/ru/directions.json";
import ruPrices from "./locales/ru/prices.json";
import ruSchedule from "./locales/ru/schedule.json";
import ruGallery from "./locales/ru/gallery.json";
import ruContacts from "./locales/ru/contacts.json";
import ruPrivacy from "./locales/ru/privacy.json";
import ruNotFound from "./locales/ru/notFound.json";

const resources = {
  et: {
    common: etCommon,
    home: etHome,
    about: etAbout,
    directions: etDirections,
    prices: etPrices,
    schedule: etSchedule,
    gallery: etGallery,
    contacts: etContacts,
    privacy: etPrivacy,
    notFound: etNotFound,
  },
  en: {
    common: enCommon,
    home: enHome,
    about: enAbout,
    directions: enDirections,
    prices: enPrices,
    schedule: enSchedule,
    gallery: enGallery,
    contacts: enContacts,
    privacy: enPrivacy,
    notFound: enNotFound,
  },
  ru: {
    common: ruCommon,
    home: ruHome,
    about: ruAbout,
    directions: ruDirections,
    prices: ruPrices,
    schedule: ruSchedule,
    gallery: ruGallery,
    contacts: ruContacts,
    privacy: ruPrivacy,
    notFound: ruNotFound,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    supportedLngs: ["et", "en", "ru"],
    fallbackLng: "et",
    load: "languageOnly",
    defaultNS: "common",
    ns: [
      "common",
      "home",
      "about",
      "directions",
      "prices",
      "schedule",
      "gallery",
      "contacts",
      "privacy",
      "notFound",
    ],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage"],
      lookupLocalStorage: "artlab-language",
      caches: ["localStorage"],
    },
  });

export default i18n;
