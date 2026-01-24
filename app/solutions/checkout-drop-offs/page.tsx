export default function CheckoutDropOffsPage() {
    return (
      <main className="mx-auto max-w-6xl px-6 py-24">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Checkout Drop-offs
        </h1>
  
        <p className="text-lg text-gray-600 mb-16">
          Analytics show where customers abandon checkout. Uptrackt captures why.
        </p>
  
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">
            The Problem
          </h2>
          <p className="text-gray-700">
            High checkout traffic does not guarantee conversions. Customers abandon
            for reasons analytics can’t explain — hidden charges, delivery timelines,
            missing payment options, or trust concerns.
          </p>
        </section>
  
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">
            How Uptrackt Helps
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Capture feedback at the exact moment of checkout abandonment</li>
            <li>Ask contextual, non-disruptive questions</li>
            <li>Collect responses anonymously or identified</li>
            <li>Translate feedback into clear decision-level insights</li>
          </ul>
        </section>
  
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">
            Business Impact
          </h2>
          <p className="text-gray-700">
            Teams stop guessing and start fixing the blockers customers explicitly report,
            improving conversion without broad experimentation.
          </p>
        </section>
        
        {/* Related Customer Story */}
<section className="mb-20 border-t pt-12">
  <h3 className="text-xl font-semibold mb-4">
    Related Customer Story
  </h3>

       <blockquote className="border-l-4 border-black pl-4 text-gray-700 mb-4">
       “We finally understood why customers didn’t buy.
       Analytics showed us where users dropped off — but Uptrackt revealed why.”
       </blockquote>

       <p className="text-sm text-gray-500 mb-6">
       — Head of Product, Online Retail Platform
        </p>

        <a
        href="/testimonials/we-finally-understood-why-customers-didnt-buy"
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
  