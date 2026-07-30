"use client";

import {useEffect, useState} from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {Menu, X} from "lucide-react";
import {useTranslations} from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

const links = [
  {translationKey: "platform", href: "/"},
  {translationKey: "solutions", href: "/solutions"},
  {translationKey: "pricing", href: "/pricing"},
  {translationKey: "testimonials", href: "/testimonials"},
  {translationKey: "resources", href: "/resources"}
] as const;

export default function Navbar() {
  const pathname = usePathname();
  const t = useTranslations("Navbar");

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 w-full bg-white transition-shadow ${
        scrolled ? "border-b border-gray-200 shadow-sm" : ""
      }`}
    >
      <div className="flex h-22 w-full items-center px-2 md:px-4">
        <Link href="/" className="flex shrink-0 items-center gap-1">
          <img
            src="/file.svg"
            alt="Uptrackt logo"
            className="h-30 w-auto shrink-0 md:h-42"
          />

          <span className="text-2xl font-bold leading-none text-gray-900 md:text-4xl">
            Uptrackt
          </span>
        </Link>

        <div className="hidden flex-1 items-center justify-center gap-8 text-base font-medium md:flex md:text-2xl">
          {links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.translationKey}
                href={link.href}
                className={
                  isActive
                    ? "font-semibold text-black"
                    : "text-gray-600 transition-colors hover:text-black"
                }
              >
                {t(link.translationKey)}
              </Link>
            );
          })}
        </div>

        <div className="flex shrink-0 items-center gap-2 md:gap-4">
          <LanguageSwitcher />

          <Link
            href="/request-demo"
            onClick={() => setMobileOpen(false)}
            className="hidden items-center justify-center rounded-full bg-black px-4 py-2 text-xl font-bold text-white transition hover:opacity-90 md:inline-flex"
          >
            {t("collaborate")}
          </Link>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-900 md:hidden"
            onClick={() => setMobileOpen((current) => !current)}
            aria-label={mobileOpen ? t("closeMenu") : t("openMenu")}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X aria-hidden="true" className="h-6 w-6" />
            ) : (
              <Menu aria-hidden="true" className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-gray-200 bg-white md:hidden">
          <div className="flex flex-col gap-4 px-6 py-5 text-lg">
            {links.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.translationKey}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={
                    isActive
                      ? "font-semibold text-black"
                      : "text-gray-600"
                  }
                >
                  {t(link.translationKey)}
                </Link>
              );
            })}

            <Link
              href="/request-demo"
              onClick={() => setMobileOpen(false)}
              className="rounded-full bg-black px-4 py-2 text-center text-xl font-bold text-white transition hover:opacity-90"
            >
              {t("collaborate")}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
