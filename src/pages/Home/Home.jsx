import { useTranslation } from "react-i18next";

import Seo from "../../components/seo/Seo.jsx";
import HomeHero from "./HomeHero.jsx";

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
    </>
  );
}