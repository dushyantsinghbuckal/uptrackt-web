"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is Uptrackt?",
    answer:
      "Uptrackt is a customer decision intelligence platform that helps businesses understand why users hesitate or drop off at critical moments in their digital journey. Instead of relying solely on behavioral analytics, Uptrackt captures structured, in-context feedback at high-intent decision points—turning uncertainty into actionable insight. This enables product, growth, and CX teams to prioritize improvements based on real customer reasoning, not assumptions.",
  },
  {
    question: "What problem does Uptrackt solve?",
    answer:
      "Uptrackt solves the gap between what users do and why they do it. Traditional analytics show where users drop off, but not the reasoning behind their hesitation. Uptrackt captures structured, decision-point feedback that helps teams identify real conversion blockers, prioritize high-impact fixes, and make smarter, revenue-focused optimization decisions.",
  },
  {
    question: "Where can Uptrackt be used?",
    answer:
      "Uptrackt can be applied across critical customer touchpoints such as pricing pages, checkout flows, sign-up journeys, onboarding sequences, product comparisons, renewals, and application processes. It works wherever users make high-intent decisions, especially at moments where hesitation, drop-off, or friction directly impacts conversion and revenue.",
  },
  {
    question: "Does Uptrackt require users to log in or share personal data?",
    answer:
      "No. Uptrackt works without forcing user logins or collecting personally identifiable information. Feedback is gathered in a lightweight, privacy-conscious way that encourages honest responses while maintaining compliance standards. This approach increases participation rates and improves the quality and reliability of insights without disrupting the user experience.",
  },
  {
    question: "What kind of insights does Uptrackt provide?",
    answer:
    "Uptrackt surfaces structured insights such as common hesitation themes, conversion blockers, trust gaps, pricing confusion, usability friction, and drop-off triggers at key decision points. It helps teams understand not just where users leave, but why- enabling clearer prioritization and smarter optimization decisions across the funnel.",
  },
  {
    question: "Is Uptrackt difficult to implement or use?",
    answer:
    "No. Uptrackt is designed to be easy to adopt and manage, without requiring deep technical expertise.The interface is intuitive and built for cross-functional use, meaning product, growth, CX, and leadership teams can access insights without relying on analysts or developers. Structured reports, categorized hesitation themes, and prioritized friction points are presented in a clear format that supports fast decision-making.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="mx-auto max-w-6xl px-6 pt-20 pb-6">
      {/* Top divider */}
      <div className="mx-auto mb-12 h-px w-24 bg-gray-300" />

      {/* Heading */}
      <h2 className="mb-17 text-center text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 whitespace-nowrap">
        Common questions before getting started
      </h2>

      {/* FAQs */}
      <div className="mx-auto max-w-4xl space-y-8">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 pb-6">
            <button
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              className="flex w-full items-center justify-between text-left"
            >
              <span className="text-2xl md:text-3xl font-semibold text-gray-900 text-justify">
                {faq.question}
              </span>
              <span className="text-2xl text-gray-400">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            {openIndex === index && (
              <p className="mt-6 max-w-3xl text-lg md:text-xl text-gray-600 leading-relaxed">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
         </section>
  );
}
