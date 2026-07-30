import {getTranslations} from "next-intl/server";
import {
  GlobeLockIcon,
  RouteIcon,
  ClockAlertIcon,
  MessageSquareTextIcon,
  BookUserIcon,
  FileAlertIcon
} from "../icons/FeatureIcons";

export default async function Capabilities() {
  const t = await getTranslations("Capabilities");

  return (
    <div className="mx-auto max-w-7xl px-6">
      <h2 className="mb-16 text-center text-5xl font-semibold text-white md:text-6xl">
        {t("title")}
      </h2>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-6">
        <div className="relative col-span-1 rounded-3xl bg-neutral-400 p-12 md:col-span-3">
          <BookUserIcon className="absolute right-6 top-6 h-15 w-15 text-black" />
          <h3 className="text-5xl font-semibold text-black">{t("momentTitle")}</h3>
          <p className="mt-6 text-lg font-semibold leading-relaxed text-white md:text-xl">
            {t("momentDescription")}
          </p>
        </div>

        <div className="relative col-span-1 rounded-3xl bg-neutral-400 p-12 md:col-span-2">
          <RouteIcon className="absolute right-6 top-6 h-15 w-15 text-black" />
          <h3 className="text-4xl font-semibold text-black">{t("journeyTitle")}</h3>
          <p className="mt-6 text-lg font-semibold leading-relaxed text-white md:text-xl">
            {t("journeyDescription")}
          </p>
        </div>

        <div className="relative col-span-1 rounded-3xl bg-neutral-400 p-10 md:col-span-2">
          <FileAlertIcon className="absolute right-6 top-6 h-13 w-13 text-black" />
          <h3 className="text-4xl font-semibold text-black">{t("frictionTitle")}</h3>
          <p className="mt-6 text-lg font-semibold leading-relaxed text-white md:text-xl">
            {t("frictionDescription")}
          </p>
        </div>

        <div className="relative col-span-1 rounded-3xl bg-neutral-400 p-12 md:col-span-3">
          <MessageSquareTextIcon className="absolute right-6 top-6 h-15 w-15 text-black" />
          <h3 className="text-5xl font-semibold text-black">{t("insightsTitle")}</h3>
          <p className="mt-6 text-lg font-semibold leading-relaxed text-white md:text-xl">
            {t("insightsDescription")}
          </p>
        </div>

        <div className="relative col-span-1 rounded-3xl bg-neutral-400 p-12 md:col-span-2">
          <ClockAlertIcon className="absolute right-6 top-6 h-12 w-12 text-black" />
          <h3 className="text-4xl font-semibold text-black">{t("alertsTitle")}</h3>
          <p className="mt-6 text-lg font-semibold leading-relaxed text-white md:text-xl">
            {t("alertsDescription")}
          </p>
        </div>

        <div className="relative col-span-1 rounded-3xl bg-neutral-400 p-12 md:col-span-2">
          <GlobeLockIcon className="absolute right-6 top-6 h-10 w-10 text-black" />
          <h3 className="text-4xl font-semibold text-black">{t("securityTitle")}</h3>
          <p className="mt-6 text-lg font-semibold leading-relaxed text-white md:text-xl">
            {t("securityDescription")}
          </p>
        </div>
      </div>
    </div>
  );
}