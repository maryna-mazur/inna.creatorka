import { useTranslations } from "next-intl";

const docLinks = ["offer", "privacy"] as const;

export default function FooterDocs() {
  const t = useTranslations("Footer");

  return (
    <div className="order-1 lg:order-none text-center lg:text-left pb-5 lg:pb-0">
      <h4 className="hidden lg:block font-heading text-accent
            text-sm 3xl:text-base 4xl:text-lg
            uppercase tracking-[0.2em] font-medium mb-4 3xl:mb-5">
        {t("docsTitle")}
      </h4>
      <ul className="flex flex-row items-center justify-center lg:items-start lg:justify-start lg:flex-col gap-2 md:gap-3 3xl:gap-4">
        {docLinks.map((key, i) => (
          <li key={key} className="contents">
            {i > 0 && <span className="text-accent/30 text-xs lg:hidden">·</span>}
            <a href={`/${key}`} className="font-body text-accent/50 lg:text-accent/70
                  text-xs md:text-sm lg:text-base 3xl:text-lg 4xl:text-xl
                  hover:text-accent transition-colors">
              {t(key)}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
