import { useTranslation } from "react-i18next";

import InnerPageHero from "../../components/sections/InnerPageHero.jsx";

const contacts = [
  {
    key: "address",
    value: "Peterburi tee 46, Tallinn",
    href: "https://www.google.com/maps/search/?api=1&query=Peterburi+tee+46+Tallinn",
  },
  {
    key: "phone",
    value: "+372 566 378 00",
    href: "tel:+37256637800",
  },
  {
    key: "email",
    value: "artlabtallinn@gmail.com",
    href: "mailto:artlabtallinn@gmail.com",
  },
];

export default function ContactsHero() {
  const { t } = useTranslation("contacts");

  return (
    <InnerPageHero
      id="booking"
      titleId="contacts-hero-title"
      eyebrow={t("hero.eyebrow")}
      title={t("hero.title")}
      description={t("hero.description")}
      pageNumber="06 / 06"
      accent="brand"
    >
      <div className="mx-auto max-w-xl rounded-[2rem] border border-white/90 bg-white/80 p-5 shadow-[0_24px_80px_rgba(51,39,73,0.12)] backdrop-blur-xl sm:p-7">
        <div className="grid gap-3">
          {contacts.map((contact, index) => (
            <a
              key={contact.key}
              href={contact.href}
              target={contact.key === "address" ? "_blank" : undefined}
              rel={contact.key === "address" ? "noreferrer" : undefined}
              className="group flex items-center gap-4 rounded-[1.35rem] border border-line/75 bg-white px-5 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/25 hover:shadow-[0_12px_32px_rgba(51,39,73,0.08)]"
            >
              <span
                className={`flex size-10 shrink-0 items-center justify-center rounded-full text-xs font-extrabold ${
                  index === 0
                    ? "bg-surface-aqua text-accent-cyan"
                    : index === 1
                      ? "bg-surface-lilac text-brand"
                      : "bg-surface-pink text-accent-pink"
                }`}
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="min-w-0">
                <span className="block text-[10px] font-extrabold uppercase tracking-[0.15em] text-muted">
                  {t(`hero.contacts.${contact.key}`)}
                </span>
                <span className="mt-1 block break-words text-sm font-extrabold leading-6 text-ink transition-colors group-hover:text-brand sm:text-base">
                  {contact.value}
                </span>
              </span>

              <span
                className="ml-auto shrink-0 text-lg text-brand transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              >
                →
              </span>
            </a>
          ))}
        </div>
      </div>
    </InnerPageHero>
  );
}
