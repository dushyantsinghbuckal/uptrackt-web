import fs from "node:fs";

const enPath = "messages/en.json";
const frPath = "messages/fr.json";
const componentPath = "app/pricing/pricing-client.tsx";

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function writeJson(filePath, data) {
  fs.writeFileSync(
    filePath,
    JSON.stringify(data, null, 2) + "\n",
    "utf8"
  );
}

const en = readJson(enPath);
const fr = readJson(frPath);

en.Pricing = {
  title: "Choose your Growth Plan",
  subtitle:
    "Simple plans for understanding your customer journey. No complexity, no noise.",
  monthly: "Monthly",
  yearly: "Yearly",
  perMonth: " / month",
  perYear: " / year",
  bestFor: "Best for",
  paymentLoading:
    "Payment system is loading. Please try again in a few seconds.",

  plans: {
    starter: {
      name: "Starter",
      description: "Fix the biggest problem first",
      audience: "Early-stage brands & small teams",
      features: {
        feature1: "Any 2 journey stages",
        feature2: "Anonymous feedback capture",
        feature3: "Contextual questions",
        feature4: "10 insights / month",
        feature5: "Monthly summary"
      },
      quote:
        "Customers are dropping off. We need to know why, quickly.",
      button: "Get Starter"
    },

    growth: {
      name: "Growth",
      description: "See how your journey truly performs",
      audience: "Growing brands & CX teams",
      features: {
        feature1: "5 journey stages",
        feature2: "Cross-stage comparison",
        feature3: "AI root-cause analysis",
        feature4: "50 insights / month",
        feature5: "Revenue signals"
      },
      quote:
        "Problems do not exist in isolation. We need to see how stages affect each other.",
      button: "Get Growth"
    },

    scale: {
      name: "Scale",
      description: "Full-funnel decision intelligence",
      audience: "Serious D2C brands & marketplaces",
      features: {
        feature1: "Everything in Growth",
        feature2: "Cover all 10 journey stages",
        feature3: "End-to-end visibility",
        feature4: "Unlimited insights",
        feature5: "Predictive signals",
        feature6: "Priority support",
        feature7: "Quarterly journey truth review"
      },
      quote:
        "We own the complete journey. We need the full truth.",
      button: "Get Scale"
    },

    custom: {
      name: "Custom",
      description: "Built around your business",
      price: "Custom pricing",
      audience: "Enterprise & complex journeys",
      features: {
        feature1: "Unlimited stages",
        feature2: "Advanced insights",
        feature3: "Custom reporting",
        feature4: "Integrations",
        feature5: "SLA & compliance"
      },
      quote:
        "Our journey is complex. We need it tailored.",
      button: "Contact Sales"
    }
  }
};

fr.Pricing = {
  title: "Choisissez votre formule de croissance",
  subtitle:
    "Des formules simples pour comprendre votre parcours client, sans complexit\u00e9 ni distractions.",
  monthly: "Mensuel",
  yearly: "Annuel",
  perMonth: " / mois",
  perYear: " / an",
  bestFor: "Id\u00e9al pour",
  paymentLoading:
    "Le syst\u00e8me de paiement est en cours de chargement. Veuillez r\u00e9essayer dans quelques secondes.",

  plans: {
    starter: {
      name: "D\u00e9marrage",
      description: "R\u00e9solvez d'abord le probl\u00e8me le plus important",
      audience: "Jeunes marques et petites \u00e9quipes",
      features: {
        feature1: "2 \u00e9tapes du parcours au choix",
        feature2: "Collecte de retours anonymes",
        feature3: "Questions contextuelles",
        feature4: "10 informations exploitables par mois",
        feature5: "Synth\u00e8se mensuelle"
      },
      quote:
        "Les clients abandonnent leur parcours. Nous devons rapidement comprendre pourquoi.",
      button: "Choisir D\u00e9marrage"
    },

    growth: {
      name: "Croissance",
      description: "Comprenez les performances r\u00e9elles de votre parcours",
      audience: "Marques en croissance et \u00e9quipes CX",
      features: {
        feature1: "5 \u00e9tapes du parcours",
        feature2: "Comparaison entre les \u00e9tapes",
        feature3: "Analyse des causes profondes par l'IA",
        feature4: "50 informations exploitables par mois",
        feature5: "Signaux li\u00e9s au chiffre d'affaires"
      },
      quote:
        "Les probl\u00e8mes ne sont pas isol\u00e9s. Nous devons comprendre comment les \u00e9tapes s'influencent.",
      button: "Choisir Croissance"
    },

    scale: {
      name: "\u00c9chelle",
      description: "Intelligence d\u00e9cisionnelle sur l'ensemble du parcours",
      audience: "Marques D2C ambitieuses et places de march\u00e9",
      features: {
        feature1: "Tout le contenu de la formule Croissance",
        feature2: "Les 10 \u00e9tapes du parcours",
        feature3: "Visibilit\u00e9 de bout en bout",
        feature4: "Informations exploitables illimit\u00e9es",
        feature5: "Signaux pr\u00e9dictifs",
        feature6: "Assistance prioritaire",
        feature7: "Analyse trimestrielle du parcours"
      },
      quote:
        "Nous g\u00e9rons l'ensemble du parcours. Nous avons besoin d'une vision compl\u00e8te.",
      button: "Choisir \u00c9chelle"
    },

    custom: {
      name: "Personnalis\u00e9",
      description: "Con\u00e7u autour de votre entreprise",
      price: "Tarification personnalis\u00e9e",
      audience: "Entreprises et parcours complexes",
      features: {
        feature1: "\u00c9tapes illimit\u00e9es",
        feature2: "Informations avanc\u00e9es",
        feature3: "Rapports personnalis\u00e9s",
        feature4: "Int\u00e9grations",
        feature5: "SLA et conformit\u00e9"
      },
      quote:
        "Notre parcours est complexe. Nous avons besoin d'une solution sur mesure.",
      button: "Contacter l'\u00e9quipe commerciale"
    }
  }
};

writeJson(enPath, en);
writeJson(frPath, fr);

const pricingClient = `"use client";

import Script from "next/script";
import {Check} from "lucide-react";
import {useTranslations} from "next-intl";
import {useState} from "react";

declare global {
  interface Window {
    Paddle?: {
      Initialize: (settings: {token: string}) => void;
      Checkout: {
        open: (settings: {
          items: Array<{
            priceId: string;
            quantity: number;
          }>;
          settings: {
            displayMode: "overlay";
          };
        }) => void;
      };
    };
  }
}

type BillingCycle = "monthly" | "yearly";
type PaidPlan = "starter" | "growth" | "scale";
type PlanKey = PaidPlan | "custom";

type PricingValues = {
  starter: Record<BillingCycle, number | string>;
  growth: Record<BillingCycle, number | string>;
  scale: Record<BillingCycle, number | string>;
};

type PricingClientProps = {
  symbol: string;
  prices: PricingValues;
};

const PADDLE_CLIENT_TOKEN =
  "live_6021e37ca2455040e43df95e1f9";

const PADDLE_PRICE_IDS: Record<
  PaidPlan,
  Record<BillingCycle, string>
> = {
  starter: {
    monthly: "pri_01kvye7sgjxa4rjbjbhev9pwnh",
    yearly: "pri_01kvyemwe7v3s5wpzanbyr3a4b"
  },
  growth: {
    monthly: "pri_01kvyeadjav7d47e0h335x5w3w",
    yearly: "pri_01kvyejn99eg1vxfbwf6j4yhhx"
  },
  scale: {
    monthly: "pri_01kvyec21hwqqt1g8b39aq0q04",
    yearly: "pri_01kvyefjmtgzk2scp78bdt4rrq"
  }
};

const planFeatureCounts: Record<PlanKey, number> = {
  starter: 5,
  growth: 5,
  scale: 7,
  custom: 5
};

export default function PricingClient({
  symbol,
  prices
}: PricingClientProps) {
  const t = useTranslations("Pricing");

  const [billing, setBilling] =
    useState<BillingCycle>("monthly");
  const [paddleReady, setPaddleReady] = useState(false);

  function initializePaddle() {
    if (!window.Paddle) {
      return;
    }

    window.Paddle.Initialize({
      token: PADDLE_CLIENT_TOKEN
    });

    setPaddleReady(true);
  }

  function openCheckout(plan: PaidPlan) {
    if (!window.Paddle || !paddleReady) {
      window.alert(t("paymentLoading"));
      return;
    }

    window.Paddle.Checkout.open({
      items: [
        {
          priceId: PADDLE_PRICE_IDS[plan][billing],
          quantity: 1
        }
      ],
      settings: {
        displayMode: "overlay"
      }
    });
  }

  function getFeatures(plan: PlanKey) {
    return Array.from(
      {length: planFeatureCounts[plan]},
      (_, index) =>
        t(\`plans.\${plan}.features.feature\${index + 1}\`)
    );
  }

  return (
    <>
      <Script
        src="https://cdn.paddle.com/paddle/v2/paddle.js"
        strategy="afterInteractive"
        onLoad={initializePaddle}
      />

      <main className="mx-auto max-w-7xl px-6 py-8">
        <h1 className="mb-4 text-4xl font-bold text-gray-900">
          {t("title")}
        </h1>

        <p className="mb-10 text-lg text-gray-600">
          {t("subtitle")}
        </p>

        <div className="mb-12 flex justify-center">
          <div className="flex items-center gap-2 rounded-full border p-1">
            <button
              type="button"
              onClick={() => setBilling("monthly")}
              aria-pressed={billing === "monthly"}
              className={\`rounded-full px-4 py-1 text-sm \${
                billing === "monthly"
                  ? "bg-black text-white"
                  : "text-gray-600"
              }\`}
            >
              {t("monthly")}
            </button>

            <button
              type="button"
              onClick={() => setBilling("yearly")}
              aria-pressed={billing === "yearly"}
              className={\`rounded-full px-3 py-1 text-sm \${
                billing === "yearly"
                  ? "bg-black text-white"
                  : "text-gray-600"
              }\`}
            >
              {t("yearly")}
            </button>
          </div>
        </div>

        <div className="grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-4">
          {(["starter", "growth", "scale"] as PaidPlan[]).map(
            (plan) => (
              <article
                key={plan}
                className="relative flex flex-col rounded-xl border border-black bg-white p-6"
              >
                <h2 className="mb-2 text-xl font-semibold">
                  {t(\`plans.\${plan}.name\`)}
                </h2>

                <p className="mb-4 text-gray-600">
                  {t(\`plans.\${plan}.description\`)}
                </p>

                <p className="mb-6 text-3xl font-bold text-gray-900">
                  {symbol}
                  {prices[plan][billing]}

                  <span className="text-sm font-normal">
                    {billing === "monthly"
                      ? t("perMonth")
                      : t("perYear")}
                  </span>
                </p>

                <p className="mb-2 text-lg font-medium">
                  {t("bestFor")}
                </p>

                <p className="mb-4 text-lg font-semibold text-gray-700">
                  {t(\`plans.\${plan}.audience\`)}
                </p>

                <div className="flex-grow">
                  <ul className="mb-4 space-y-2 text-base text-gray-800">
                    {getFeatures(plan).map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2"
                      >
                        <Check
                          className="mt-0.5 h-5 w-5 shrink-0"
                          aria-hidden="true"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-sm italic text-gray-600">
                    &ldquo;{t(\`plans.\${plan}.quote\`)}&rdquo;
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => openCheckout(plan)}
                  className="mt-6 inline-flex justify-center rounded-md bg-black px-6 py-3 font-medium text-white transition hover:bg-gray-800"
                >
                  {t(\`plans.\${plan}.button\`)}
                </button>
              </article>
            )
          )}

          <article className="relative flex flex-col rounded-xl border border-black bg-white p-6">
            <h2 className="mb-2 text-xl font-semibold">
              {t("plans.custom.name")}
            </h2>

            <p className="mb-4 text-gray-600">
              {t("plans.custom.description")}
            </p>

            <p className="mb-6 text-2xl font-bold">
              {t("plans.custom.price")}
            </p>

            <p className="mb-2 text-lg font-medium">
              {t("bestFor")}
            </p>

            <p className="mb-4 text-lg font-semibold text-gray-700">
              {t("plans.custom.audience")}
            </p>

            <div className="flex-grow">
              <ul className="mb-4 space-y-2 text-base text-gray-800">
                {getFeatures("custom").map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2"
                  >
                    <Check
                      className="mt-0.5 h-5 w-5 shrink-0"
                      aria-hidden="true"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <p className="text-sm italic text-gray-600">
                &ldquo;{t("plans.custom.quote")}&rdquo;
              </p>
            </div>

            <a
              href="/contact?plan=custom"
              className="mt-6 inline-flex justify-center rounded-md bg-black px-6 py-3 font-medium text-white transition hover:bg-gray-800"
            >
              {t("plans.custom.button")}
            </a>
          </article>
        </div>
      </main>
    </>
  );
}
`;

fs.writeFileSync(componentPath, pricingClient, "utf8");

console.log("Pricing translations and component updated.");