"use client";

import { useState } from "react";

export default function PricingPage() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  return (
    <main className="mx-auto max-w-7xl px-6 py-4">
      {/* Page Heading */}
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Choose your Growth Plan
      </h1>
      <p className="text-lg text-gray-600 mb-7">
        Simple plans for understanding your customer journey. No complexity, no noise.
      </p>

      {/* Billing Toggle */}
      <div className="flex justify-center mb-4">
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

      {/* Pricing Grid */}
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">

        {/* Starter */}
        <div className="border rounded-xl p-6 flex flex-col">
          <h2 className="text-xl font-semibold mb-2">Starter</h2>
          <p className="text-gray-600 mb-4">Fix the biggest problem first</p>

          <p className="text-3xl font-bold text-gray-900 mb-6">
            {billing === "monthly" ? "₹499" : "₹4,999"}
            <span className="text-sm font-normal">
              {billing === "monthly" ? " / month" : " / year"}
            </span>
          </p>

          <p className="text-xl font-medium mb-2">Best for</p>
          <p className="text-xl font-semibold text-gray-700 mb-4">
            Early-stage brands & small teams
          </p>

          <div className="flex-grow">
            <ul className="text-base text-gray-800 space-y-1 mb-4">
              <li>✓ Any 2 journey stages</li>
              <li>✓ Anonymous feedback capture</li>
              <li>✓ Contextual questions</li>
              <li>✓ 10 insights / month</li>
              <li>✓ Monthly summary</li>
            </ul>

            <p className="text-l italic text-gray-600">
              “Customers are dropping off. We need to know why, quickly.”
            </p>
          </div>

          <a
            href="/request-demo?plan=starter"
            className="mt-6 inline-flex justify-center rounded-md bg-black px-6 py-3 text-white font-medium hover:bg-gray-800 transition"
          >
            Get Starter
          </a>
        </div>

        {/* Growth */}
        <div className="border-2 border-black rounded-xl p-6 relative bg-gray-50 flex flex-col">
          <span className="absolute -top-3 left-6 bg-black text-white text-xs px-3 py-1 rounded-full">
            Recommended
          </span>

          <h2 className="text-xl font-semibold mb-2">Growth</h2>
          <p className="text-gray-600 mb-4">
            See how your journey truly performs
          </p>

          <p className="text-3xl font-bold text-gray-900 mb-6">
            {billing === "monthly" ? "₹1,999" : "₹19,999"}
            <span className="text-sm font-normal">
              {billing === "monthly" ? " / month" : " / year"}
            </span>
          </p>

          <p className="text-xl font-medium mb-2">Best for</p>
          <p className="text-xl font-semibold text-gray-700 mb-4">
            Growing brands & CX teams
          </p>

          <div className="flex-grow">
            <ul className="text-base text-gray-800 space-y-1 mb-4">
              <li>✓ 5 journey stages</li>
              <li>✓ Cross-stage comparison</li>
              <li>✓ AI root-cause analysis</li>
              <li>✓ 50 insights / month</li>
              <li>✓ Revenue signals</li>
            </ul>

            <p className="text-l italic text-gray-600">
              “Problems don’t exist in isolation, we need to see how stages affect each other.”
            </p>
          </div>

          <a
            href="/request-demo?plan=growth"
            className="mt-6 inline-flex justify-center rounded-md bg-black px-6 py-3 text-white font-medium hover:bg-gray-800 transition"
          >
            Get Growth
          </a>
        </div>

        {/* Scale */}
        <div className="border rounded-xl p-6 flex flex-col">
          <h2 className="text-xl font-semibold mb-2">Scale</h2>
          <p className="text-gray-600 mb-4">
            Full-funnel decision intelligence
          </p>

          <p className="text-3xl font-bold text-gray-900 mb-6">
            {billing === "monthly" ? "₹4,999" : "₹49,999"}
            <span className="text-sm font-normal">
              {billing === "monthly" ? " / month" : " / year"}
            </span>
          </p>

          <p className="text-xl font-medium mb-2">Best for</p>
          <p className="text-xl font-semibold text-gray-700 mb-4">
            Serious D2C & marketplaces
          </p>

          <div className="flex-grow">
            <ul className="text-base text-gray-800 space-y-1 mb-4">
            <li>✓ Everything in Growth</li>
              <li>✓ Cover all 10 stages</li>
              <li>✓ End-to-end visibility</li>
              <li>✓ Unlimited insights</li>
              <li>✓ Predictive signals</li>
              <li>✓ Priority support</li>
              <li>✓ Quarterly journey truth review</li>
            </ul>

            <p className="text-l italic text-gray-600">
              “We own the complete journey, we need the full truth.”
            </p>
          </div>

          <a
            href="/request-demo?plan=scale"
            className="mt-6 inline-flex justify-center rounded-md bg-black px-6 py-3 text-white font-medium hover:bg-gray-800 transition"
          >
            Get Scale
          </a>
        </div>

        {/* Custom */}
        <div className="border rounded-xl p-6 flex flex-col">
          <h2 className="text-xl font-semibold mb-2">Custom</h2>
          <p className="text-gray-600 mb-4">
            Built around your business
          </p>

          <p className="text-2xl font-bold mb-6">Custom pricing</p>

          <p className="text-xl font-medium mb-2">Best for</p>
          <p className="text-xl font-semibold text-gray-700 mb-4">
            Enterprise & complex journeys
          </p>

          <div className="flex-grow">
            <ul className="text-base text-gray-800 space-y-1 mb-4">
              <li>✓ Unlimited stages</li>
              <li>✓ Advanced insights</li>
              <li>✓ Custom reporting</li>
              <li>✓ Integrations</li>
              <li>✓ SLA & compliance</li>
            </ul>

            <p className="text-l italic text-gray-600">
              “We need it tailored.”
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
  );
}
