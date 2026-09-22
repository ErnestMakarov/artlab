import { useTranslation } from "react-i18next";

import Seo from "../../components/seo/Seo.jsx";
import PricesHero from "./PricesHero.jsx";

export default function PricesPage() {
  const { t } = useTranslation("prices");

  return (
    <>
      <Seo
        title={t("meta.title")}
        description={t("meta.description")}
        path="/prices"
      />
      <PricesHero />
    </>
  );
}
