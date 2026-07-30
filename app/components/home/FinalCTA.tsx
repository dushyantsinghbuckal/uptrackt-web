import {getTranslations} from "next-intl/server";

export default async function FinalCTA() {
  const t = await getTranslations("FinalCTA");

  return (
    <section id="demo" className="bg-black py-20 text-white">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-4xl font-bold">{t("title")}</h2>

        <p className="mt-4 text-gray-300">{t("description")}</p>

        <div className="mt-8">
          <a
            href="/request-demo"
            className="inline-block rounded-md bg-white px-8 py-4 font-semibold text-black transition hover:bg-gray-100"
          >
            {t("button")}
          </a>
        </div>
      </div>
    </section>
  );
}