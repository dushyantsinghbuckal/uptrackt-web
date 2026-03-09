export default function PostPurchaseDropOffsPage() {
    return (
      <main className="bg-white text-white py-14 px-1 text-center">
      <div className="mx-auto max-w-5xl"></div>
      <h1 className="text-9xl text-black md:text-8xl font-semibold tracking-tight leading-tight">
          Post-Purchase Drop-offs
        </h1>
  
        <p className="mt-1 text-4xl md:text-4xl text-gray-400 leading-relaxed">
        The journey doesn’t end at checkout. Post-purchase friction silently drives churn.
        </p>
  
        <section className="bg-white py-14 px-2">
        <div className="mx-auto max-w-7xl text-left">

        {/* Where Retention Begins to Erode */}
    <div className="mb-20">
      <h2 className="text-5xl font-semibold mb-6 text-black">
      Where Retention Begins to Erode
      </h2>

      <p className="text-xl text-black text-justify leading-relaxed">
      The journey does not end at checkout. In many cases, it begins there.
      </p>
      <p className="text-xl text-black text-justify leading-relaxed">
      Customers may complete a purchase but still encounter uncertainty, confusion, or dissatisfaction in the moments that follow. Delayed confirmation
      emails, unclear delivery timelines, complex onboarding steps, refund ambiguity, or unexpected follow up charges can quietly weaken trust.
      </p>
      <p className="text-xl text-black text-justify leading-relaxed">
      These signals rarely appear in standard funnel metrics. The transaction is recorded as successful. Revenue is booked. However, early friction after
      purchase can reduce repeat intent, increase support burden, and accelerate churn.
      </p>
      <p className="text-xl text-black text-justify leading-relaxed">
      Post purchase abandonment is less visible than checkout exits, but often more expensive.
      </p>
      </div>

      {/* Identifying Hidden Friction After Conversion */}
      <div className="mb-20">
      <h2 className="text-5xl font-semibold mb-6 text-black">
      Identifying Hidden Friction After Conversion
      </h2>
      
      <p className="text-xl text-black text-justify leading-relaxed">
        Uptrackt captures feedback during critical post purchase moments, including onboarding flows, delivery tracking stages, account setup, and early product usage.
      </p>
      <p className="text-xl text-black text-justify leading-relaxed">
      Rather than assuming satisfaction once payment is completed, teams gain direct visibility into emerging friction points. Feedback reveals whether customers feel confident, confused, misled, or uncertain about next steps.
      </p>
      <p className="text-xl text-black text-justify leading-relaxed">
      This allows organizations to distinguish between product adoption issues, communication gaps, operational delays, and unmet expectations.
      </p>
      <p className="text-xl text-black text-justify leading-relaxed">
       By surfacing these signals early, teams can intervene before dissatisfaction becomes disengagement.
      </p>
      </div>
       
       {/* Strengthening Retention at the Source */}
    <div>
      <h2 className="text-3xl font-semibold mb-6 text-gray-900">
        Strengthening Retention at the Source
      </h2>

      <p className="text-xl text-black text-justify leading-relaxed">
      When post purchase friction is understood and addressed promptly, the impact extends beyond immediate satisfaction. Trust strengthens, repeat purchase probability increases, and long term customer value improves.
      </p>
      <p className="text-xl text-black text-justify leading-relaxed">
Instead of reacting to churn months later, organizations resolve issues at the earliest stages of the relationship.
      </p>
      <p className="text-xl text-black text-justify leading-relaxed">
        The result is a more resilient customer lifecycle where retention is engineered deliberately rather than repaired reactively.
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
      “We were worried about adding another tool to our stack,
       but it integrated cleanly without disrupting existing workflows.”
       </blockquote>

       <p className="text-sm text-gray-500 mb-6">
       - Head of Technology, Digital Commerce Platform
        </p>

        <a
        href="/testimonials/plugged-cleanly-into-our-existing-stack"
        className="text-2xl font-medium text-black hover:underline"
        >
        Read full story →
        </a>
        </section>
        </main>
    );
  }
  