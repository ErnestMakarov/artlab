import { useTranslation } from "react-i18next";

import GiftCardsCta from "../../components/sections/GiftCardsCta.jsx";
import TrialLessonCta from "../../components/sections/TrialLessonCta.jsx";
import Seo from "../../components/seo/Seo.jsx";
import DirectionsHero from "./DirectionsHero.jsx";
import DirectionsHowItWorks from "./DirectionsHowItWorks.jsx";
import DirectionsList from "./DirectionsList.jsx";
import DirectionsOtherFormats from "./DirectionsOtherFormats.jsx";

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
      <DirectionsList />
      <DirectionsHowItWorks />
      <DirectionsOtherFormats />
      <GiftCardsCta />
      <TrialLessonCta />
    </>
  );
}
