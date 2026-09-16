import { useTranslation } from "react-i18next";

import PageIntro from "../../components/ui/PageIntro.jsx";
import Seo from "../../components/seo/Seo.jsx";

export default function PricesPage() {
  const { t } = useTranslation("prices");

  return (
    <>
      <Seo
        title={t("meta.title")}
        description={t("meta.description")}
        path="/prices"
      />
      <PageIntro
        eyebrow={t("intro.eyebrow")}
        title={t("intro.title")}
        description={t("intro.description")}
      />
    </>
  );
}
