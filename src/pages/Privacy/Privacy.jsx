import { Fragment } from "react";
import { useTranslation } from "react-i18next";

import Seo from "../../components/seo/Seo.jsx";
import Container from "../../components/ui/Container.jsx";
import PageIntro from "../../components/ui/PageIntro.jsx";

const EMAIL = "artlabtallinn@gmail.com";
const WEBSITE = "www.aki.ee";

function decodeMarkdownEscapes(text) {
  return text.replaceAll("\\@", "@").replaceAll("\\.", ".");
}

function renderLinks(text, keyPrefix) {
  return text.split(/(artlabtallinn@gmail\.com|www\.aki\.ee)/g).map((part, index) => {
    if (part === EMAIL) {
      return (
        <a
          key={`${keyPrefix}-email-${index}`}
          className="font-semibold text-brand underline decoration-brand/25 underline-offset-4 transition-colors hover:text-brand-dark hover:decoration-brand"
          href={`mailto:${EMAIL}`}
        >
          {part}
        </a>
      );
    }

    if (part === WEBSITE) {
      return (
        <a
          key={`${keyPrefix}-website-${index}`}
          className="font-semibold text-brand underline decoration-brand/25 underline-offset-4 transition-colors hover:text-brand-dark hover:decoration-brand"
          href="https://www.aki.ee"
          rel="noreferrer"
          target="_blank"
        >
          {part}
        </a>
      );
    }

    return part;
  });
}

function InlineText({ text }) {
  const decodedText = decodeMarkdownEscapes(text);

  return decodedText.split(/(\*\*[^*]+\*\*)/g).map((part, index) => {
    const isBold = part.startsWith("**") && part.endsWith("**");
    const content = isBold ? part.slice(2, -2) : part;

    if (isBold) {
      return (
        <strong key={`strong-${index}`} className="font-bold text-ink">
          {renderLinks(content, `strong-${index}`)}
        </strong>
      );
    }

    return (
      <Fragment key={`text-${index}`}>
        {renderLinks(content, `text-${index}`)}
      </Fragment>
    );
  });
}

function PolicyBlock({ block, isFirstHeading }) {
  if (block.type === "date") {
    return (
      <p className="inline-flex rounded-full bg-brand/8 px-4 py-2 text-xs font-bold text-brand sm:text-sm">
        <InlineText text={block.text} />
      </p>
    );
  }

  if (block.type === "heading") {
    return (
      <h2
        className={`${
          isFirstHeading ? "mt-10" : "mt-12 border-t border-line pt-12"
        } text-2xl font-extrabold leading-tight tracking-[-0.03em] text-ink sm:text-3xl`}
      >
        <InlineText text={block.text} />
      </h2>
    );
  }

  if (block.type === "subheading") {
    return (
      <h3 className="mt-8 text-lg font-extrabold leading-snug tracking-[-0.02em] text-ink sm:text-xl">
        <InlineText text={block.text} />
      </h3>
    );
  }

  if (block.type === "list") {
    return (
      <ul className="mt-5 grid gap-3" role="list">
        {block.items.map((item, index) => (
          <li
            key={`${item}-${index}`}
            className="grid grid-cols-[auto_1fr] gap-3 text-sm leading-7 text-muted sm:text-base sm:leading-8"
          >
            <span
              className="mt-[0.72rem] size-1.5 rounded-full bg-accent-cyan sm:mt-[0.82rem]"
              aria-hidden="true"
            />
            <span>
              <InlineText text={item} />
            </span>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <p className="mt-5 text-sm leading-7 text-muted sm:text-base sm:leading-8">
      <InlineText text={block.text} />
    </p>
  );
}

export default function PrivacyPage() {
  const { t } = useTranslation("privacy");
  const translatedContent = t("content", { returnObjects: true });
  const contentBlocks = Array.isArray(translatedContent) ? translatedContent : [];
  const firstHeadingIndex = contentBlocks.findIndex(
    (block) => block.type === "heading",
  );

  return (
    <>
      <Seo
        title={t("meta.title")}
        description={t("meta.description")}
        path="/privacy"
      />

      <PageIntro eyebrow={t("intro.eyebrow")} title={t("intro.title")} />

      <section className="relative overflow-hidden bg-surface-lilac py-12 sm:py-16 lg:py-24">
        <div
          className="pointer-events-none absolute -left-32 top-24 size-80 rounded-full bg-accent-cyan/7 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-36 bottom-40 size-96 rounded-full bg-accent-pink/7 blur-3xl"
          aria-hidden="true"
        />

        <Container className="relative">
          <article className="mx-auto max-w-5xl rounded-[1.75rem] border border-white/90 bg-white p-6 shadow-[0_24px_75px_rgba(51,39,73,0.09)] sm:rounded-[2.25rem] sm:p-10 lg:p-14 xl:p-16">
            {contentBlocks.map((block, index) => (
              <PolicyBlock
                key={`${block.type}-${index}`}
                block={block}
                isFirstHeading={index === firstHeadingIndex}
              />
            ))}
          </article>
        </Container>
      </section>
    </>
  );
}
