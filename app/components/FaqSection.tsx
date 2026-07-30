"use client";

import {useState} from "react";
import {useTranslations} from "next-intl";
import {Minus, Plus} from "lucide-react";

export default function FaqSection() {
  const t = useTranslations("Faq");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = Array.from({length: 6}, (_, index) => {
    const item = `items.item${index + 1}`;

    return {
      question: t(`${item}.question`),
      answer: t(`${item}.answer`)
    };
  });

  return (
    <section className="mx-auto max-w-6xl px-6 pb-6 pt-10">
      <h2 className="mb-17 text-center text-3xl font-semibold leading-tight tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
        {t("title")}
      </h2>

      <div className="mx-auto max-w-4xl space-y-8">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={faq.question} className="border-b border-gray-200 pb-6">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-start justify-between gap-4 text-left"
                aria-expanded={isOpen}
              >
                <span className="text-left text-2xl font-semibold leading-tight text-gray-900 md:text-3xl">
                  {faq.question}
                </span>

                <span className="shrink-0 text-gray-400">
                  {isOpen ? (
                    <Minus className="h-7 w-7" aria-hidden="true" />
                  ) : (
                    <Plus className="h-7 w-7" aria-hidden="true" />
                  )}
                </span>
              </button>

              {isOpen && (
                <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-600 md:text-xl">
                  {faq.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}