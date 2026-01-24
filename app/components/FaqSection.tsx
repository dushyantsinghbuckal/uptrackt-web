"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is Uptrackt?",
    answer:
      "Uptrackt is a customer decision intelligence platform that helps businesses understand why users hesitate or drop off at key stages of their digital journey.",
  },
  {
    question: "What problem does Uptrackt solve?",
    answer:
      "Uptrackt helps teams identify the underlying reasons behind user hesitation, enabling improvements in conversion, experience, and decision-making.",
  },
  {
    question: "Where can Uptrackt be used?",
    answer:
      "Uptrackt can be applied across critical customer touchpoints such as pricing, checkout, sign-up, onboarding, and application flows.",
  },
  {
    question: "Does Uptrackt require users to log in or share personal data?",
    answer:
      "No. Uptrackt works without forcing user logins or personal information, which helps increase participation and response quality.",
  },
  {
    question: "What kind of insights does Uptrackt provide?",
    answer:
      "Uptrackt surfaces structured insights like common hesitation themes, conversion blockers, trust gaps, and experience friction points.",
  },
  {
    question: "Is Uptrackt difficult to implement or use?",
    answer:
      "No. Uptrackt is designed to be easy to adopt and manage, without requiring deep technical expertise.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="mx-auto max-w-6xl px-6 pt-20 pb-6">
      {/* Top divider */}
      <div className="mx-auto mb-12 h-px w-24 bg-gray-300" />

      {/* Heading */}
      <h2 className="mb-16 text-center text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
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
              <span className="text-xl md:text-2xl font-semibold text-gray-900">
                {faq.question}
              </span>
              <span className="text-2xl text-gray-400">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            {openIndex === index && (
              <p className="mt-4 max-w-3xl text-base text-gray-500">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
         </section>
  );
}
