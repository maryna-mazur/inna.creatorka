import { useTranslations } from "next-intl";

export default function FooterCopyright() {
  const t = useTranslations("Footer");

  return (
    <div className="order-3 lg:order-none text-center lg:text-left pt-5 lg:pt-0 lg:max-w-[240px] xl:max-w-[280px] 3xl:max-w-[340px]">
      <p className="font-body text-accent/80 text-sm md:text-base 3xl:text-lg 4xl:text-xl flex items-center justify-center lg:justify-start gap-2 3xl:gap-3 mb-2">
        <span className="w-5 h-5 3xl:w-6 3xl:h-6 4xl:w-7 4xl:h-7 rounded-full border border-accent/30 flex items-center justify-center text-sm 3xl:text-base 4xl:text-lg">
          ©
        </span>
        {t("brand")}
      </p>
      <p className="font-body text-accent/50 text-xs md:text-sm 3xl:text-base 4xl:text-lg leading-relaxed">
        {t("rights")}
      </p>
    </div>
  );
}
