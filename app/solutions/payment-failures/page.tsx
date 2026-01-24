export default function PaymentFailuresPage() {
    return (
      <main className="mx-auto max-w-6xl px-6 py-24">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Payment Failures
        </h1>
  
        <p className="text-lg text-gray-600 mb-16">
          Failed payments don’t just lose transactions — they lose trust.
        </p>
  
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">
            The Problem
          </h2>
          <p className="text-gray-700">
            When payments fail or preferred methods are unavailable,
            customers leave without explanation. Analytics show the failure,
            but not whether it was technical, usability-related, or trust-driven.
          </p>
        </section>
  
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">
            How Uptrackt Helps
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Capture feedback immediately after payment failure</li>
            <li>Identify missing payment methods or gateway issues</li>
            <li>Understand trust and security concerns</li>
            <li>Prioritize fixes that impact the most revenue</li>
          </ul>
        </section>
  
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">
            Business Impact
          </h2>
          <p className="text-gray-700">
            Teams reduce payment-related drop-offs faster by addressing
            real customer-reported issues instead of guessing.
          </p>
        </section>
         
         {/* Related Customer Story */}
         <section className="mb-20 border-t pt-12">
         <h3 className="text-xl font-semibold mb-4">
         Related Customer Story
          </h3>

         <blockquote className="border-l-4 border-black pl-4 text-gray-700 mb-4">
        “We captured honest feedback from users who never logged in,
        revealing payment issues analytics completely missed.”
        </blockquote>

      <p className="text-sm text-gray-500 mb-6">
      — CX Operations Lead, Online Marketplace
      </p>

      <a
      href="/testimonials/captured-feedback-from-anonymous-visitors"
      className="text-sm font-medium text-black hover:underline"
      >
      Read full story →
      </a>
      </section>


        <a
          href="/pricing"
          className="inline-block rounded-md bg-black px-6 py-3 text-white font-medium hover:bg-gray-800"
        >
          View Pricing
        </a>
      </main>
    );
  }
  