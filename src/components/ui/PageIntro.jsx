import Container from "./Container.jsx";

export default function PageIntro({ eyebrow, title, description }) {
  return (
    <section className="overflow-hidden bg-white py-20 sm:py-24 lg:py-32">
      <Container>
        <div className="max-w-5xl">
          <p className="mb-7 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-accent-cyan">
            <span className="h-px w-7 bg-current" aria-hidden="true" />
            {eyebrow}
          </p>

          <h1 className="max-w-4xl text-[clamp(2.75rem,7vw,6.5rem)] font-extrabold leading-[0.96] tracking-[-0.055em] text-ink">
            {title}
          </h1>

          {description ? (
            <p className="mt-7 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
              {description}
            </p>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
