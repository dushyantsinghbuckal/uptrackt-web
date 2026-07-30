import {getTranslations} from "next-intl/server";

export default async function HowItWorksSection() {
  const t = await getTranslations("HowItWorks");

  return (
    <section className="bg-black py-14">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="space-y-8 font-semibold leading-none tracking-widest text-white">
          <div className="text-6xl md:text-8xl">{t("capture")}</div>
          <div className="text-6xl text-gray-500 md:text-8xl">{t("analyze")}</div>
          <div className="text-6xl md:text-8xl">{t("act")}</div>
        </h2>

        <div className="mx-auto mt-14 max-w-3xl space-y-5 text-base leading-relaxed text-white md:text-2xl">
          <p>{t("captureDescription")}</p>
          <p>{t("analyzeDescription")}</p>
          <p>{t("actDescription")}</p>
        </div>
      </div>
    </section>
  );
}