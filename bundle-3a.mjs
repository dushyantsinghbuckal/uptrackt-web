import fs from "fs";

const enPath = "./messages/en.json";
const frPath = "./messages/fr.json";
const aboutPath = "./app/about/page.tsx";
const resourcesPath = "./app/resources/page.tsx";

function readJson(path) {
  const text = fs.readFileSync(path, "utf8").replace(/^\uFEFF/, "");
  return JSON.parse(text);
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

en.AboutPage = {
  title: "About Uptrackt",
  intro:
    "Uptrackt was built around a simple belief: businesses should understand what their customers experience in real moments, not just through delayed reports and disconnected analytics.",
  analyticsBefore:
    "Traditional analytics tools show what users do, but rarely explain",
  analyticsHighlight: "why they do it.",
  analyticsAfter:
    "Teams are often left guessing why customers abandon a journey, drop off before purchasing, or struggle during onboarding.",
  missionTitle: "Our Mission",
  missionDescription:
    "Our mission is to help companies capture feedback at the exact moments that shape customer decisions. By combining contextual feedback, behavioral signals, and journey analytics, Uptrackt enables teams to uncover friction quickly and act with confidence.",
  problemTitle: "The Problem We Solve",
  problemDescription1:
    "Modern customer journeys span multiple touchpoints—websites, apps, checkout flows, onboarding experiences, and support interactions. When something breaks in this journey, most teams only see the outcome: lost conversions.",
  problemDescription2:
    "Uptrackt helps businesses identify the true reasons behind customer drop-offs by capturing real feedback during critical moments in the journey.",
  visionTitle: "Our Vision",
  visionDescription:
    "We believe the future of customer experience will be driven by real-time intelligence—where teams can instantly detect friction, understand sentiment, and resolve issues before they impact growth.",
  teamsTitle: "Built for modern product and CX teams",
  teamsDescription:
    "Uptrackt is designed for product teams, customer experience leaders, and growth teams who want a clearer understanding of how their customer journey truly performs.",
  ctaTitle: "See how your customer journey really performs",
  ctaButton: "Request a Demo"
};

fr.AboutPage = {
  title: "À propos d’Uptrackt",
  intro:
    "Uptrackt repose sur une conviction simple : les entreprises doivent comprendre ce que leurs clients vivent au moment où cela se produit, et pas uniquement à travers des rapports tardifs et des données déconnectées.",
  analyticsBefore:
    "Les outils d’analyse traditionnels montrent ce que font les utilisateurs, mais expliquent rarement",
  analyticsHighlight: "pourquoi ils le font.",
  analyticsAfter:
    "Les équipes doivent alors deviner pourquoi les clients abandonnent leur parcours, quittent le site avant l’achat ou rencontrent des difficultés pendant l’intégration.",
  missionTitle: "Notre mission",
  missionDescription:
    "Notre mission est d’aider les entreprises à recueillir des retours aux moments précis qui influencent les décisions des clients. En combinant les retours contextuels, les signaux comportementaux et l’analyse du parcours, Uptrackt permet aux équipes de détecter rapidement les frictions et d’agir avec confiance.",
  problemTitle: "Le problème que nous résolvons",
  problemDescription1:
    "Les parcours clients modernes couvrent de nombreux points de contact : sites web, applications, processus de paiement, expériences d’intégration et interactions avec l’assistance. Lorsqu’un problème survient, la plupart des équipes n’en voient que le résultat : des conversions perdues.",
  problemDescription2:
    "Uptrackt aide les entreprises à identifier les véritables causes des abandons en recueillant les retours clients aux moments critiques du parcours.",
  visionTitle: "Notre vision",
  visionDescription:
    "Nous pensons que l’avenir de l’expérience client reposera sur l’intelligence en temps réel, permettant aux équipes de détecter instantanément les frictions, de comprendre le sentiment des clients et de résoudre les problèmes avant qu’ils n’affectent la croissance.",
  teamsTitle: "Conçu pour les équipes produit et CX modernes",
  teamsDescription:
    "Uptrackt est conçu pour les équipes produit, les responsables de l’expérience client et les équipes de croissance qui souhaitent mieux comprendre les performances réelles de leur parcours client.",
  ctaTitle: "Découvrez les performances réelles de votre parcours client",
  ctaButton: "Demander une démonstration"
};

writeJson(enPath, en);
writeJson(frPath, fr);

const aboutPage = `import {getTranslations} from "next-intl/server";
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
`;

fs.writeFileSync(aboutPath, aboutPage, "utf8");

if (fs.existsSync(resourcesPath)) {
  let resources = fs.readFileSync(resourcesPath, "utf8");

  resources = resources
    .replaceAll("â†’", "→")
    .replaceAll("â€”", "—")
    .replaceAll("â€™", "’");

  fs.writeFileSync(resourcesPath, resources, "utf8");
}

JSON.parse(fs.readFileSync(enPath, "utf8"));
JSON.parse(fs.readFileSync(frPath, "utf8"));

console.log("Added English AboutPage translations.");
console.log("Added French AboutPage translations.");
console.log("Rebuilt app/about/page.tsx.");
console.log("Cleaned Resources page encoding.");
console.log("Bundle 3A completed successfully.");