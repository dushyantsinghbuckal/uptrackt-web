import {cookies} from "next/headers";
import {getRequestConfig} from "next-intl/server";

const supportedLocales = ["en", "fr"] as const;
type SupportedLocale = (typeof supportedLocales)[number];

function isSupportedLocale(locale: string | undefined): locale is SupportedLocale {
  return supportedLocales.includes(locale as SupportedLocale);
}

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const savedLocale = cookieStore.get("UPTRACKT_LOCALE")?.value;

  const locale: SupportedLocale = isSupportedLocale(savedLocale)
    ? savedLocale
    : "en";

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
