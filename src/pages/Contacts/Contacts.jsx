import { useTranslation } from "react-i18next";

export default function Contacts() {
  const { t } = useTranslation("contacts");

  return (
    <section className="bg-gray-100 px-4 py-16">
      <div className="mx-auto max-w-xl">
        <div className="mb-10">
          <h1 className="mb-3 text-3xl font-bold">
            {t("contact.title")}
          </h1>

          <p className="text-gray-600">
            {t("contact.description")}
          </p>
        </div>

        <form className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="name">
              {t("contact.form.name")}
            </label>

            <input
              id="name"
              name="name"
              type="text"
              className="rounded border border-gray-300 bg-white px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email">
              {t("contact.form.email")}
            </label>

            <input
              id="email"
              name="email"
              type="email"
              className="rounded border border-gray-300 bg-white px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message">
              {t("contact.form.message")}
            </label>

            <textarea
              id="message"
              name="message"
              rows="5"
              className="rounded border border-gray-300 bg-white px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="self-start rounded bg-blue-500 px-6 py-3 font-medium text-white hover:bg-blue-600"
          >
            {t("contact.form.submit")}
          </button>
        </form>
      </div>
    </section>
  );
}