import type {ReactNode} from "react";
import Link from "next/link";
import {
  BarChart3,
  BookOpen,
  ClipboardList,
  FileText,
  Rocket,
  Settings,
  Zap
} from "lucide-react";
import {getTranslations} from "next-intl/server";

type ResourceCard = {
  key:
    | "playbooks"
    | "benchmarks"
    | "updates"
    | "studies"
    | "implementation"
    | "research";
  icon: ReactNode;
  iconBg: string;
  iconColor: string;
};

const resourceCards: ResourceCard[] = [
  {
    key: "playbooks",
    icon: <BookOpen aria-hidden="true" />,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600"
  },
  {
    key: "benchmarks",
    icon: <BarChart3 aria-hidden="true" />,
    iconBg: "bg-cyan-100",
    iconColor: "text-cyan-600"
  },
  {
    key: "updates",
    icon: <Rocket aria-hidden="true" />,
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600"
  },
  {
    key: "studies",
    icon: <FileText aria-hidden="true" />,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600"
  },
  {
    key: "implementation",
    icon: <Settings aria-hidden="true" />,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600"
  },
  {
    key: "research",
    icon: <ClipboardList aria-hidden="true" />,
    iconBg: "bg-rose-100",
    iconColor: "text-rose-600"
  }
];

export default async function ResourcesPage() {
  const t = await getTranslations("ResourcesPage");

  return (
    <>
      <section className="relative overflow-hidden bg-black px-6 py-6 text-center text-white">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px"
          }}
        />

        <div className="relative mx-auto max-w-4xl">
          <h1 className="text-5xl font-semibold tracking-tight md:text-9xl">
            {t("title")}
            <span className="text-indigo-500">.</span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-gray-300 md:text-2xl">
            {t("description")}
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-20">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-700 p-10 text-white">
            <div className="absolute right-0 top-0 h-64 w-64 translate-x-32 -translate-y-32 rounded-full bg-white opacity-5" />
            <div className="absolute bottom-0 left-0 h-48 w-48 -translate-x-24 translate-y-24 rounded-full bg-purple-500 opacity-20" />

            <div className="relative flex flex-col items-center gap-8 md:flex-row">
              <div className="rounded-2xl bg-white/20 p-5 backdrop-blur">
                <Zap className="h-10 w-10" aria-hidden="true" />
              </div>

              <div className="flex-1 text-center md:text-left">
                <span className="text-sm font-semibold uppercase tracking-wider text-indigo-200">
                  {t("featuredLabel")}
                </span>

                <h2 className="mt-2 text-3xl font-bold md:text-4xl">
                  {t("featuredTitle")}
                </h2>

                <p className="mt-3 max-w-2xl text-lg text-indigo-100">
                  {t("featuredDescription")}
                </p>
              </div>

              <Link
                href="/roi-calculator"
                className="whitespace-nowrap rounded-xl border border-white/20 bg-white/10 px-8 py-4 text-lg font-semibold backdrop-blur transition hover:bg-white/20"
              >
                {t("featuredButton")} →
              </Link>
            </div>
          </div>
        </div>

        <div className="grid items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3">
          {resourceCards.map((card) => (
            <Resource
              key={card.key}
              icon={card.icon}
              iconBg={card.iconBg}
              iconColor={card.iconColor}
              title={t(`cards.${card.key}.title`)}
              description={t(`cards.${card.key}.description`)}
              badges={[
                t(`cards.${card.key}.badge1`),
                t(`cards.${card.key}.badge2`)
              ]}
            />
          ))}
        </div>

        <div className="mx-auto mt-6 max-w-5xl rounded-3xl border border-gray-200 bg-gray-50 p-6 text-center md:p-10">
          <h3 className="text-3xl font-bold text-gray-900 md:text-4xl">
            {t("ctaTitle")}
          </h3>

          <p className="mx-auto mt-2 max-w-3xl text-xl text-gray-600 md:text-2xl">
            {t("ctaDescription")}
          </p>

          <Link
            href="/request-demo"
            className="relative z-10 mt-4 inline-block rounded-2xl bg-black px-8 py-3 text-2xl font-semibold text-white shadow-md transition hover:bg-gray-900"
          >
            {t("ctaButton")}
          </Link>
        </div>
      </main>
    </>
  );
}

function Resource({
  icon,
  iconBg,
  iconColor,
  title,
  description,
  badges
}: {
  icon: ReactNode;
  iconBg: string;
  iconColor: string;
  title: string;
  description: string;
  badges: string[];
}) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:border-transparent hover:shadow-xl">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative">
        <div className="mb-6 flex items-center gap-4">
          <div
            className={`${iconBg} ${iconColor} flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 [&>svg]:h-7 [&>svg]:w-7`}
          >
            {icon}
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            {title}
          </h2>
        </div>

        <div className="mt-2 flex flex-wrap gap-2">
          {badges.map((badge) => (
            <span
              key={badge}
              className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700"
            >
              {badge}
            </span>
          ))}
        </div>

        <p className="mt-4 leading-relaxed text-gray-600">
          {description}
        </p>
      </div>
    </article>
  );
}