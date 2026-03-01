"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import {Link} from "@/i18n/navigation";

const navLinks = [
  { key: "home", href: "#" },
  { key: "about", href: "#about" },
  { key: "services", href: "#services" },
  { key: "faq", href: "#faq" },
  { key: "contacts", href: "#contacts" },
] as const;

export default function MobileNav() {
  const t = useTranslations("Header");
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden ml-2 sm:ml-3">
      <button
        className="flex flex-col gap-1.5 hover:cursor-pointer scale-75"
        onClick={() => setOpen(!open)}
        aria-label="Menu"
      >
        <span className={`block w-6 h-0.5 bg-primary transition-transform ${open ? "rotate-45 translate-y-2" : ""}`} />
        <span className={`block w-6 h-0.5 bg-primary transition-opacity ${open ? "opacity-0" : ""}`} />
        <span className={`block w-6 h-0.5 bg-primary transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>


      {open && (
        <nav className="absolute left-6 right-6 top-full mt-2 flex flex-col items-center gap-4 bg-bg/90 backdrop-blur-sm rounded-2xl py-6">
          {navLinks.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-heading text-sm uppercase tracking-[0.2em] text-primary hover:text-teal-dark hover:font-medium transition-colors"
            >
              {t(link.key)}
            </Link>
          ))}
        </nav>
      )}
    </div>
  );
}
