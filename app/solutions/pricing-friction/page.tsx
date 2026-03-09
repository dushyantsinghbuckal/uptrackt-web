export default function PricingFrictionPage() {
  return (
    <main className="bg-white text-white py-14 px-1 text-center">
       <div className="mx-auto max-w-5xl"></div>
      <h1 className="text-9xl text-black md:text-8xl font-semibold tracking-tight leading-tight">
        Pricing Friction
      </h1>

      <p className="mt-1 text-4xl md:text-4xl text-gray-400 leading-relaxed">
        Customers hesitate when price perception breaks.
      </p>

      <section className="bg-white py-14 px-2">
      <div className="mx-auto max-w-7xl text-left">

    {/* Where Perception Breaks */}
  <div className="mb-20">
    <h2 className="text-5xl font-semibold mb-6 text-black">
      Where Perception Breaks
    </h2>

    <p className="text-xl text-black text-justify leading-relaxed">
    Price-related drop-offs rarely occur because of price alone. In many cases, customers are prepared to pay. The hesitation emerges when expectations
    formed earlier in the journey do not align with what is presented at checkout.
    </p>
    <p className="text-xl text-black text-justify leading-relaxed">
    Unexpected charges, ambiguous discount logic, shipping costs introduced late, or pricing structures that feel inconsistent can erode confidence. 
    Even small discrepancies between perceived value and final cost create cognitive friction. When clarity declines, intent weakens.
    </p>
    <p className="text-xl text-black text-justify leading-relaxed">
    Behavioral analytics can identify the moment abandonment increases. They cannot determine whether the issue stems from affordability, transparency,
    trust, or misunderstanding.
    </p>
    </div>

     {/* Understanding The Real Objection */}
  <div className="mb-20">
    <h2 className="text-5xl font-semibold mb-6 text-black">
      Understanding The Real Objection
    </h2>

    <p className="text-xl text-black text-justify leading-relaxed">
    Pricing friction is often misdiagnosed as price sensitivity. In reality, it may reflect uncertainty about value, confusion around breakdowns, or
    concern about fairness.
    </p>
    <p className="text-xl text-black text-justify leading-relaxed">
    Without direct feedback, teams may respond with broad discounts or promotional incentives. While this can temporarily lift conversion, it may also
    compress margins and mask the underlying communication gap.
    </p>
    <p className="text-xl text-black text-justify leading-relaxed">
    Distinguishing between true price resistance and perception misalignment is critical. One requires pricing strategy revision. The other requires
    clarity and positioning refinement.
    </p>
  </div>

  {/* Insight At The Moment Of Hesitation */}
  <div>
  <h2 className="text-5xl font-semibold mb-6 text-black">
      Insight At The Moment Of Hesitation
    </h2>

    <p className="text-xl text-black text-justify leading-relaxed">
    Uptrackt captures feedback precisely when customers pause or abandon at pricing stages. The system surfaces structured insight into whether 
    hesitation is driven by cost magnitude, fee transparency, discount logic, or trust related concerns.
    </p>
    <p className="text-xl text-black text-justify leading-relaxed">
    Feedback is organized into measurable themes that allow revenue and product teams to quantify which perception gaps most materially impact conversion.
    </p>
    <p className="text-xl text-black text-justify leading-relaxed">
    Instead of assuming the barrier, teams gain direct visibility into the rationale behind the decision.
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
       “Once we tied drop-off feedback directly to revenue impact,
       prioritization became straightforward and debates disappeared.”
       </blockquote>

       <p className="text-xl text-gray-500 mb-6">
       - Revenue & Growth Lead, Digital Commerce Platform
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