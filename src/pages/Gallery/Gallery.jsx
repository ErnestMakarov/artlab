import { useTranslation } from "react-i18next";

import Seo from "../../components/seo/Seo.jsx";
import GalleryGrid from "./GalleryGrid.jsx";
import GalleryHero from "./GalleryHero.jsx";

export default function GalleryPage() {
  const { t } = useTranslation("gallery");

  return (
    <>
      <Seo
        title={t("meta.title")}
        description={t("meta.description")}
        path="/gallery"
      />
      <GalleryHero />
      <GalleryGrid />
    </>
  );
}
