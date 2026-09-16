import { useTranslation } from "react-i18next";

import PageIntro from "../../components/ui/PageIntro.jsx";
import Seo from "../../components/seo/Seo.jsx";

export default function ContactsPage() {
  const { t } = useTranslation("contacts");

  return (
    <>
      <Seo
        title={t("meta.title")}
        description={t("meta.description")}
        path="/contacts"
      />
      <div id="booking">
        <PageIntro
          eyebrow={t("intro.eyebrow")}
          title={t("intro.title")}
          description={t("intro.description")}
        />
      </div>
    </>
  );
}
