"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { ChangeEvent, useTransition } from "react";
import { Globe2 } from "lucide-react";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const t = useTranslations("Navbar");
  const [isPending, startTransition] = useTransition();

  function changeLanguage(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;

    if (nextLocale !== "en" && nextLocale !== "fr") {
      return;
    }

    document.cookie =
      `UPTRACKT_LOCALE=${nextLocale}; path=/; max-age=31536000; SameSite=Lax`;

    document.documentElement.lang = nextLocale;

    startTransition(() => {
      router.refresh();
    });
  }

  return (
    <label className="relative inline-flex items-center">
      <span className="sr-only">{t("language")}</span>

      <Globe2
        aria-hidden="true"
        className="pointer-events-none absolute left-3 h-4 w-4 text-gray-500"
      />

      <select
        value={locale}
        onChange={changeLanguage}
        disabled={isPending}
        aria-label={t("language")}
        className="cursor-pointer appearance-none rounded-full border border-gray-300 bg-white py-2 pl-9 pr-9 text-sm font-semibold text-gray-800 outline-none transition hover:border-gray-500 focus:border-black focus:ring-2 focus:ring-gray-200 disabled:cursor-wait disabled:opacity-60 md:text-base"
      >
        <option value="en">{t("english")}</option>
        <option value="fr">{t("french")}</option>
      </select>

      <svg
        aria-hidden="true"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="pointer-events-none absolute right-3 h-4 w-4 text-gray-500"
      >
        <path
          fillRule="evenodd"
          d="M5.22 7.47a.75.75 0 0 1 1.06 0L10 11.19l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 8.53a.75.75 0 0 1 0-1.06Z"
          clipRule="evenodd"
        />
      </svg>
    </label>
  );
}