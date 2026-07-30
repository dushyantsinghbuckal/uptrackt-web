import {Zap} from "lucide-react";
import {getTranslations} from "next-intl/server";

export default async function WhyUptrackt() {
  const t = await getTranslations("WhyUptrackt");

  const cards = [
    {
      title: t("actTitle"),
      description: t("actDescription")
    },
    {
      title: t("frictionTitle"),
      description: t("frictionDescription")
    },
    {
      title: t("growTitle"),
      description: t("growDescription")
    }
  ];

  return (
    <section className="relative overflow-hidden bg-white py-1">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #000 1px, transparent 0)",
          backgroundSize: "40px 40px"
        }}
      />

      <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-gray-100 opacity-30 blur-3xl" />
      <div className="absolute bottom-20 left-0 h-80 w-80 rounded-full bg-gray-200 opacity-20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-5xl font-bold tracking-tight text-gray-900 md:text-6xl">
            {t("title")}
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-gray-500 md:text-2xl">
            {t("description")}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-md"
            >
              <div className="mb-4 flex items-center gap-4">
                <div className="inline-flex rounded-xl bg-gray-50 p-3 text-gray-600">
                  <Zap className="h-7 w-7" strokeWidth={1.5} />
                </div>

                <h3 className="text-2xl font-medium text-gray-900">
                  {card.title}
                </h3>
              </div>

              <p className="leading-relaxed text-gray-500">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}