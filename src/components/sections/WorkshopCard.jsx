const toneStyles = {
  brand: {
    surface: "from-[#fbf9ff] to-[#f3edff]",
    accent: "bg-brand",
    text: "text-brand",
  },
  pink: {
    surface: "from-[#fffafd] to-[#fff0f6]",
    accent: "bg-accent-pink",
    text: "text-accent-pink",
  },
  cyan: {
    surface: "from-[#f8ffff] to-[#eafafa]",
    accent: "bg-accent-cyan",
    text: "text-accent-cyan",
  },
  peach: {
    surface: "from-[#fffdfa] to-[#fff2ed]",
    accent: "bg-accent-pink",
    text: "text-accent-pink",
  },
};

const imageStyles = {
  cover: "object-cover",
  contain: "object-contain p-4 sm:p-5",
};

export default function WorkshopCard({
  number,
  image,
  imageAlt,
  title,
  href,
  linkLabel,
  tone = "brand",
  imageFit = "cover",
}) {
  const styles = toneStyles[tone] ?? toneStyles.brand;
  const imageClassName = imageStyles[imageFit] ?? imageStyles.cover;

  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/90 bg-gradient-to-b p-3 shadow-[0_16px_45px_rgba(51,39,73,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_65px_rgba(51,39,73,0.13)] ${styles.surface}`}
    >
      <div className="relative overflow-hidden rounded-[1.3rem] border border-white/80 bg-white/75 shadow-[0_10px_30px_rgba(51,39,73,0.06)]">
        <img
          src={image}
          alt={imageAlt}
          width="640"
          height="480"
          loading="lazy"
          decoding="async"
          className={`aspect-[4/3] w-full transition-transform duration-500 group-hover:scale-[1.035] ${imageClassName}`}
        />

        <div className="absolute inset-x-3 top-3 flex items-center justify-between">
          <span
            className={`flex h-8 min-w-8 items-center justify-center rounded-full bg-white/92 px-2 text-[9px] font-extrabold tracking-[0.12em] shadow-[0_6px_18px_rgba(51,39,73,0.10)] backdrop-blur-md ${styles.text}`}
          >
            {number}
          </span>
          <span
            className={`size-2.5 rounded-full ring-4 ring-white/75 ${styles.accent}`}
            aria-hidden="true"
          />
        </div>
      </div>

      <div className="flex min-h-[6.5rem] flex-1 items-end justify-between gap-3 px-2 pb-2 pt-5">
        <h3 className="max-w-[13rem] text-lg font-extrabold leading-[1.15] tracking-[-0.035em] text-ink xl:text-xl">
          {title}
        </h3>

        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className={`flex size-10 shrink-0 items-center justify-center rounded-full text-lg text-white shadow-[0_8px_20px_rgba(51,39,73,0.14)] transition-all duration-300 group-hover:translate-x-1 group-hover:scale-105 ${styles.accent}`}
          aria-label={linkLabel}
        >
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  );
}
