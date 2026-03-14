import { useTranslations } from "next-intl";
import { navLinks } from "@/constants/navigation";

export default function FooterNav() {
  const t = useTranslations("Footer");
  const nav = useTranslations("Header");

  return (
    <div className="hidden lg:block">
      <h4 className="font-heading text-accent text-sm 3xl:text-base 4xl:text-lg uppercase tracking-[0.2em] font-medium mb-4 3xl:mb-5">
        {t("navTitle")}
      </h4>
      <ul className="flex flex-col gap-2 lg:gap-3 3xl:gap-4">
        {navLinks.map((link) => (
          <li key={link.key}>
            <a
              href={link.href}
              className="font-body text-accent/80 text-base 3xl:text-lg 4xl:text-xl hover:text-accent transition-colors"
            >
              {nav(link.key)}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
