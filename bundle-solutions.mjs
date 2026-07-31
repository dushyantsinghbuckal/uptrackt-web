import fs from "fs";

const enPath = "./messages/en.json";
const frPath = "./messages/fr.json";
const pagePath = "./app/solutions/page.tsx";

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

en.SolutionsPage = {
  hero: {
    title: "Make Every Customer Moment",
    highlight: "Measurable.",
    description:
      "Customer journeys don’t fail loudly. They erode silently at onboarding, pricing, checkout, activation, and renewal. We surface decision-level feedback exactly when intent is highest, so you can fix what truly blocks revenue."
  },
  intelligence: {
    title: "Intelligence Where Decisions Are Made",
    revealTitle: "Reveal Hidden Drop Offs",
    revealDescription:
      "Customers don’t always complain; they quietly leave. We capture structured and open-ended signals from anonymous visitors, trial users, lost deals, and churned accounts, mapping feedback directly to funnel stages.",
    revealAlt: "Reveal",
    intentTitle: "Understand Real Intent",
    intentDescription:
      "Not all churn is equal. We categorize feedback into pricing sensitivity, feature gaps, trust concerns, competitive pull, UX friction, and expectation misalignment, turning qualitative input into executive-ready insight.",
    intentAlt: "Intent",
    growthTitle: "Feedback That Drives Growth",
    growthDescription:
      "Insights integrate into your CRM, analytics, BI dashboards, and product workflows, directly influencing conversion rates, activation improvements, and retention strategies.",
    growthAlt: "Revenue"
  },
  clarity: {
    titlePrefix: "From Blind Spots to",
    titleHighlight: "Strategic Clarity",
    description:
      "Traditional analytics show what happened. We surface why it happened precisely at the stage where intent turns into decision.",
    moments: {
      onboarding: "After onboarding completion",
      pricing: "After pricing evaluation",
      checkout: "After checkout abandonment",
      support: "After support interaction",
      renewal: "After renewal or churn"
    }
  },
  stages: {
    titlePrefix: "Target Solutions For",
    titleHighlight: "High Impact Stages",
    checkout: {
      title: "Checkout Drop-offs",
      description:
        "Understand why customers abandon checkout and eliminate real blockers tied to payment confidence, friction, and trust."
    },
    pricing: {
      title: "Pricing Friction",
      description:
        "Identify where price perception breaks, which objections repeat, and how positioning influences decision hesitation."
    },
    payments: {
      title: "Payment Failures",
      description:
        "Capture real-time signals when payments fail or options are missing, uncovering friction that traditional error logs miss."
    },
    postPurchase: {
      title: "Post Purchase Drop-offs",
      description:
        "Detect early churn signals after activation and understand why customers disengage before lifetime value is realized."
    }
  },
  alignment: {
    title: "Designed For Cross Functional Alignment",
    description:
      "Built to connect product, growth, sales, and customer success teams around real customer insight.",
    product: {
      title: "Product",
      description:
        "Identify feature gaps and UX friction in real customer language. Prioritize roadmap decisions using contextual, stage-specific feedback."
    },
    growth: {
      title: "Growth",
      description:
        "Refine messaging based on true buyer objections. Optimize conversion across onboarding, pricing, and checkout."
    },
    sales: {
      title: "Sales",
      description:
        "Understand why deals stall and what objections dominate. Equip representatives with insight-driven positioning to shorten sales cycles."
    },
    success: {
      title: "Customer Success",
      description:
        "Detect churn signals early and act on friction to improve retention and lifetime value."
    },
    leadership: {
      title: "Leadership",
      description:
        "Translate qualitative feedback into executive-ready insight and align cross-functional strategy with measurable revenue impact."
    }
  },
  outcomes: {
    title: "Revenue Aligned Outcomes",
    item1: "Stronger product-market fit clarity",
    item2: "Reduced onboarding abandonment",
    item3: "Shorter sales cycles",
    item4: "Higher feature adoption",
    item5: "Lower churn rates",
    item6: "Revenue aligned outcomes"
  },
  cta: {
    titlePrefix: "Make Insight Your",
    titleHighlight: "Unfair Advantage",
    description:
      "The companies that win don’t collect more data. They interpret it better, at the right moment.",
    button: "Let’s Collaborate"
  }
};

fr.SolutionsPage = {
  hero: {
    title: "Rendez chaque moment client",
    highlight: "Mesurable.",
    description:
      "Les parcours clients ne se dégradent pas toujours de façon visible. Les difficultés apparaissent progressivement pendant l’intégration, la tarification, le paiement, l’activation et le renouvellement. Nous recueillons des retours au niveau des décisions lorsque l’intention est la plus forte, afin que vous puissiez corriger les véritables obstacles au chiffre d’affaires."
  },
  intelligence: {
    title: "L’intelligence au moment où les décisions sont prises",
    revealTitle: "Révélez les abandons invisibles",
    revealDescription:
      "Les clients ne se plaignent pas toujours ; ils partent souvent en silence. Nous recueillons des signaux structurés et des réponses ouvertes auprès des visiteurs anonymes, des utilisateurs en période d’essai, des opportunités perdues et des clients ayant résilié, puis nous les relions directement aux étapes du parcours.",
    revealAlt: "Révéler",
    intentTitle: "Comprenez l’intention réelle",
    intentDescription:
      "Tous les abandons ne se ressemblent pas. Nous classons les retours selon la sensibilité au prix, les fonctionnalités manquantes, les problèmes de confiance, l’influence de la concurrence, les frictions UX et les attentes non satisfaites afin de transformer les commentaires qualitatifs en informations exploitables par la direction.",
    intentAlt: "Intention",
    growthTitle: "Des retours qui stimulent la croissance",
    growthDescription:
      "Les informations s’intègrent à votre CRM, vos outils d’analyse, vos tableaux de bord BI et vos processus produit afin d’améliorer directement la conversion, l’activation et la fidélisation.",
    growthAlt: "Chiffre d’affaires"
  },
  clarity: {
    titlePrefix: "Des zones d’ombre à la",
    titleHighlight: "Clarté stratégique",
    description:
      "Les outils d’analyse traditionnels indiquent ce qui s’est passé. Nous révélons pourquoi cela s’est produit, précisément à l’étape où l’intention devient une décision.",
    moments: {
      onboarding: "Après la fin de l’intégration",
      pricing: "Après l’évaluation des tarifs",
      checkout: "Après un abandon lors du paiement",
      support: "Après une interaction avec l’assistance",
      renewal: "Après un renouvellement ou une résiliation"
    }
  },
  stages: {
    titlePrefix: "Des solutions ciblées pour les",
    titleHighlight: "Étapes à fort impact",
    checkout: {
      title: "Abandons lors du paiement",
      description:
        "Comprenez pourquoi les clients abandonnent leur paiement et éliminez les véritables obstacles liés à la confiance, aux frictions et aux moyens de paiement."
    },
    pricing: {
      title: "Friction liée aux tarifs",
      description:
        "Identifiez les moments où la perception du prix se dégrade, les objections récurrentes et l’influence du positionnement sur l’hésitation."
    },
    payments: {
      title: "Échecs de paiement",
      description:
        "Recueillez des signaux en temps réel lorsque les paiements échouent ou que certaines options sont absentes, afin de détecter les frictions que les journaux d’erreurs traditionnels ne montrent pas."
    },
    postPurchase: {
      title: "Abandons après l’achat",
      description:
        "Détectez les premiers signaux de désengagement après l’activation et comprenez pourquoi les clients se retirent avant que leur valeur à long terme ne soit réalisée."
    }
  },
  alignment: {
    title: "Conçu pour l’alignement interfonctionnel",
    description:
      "Conçu pour réunir les équipes produit, croissance, vente et réussite client autour d’informations réelles provenant des clients.",
    product: {
      title: "Produit",
      description:
        "Identifiez les fonctionnalités manquantes et les frictions UX avec les propres mots des clients. Priorisez la feuille de route grâce à des retours contextualisés pour chaque étape."
    },
    growth: {
      title: "Croissance",
      description:
        "Affinez vos messages à partir des véritables objections des acheteurs. Optimisez la conversion pendant l’intégration, la tarification et le paiement."
    },
    sales: {
      title: "Ventes",
      description:
        "Comprenez pourquoi les opportunités stagnent et quelles objections dominent. Donnez aux équipes commerciales des arguments fondés sur les informations clients pour raccourcir les cycles de vente."
    },
    success: {
      title: "Réussite client",
      description:
        "Détectez rapidement les signaux de résiliation et agissez sur les frictions afin d’améliorer la fidélisation et la valeur vie client."
    },
    leadership: {
      title: "Direction",
      description:
        "Transformez les retours qualitatifs en informations exploitables par la direction et alignez la stratégie interfonctionnelle sur un impact mesurable sur le chiffre d’affaires."
    }
  },
  outcomes: {
    title: "Des résultats alignés sur le chiffre d’affaires",
    item1: "Une meilleure compréhension de l’adéquation produit-marché",
    item2: "Une réduction des abandons pendant l’intégration",
    item3: "Des cycles de vente plus courts",
    item4: "Une adoption accrue des fonctionnalités",
    item5: "Une diminution du taux de résiliation",
    item6: "Des résultats directement liés au chiffre d’affaires"
  },
  cta: {
    titlePrefix: "Faites de vos informations un",
    titleHighlight: "Avantage décisif",
    description:
      "Les entreprises qui réussissent ne recueillent pas simplement davantage de données. Elles les interprètent mieux, au bon moment.",
    button: "Collaborons ensemble"
  }
};

writeJson(enPath, en);
writeJson(frPath, fr);

const page = `import {getTranslations} from "next-intl/server";
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
                    {t(\`clarity.moments.\${item}\`)}
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
                  {t(\`stages.\${card.key}.title\`)}
                </h3>

                <p className="text-xl leading-relaxed text-gray-600 transition-colors duration-300 group-hover:text-white">
                  {t(\`stages.\${card.key}.description\`)}
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
                  • {t(\`alignment.\${item}.title\`)}
                </h3>

                <p className="text-justify text-2xl leading-relaxed text-white">
                  {t(\`alignment.\${item}.description\`)}
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
            <li key={item}>✓ {t(\`outcomes.\${item}\`)}</li>
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
`;

fs.writeFileSync(pagePath, page, "utf8");

JSON.parse(fs.readFileSync(enPath, "utf8"));
JSON.parse(fs.readFileSync(frPath, "utf8"));

console.log("Added English SolutionsPage translations.");
console.log("Added French SolutionsPage translations.");
console.log("Rebuilt app/solutions/page.tsx.");
console.log("Removed corrupted characters from the Solutions page.");
console.log("Solutions bundle completed successfully.");