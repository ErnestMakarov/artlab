import { useTranslation } from "react-i18next";

import Seo from "../../components/seo/Seo.jsx";
import DirectionsHero from "./DirectionsHero.jsx";

export default function DirectionsPage() {
  const { t } = useTranslation("directions");

  return (
    <>
      <Seo
        title={t("meta.title")}
        description={t("meta.description")}
        path="/directions"
      />
      <DirectionsHero />
    </>
  );
}
