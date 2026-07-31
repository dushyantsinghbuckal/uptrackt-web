import {getTranslations} from "next-intl/server";
import Link from "next/link";

export default async function AboutPage() {
  const t = await getTranslations("AboutPage");

  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="mb-10 text-5xl font-bold text-gray-900">
        {t("title")}
      </h1>

      <p className="mb-8 text-xl leading-relaxed text-gray-700">
        {t("intro")}
      </p>

      <p className="mb-10 text-lg leading-relaxed text-gray-700">
        {t("analyticsBefore")}{" "}
        <strong>{t("analyticsHighlight")}</strong>{" "}
        {t("analyticsAfter")}
      </p>

      <section className="mb-12">
        <h2 className="mb-4 text-3xl font-semibold text-gray-900">
          {t("missionTitle")}
        </h2>

        <p className="text-lg leading-relaxed text-gray-700">
          {t("missionDescription")}
        </p>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-3xl font-semibold text-gray-900">
          {t("problemTitle")}
        </h2>

        <p className="mb-4 text-lg leading-relaxed text-gray-700">
          {t("problemDescription1")}
        </p>

        <p className="text-lg leading-relaxed text-gray-700">
          {t("problemDescription2")}
        </p>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-3xl font-semibold text-gray-900">
          {t("visionTitle")}
        </h2>

        <p className="text-lg leading-relaxed text-gray-700">
          {t("visionDescription")}
        </p>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-3xl font-semibold text-gray-900">
          {t("teamsTitle")}
        </h2>

        <p className="text-lg leading-relaxed text-gray-700">
          {t("teamsDescription")}
        </p>
      </section>

      <section className="mt-16 text-center">
        <h3 className="mb-4 text-3xl font-semibold text-gray-900">
          {t("ctaTitle")}
        </h3>

        <Link
          href="/request-demo"
          className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 font-semibold text-white transition hover:bg-gray-900"
        >
          {t("ctaButton")}
        </Link>
      </section>
    </main>
  );
}
