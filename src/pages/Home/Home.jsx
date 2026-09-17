import { useTranslation } from "react-i18next";

import Seo from "../../components/seo/Seo.jsx";
import HomeAbout from "./HomeAbout.jsx";
import HomeCelebrations from "./HomeCelebrations.jsx";
import HomeDirections from "./HomeDirections.jsx";
import HomeHero from "./HomeHero.jsx";

import GiftCardsCta from "../../components/sections/GiftCardsCta.jsx";
import HomeWhyUs from "./HomeWhyUs.jsx";

export default function HomePage() {
  const { t } = useTranslation("home");

  return (
    <>
      <Seo
        title={t("meta.title")}
        description={t("meta.description")}
        path="/"
      />

      <HomeHero />
      <HomeAbout />
      <HomeDirections />
      <HomeCelebrations />

      <GiftCardsCta />
      <HomeWhyUs />
    </>
  );
}