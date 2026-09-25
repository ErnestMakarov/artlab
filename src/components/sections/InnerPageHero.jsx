import Container from "../ui/Container.jsx";

const accentStyles = {
  brand: {
    text: "text-brand",
    line: "bg-brand",
    surface: "bg-gradient-to-br from-surface-lilac via-white to-[#fbf9ff]",
    glowPrimary: "bg-brand/10",
    glowSecondary: "bg-accent-pink/8",
  },
  cyan: {
    text: "text-accent-cyan",
    line: "bg-accent-cyan",
    surface: "bg-gradient-to-br from-surface-aqua via-white to-[#fbffff]",
    glowPrimary: "bg-accent-cyan/12",
    glowSecondary: "bg-brand/7",
  },
  pink: {
    text: "text-accent-pink",
    line: "bg-accent-pink",
    surface: "bg-gradient-to-br from-surface-pink via-white to-[#fffafb]",
    glowPrimary: "bg-accent-pink/10",
    glowSecondary: "bg-brand/7",
  },
};

export default function InnerPageHero({
  id,
  titleId,
  eyebrow,
  title,
  description,
  pageNumber,
  accent = "brand",
  children,
}) {
  const styles = accentStyles[accent] ?? accentStyles.brand;

  return (
    <section
      id={id}
      className={`relative isolate overflow-hidden border-b border-line/70 ${styles.surface}`}
      aria-labelledby={titleId}
    >
      <div
        className={`pointer-events-none absolute -right-36 -top-32 size-[30rem] rounded-full blur-3xl ${styles.glowPrimary}`}
        aria-hidden="true"
      />
      <div
        className={`pointer-events-none absolute -bottom-40 -left-36 size-[27rem] rounded-full blur-3xl ${styles.glowSecondary}`}
        aria-hidden="true"
      />

      <Container className="relative py-12 sm:py-16 lg:py-20 xl:py-24">
        <div className="flex items-center justify-between gap-6">
          <p
            className={`flex items-center gap-4 text-[10px] font-extrabold uppercase tracking-[0.2em] sm:text-xs ${styles.text}`}
          >
            <span
              className={`h-0.5 w-8 rounded-full ${styles.line}`}
              aria-hidden="true"
            />
            {eyebrow}
          </p>

          {pageNumber && (
            <span className="text-[10px] font-extrabold tracking-[0.18em] text-muted/65 sm:text-xs">
              {pageNumber}
            </span>
          )}
        </div>

        <div className="mt-9 grid items-center gap-11 lg:mt-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(430px,0.75fr)] lg:gap-16 xl:gap-24">
          <div>
            <h1
              id={titleId}
              className="max-w-4xl text-[clamp(3rem,6.2vw,6.5rem)] font-extrabold leading-[0.93] tracking-[-0.065em] text-ink"
            >
              {title}
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-muted sm:text-lg sm:leading-9">
              {description}
            </p>
          </div>

          <div className="relative">{children}</div>
        </div>
      </Container>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand/25 to-transparent" />
    </section>
  );
}
