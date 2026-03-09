export default function CheckoutDropOffsPage() {
    return (
      <main className="bg-white text-white py-14 px-1 text-center">
         <div className="mx-auto max-w-5xl"></div>
        <h1 className="text-9xl text-black md:text-8xl font-semibold tracking-tight leading-tight">
          Checkout Drop Offs
        </h1>
  
        <p className="mt-1 text-4xl md:text-4xl text-gray-400 leading-relaxed">
          Analytics show where customers abandon checkout.
          <br />
      Uptrackt revealed why.
        </p>  
  
        <section className="bg-white py-14 px-2">
  <div className="mx-auto max-w-7xl text-left">

    {/* The Problem */}
    <div className="mb-20">
      <h2 className="text-5xl font-semibold mb-6 text-black">
        The Problem
      </h2>

      <p className="text-xl text-black text-justify leading-relaxed">
      High checkout traffic does not automatically translate into revenue. At the final step of the buying journey, even high-intent customers can 
      disengage.
      </p>
      <p className="text-xl text-black text-justify leading-relaxed">
      Customers abandon purchases for reasons analytics cannot fully surface- unexpected costs revealed too late, ambiguous delivery commitments, 
      unavailable payment methods, transaction failures, or unresolved trust concerns.
      </p>
      <p className="text-xl text-black text-justify leading-relaxed">
      Traditional dashboards identify where drop-offs occur. They quantify exits, conversion rates, and funnel leakage. However, they do not explain the 
      underlying cause of hesitation. A spike in abandonment may indicate friction, but was it pricing sensitivity? A breakdown in the payment flow? Form complexity? 
      Perceived security risk? Behavioral data captures what happened, not why it happened.
      </p>
      <p className="text-xl text-black text-justify leading-relaxed">
      In the absence of clarity, teams rely on inference. They initiate experiments, redesign flows, adjust messaging, and recalibrate pricing, often 
      without definitive evidence that the core issue has been addressed. As a result, optimization becomes iterative but unfocused, and high-intent demand 
      continues to leak at the most commercially critical moment of the customer journey.
      </p>
    </div>

    {/* How Uptrackt Helps */}
    <div className="mb-20">
      <h2 className="text-5xl font-semibold mb-6 text-black">
        How Uptrackt Helps
      </h2>

      <p className="text-xl text-black text-justify leading-relaxed">
      Uptrackt captures insight at the exact moment intent begins to decline. When a customer initiates checkout abandonment, the system activates a 
      contextual prompt designed to understand the underlying reason for hesitation without interrupting the user experience. Rather than relying solely on 
      behavioral analytics or delayed post purchase surveys, Uptrackt engages customers at the precise point of friction. The questions are aligned to the
      checkout context and presented in a non intrusive format, ensuring that feedback collection does not introduce additional complexity into a sensitive
      stage of the journey.
      </p>
      <p className="text-xl text-black text-justify leading-relaxed">
      Responses can be captured anonymously to encourage candid input, or associated with identified sessions where deeper behavioral correlation is 
      required. This flexibility enables teams to combine qualitative clarity with quantitative performance analysis. The feedback is structured and 
      categorized into clear thematic patterns. Product, growth, and revenue leaders receive synthesized insights tied directly to business outcomes such
      as pricing concerns, payment friction, delivery uncertainty, or trust gaps. Instead of reviewing scattered comments, teams receive decision ready 
      intelligence.
      </p>
    </div>

    {/* Business Impact */}
    <div>
      <h2 className="text-3xl font-semibold mb-6 text-gray-900">
        Business Impact
      </h2>

      <p className="text-xl text-black text-justify leading-relaxed">
      Teams stop guessing and start addressing the blockers customers explicitly report, improving conversion without relying on broad or unfocused 
      experimentation. Instead of running multiple parallel tests to isolate a potential issue, organizations gain direct clarity into the specific 
      points of friction affecting revenue. This reduces the time required to diagnose conversion leakage and accelerates the path from insight to 
      corrective action.
      </p>
      <p className="text-xl text-black text-justify leading-relaxed">
      Optimization efforts become targeted rather than exploratory. Product and growth teams can prioritize changes based on validated customer feedback 
      rather than inferred behavioral patterns. As a result, resources are allocated more efficiently and experimentation budgets are directed toward 
      confirmed opportunities. The impact extends beyond checkout completion rates. Clear visibility into abandonment drivers strengthens pricing strategy,
      refines payment workflows, improves delivery communication, and enhances trust signals across the customer journey. Each adjustment is grounded in 
      customer expressed reasoning rather than assumption.
      </p>
      <p className="text-xl text-black text-justify leading-relaxed">
      Over time, this disciplined feedback loop compounds. Conversion improves not through isolated wins, but through systematic friction removal at a 
      critical revenue moment. The organization transitions from reactive optimization to structured, insight led growth.
      </p>
    </div>
  </div>
</section>
        
   {/* Related Customer Story */}
<section className="mb-1 border-t pt-12">
  <h3 className="text-2xl text-black font-semibold mb-4">
    Related Customer Story
  </h3>

  <blockquote className="text-black text-xl mb-4">
   "Analytics showed us where users dropped off. Uptrackt revealed why.”
</blockquote>
       <p className="text-xl text-gray-500 mb-6">
       Head of Product, Online Retail Platform
        </p>

        <a
        href="/testimonials/we-finally-understood-why-customers-didnt-buy"
        className="text-2xl font-medium text-black hover:underline"
        >
        Read full story →
        </a>
        </section>
      </main>
    );
  }
  