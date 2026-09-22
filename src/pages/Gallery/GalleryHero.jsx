import { useTranslation } from "react-i18next";

import artImage from "../../assets/images/directions/art.jpg";
import creativeImage from "../../assets/images/directions/creative-workshop.jpg";
import celebrationImage from "../../assets/images/events/celebration.jpg";
import InnerPageHero from "../../components/sections/InnerPageHero.jsx";

const images = [
  {
    src: artImage,
    altKey: "artAlt",
    className: "left-0 top-8 w-[56%] -rotate-3",
  },
  {
    src: creativeImage,
    altKey: "creativeAlt",
    className: "right-0 top-0 w-[52%] rotate-3",
  },
  {
    src: celebrationImage,
    altKey: "celebrationAlt",
    className: "bottom-0 left-[22%] w-[58%] rotate-1",
  },
];

export default function GalleryHero() {
  const { t } = useTranslation("gallery");

  return (
    <InnerPageHero
      titleId="gallery-hero-title"
      eyebrow={t("hero.eyebrow")}
      title={t("hero.title")}
      description={t("hero.description")}
      pageNumber="05 / 06"
      accent="cyan"
    >
      <div className="relative mx-auto h-[20rem] max-w-xl sm:h-[23rem]">
        <span
          className="absolute left-[8%] top-[4%] size-20 rounded-full bg-accent-pink"
          aria-hidden="true"
        />
        <span
          className="absolute bottom-[6%] right-[4%] size-24 rounded-full bg-accent-cyan/80"
          aria-hidden="true"
        />

        {images.map((image, index) => (
          <div
            key={image.altKey}
            className={`absolute overflow-hidden rounded-[1.5rem] border-[8px] border-white bg-white shadow-[0_20px_60px_rgba(51,39,73,0.15)] transition-transform duration-300 hover:z-10 hover:rotate-0 ${image.className}`}
          >
            <img
              src={image.src}
              alt={t(`hero.${image.altKey}`)}
              width="720"
              height="480"
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
              className="aspect-[3/2] w-full object-cover"
            />
          </div>
        ))}
      </div>
    </InnerPageHero>
  );
}
