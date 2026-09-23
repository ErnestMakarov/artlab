import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import Container from "../../components/ui/Container.jsx";

const galleryImageModules = import.meta.glob(
  [
    "../../assets/images/gallery/**/*.{avif,webp,png,jpg,jpeg}",
    "../../assets/images/gallery/**/*.{AVIF,WEBP,PNG,JPG,JPEG}",
  ],
  {
    eager: true,
    import: "default",
  },
);

const fileNameCollator = new Intl.Collator(undefined, {
  numeric: true,
  sensitivity: "base",
});

const galleryImages = Object.entries(galleryImageModules)
  .sort(([firstPath], [secondPath]) =>
    fileNameCollator.compare(firstPath, secondPath),
  )
  .map(([path, src]) => ({
    id: path,
    src,
  }));

function Lightbox({ images, selectedIndex, onClose, onSelect }) {
  const { t } = useTranslation("gallery");
  const closeButtonRef = useRef(null);
  const previouslyFocusedElementRef = useRef(null);
  const touchStartXRef = useRef(null);
  const isOpen = selectedIndex !== null;
  const selectedImage = isOpen ? images[selectedIndex] : null;

  const showPrevious = useCallback(() => {
    onSelect((selectedIndex - 1 + images.length) % images.length);
  }, [images.length, onSelect, selectedIndex]);

  const showNext = useCallback(() => {
    onSelect((selectedIndex + 1) % images.length);
  }, [images.length, onSelect, selectedIndex]);

  useEffect(() => {
    if (!isOpen) return undefined;

    previouslyFocusedElementRef.current = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event) {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      previouslyFocusedElementRef.current?.focus?.();
    };
  }, [isOpen, onClose, showNext, showPrevious]);

  useEffect(() => {
    if (!isOpen || images.length < 2) return;

    const adjacentIndexes = [
      (selectedIndex - 1 + images.length) % images.length,
      (selectedIndex + 1) % images.length,
    ];

    adjacentIndexes.forEach((index) => {
      const image = new Image();
      image.src = images[index].src;
    });
  }, [images, isOpen, selectedIndex]);

  if (!isOpen || !selectedImage) return null;

  function handleBackdropPointerDown(event) {
    if (event.target === event.currentTarget) onClose();
  }

  function handleTouchStart(event) {
    touchStartXRef.current = event.changedTouches[0]?.clientX ?? null;
  }

  function handleTouchEnd(event) {
    if (touchStartXRef.current === null) return;

    const touchEndX = event.changedTouches[0]?.clientX ?? touchStartXRef.current;
    const distance = touchEndX - touchStartXRef.current;
    touchStartXRef.current = null;

    if (Math.abs(distance) < 45) return;
    if (distance > 0) showPrevious();
    else showNext();
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#171020]/95 px-4 py-20 backdrop-blur-xl sm:px-20 sm:py-16"
      role="dialog"
      aria-modal="true"
      aria-label={t("content.lightboxLabel")}
      onPointerDown={handleBackdropPointerDown}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/35 to-transparent"
        aria-hidden="true"
      />

      <p
        className="pointer-events-none absolute left-1/2 top-5 -translate-x-1/2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold tracking-[0.08em] text-white/85 backdrop-blur-xl sm:top-6 sm:text-sm"
        aria-live="polite"
      >
        {t("content.counter", {
          current: selectedIndex + 1,
          total: images.length,
        })}
      </p>

      <button
        ref={closeButtonRef}
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 z-10 flex size-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-xl transition-all duration-200 hover:rotate-90 hover:bg-white hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:right-7 sm:top-6"
        aria-label={t("content.close")}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="size-6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <path d="M6 6l12 12M18 6 6 18" />
        </svg>
      </button>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={showPrevious}
            className="absolute bottom-5 left-[calc(50%-3.75rem)] z-10 flex size-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-2xl text-white backdrop-blur-xl transition-all duration-200 hover:-translate-x-1 hover:bg-white hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:bottom-auto sm:left-6 sm:top-1/2 sm:-translate-y-1/2"
            aria-label={t("content.previous")}
          >
            <span aria-hidden="true">←</span>
          </button>

          <button
            type="button"
            onClick={showNext}
            className="absolute bottom-5 right-[calc(50%-3.75rem)] z-10 flex size-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-2xl text-white backdrop-blur-xl transition-all duration-200 hover:translate-x-1 hover:bg-white hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:bottom-auto sm:right-6 sm:top-1/2 sm:-translate-y-1/2"
            aria-label={t("content.next")}
          >
            <span aria-hidden="true">→</span>
          </button>
        </>
      )}

      <img
        src={selectedImage.src}
        alt={t("content.imageAlt", { number: selectedIndex + 1 })}
        draggable="false"
        onPointerDown={(event) => event.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="max-h-[calc(100dvh-10rem)] max-w-full select-none rounded-[1rem] object-contain shadow-[0_28px_90px_rgba(0,0,0,0.45)] sm:max-h-[calc(100dvh-8rem)] sm:rounded-[1.5rem]"
      />

      <p className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-xs text-white/55 sm:block">
        {t("content.keyboardHint")}
      </p>
    </div>
  );
}

export default function GalleryGrid() {
  const { t } = useTranslation("gallery");
  const [selectedIndex, setSelectedIndex] = useState(null);

  const closeLightbox = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  return (
    <section
      className="relative isolate overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
      aria-labelledby="gallery-content-title"
    >
      <div
        className="pointer-events-none absolute -left-32 top-24 size-80 rounded-full bg-surface-lilac blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-20 size-80 rounded-full bg-surface-aqua blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.62fr)] lg:items-end lg:gap-16">
          <div>
            <p className="flex items-center gap-4 text-[10px] font-extrabold uppercase tracking-[0.2em] text-accent-pink sm:text-xs">
              <span
                className="h-0.5 w-8 rounded-full bg-current"
                aria-hidden="true"
              />
              {t("content.eyebrow")}
            </p>

            <h2
              id="gallery-content-title"
              className="mt-6 max-w-4xl text-[clamp(2.7rem,5vw,5.25rem)] font-extrabold leading-[0.97] tracking-[-0.06em] text-ink"
            >
              {t("content.title")}
            </h2>
          </div>

          <p className="max-w-xl text-base leading-8 text-muted sm:text-lg sm:leading-9">
            {t("content.description")}
          </p>
        </div>

        {galleryImages.length > 0 ? (
          <div
            className="mt-10 columns-1 gap-4 sm:mt-12 sm:columns-2 sm:gap-5 lg:columns-3 xl:columns-4"
            aria-label={t("content.listLabel")}
          >
            {galleryImages.map((image, index) => (
              <button
                key={image.id}
                type="button"
                onClick={() => setSelectedIndex(index)}
                className="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-[1.5rem] border border-line/70 bg-surface-lilac text-left shadow-[0_14px_40px_rgba(51,39,73,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(51,39,73,0.15)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand sm:mb-5 sm:rounded-[1.75rem]"
                aria-label={t("content.openImage", { number: index + 1 })}
              >
                <img
                  src={image.src}
                  alt={t("content.imageAlt", { number: index + 1 })}
                  loading="lazy"
                  decoding="async"
                  className="h-auto w-full transition-transform duration-500 ease-out group-hover:scale-[1.025]"
                />

                <span
                  className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden="true"
                />

                <span
                  className="absolute bottom-4 right-4 flex size-11 translate-y-2 items-center justify-center rounded-full bg-white text-brand opacity-0 shadow-[0_10px_25px_rgba(51,39,73,0.18)] transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="size-5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="7" />
                    <path d="m20 20-4-4M11 8v6M8 11h6" />
                  </svg>
                </span>
              </button>
            ))}
          </div>
        ) : (
          <div className="mt-12 rounded-[2rem] border border-dashed border-brand/25 bg-surface-lilac px-6 py-14 text-center sm:px-10 sm:py-20">
            <span
              className="mx-auto flex size-14 items-center justify-center rounded-full bg-white text-2xl text-brand shadow-[0_10px_30px_rgba(51,39,73,0.08)]"
              aria-hidden="true"
            >
              +
            </span>
            <h3 className="mt-5 text-2xl font-extrabold tracking-[-0.035em] text-ink">
              {t("content.emptyTitle")}
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-muted sm:text-base">
              {t("content.emptyDescription")}
            </p>
          </div>
        )}
      </Container>

      <Lightbox
        images={galleryImages}
        selectedIndex={selectedIndex}
        onClose={closeLightbox}
        onSelect={setSelectedIndex}
      />
    </section>
  );
}
