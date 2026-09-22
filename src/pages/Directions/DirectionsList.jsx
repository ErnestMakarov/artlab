import { useTranslation } from "react-i18next";

import artImage from "../../assets/images/directions/art.jpg";
import creativeImage from "../../assets/images/directions/creative-workshop.jpg";
import handicraftImage from "../../assets/images/directions/handicraft.jpg";
import Container from "../../components/ui/Container.jsx";

const directions = [
  {
    key: "art",
    anchor: "art",
    image: artImage,
    accent: "text-brand",
    dot: "bg-brand",
    line: "bg-brand",
    surface: "bg-surface-lilac",
    reverse: false,
  },
  {
    key: "creative",
    anchor: "creative-workshop",
    image: creativeImage,
    accent: "text-accent-cyan",
    dot: "bg-accent-cyan",
    line: "bg-accent-cyan",
    surface: "bg-surface-aqua",
    reverse: true,
  },
  {
    key: "handicraft",
    anchor: "handicraft-club",
    image: handicraftImage,
    accent: "text-accent-pink",
    dot: "bg-accent-pink",
    line: "bg-accent-pink",
    surface: "bg-surface-pink",
    reverse: false,
  },
];

export default function DirectionsList() {
  const { t } = useTranslation("directions");

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="space-y-20 sm:space-y-24 lg:space-y-32">
          {directions.map((direction, index) => {
            const paragraphs = t(
              `mainDirections.${direction.key}.paragraphs`,
              { returnObjects: true },
            );
            const points = t(`mainDirections.${direction.key}.points`, {
              returnObjects: true,
            });

            return (
              <article
                id={direction.anchor}
                key={direction.key}
                className="scroll-mt-28"
                aria-labelledby={`${direction.anchor}-title`}
              >
                <div className="grid items-start gap-10 lg:grid-cols-[minmax(360px,0.82fr)_minmax(0,1.18fr)] lg:gap-16 xl:gap-24">
                  <div
                    className={`relative lg:sticky lg:top-28 ${
                      direction.reverse ? "lg:order-2" : ""
                    }`}
                  >
                    <div
                      className={`absolute -bottom-5 -left-5 size-32 rounded-full ${direction.surface}`}
                      aria-hidden="true"
                    />

                    <div className="relative overflow-hidden rounded-[2rem] border-[10px] border-white bg-white shadow-[0_24px_75px_rgba(51,39,73,0.13)] sm:rounded-[2.75rem] sm:border-[12px]">
                      <img
                        src={direction.image}
                        alt={t(
                          `mainDirections.${direction.key}.imageAlt`,
                        )}
                        width="960"
                        height="720"
                        loading={index === 0 ? "eager" : "lazy"}
                        decoding="async"
                        className="aspect-[4/3] w-full object-cover"
                      />

                      <span
                        className={`absolute left-4 top-4 flex size-14 items-center justify-center rounded-full bg-white/90 text-xs font-extrabold shadow-[0_10px_28px_rgba(51,39,73,0.12)] backdrop-blur-lg sm:left-6 sm:top-6 ${direction.accent}`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  <div className={direction.reverse ? "lg:order-1" : ""}>
                    <p
                      className={`flex items-center gap-4 text-[10px] font-extrabold uppercase tracking-[0.19em] sm:text-xs ${direction.accent}`}
                    >
                      <span
                        className={`h-0.5 w-8 rounded-full ${direction.line}`}
                        aria-hidden="true"
                      />
                      {t("mainDirections.label", {
                        number: String(index + 1).padStart(2, "0"),
                      })}
                    </p>

                    <h2
                      id={`${direction.anchor}-title`}
                      className="mt-6 max-w-4xl text-[clamp(2.5rem,4.8vw,4.8rem)] font-extrabold leading-[0.97] tracking-[-0.055em] text-ink"
                    >
                      {t(`mainDirections.${direction.key}.title`)}
                    </h2>

                    <p
                      className={`mt-5 inline-flex min-h-10 items-center rounded-full px-5 text-sm font-extrabold ${direction.surface} ${direction.accent}`}
                    >
                      {t(`mainDirections.${direction.key}.audience`)}
                    </p>

                    <div className="mt-7 space-y-5">
                      {Array.isArray(paragraphs) &&
                        paragraphs.map((paragraph) => (
                          <p
                            key={paragraph}
                            className="max-w-3xl text-base leading-8 text-muted sm:text-lg sm:leading-9"
                          >
                            {paragraph}
                          </p>
                        ))}
                    </div>

                    <div
                      className={`mt-9 rounded-[1.75rem] border border-white/90 p-6 shadow-[0_16px_45px_rgba(51,39,73,0.06)] sm:p-8 ${direction.surface}`}
                    >
                      <h3 className="text-lg font-extrabold tracking-[-0.025em] text-ink sm:text-xl">
                        {t(`mainDirections.${direction.key}.listTitle`)}
                      </h3>

                      <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                        {Array.isArray(points) &&
                          points.map((point) => (
                            <li
                              key={point}
                              className="flex gap-3 text-sm font-bold leading-6 text-ink/85"
                            >
                              <span
                                className={`mt-2 size-2 shrink-0 rounded-full ${direction.dot}`}
                                aria-hidden="true"
                              />
                              {point}
                            </li>
                          ))}
                      </ul>
                    </div>

                    <p className="mt-7 max-w-3xl border-l-2 border-brand/20 pl-5 text-sm font-bold leading-7 text-ink sm:text-base sm:leading-8">
                      {t(`mainDirections.${direction.key}.closing`)}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
