export default function PricingFrictionPage() {
    return (
      <main className="mx-auto max-w-6xl px-6 py-24">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Pricing Friction
        </h1>
  
        <p className="text-lg text-gray-600 mb-16">
          Customers hesitate when price perception breaks. Uptrackt reveals why.
        </p>
  
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">
            The Problem
          </h2>
          <p className="text-gray-700">
            Price-related drop-offs rarely happen because of price alone.
            Customers abandon when expectations don’t match reality — hidden
            charges, unclear discounts, or last-minute changes.
          </p>
        </section>
  
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">
            How Uptrackt Helps
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Capture feedback when customers hesitate or abandon on pricing</li>
            <li>Identify perception gaps between listed and final price</li>
            <li>Separate price sensitivity from trust or clarity issues</li>
            <li>Turn pricing feedback into clear optimization actions</li>
          </ul>
        </section>
  
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">
            Business Impact
          </h2>
          <p className="text-gray-700">
            Teams fix pricing communication instead of discounting blindly,
            protecting margins while improving conversion.
          </p>
        </section>
         
         {/* Related Customer Story */}
         <section className="mb-20 border-t pt-12">
         <h3 className="text-xl font-semibold mb-4">
         Related Customer Story
         </h3>

         <blockquote className="border-l-4 border-black pl-4 text-gray-700 mb-4">
         “Once we tied drop-off feedback directly to revenue impact,
         prioritization became straightforward and debates disappeared.”
         </blockquote>

         <p className="text-sm text-gray-500 mb-6">
         — Revenue & Growth Lead, Digital Commerce Platform
         </p>

        <a
        href="/testimonials/turned-drop-off-feedback-into-revenue-impact"
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
  