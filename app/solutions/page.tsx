import {getTranslations} from "next-intl/server";
import Link from "next/link";

const clarityMoments = [
  "onboarding",
  "pricing",
  "checkout",
  "support",
  "renewal"
] as const;

const solutionCards = [
  {
    key: "checkout",
    href: "/solutions/checkout-drop-offs"
  },
  {
    key: "pricing",
    href: "/solutions/pricing-friction"
  },
  {
    key: "payments",
    href: "/solutions/payment-failures"
  },
  {
    key: "postPurchase",
    href: "/solutions/post-purchase-drop-offs"
  }
] as const;

const alignmentItems = [
  "product",
  "growth",
  "sales",
  "success",
  "leadership"
] as const;

const outcomeItems = [
  "item1",
  "item2",
  "item3",
  "item4",
  "item5",
  "item6"
] as const;

export default async function SolutionsPage() {
  const t = await getTranslations("SolutionsPage");

  return (
    <main>
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="mb-6 text-5xl font-bold leading-tight text-gray-900 md:text-6xl">
            {t("hero.title")}{" "}
            <span className="block text-6xl text-gray-400 md:text-9xl">
              {t("hero.highlight")}
            </span>
          </h1>

          <p className="max-w-6xl text-justify text-xl text-gray-800">
            {t("hero.description")}
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-16 text-center text-5xl font-semibold text-gray-900">
            {t("intelligence.title")}
          </h2>

          <div className="grid gap-16 md:grid-cols-3">
            <IntelligenceCard
              image="/View.svg"
              alt={t("intelligence.revealAlt")}
              title={t("intelligence.revealTitle")}
              description={t("intelligence.revealDescription")}
            />

            <IntelligenceCard
              image="/Think.png"
              alt={t("intelligence.intentAlt")}
              title={t("intelligence.intentTitle")}
              description={t("intelligence.intentDescription")}
            />

            <IntelligenceCard
              image="/Revenue.png"
              alt={t("intelligence.growthAlt")}
              title={t("intelligence.growthTitle")}
              description={t("intelligence.growthDescription")}
            />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[32px] px-4">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{backgroundImage: "url('/Background.jpg')"}}
          />

          <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/20" />

          <div className="relative px-12 pb-16 pt-20">
            <h2 className="mb-4 leading-tight">
              <span className="text-3xl font-bold text-gray-300 md:text-5xl">
                {t("clarity.titlePrefix")}
              </span>

              <span className="block text-4xl font-bold text-white md:text-8xl">
                {t("clarity.titleHighlight")}
              </span>
            </h2>

            <p className="mb-12 max-w-9xl text-3xl leading-relaxed text-white">
              {t("clarity.description")}
            </p>

            <ul className="space-y-6 text-white">
              {clarityMoments.map((item) => (
                <li key={item} className="flex items-center gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm">
                    <span className="text-sm text-white">✓</span>
                  </div>

                  <span className="text-xl font-medium leading-relaxed md:text-2xl">
                    {t(`clarity.moments.${item}`)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gray-200 py-14">
        <div className="mx-auto max-w-9xl px-9 text-center">
          <h2 className="mb-16 font-semibold leading-tight">
            <span className="block text-4xl text-gray-400 md:text-5xl">
              {t("stages.titlePrefix")}
            </span>

            <span className="block text-6xl text-black md:text-7xl">
              {t("stages.titleHighlight")}
            </span>
          </h2>

          <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
            {solutionCards.map((card) => (
              <Link
                key={card.key}
                href={card.href}
                className="group rounded-2xl border border-gray-300 bg-white p-8 transition-all duration-300 hover:scale-[1.02] hover:bg-blue-600 hover:shadow-2xl"
              >
                <h3 className="mb-3 text-2xl font-semibold transition-colors duration-300 group-hover:text-white">
                  {t(`stages.${card.key}.title`)}
                </h3>

                <p className="text-xl leading-relaxed text-gray-600 transition-colors duration-300 group-hover:text-white">
                  {t(`stages.${card.key}.description`)}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-400 py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="mb-10 break-words text-center text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            {t("alignment.title")}
          </h2>

          <p className="mx-auto mb-16 max-w-4xl text-4xl text-white">
            {t("alignment.description")}
          </p>

          <ul className="space-y-8 text-left">
            {alignmentItems.map((item) => (
              <li key={item}>
                <h3 className="mb-2 text-3xl font-semibold text-white">
                  • {t(`alignment.${item}.title`)}
                </h3>

                <p className="text-justify text-2xl leading-relaxed text-white">
                  {t(`alignment.${item}.description`)}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mb-24 bg-black px-6 py-20">
        <h2 className="mb-12 text-center text-6xl font-semibold text-white">
          {t("outcomes.title")}
        </h2>

        <ul className="mx-auto grid max-w-4xl gap-8 text-3xl text-white md:grid-cols-2">
          {outcomeItems.map((item) => (
            <li key={item}>✓ {t(`outcomes.${item}`)}</li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-1 pb-14 pt-1 text-center">
        <h2 className="text-5xl font-semibold leading-tight tracking-tight text-gray-900 md:text-6xl">
          {t("cta.titlePrefix")}{" "}
          <span className="text-gray-400">
            {t("cta.titleHighlight")}
          </span>
        </h2>

        <p className="mx-auto mt-2 max-w-3xl text-xl text-gray-400 md:text-2xl">
          {t("cta.description")}
        </p>

        <div className="mt-6">
          <Link
            href="/request-demo"
            className="inline-flex items-center justify-center rounded-full bg-black px-8 py-4 text-2xl font-semibold text-white transition hover:bg-gray-900"
          >
            {t("cta.button")}
          </Link>
        </div>
      </section>
    </main>
  );
}

function IntelligenceCard({
  image,
  alt,
  title,
  description
}: {
  image: string;
  alt: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center">
      <img
        src={image}
        alt={alt}
        className="mb-6 h-20 w-20"
      />

      <h3 className="mb-4 text-center text-xl font-semibold">
        {title}
      </h3>

      <p className="text-justify leading-relaxed text-gray-600">
        {description}
      </p>
    </div>
  );
}
