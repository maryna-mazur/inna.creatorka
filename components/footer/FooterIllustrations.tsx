import { useTranslations } from "next-intl";

export default function FooterIllustrations() {
  const t = useTranslations("Footer");

  return (
    <div className="order-2 lg:order-none py-5 lg:py-0 max-w-md md:max-w-lg mx-auto lg:max-w-none lg:mx-0">
      <h4 className="font-heading text-accent text-xs md:text-sm 3xl:text-base 4xl:text-lg uppercase tracking-[0.2em] font-medium mb-3 md:mb-4 3xl:mb-5 text-center lg:text-left">
        {t("illustrationsTitle")}
      </h4>
      <div className="flex items-start gap-3 bg-accent/5 rounded-xl p-4 3xl:p-5 4xl:p-6">
        <p className="font-body text-accent/60 text-xs md:text-sm 3xl:text-base 4xl:text-lg leading-relaxed">
          {t.rich("illustrationsText", {
            b: (chunks) => (
              <span className="text-accent font-medium">{chunks}</span>
            ),
          })}
        </p>
      </div>
    </div>
  );
}
