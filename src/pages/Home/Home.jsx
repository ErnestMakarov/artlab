import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation("home");

  return (
    <section className="bg-gray-100 p-4">
        <p>{t("hero.label")}</p>

        <h1 className="text-2xl font-bold mb-4">{t("hero.title")}</h1>

        <p>{t("hero.description")}</p>

        <button className="bg-blue-500 text-white p-2 rounded" type="button">
          {t("hero.button")}
        </button>
    </section>
  );
}