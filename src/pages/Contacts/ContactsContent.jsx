import { useRef, useState } from "react";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";

import Container from "../../components/ui/Container.jsx";

const interestOptions = ["regular", "workshop", "celebration", "other"];

const inputClassName =
  "mt-2.5 min-h-14 w-full rounded-[1.1rem] border border-line bg-white px-4 text-sm font-semibold text-ink outline-none transition placeholder:font-medium placeholder:text-muted/60 hover:border-brand/20 focus:border-brand focus:ring-4 focus:ring-brand/10 sm:px-5 sm:text-base";

const contactStyles = {
  instagram: {
    surface: "bg-gradient-to-br from-[#fff6fb] to-[#f7efff]",
    icon: "bg-accent-pink text-white",
  },
  facebook: {
    surface: "bg-gradient-to-br from-[#f7f9ff] to-[#edf2ff]",
    icon: "bg-[#4267B2] text-white",
  },
  email: {
    surface: "bg-gradient-to-br from-[#f7ffff] to-[#eaf9f8]",
    icon: "bg-accent-cyan text-white",
  },
  phone: {
    surface: "bg-gradient-to-br from-[#fbf8ff] to-[#f1eaff]",
    icon: "bg-brand text-white",
  },
};

function ContactIcon({ type }) {
  if (type === "instagram") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="size-5"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.4" cy="6.6" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (type === "facebook") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-5" aria-hidden="true">
        <path d="M13.7 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5H17V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.5V13h2.8v8h3.4Z" />
      </svg>
    );
  }

  if (type === "email") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="size-5"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="5" width="18" height="14" rx="3" />
        <path d="m5 8 7 5 7-5" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="size-5"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7.2 3.8 10 7.2 8.5 9.4a15.2 15.2 0 0 0 6.1 6.1l2.2-1.5 3.4 2.8-.8 3c-.2.7-.8 1.2-1.6 1.2C9.6 20.5 3.5 14.4 3 6.2c0-.8.5-1.4 1.2-1.6l3-.8Z" />
    </svg>
  );
}

export default function ContactsContent() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle");
  const { t, i18n } = useTranslation("contacts");

  const facebookUrl = import.meta.env.VITE_FACEBOOK_URL?.trim() || "";
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID?.trim() || "";
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID?.trim() || "";
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim() || "";

  const contactMethods = [
    {
      key: "instagram",
      value: "@artlab_est",
      href: "https://www.instagram.com/artlab_est/",
      external: true,
    },
    {
      key: "facebook",
      value: t("sidebar.facebookValue"),
      href: facebookUrl,
      external: true,
    },
    {
      key: "email",
      value: "artlabtallinn@gmail.com",
      href: "mailto:artlabtallinn@gmail.com",
      external: false,
    },
    {
      key: "phone",
      value: "+372 566 378 00",
      href: "tel:+37256637800",
      external: false,
    },
  ];

  async function handleSubmit(event) {
    event.preventDefault();

    const form = formRef.current;
    if (!form) return;

    if (form.elements.website.value) {
      form.reset();
      setStatus("success");
      return;
    }

    if (!serviceId || !templateId || !publicKey) {
      setStatus("configuration");
      return;
    }

    form.elements.submitted_at.value = new Intl.DateTimeFormat(
      i18n.resolvedLanguage || "et",
      {
        dateStyle: "medium",
        timeStyle: "short",
      },
    ).format(new Date());
    form.elements.page_url.value = window.location.href;

    setStatus("sending");

    try {
      const { default: emailjs } = await import("@emailjs/browser");
      await emailjs.sendForm(serviceId, templateId, form, { publicKey });
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  function clearStatus() {
    if (status !== "idle" && status !== "sending") setStatus("idle");
  }

  return (
    <section
      id="booking"
      className="relative isolate overflow-hidden bg-[#fcfbff] py-20 sm:py-24 lg:py-28"
      aria-labelledby="contact-form-title"
    >
      <div
        className="pointer-events-none absolute -left-40 top-24 size-96 rounded-full bg-accent-cyan/6 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-40 bottom-20 size-[28rem] rounded-full bg-brand/6 blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="grid items-start gap-7 lg:grid-cols-[minmax(0,1.2fr)_minmax(360px,0.72fr)] lg:gap-9 xl:gap-12">
          <div className="overflow-hidden rounded-[2rem] border border-white/90 bg-white/90 p-5 shadow-[0_24px_80px_rgba(51,39,73,0.10)] backdrop-blur-xl sm:rounded-[2.5rem] sm:p-8 lg:p-10 xl:p-12">
            <p className="flex items-center gap-4 text-[10px] font-extrabold uppercase tracking-[0.2em] text-accent-pink sm:text-xs">
              <span
                className="h-0.5 w-8 rounded-full bg-current"
                aria-hidden="true"
              />
              {t("form.eyebrow")}
            </p>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2
                  id="contact-form-title"
                  className="max-w-3xl text-[clamp(2.4rem,4.5vw,4.6rem)] font-extrabold leading-[0.98] tracking-[-0.055em] text-ink"
                >
                  {t("form.title")}
                </h2>
                <p className="mt-5 max-w-2xl text-sm leading-7 text-muted sm:text-base sm:leading-8">
                  {t("form.description")}
                </p>
              </div>

              <p className="shrink-0 text-xs font-bold text-muted">
                {t("form.requiredNote")}
              </p>
            </div>

            <form
              ref={formRef}
              className="relative mt-9"
              onSubmit={handleSubmit}
              onChange={clearStatus}
              aria-busy={status === "sending"}
            >
              <div className="absolute -left-[9999px] top-0" aria-hidden="true">
                <label htmlFor="contact-website">{t("form.honeypot")}</label>
                <input
                  id="contact-website"
                  type="text"
                  name="website"
                  tabIndex="-1"
                  autoComplete="off"
                />
              </div>

              <input
                type="hidden"
                name="language"
                value={(i18n.resolvedLanguage || "et").split("-")[0].toUpperCase()}
                readOnly
              />
              <input type="hidden" name="submitted_at" defaultValue="" />
              <input type="hidden" name="page_url" defaultValue="" />

              <div className="grid gap-x-5 gap-y-5 sm:grid-cols-2">
                <label className="block text-sm font-extrabold text-ink">
                  {t("form.fields.name.label")} <span className="text-accent-pink">*</span>
                  <input
                    type="text"
                    name="participant_name"
                    required
                    autoComplete="given-name"
                    maxLength="80"
                    placeholder={t("form.fields.name.placeholder")}
                    className={inputClassName}
                  />
                </label>

                <label className="block text-sm font-extrabold text-ink">
                  {t("form.fields.lastName.label")} <span className="text-accent-pink">*</span>
                  <input
                    type="text"
                    name="participant_last_name"
                    required
                    autoComplete="family-name"
                    maxLength="80"
                    placeholder={t("form.fields.lastName.placeholder")}
                    className={inputClassName}
                  />
                </label>

                <label className="block text-sm font-extrabold text-ink">
                  {t("form.fields.age.label")} <span className="text-accent-pink">*</span>
                  <input
                    type="number"
                    name="participant_age"
                    required
                    min="4"
                    max="99"
                    inputMode="numeric"
                    placeholder={t("form.fields.age.placeholder")}
                    className={inputClassName}
                  />
                </label>

                <label className="block text-sm font-extrabold text-ink">
                  {t("form.fields.email.label")} <span className="text-accent-pink">*</span>
                  <input
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    maxLength="120"
                    placeholder={t("form.fields.email.placeholder")}
                    className={inputClassName}
                  />
                </label>

                <label className="block text-sm font-extrabold text-ink sm:col-span-2">
                  {t("form.fields.phone.label")} <span className="text-accent-pink">*</span>
                  <input
                    type="tel"
                    name="phone"
                    required
                    autoComplete="tel"
                    maxLength="40"
                    placeholder={t("form.fields.phone.placeholder")}
                    className={inputClassName}
                  />
                </label>
              </div>

              <fieldset className="mt-7">
                <legend className="text-sm font-extrabold text-ink">
                  {t("form.fields.interest.label")} <span className="text-accent-pink">*</span>
                </legend>

                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  {interestOptions.map((option, index) => (
                    <label key={option} className="cursor-pointer">
                      <input
                        type="radio"
                        name="interest"
                        value={t(`form.fields.interest.options.${option}`)}
                        required={index === 0}
                        className="peer sr-only"
                      />
                      <span className="flex min-h-16 items-center gap-3 rounded-[1.15rem] border border-line bg-white px-4 py-3.5 text-sm font-bold leading-5 text-muted transition-all before:block before:size-5 before:shrink-0 before:rounded-full before:border-2 before:border-muted/40 before:content-[''] hover:border-brand/25 hover:text-ink peer-checked:border-brand peer-checked:bg-surface-lilac peer-checked:text-brand peer-checked:ring-4 peer-checked:ring-brand/8 peer-checked:before:border-[6px] peer-checked:before:border-brand sm:px-5">
                        {t(`form.fields.interest.options.${option}`)}
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <label className="mt-7 block text-sm font-extrabold text-ink">
                {t("form.fields.message.label")}
                <textarea
                  name="message"
                  rows="5"
                  maxLength="1500"
                  placeholder={t("form.fields.message.placeholder")}
                  className={`${inputClassName} min-h-36 py-4`}
                />
              </label>

              <div className="mt-6 flex items-start gap-3 rounded-[1.2rem] bg-surface-aqua/70 p-4 sm:p-5">
                <input
                  id="privacy-consent"
                  type="checkbox"
                  name="privacy_consent"
                  value={t("form.privacy.value")}
                  required
                  className="mt-0.5 size-5 shrink-0 cursor-pointer accent-brand"
                />
                <label
                  htmlFor="privacy-consent"
                  className="text-xs font-semibold leading-6 text-muted sm:text-sm"
                >
                  {t("form.privacy.prefix")} {" "}
                  <Link
                    to="/privacy"
                    target="_blank"
                    className="font-extrabold text-brand underline decoration-brand/30 underline-offset-4 transition-colors hover:decoration-brand"
                  >
                    {t("form.privacy.link")}
                  </Link>
                  <span className="text-accent-pink"> *</span>
                </label>
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="group mt-6 inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-brand to-[#7d45dc] px-8 text-sm font-extrabold text-white shadow-button transition-all duration-200 hover:-translate-y-0.5 hover:shadow-button-hover disabled:cursor-wait disabled:opacity-65 disabled:hover:translate-y-0 sm:text-base"
              >
                {status === "sending" ? t("form.sending") : t("form.submit")}
                <span
                  className={`transition-transform duration-200 ${
                    status === "sending" ? "animate-pulse" : "group-hover:translate-x-1"
                  }`}
                  aria-hidden="true"
                >
                  {status === "sending" ? "···" : "→"}
                </span>
              </button>

              {status !== "idle" && status !== "sending" ? (
                <p
                  className={`mt-4 rounded-[1rem] px-4 py-3 text-sm font-bold leading-6 ${
                    status === "success"
                      ? "bg-[#eaf8f1] text-[#247657]"
                      : "bg-surface-pink text-[#a72d5a]"
                  }`}
                  role="status"
                  aria-live="polite"
                >
                  {t(`form.status.${status}`)}
                </p>
              ) : null}

              <p className="mt-5 text-center text-xs leading-5 text-muted">
                {t("form.caption")}
              </p>
            </form>
          </div>

          <aside className="lg:sticky lg:top-28" aria-labelledby="contact-methods-title">
            <div className="rounded-[2rem] border border-white/90 bg-white/85 p-5 shadow-[0_20px_65px_rgba(51,39,73,0.08)] backdrop-blur-xl sm:p-7 lg:p-8">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-accent-cyan sm:text-xs">
                {t("sidebar.eyebrow")}
              </p>
              <h2
                id="contact-methods-title"
                className="mt-4 text-3xl font-extrabold leading-[1.05] tracking-[-0.045em] text-ink sm:text-4xl"
              >
                {t("sidebar.title")}
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted">
                {t("sidebar.description")}
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {contactMethods.map((method) => {
                  const Element = method.href ? "a" : "div";
                  const style = contactStyles[method.key];

                  return (
                    <Element
                      key={method.key}
                      {...(method.href
                        ? {
                            href: method.href,
                            target: method.external ? "_blank" : undefined,
                            rel: method.external ? "noreferrer" : undefined,
                          }
                        : { "aria-disabled": true })}
                      className={`group flex items-center gap-4 rounded-[1.35rem] border border-white/90 p-4 transition-all duration-200 ${
                        method.href
                          ? "hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(51,39,73,0.08)]"
                          : "opacity-70"
                      } ${style.surface}`}
                    >
                      <span
                        className={`flex size-11 shrink-0 items-center justify-center rounded-full shadow-[0_8px_20px_rgba(51,39,73,0.10)] ${style.icon}`}
                      >
                        <ContactIcon type={method.key} />
                      </span>

                      <span className="min-w-0">
                        <span className="block text-[9px] font-extrabold uppercase tracking-[0.15em] text-muted sm:text-[10px]">
                          {t(`sidebar.methods.${method.key}`)}
                        </span>
                        <span className="mt-1 block break-words text-sm font-extrabold leading-5 text-ink sm:text-[15px]">
                          {method.value}
                        </span>
                      </span>

                      <span
                        className="ml-auto shrink-0 text-lg font-bold text-brand transition-transform duration-200 group-hover:translate-x-1"
                        aria-hidden="true"
                      >
                        {method.href ? "→" : "—"}
                      </span>
                    </Element>
                  );
                })}
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Peterburi+tee+46+Tallinn"
                target="_blank"
                rel="noreferrer"
                className="group mt-5 block rounded-[1.5rem] bg-ink p-5 text-white transition-transform duration-200 hover:-translate-y-0.5 sm:p-6"
              >
                <span className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-white/55 sm:text-[10px]">
                  {t("sidebar.address.label")}
                </span>
                <span className="mt-3 flex items-end justify-between gap-5">
                  <span>
                    <span className="block text-lg font-extrabold leading-6">
                      Peterburi tee 46
                    </span>
                    <span className="mt-1 block text-sm font-semibold text-white/70">
                      {t("sidebar.address.detail")}
                    </span>
                  </span>
                  <span
                    className="text-xl text-accent-cyan transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </span>
              </a>

              <div className="mt-5 flex items-start gap-3 border-t border-line pt-5">
                <span
                  className="mt-1 size-2.5 shrink-0 rounded-full bg-accent-pink shadow-[0_0_0_5px_rgba(239,79,136,0.09)]"
                  aria-hidden="true"
                />
                <p className="text-xs font-semibold leading-6 text-muted sm:text-sm">
                  {t("sidebar.note")}
                </p>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
