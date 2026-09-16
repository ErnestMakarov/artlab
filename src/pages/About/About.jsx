import { useTranslation } from "react-i18next";

import PageIntro from "../../components/ui/PageIntro.jsx";
import Seo from "../../components/seo/Seo.jsx";

export default function AboutPage() {
  const { t } = useTranslation("about");

  return (
    <>
      <Seo
        title={t("meta.title")}
        description={t("meta.description")}
        path="/about"
      />
      <PageIntro
        eyebrow={t("intro.eyebrow")}
        title={t("intro.title")}
        description={t("intro.description")}
      />
    </>
  );
}
