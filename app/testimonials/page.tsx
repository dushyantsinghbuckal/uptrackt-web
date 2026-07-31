import {getTranslations} from "next-intl/server";
import Link from "next/link";

const stories = [
  {
    key: "purchase",
    href: "/testimonials/we-finally-understood-why-customers-didnt-buy"
  },
  {
    key: "anonymous",
    href: "/testimonials/captured-feedback-from-anonymous-visitors"
  },
  {
    key: "integration",
    href: "/testimonials/plugged-cleanly-into-our-existing-stack"
  },
  {
    key: "revenue",
    href: "/testimonials/turned-drop-off-feedback-into-revenue-impact"
  }
] as const;

export default async function TestimonialsPage() {
  const t = await getTranslations("TestimonialsPage");

  return (
    <main className="min-h-screen bg-black pb-20 text-white">
      <section className="mx-auto max-w-7xl px-6 pb-14 pt-8 md:px-10">
        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-gray-400">
          {t("eyebrow")}
        </p>

        <h1 className="font-bold uppercase leading-[0.88] tracking-tight">
          <span className="block text-6xl text-white sm:text-7xl md:text-9xl">
            {t("titleLine1")}
          </span>

          <span className="block text-6xl text-gray-500 sm:text-7xl md:text-9xl">
            {t("titleLine2")}
          </span>
        </h1>
      </section>

      <section className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-6 md:px-10">
      {stories.map((story, index) => (
  <article
    key={story.key}
    className={`w-fit max-w-5xl rounded-lg px-7 py-7 shadow-sm md:px-10 md:py-8 ${
      index % 2 === 1
        ? "border border-gray-700 bg-gray-600 text-white"
        : "border border-gray-300 bg-white text-black"
    }`}
  >
<h2
  className={`text-2xl font-bold leading-tight underline decoration-2 underline-offset-8 md:text-4xl ${
    index % 2 === 1 ? "text-white" : "text-black"
  }`}
>              {t(`stories.${story.key}.title`)}
            </h2>

            <p
  className={`mt-6 text-lg leading-8 md:text-xl ${
    index % 2 === 1 ? "text-gray-300" : "text-gray-600"
  }`}
>              {t(`stories.${story.key}.description`)}
            </p>

            <div className="mt-8 flex justify-center">
                            <Link
                href={story.href}
                className={`inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-semibold transition md:text-lg ${
                  index % 2 === 1
                    ? "bg-white text-black hover:bg-gray-200"
                    : "bg-black text-white hover:bg-gray-600"
                }`}
                              >
                {t(`stories.${story.key}.button`)}
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
