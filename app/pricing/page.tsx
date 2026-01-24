"use client";

import { useState } from "react";

export default function PricingPage() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  return (
    <main className="mx-auto max-w-7xl px-6 py-24">
      {/* Page Heading */}
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Pricing
      </h1>
      <p className="text-lg text-gray-600 mb-16">
        Simple plans for understanding your customer journey — no complexity, no noise.
      </p>
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
  Pricing
</h1>

<p className="text-lg text-gray-600 mb-16">
  Simple plans for understanding your customer journey — no complexity, no noise.
</p>

{/* Billing Toggle — ADD HERE */}
<div className="flex justify-center mb-16">
  <div className="flex items-center gap-2 border rounded-full p-1">
    <button
      onClick={() => setBilling("monthly")}
      className={`px-4 py-1 rounded-full text-sm ${
        billing === "monthly"
          ? "bg-black text-white"
          : "text-gray-600"
         }`}
        >
       Monthly
       </button>

      <button
      onClick={() => setBilling("yearly")}
      className={`px-4 py-1 rounded-full text-sm ${
        billing === "yearly"
          ? "bg-black text-white"
          : "text-gray-600"
      }`}
     >
      Yearly
     </button>
     </div>
     </div>

      {/* Pricing Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

        {/* Starter */}
        <div className="border rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-2">Starter</h2>
          <p className="text-gray-600 mb-4">Fix the biggest problem first</p>

          <p className="text-3xl font-bold text-gray-900 mb-6">
          {billing === "monthly" ? "₹499" : "₹4,999"}
          <span className="text-sm font-normal">
          {billing === "monthly" ? " / month" : " / year"}
          </span>
          </p>

          <p className="text-sm font-medium mb-2">Best for</p>
          <p className="text-sm text-gray-600 mb-4">
            Early-stage brands, small teams, first-time feedback users
          </p>

          <ul className="text-sm text-gray-700 space-y-2 mb-6">
            <li>• Coverage of any 2 customer journey stages</li>
            <li>• Anonymous, frictionless feedback capture</li>
            <li>• Contextual questions at selected stages</li>
            <li>• Plain-English insights</li>
            <li>• Up to 10 actionable insights / month</li>
            <li>• Monthly insight summary</li>
          </ul>

          <p className="text-sm italic text-gray-600">
            “We know customers are dropping somewhere — we want to understand why, fast.”
          </p>
        </div>

         {/* Growth */}
         <div className="border-2 border-black rounded-xl p-6 relative bg-gray-50">
         <span className="absolute -top-3 left-6 bg-black text-white text-xs px-3 py-1 rounded-full">
         Recommended
          </span>
          <h2 className="text-xl font-semibold mb-2">Growth</h2>
          <p className="text-gray-600 mb-4">
            Understand how your customer journey actually flows
          </p>

          <p className="text-3xl font-bold text-gray-900 mb-6">
          {billing === "monthly" ? "₹1,999" : "₹19,999"}
          <span className="text-sm font-normal">
          {billing === "monthly" ? " / month" : " / year"}
          </span>
          </p>

          <p className="text-sm font-medium mb-2">Best for</p>
          <p className="text-sm text-gray-600 mb-4">
            Growing e-commerce brands, CX & ops teams
          </p>

          <ul className="text-sm text-gray-700 space-y-2 mb-6">
            <li>• Everything in Starter</li>
            <li>• Coverage of any 5 journey stages</li>
            <li>• Cross-stage comparison</li>
            <li>• AI-powered root-cause analysis</li>
            <li>• Up to 100 actionable insights / month</li>
            <li>• Performance drop alerts</li>
            <li>• Revenue-impact indicators</li>
            <li>• Focused dashboard</li>
          </ul>

          <p className="text-sm italic text-gray-600">
            “Problems don’t exist in isolation — we need to see how stages affect each other.”
          </p>
        </div>

        {/* Scale */}
        <div className="border rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-2">Scale</h2>
          <p className="text-gray-600 mb-4">
            End-to-end visibility into your entire customer journey
          </p>

          <p className="text-3xl font-bold text-gray-900 mb-6">
          {billing === "monthly" ? "₹4,999" : "₹49,999"}
          <span className="text-sm font-normal">
          {billing === "monthly" ? " / month" : " / year"}
          </span>
          </p>

          <p className="text-sm font-medium mb-2">Best for</p>
          <p className="text-sm text-gray-600 mb-4">
            Serious D2C brands, marketplaces, retail-first companies
          </p>

          <ul className="text-sm text-gray-700 space-y-2 mb-6">
            <li>• Everything in Growth</li>
            <li>• Coverage of all 10 journey stages</li>
            <li>• End-to-end journey intelligence</li>
            <li>• Unlimited insights</li>
            <li>• Predictive signals</li>
            <li>• Priority support</li>
            <li>• Quarterly Journey Truth Review</li>
          </ul>

          <p className="text-sm italic text-gray-600">
            “We own the full journey — we need the full truth.”
          </p>
        </div>

        {/* Custom */}
        <div className="border rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-2">Custom</h2>
          <p className="text-gray-600 mb-4">
            Build exactly what your business needs
          </p>

          <p className="text-2xl font-bold mb-6">Custom pricing</p>

          <p className="text-sm font-medium mb-2">Best for</p>
          <p className="text-sm text-gray-600 mb-4">
            Enterprises, complex journeys, regulated industries
          </p>

          <ul className="text-sm text-gray-700 space-y-2 mb-6">
            <li>• Any number of stages (custom allowed)</li>
            <li>• Anonymous or identified feedback</li>
            <li>• Advanced & predictive insights</li>
            <li>• Custom reporting frequency</li>
            <li>• Integrations with your tools</li>
            <li>• SLA & compliance support</li>
            <li>• Optional outcome-based pricing</li>
          </ul>

          <p className="text-sm italic text-gray-600">
            “Our journey isn’t standard — we want Uptrackt tailored to our business.”
          </p>
        </div>

      </div>

      {/* CTA */}
      <div className="mt-24 text-center border-t pt-16">
        <a
          href="/contact"
          className="inline-block rounded-md bg-black px-8 py-3 text-white font-medium hover:bg-gray-800"
        >
          Request a Demo
        </a>
      </div>
    </main>
  );
}
