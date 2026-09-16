import { Link } from "react-router";
import { useTranslation } from "react-i18next";

import Container from "../ui/Container.jsx";

export default function Footer() {
  const { t } = useTranslation("common");

  return (
    <footer className="border-t border-line bg-white py-7">
      <Container className="flex flex-col gap-4 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {t("footer.copyright")}
        </p>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <Link to="/privacy" className="transition-colors hover:text-brand">
            {t("footer.privacy")}
          </Link>
          <a
            href="mailto:artlabtallinn@gmail.com"
            className="transition-colors hover:text-brand"
          >
            {t("footer.email")}
          </a>
          <a
            href="https://www.instagram.com/artlab_est/"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-brand"
          >
            {t("footer.instagram")}
          </a>
        </div>
      </Container>
    </footer>
  );
}
