"use client";

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
        t(`plans.${plan}.features.feature${index + 1}`)
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
              className={`rounded-full px-4 py-1 text-sm ${
                billing === "monthly"
                  ? "bg-black text-white"
                  : "text-gray-600"
              }`}
            >
              {t("monthly")}
            </button>

            <button
              type="button"
              onClick={() => setBilling("yearly")}
              aria-pressed={billing === "yearly"}
              className={`rounded-full px-3 py-1 text-sm ${
                billing === "yearly"
                  ? "bg-black text-white"
                  : "text-gray-600"
              }`}
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
                  {t(`plans.${plan}.name`)}
                </h2>

                <p className="mb-4 text-gray-600">
                  {t(`plans.${plan}.description`)}
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
                  {t(`plans.${plan}.audience`)}
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
                    &ldquo;{t(`plans.${plan}.quote`)}&rdquo;
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => openCheckout(plan)}
                  className="mt-6 inline-flex justify-center rounded-md bg-black px-6 py-3 font-medium text-white transition hover:bg-gray-800"
                >
                  {t(`plans.${plan}.button`)}
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
