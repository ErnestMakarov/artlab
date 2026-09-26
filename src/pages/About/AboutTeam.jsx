import { useState } from "react";
import { useTranslation } from "react-i18next";

import ekaterinaImage from "../../assets/images/team/ekaterina.webp";
import elenaImage from "../../assets/images/team/elena.webp";
import marinaImage from "../../assets/images/team/marina.webp";
import Container from "../../components/ui/Container.jsx";

const teachers = [
  {
    key: "marina",
    number: "01",
    image: marinaImage,
    accent: "text-brand",
    dot: "bg-brand",
    surface: "bg-surface-lilac",
  },
  {
    key: "ekaterina",
    number: "02",
    image: ekaterinaImage,
    accent: "text-accent-cyan",
    dot: "bg-accent-cyan",
    surface: "bg-surface-aqua",
  },
  {
    key: "elena",
    number: "03",
    image: elenaImage,
    accent: "text-accent-pink",
    dot: "bg-accent-pink",
    surface: "bg-surface-pink",
  },
];

export default function AboutTeam() {
  const { t } = useTranslation("about");
  const [activeTeacher, setActiveTeacher] = useState(null);

  return (
    <section
      className="relative isolate overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
      aria-labelledby="about-team-title"
    >
      <div
        className="pointer-events-none absolute -left-32 top-28 size-72 rounded-full bg-brand/5 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-16 size-80 rounded-full bg-accent-cyan/7 blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative">
        <p className="flex items-center gap-4 text-[11px] font-extrabold uppercase tracking-[0.2em] text-brand sm:text-xs">
          <span
            className="h-0.5 w-8 rounded-full bg-current"
            aria-hidden="true"
          />
          {t("team.eyebrow")}
        </p>

        <div className="mt-7 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(340px,0.66fr)] lg:items-end lg:gap-16 xl:gap-24">
          <h2
            id="about-team-title"
            className="max-w-4xl text-[clamp(2.7rem,5vw,5.25rem)] font-extrabold leading-[0.97] tracking-[-0.055em] text-ink"
          >
            {t("team.title")}
          </h2>

          <p className="max-w-xl text-base leading-8 text-muted sm:text-lg sm:leading-9 lg:pb-1">
            {t("team.description")}
          </p>
        </div>

        <p className="mt-8 text-xs font-bold text-muted lg:hidden">
          {t("team.swipeHint")}
        </p>

        <ul
          className="-mx-5 mt-5 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain px-5 pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:-mx-8 sm:gap-5 sm:px-8 lg:mx-0 lg:mt-12 lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:px-0 lg:pb-0 xl:gap-8"
          aria-label={t("team.listAria")}
        >
          {teachers.map((teacher) => {
            const isExpanded = activeTeacher === teacher.key;

            return (
              <li
                key={teacher.key}
                className="w-[82vw] max-w-[370px] shrink-0 snap-start lg:w-auto lg:max-w-none"
              >
                <article
                  className={`group flex h-full flex-col overflow-hidden rounded-[2rem] border p-3.5 shadow-[0_20px_60px_rgba(51,39,73,0.09)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_75px_rgba(51,39,73,0.14)] sm:p-4 ${
                    isExpanded ? "border-brand/25" : "border-white/90"
                  } ${teacher.surface}`}
                >
                  <div className="relative overflow-hidden rounded-[1.5rem] bg-white sm:rounded-[1.75rem]">
                    <img
                      src={teacher.image}
                      alt={t(`team.members.${teacher.key}.imageAlt`)}
                      width="1000"
                      height="1250"
                      loading="lazy"
                      decoding="async"
                      className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                    />

                    <div
                      className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/45 via-ink/10 to-transparent"
                      aria-hidden="true"
                    />

                    <span
                      className={`absolute left-4 top-4 flex size-12 items-center justify-center rounded-full bg-white/90 text-[10px] font-extrabold tracking-[0.13em] shadow-[0_10px_28px_rgba(51,39,73,0.12)] backdrop-blur-lg ${teacher.accent}`}
                    >
                      {teacher.number}
                    </span>

                    <span
                      className={`absolute right-4 top-4 size-3 rounded-full border-[3px] border-white shadow-sm ${teacher.dot}`}
                      aria-hidden="true"
                    />
                  </div>

                  <div className="flex flex-1 flex-col px-2 pb-3 pt-6 sm:px-3 sm:pb-4 sm:pt-7">
                    <div className="flex items-end justify-between gap-5">
                      <div>
                        <p
                          className={`text-[10px] font-extrabold uppercase tracking-[0.18em] ${teacher.accent}`}
                        >
                          {t("team.cardLabel")}
                        </p>
                        <h3 className="mt-2 text-[1.8rem] font-extrabold leading-tight tracking-[-0.04em] text-ink sm:text-[2rem]">
                          {t(`team.members.${teacher.key}.name`)}
                        </h3>
                        <p className="mt-2 text-sm font-semibold leading-6 text-muted">
                          {t(`team.members.${teacher.key}.role`)}
                        </p>
                      </div>

                      <span
                        className={`mb-1 size-2.5 shrink-0 rounded-full ${teacher.dot}`}
                        aria-hidden="true"
                      />
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        setActiveTeacher(isExpanded ? null : teacher.key)
                      }
                      className={`mt-6 flex min-h-12 w-full items-center justify-between gap-4 rounded-full border border-white/90 bg-white/85 px-5 text-left text-xs font-extrabold transition-all duration-200 hover:bg-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand/15 sm:text-sm ${teacher.accent}`}
                      aria-expanded={isExpanded}
                      aria-controls={`teacher-bio-${teacher.key}`}
                    >
                      <span>
                        {t(
                          isExpanded
                            ? "team.hideBiography"
                            : "team.showBiography",
                        )}
                      </span>
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className={`size-4 shrink-0 transition-transform duration-300 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>

        <div>
          {teachers.map((teacher) => {
            const isExpanded = activeTeacher === teacher.key;
            const biography = t(`team.members.${teacher.key}.biography`, {
              returnObjects: true,
            });

            return (
              <div
                key={teacher.key}
                className={`grid transition-[grid-template-rows,opacity,margin] duration-500 ease-out ${
                  isExpanded
                    ? "mt-5 grid-rows-[1fr] opacity-100 sm:mt-7"
                    : "grid-rows-[0fr] opacity-0"
                }`}
                aria-hidden={!isExpanded}
              >
                <div className="overflow-hidden">
                  <article
                    id={`teacher-bio-${teacher.key}`}
                    className={`relative isolate overflow-hidden rounded-[2rem] border border-white/90 p-5 shadow-[0_22px_65px_rgba(51,39,73,0.09)] sm:rounded-[2.75rem] sm:p-8 lg:p-10 ${teacher.surface}`}
                  >
                    <div
                      className={`pointer-events-none absolute -right-16 -top-20 size-56 rounded-full opacity-10 blur-2xl ${teacher.dot}`}
                      aria-hidden="true"
                    />

                    <div className="relative grid gap-5 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,1.35fr)] lg:gap-12">
                      <div>
                        <p
                          className={`text-[10px] font-extrabold uppercase tracking-[0.19em] sm:text-xs ${teacher.accent}`}
                        >
                          {t("team.biographyLabel")}
                        </p>
                        <h3 className="mt-4 text-[clamp(2rem,3.7vw,3.75rem)] font-extrabold leading-[0.98] tracking-[-0.055em] text-ink">
                          {t(`team.members.${teacher.key}.name`)}
                        </h3>
                        <p className="mt-4 max-w-md text-sm font-bold leading-7 text-muted sm:text-base">
                          {t(`team.members.${teacher.key}.role`)}
                        </p>
                      </div>

                      <div className="grid gap-3 sm:gap-4 lg:grid-cols-2">
                        {Array.isArray(biography) &&
                          biography.map((paragraph, index) => (
                            <p
                              key={paragraph}
                              className={`rounded-[1.35rem] border border-white/90 bg-white/78 p-5 text-sm leading-7 text-muted shadow-[0_10px_30px_rgba(51,39,73,0.05)] sm:p-6 sm:text-base sm:leading-8 ${
                                biography.length % 2 === 1 &&
                                index === biography.length - 1
                                  ? "lg:col-span-2"
                                  : ""
                              }`}
                            >
                              {paragraph}
                            </p>
                          ))}
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
