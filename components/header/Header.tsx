"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link, useRouter, usePathname } from "@/i18n/navigation";
import MobileNav from "@/components/header/MobileNav";
import InstagramIcon from "@/components/icons/InstagramIcon";
import TelegramIcon from "@/components/icons/TelegramIcon";
import { type ComponentType } from "react";

const socials: { label: string; href: string; Icon: ComponentType<{ className?: string }> }[] = [
  { label: "Instagram", href: "https://www.instagram.com/inna.creatorka/", Icon: InstagramIcon },
  { label: "Telegram", href: "https://t.me/inna_28_i", Icon: TelegramIcon },
];

const locales = [
  { code: "uk", label: "UA" },
  { code: "en", label: "EN" },
] as const;

const navLinks = [
  { key: "home", href: "#" },
  { key: "about", href: "#about" },
  { key: "services", href: "#services" },
  { key: "faq", href: "#faq" },
  { key: "contacts", href: "#contacts" },
] as const;

export default function Header() {
  const t = useTranslations("Header");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function switchLocale(next: "uk" | "en") {
    if (next !== locale) {
      router.replace(pathname, { locale: next });
    }
  }

  return (
    <header className="absolute top-0 left-0 right-0 z-30 px-6 py-4 md:px-10 md:py-6  ">
      <div className="flex items-center justify-between">

        <Link
          href="#"
          className="font-logo text-2xl md:text-3xl text-primary"
          style={{ WebkitTextStroke: "0.5px" }}
        >
          inna.creatorka
        </Link>

        <nav className="hidden md:flex items-center gap-6 lg:gap-10 ml-5">
          {navLinks.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className="font-heading text-sm lg:text-base uppercase font-medium tracking-[0.2em] text-primary-dark hover:text-accent transition-colors"
            >
              {t(link.key)}
            </Link>
          ))}
        </nav>


        <div className="flex items-center gap-4 lg:gap-6">
          <div className="hidden md:flex items-center gap-2">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-full border border-primary/30 flex items-center justify-center hover:bg-primary/10 transition"
              >
                <Icon className="text-primary" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-1 font-heading text-sm uppercase tracking-wide">
            {locales.map(({ code, label }) => (
              <button
                key={code}
                onClick={() => switchLocale(code)}
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:cursor-pointer ${
                  locale === code
                    ? "bg-primary text-bg"
                    : "text-primary hover:text-accent-dark hover:bg-primary/10"
                }`}
              >
                {label}
              </button>
            ))}
          </div>


          <MobileNav />
        </div>
      </div>
    </header>
  );
}
