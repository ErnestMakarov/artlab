import React from 'react'
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation("about");

  return (
    <section className="bg-gray-200 p-4">
        <h2 className="text-xl font-bold mb-2">{t("about.title")}</h2>

        <p>{t("about.description")}</p>

        <button className="bg-blue-500 text-white p-2 rounded" type="button">
          {t("about.button")}
        </button>
    </section>
  )
}
