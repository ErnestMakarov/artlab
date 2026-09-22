import { useTranslation } from "react-i18next";

import Seo from "../../components/seo/Seo.jsx";
import TrialLessonCta from "../../components/sections/TrialLessonCta.jsx";
import ScheduleBoard from "./ScheduleBoard.jsx";
import ScheduleHero from "./ScheduleHero.jsx";

export default function SchedulePage() {
  const { t } = useTranslation("schedule");

  return (
    <>
      <Seo
        title={t("meta.title")}
        description={t("meta.description")}
        path="/schedule"
      />
      <ScheduleHero />
      <ScheduleBoard />
      <TrialLessonCta />
    </>
  );
}
