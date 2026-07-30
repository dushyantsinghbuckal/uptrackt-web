"use client";

import {useLocale, useTranslations} from "next-intl";
import {useRouter} from "next/navigation";
import {ChangeEvent, useTransition} from "react";

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
    <label className="inline-flex items-center">
      <span className="sr-only">{t("language")}</span>

      <select
        value={locale}
        onChange={changeLanguage}
        disabled={isPending}
        aria-label={t("language")}
        className="cursor-pointer rounded-full border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-800 outline-none transition hover:border-gray-500 focus:border-black focus:ring-2 focus:ring-gray-200 disabled:cursor-wait disabled:opacity-60 md:text-base"
      >
        <option value="en">EN</option>
        <option value="fr">FR</option>
      </select>
    </label>
  );
}
