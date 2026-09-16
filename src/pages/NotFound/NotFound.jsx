import { Link } from "react-router";
import { useTranslation } from "react-i18next";

import Container from "../../components/ui/Container.jsx";
import Seo from "../../components/seo/Seo.jsx";

export default function NotFoundPage() {
  const { t } = useTranslation("notFound");

  return (
    <>
      <Seo
        title={t("meta.title")}
        description={t("meta.description")}
        noIndex
      />

      <section className="flex min-h-[70svh] items-center bg-surface-lilac py-20 text-center">
        <Container>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-accent-pink">
            404
          </p>
          <h1 className="mx-auto mt-4 max-w-3xl text-5xl font-extrabold leading-none tracking-[-0.05em] text-ink sm:text-7xl">
            {t("title")}
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg">
            {t("description")}
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand px-7 font-bold text-white shadow-button transition-all hover:-translate-y-0.5 hover:bg-brand-dark"
          >
            {t("backHome")}
            <span aria-hidden="true">→</span>
          </Link>
        </Container>
      </section>
    </>
  );
}
