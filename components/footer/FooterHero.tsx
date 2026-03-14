import { useTranslations } from "next-intl";
import InstagramIcon from "@/components/icons/InstagramIcon";
import TelegramIcon from "@/components/icons/TelegramIcon";

const socials = [
  { label: "Telegram", href: "https://t.me/inna_28_i", Icon: TelegramIcon },
  { label: "Instagram", href: "https://www.instagram.com/inna.creatorka/", Icon: InstagramIcon },
];

export default function FooterHero() {
  const t = useTranslations("Footer");

  return (
    <div className="flex items-end justify-between gap-4 md:gap-10 mb-6 md:mb-12 lg:mb-16 3xl:mb-20">
      <h2 className="font-heading text-accent xl:pr-6
            text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 3xl:text-6xl 4xl:text-7xl
            uppercase font-semibold tracking-widest leading-tight">
        {t("headline")}
      </h2>

      <div className="flex items-center gap-2.5 md:gap-4 3xl:gap-5 shrink-0">
        {socials.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="w-8 h-8 md:w-14 md:h-14 lg:w-12 lg:h-12 xl:w-14 xl:h-14 3xl:w-20 3xl:h-20 4xl:w-24 4xl:h-24 rounded-full border border-accent/30 flex items-center justify-center hover:bg-accent/10 active:bg-accent/10 transition-colors"
          >
            <Icon className="w-3.5 h-3.5 md:w-6 md:h-6 lg:w-5 lg:h-5 xl:w-6 xl:h-6 3xl:w-8 3xl:h-8 4xl:w-10 4xl:h-10 text-accent" />
          </a>
        ))}
      </div>
    </div>
  );
}
