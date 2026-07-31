import fs from "fs";

const enPath = "./messages/en.json";
const frPath = "./messages/fr.json";
const pagePath = "./app/testimonials/page.tsx";

function readJson(path) {
  return JSON.parse(
    fs.readFileSync(path, "utf8").replace(/^\uFEFF/, "")
  );
}

function writeJson(path, data) {
  fs.writeFileSync(
    path,
    JSON.stringify(data, null, 2) + "\n",
    "utf8"
  );
}

const en = readJson(enPath);
const fr = readJson(frPath);

en.TestimonialsPage = {
  eyebrow: "Customer Stories",
  titleLine1: "CUSTOMER",
  titleLine2: "STORIES",
  stories: {
    purchase: {
      title: "We Finally Understood Why Customers Didn’t Buy",
      description:
        "By capturing feedback at the exact moment users dropped off, the team uncovered friction points that traditional analytics completely missed.",
      button: "Explore Full Story"
    },
    anonymous: {
      title: "Captured Feedback From Anonymous Visitors",
      description:
        "The team collected meaningful insight from visitors who never logged in, contacted support, or completed a purchase.",
      button: "Explore Full Story"
    },
    integration: {
      title: "Plugged Cleanly Into Our Existing Stack",
      description:
        "Uptrackt added customer decision context without replacing existing analytics, dashboards, workflows, or reporting infrastructure.",
      button: "Explore Full Story"
    },
    revenue: {
      title: "Turned Drop-Off Feedback Into Revenue Impact",
      description:
        "Customer-reported friction was connected directly to conversion and revenue priorities, helping teams focus on the highest-impact improvements.",
      button: "Explore Full Story"
    }
  }
};

fr.TestimonialsPage = {
  eyebrow: "Témoignages clients",
  titleLine1: "HISTOIRES",
  titleLine2: "CLIENTS",
  stories: {
    purchase: {
      title: "Nous avons enfin compris pourquoi les clients n’achetaient pas",
      description:
        "En recueillant des retours au moment exact où les utilisateurs abandonnaient leur parcours, l’équipe a découvert des points de friction totalement invisibles dans les outils d’analyse traditionnels.",
      button: "Découvrir l’histoire complète"
    },
    anonymous: {
      title: "Nous avons recueilli les retours de visiteurs anonymes",
      description:
        "L’équipe a obtenu des informations utiles auprès de visiteurs qui ne s’étaient jamais connectés, n’avaient jamais contacté l’assistance et n’avaient effectué aucun achat.",
      button: "Découvrir l’histoire complète"
    },
    integration: {
      title: "Une intégration fluide à notre infrastructure existante",
      description:
        "Uptrackt a ajouté le contexte des décisions clients sans remplacer les outils d’analyse, tableaux de bord, processus ou systèmes de reporting existants.",
      button: "Découvrir l’histoire complète"
    },
    revenue: {
      title: "Nous avons transformé les retours d’abandon en impact financier",
      description:
        "Les frictions signalées par les clients ont été directement reliées aux priorités de conversion et de chiffre d’affaires, permettant aux équipes de cibler les améliorations les plus importantes.",
      button: "Découvrir l’histoire complète"
    }
  }
};

writeJson(enPath, en);
writeJson(frPath, fr);

const page = `import {getTranslations} from "next-intl/server";
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

      <section className="mx-auto max-w-7xl space-y-8 px-6 md:px-10">
        {stories.map((story) => (
          <article
            key={story.key}
            className="rounded-lg border border-gray-300 bg-white px-7 py-9 text-black shadow-sm md:px-10 md:py-10"
          >
            <h2 className="text-2xl font-bold leading-tight underline decoration-2 underline-offset-8 md:text-4xl">
              {t(\`stories.\${story.key}.title\`)}
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-900 md:text-xl">
              {t(\`stories.\${story.key}.description\`)}
            </p>

            <div className="mt-14 flex justify-center">
              <Link
                href={story.href}
                className="inline-flex items-center justify-center rounded-full bg-black px-8 py-3 text-base font-semibold text-white transition hover:bg-gray-800 md:text-lg"
              >
                {t(\`stories.\${story.key}.button\`)}
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
`;

fs.writeFileSync(pagePath, page, "utf8");

JSON.parse(fs.readFileSync(enPath, "utf8"));
JSON.parse(fs.readFileSync(frPath, "utf8"));

console.log("Added English TestimonialsPage translations.");
console.log("Added French TestimonialsPage translations.");
console.log("Rebuilt app/testimonials/page.tsx.");
console.log("Testimonials main-page bundle completed successfully.");