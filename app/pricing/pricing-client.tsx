"use client";

import Script from "next/script";
import { useState } from "react";

declare global {
  interface Window {
    Paddle?: any;
  }
}

const PADDLE_CLIENT_TOKEN = "live_6021e37ca2455040e43df95e1f9";

const PADDLE_PRICE_IDS = {
  starter: {
    monthly: "pri_01kvye7sgjxa4rjbjbhev9pwnh",
    yearly: "pri_01kvyemwe7v3s5wpzanbyr3a4b",
  },
  growth: {
    monthly: "pri_01kvyeadjav7d47e0h335x5w3w",
    yearly: "pri_01kvyejn99eg1vxfbwf6j4yhhx",
  },
  scale: {
    monthly: "pri_01kvyec21hwqqt1g8b39aq0q04",
    yearly: "pri_01kvyefjmtgzk2scp78bdt4rrq",
  },
};

export default function PricingClient({ symbol, prices }: any) {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  const [paddleReady, setPaddleReady] = useState(false);

  const initializePaddle = () => {
    if (!window.Paddle) return;

    window.Paddle.Initialize({
      token: PADDLE_CLIENT_TOKEN,
    });

    setPaddleReady(true);
  };

  const openCheckout = (plan: "starter" | "growth" | "scale") => {
    if (!window.Paddle || !paddleReady) {
      alert("Payment system is loading. Please try again in a few seconds.");
      return;
    }

    window.Paddle.Checkout.open({
      items: [
        {
          priceId: PADDLE_PRICE_IDS[plan][billing],
          quantity: 1,
        },
      ],
      settings: {
        displayMode: "overlay",
        theme: "light",
      },
    });
  };

  return (
    <>
      <Script
        src="https://cdn.paddle.com/paddle/v2/paddle.js"
        strategy="afterInteractive"
        onLoad={initializePaddle}
      />

      <main className="mx-auto max-w-7xl px-6 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Choose your Growth Plan
        </h1>

        <p className="text-lg text-gray-600 mb-10">
          Simple plans for understanding your customer journey. No complexity, no noise.
        </p>

        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-2 border rounded-full p-1">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-4 py-1 rounded-full text-sm ${
                billing === "monthly" ? "bg-black text-white" : "text-gray-600"
              }`}
            >
              Monthly
            </button>

            <button
              onClick={() => setBilling("yearly")}
              className={`px-3 py-1 rounded-full text-sm ${
                billing === "yearly" ? "bg-black text-white" : "text-gray-600"
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="border-1 border-black rounded-xl p-6 relative bg-white flex flex-col">
            <h2 className="text-xl font-semibold mb-2">Starter</h2>
            <p className="text-gray-600 mb-4">Fix the biggest problem first</p>

            <p className="text-3xl font-bold text-gray-900 mb-6">
              {billing === "monthly"
                ? `${symbol}${prices.starter.monthly}`
                : `${symbol}${prices.starter.yearly}`}
              <span className="text-sm font-normal">
                {billing === "monthly" ? " / month" : " / year"}
              </span>
            </p>

            <p className="text-lg font-medium mb-2">Best for</p>
            <p className="text-lg font-semibold text-gray-700 mb-4">
              Early-stage brands & small teams
            </p>

            <div className="flex-grow">
              <ul className="text-base text-gray-800 space-y-2 mb-4">
                <li>✓ Any 2 journey stages</li>
                <li>✓ Anonymous feedback capture</li>
                <li>✓ Contextual questions</li>
                <li>✓ 10 insights / month</li>
                <li>✓ Monthly summary</li>
              </ul>

              <p className="text-sm italic text-gray-600">
                “Customers are dropping off. We need to know why, quickly.”
              </p>
            </div>

            <button
              onClick={() => openCheckout("starter")}
              className="mt-6 inline-flex justify-center rounded-md bg-black px-6 py-3 text-white font-medium hover:bg-gray-800 transition"
            >
              Get Starter
            </button>
          </div>

          <div className="border-1 border-black rounded-xl p-6 relative bg-white flex flex-col">
            <h2 className="text-xl font-semibold mb-2">Growth</h2>
            <p className="text-gray-600 mb-4">
              See how your journey truly performs
            </p>

            <p className="text-3xl font-bold text-gray-900 mb-6">
              {billing === "monthly"
                ? `${symbol}${prices.growth.monthly}`
                : `${symbol}${prices.growth.yearly}`}
              <span className="text-sm font-normal">
                {billing === "monthly" ? " / month" : " / year"}
              </span>
            </p>

            <p className="text-lg font-medium mb-2">Best for</p>
            <p className="text-lg font-semibold text-gray-700 mb-4">
              Growing brands & CX teams
            </p>

            <div className="flex-grow">
              <ul className="text-base text-gray-800 space-y-2 mb-4">
                <li>✓ 5 journey stages</li>
                <li>✓ Cross-stage comparison</li>
                <li>✓ AI root-cause analysis</li>
                <li>✓ 50 insights / month</li>
                <li>✓ Revenue signals</li>
              </ul>

              <p className="text-sm italic text-gray-600">
                “Problems don’t exist in isolation. We need to see how stages affect each other.”
              </p>
            </div>

            <button
              onClick={() => openCheckout("growth")}
              className="mt-6 inline-flex justify-center rounded-md bg-black px-6 py-3 text-white font-medium hover:bg-gray-800 transition"
            >
              Get Growth
            </button>
          </div>

          <div className="border-1 border-black rounded-xl p-6 relative bg-white flex flex-col">
            <h2 className="text-xl font-semibold mb-2">Scale</h2>
            <p className="text-gray-600 mb-4">
              Full-funnel decision intelligence
            </p>

            <p className="text-3xl font-bold text-gray-900 mb-6">
              {billing === "monthly"
                ? `${symbol}${prices.scale.monthly}`
                : `${symbol}${prices.scale.yearly}`}
              <span className="text-sm font-normal">
                {billing === "monthly" ? " / month" : " / year"}
              </span>
            </p>

            <p className="text-lg font-medium mb-2">Best for</p>
            <p className="text-lg font-semibold text-gray-700 mb-4">
              Serious D2C & marketplaces
            </p>

            <div className="flex-grow">
              <ul className="text-base text-gray-800 space-y-2 mb-4">
                <li>✓ Everything in Growth</li>
                <li>✓ Cover all 10 journey stages</li>
                <li>✓ End-to-end visibility</li>
                <li>✓ Unlimited insights</li>
                <li>✓ Predictive signals</li>
                <li>✓ Priority support</li>
                <li>✓ Quarterly journey truth review</li>
              </ul>

              <p className="text-sm italic text-gray-600">
                “We own the complete journey. We need the full truth.”
              </p>
            </div>

            <button
              onClick={() => openCheckout("scale")}
              className="mt-6 inline-flex justify-center rounded-md bg-black px-6 py-3 text-white font-medium hover:bg-gray-800 transition"
            >
              Get Scale
            </button>
          </div>

          <div className="border-1 border-black rounded-xl p-6 relative bg-white flex flex-col">
            <h2 className="text-xl font-semibold mb-2">Custom</h2>
            <p className="text-gray-600 mb-4">Built around your business</p>

            <p className="text-2xl font-bold mb-6">Custom pricing</p>

            <p className="text-lg font-medium mb-2">Best for</p>
            <p className="text-lg font-semibold text-gray-700 mb-4">
              Enterprise & complex journeys
            </p>

            <div className="flex-grow">
              <ul className="text-base text-gray-800 space-y-2 mb-4">
                <li>✓ Unlimited stages</li>
                <li>✓ Advanced insights</li>
                <li>✓ Custom reporting</li>
                <li>✓ Integrations</li>
                <li>✓ SLA & compliance</li>
              </ul>

              <p className="text-sm italic text-gray-600">
                “Our journey is complex. We need it tailored.”
              </p>
            </div>

            <a
              href="/contact?plan=custom"
              className="mt-6 inline-flex justify-center rounded-md bg-black px-6 py-3 text-white font-medium hover:bg-gray-800 transition"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </main>
    </>
  );
}