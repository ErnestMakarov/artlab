import { useTranslation } from "react-i18next";

import Seo from "../../components/seo/Seo.jsx";
import ContactsContent from "./ContactsContent.jsx";
import ContactsHero from "./ContactsHero.jsx";

export default function ContactsPage() {
  const { t } = useTranslation("contacts");

  return (
    <>
      <Seo
        title={t("meta.title")}
        description={t("meta.description")}
        path="/contacts"
      />
      <ContactsHero />
      <ContactsContent />
    </>
  );
}
