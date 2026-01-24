export default function PostPurchaseDropOffsPage() {
    return (
      <main className="mx-auto max-w-6xl px-6 py-24">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Post-Purchase Drop-offs
        </h1>
  
        <p className="text-lg text-gray-600 mb-16">
          The journey doesn’t end at checkout. Post-purchase friction silently drives churn.
        </p>
  
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">The Problem</h2>
          <p className="text-gray-700">
            Customers disengage after purchase due to delivery delays, unclear communication,
            onboarding friction, or unmet expectations. These signals are rarely captured.
          </p>
        </section>
  
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">How Uptrackt Helps</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Capture feedback immediately after key post-purchase moments</li>
            <li>Identify early churn and dissatisfaction signals</li>
            <li>Understand expectation gaps before they escalate</li>
            <li>Feed insights directly into retention and CX teams</li>
          </ul>
        </section>
  
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Business Impact</h2>
          <p className="text-gray-700">
            Teams prevent churn earlier, improve retention, and strengthen long-term
            customer relationships using real customer input.
          </p>
        </section>
  
        {/* Related Customer Story */}
       <section className="mb-20 border-t pt-12">
       <h3 className="text-xl font-semibold mb-4">
       Related Customer Story
       </h3>

       <blockquote className="border-l-4 border-black pl-4 text-gray-700 mb-4">
       “We were worried about adding another tool to our stack,
       but it integrated cleanly without disrupting existing workflows.”
       </blockquote>

       <p className="text-sm text-gray-500 mb-6">
       — Head of Technology, Digital Commerce Platform
        </p>

        <a
        href="/testimonials/plugged-cleanly-into-our-existing-stack"
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
  