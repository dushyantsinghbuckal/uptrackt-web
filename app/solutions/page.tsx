export default function SolutionsPage() {
  return (
    <main>

      {/* HERO */}
      <section className="py-12">
  <div className="max-w-6xl mx-auto px-4">
      <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
       Make Every Customer Moment{" "}
      <span className="text-gray-400 text-6xl md:text-9xl block">
      Measurable.
      </span>
      </h1>
      <p className="text-xl text-gray-800 max-w-6xl text-justify">
          Customer journeys don’t fail loudly. They erode silently at onboarding, pricing, checkout, activation, and renewal. We surface decision-level
          feedback exactly when intent is highest, so you can fix what truly blocks revenue.
        </p>
        </div>
        </section>

      {/* CORE INTELLIGENCE PILLARS */}
      <section className="py-12">
  <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl font-semibold text-gray-900 mb-16 text-center">
          Intelligence Where Decisions Are Made
        </h2>
        <div className="grid md:grid-cols-3 gap-16">

          {/* COLUMN 1 */}
          <div className="flex flex-col items-center">
<img
  src="/View.svg"
  alt="Reveal"
  className="h-20 w-20 mb-6"
/>
<h3 className="text-xl font-semibold mb-4 text-center">
  Reveal Hidden Drop Offs
</h3>
<p className="text-gray-600 text-justify leading-relaxed">
  Customers don’t always complain, they quietly leave.
  We capture structured and open-ended signals from anonymous
  visitors, trial users, lost deals, and churned accounts,
  mapping feedback directly to funnel stages.
</p>
</div>
         {/* COLUMN 2 */}
         <div className="flex flex-col items-center">
<img
  src="/Think.png"
  alt="Intent"
  className="h-20 w-20 mb-6"
/>
<h3 className="text-xl font-semibold mb-4 text-center">
  Understand Real Intent
</h3>
<p className="text-gray-600 text-justify leading-relaxed">
  Not all churn is equal. We categorize feedback into pricing
  sensitivity, feature gaps, trust concerns, competitive pull,
  UX friction, and expectation misalignment, turning qualitative
  input into executive-ready insight.
</p>
</div>

         {/* COLUMN 3 */}
         <div className="flex flex-col items-center">
<img
  src="/Revenue.png"
  alt="Revenue"
  className="h-20 w-20 mb-6"
/>
<h3 className="text-xl font-semibold mb-4 text-center">
  Feedback That Drives Growth
</h3>
<p className="text-gray-600 text-justify leading-relaxed">
  Insights integrate into your CRM, analytics, BI dashboards,
  and product workflows, directly influencing conversion rates,
  activation improvements, and retention strategies.
</p>
</div>
        </div>
        </div>
        </section>

        <section className="py-18">
      <div className="max-w-6xl mx-auto px-4 relative rounded-[32px] overflow-hidden">

{/* Background Image */}
<div
  className="absolute inset-0 bg-cover bg-center"
  style={{ backgroundImage: "url('/Background.jpg')" }}
/>

{/* Subtle Dark Gradient Overlay */}
<div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/20" />

{/* Content */}
<div className="relative px-12 pt-20 pb-15">
<div>

{/* TITLE */}
<h2 className="leading-tight mb-4">

  <span className="text-3xl md:text-5xl text-gray-300 font-bold">
    From Blind Spots to
  </span>

  <span className="block text-4xl md:text-8xl font-bold text-white">
    Strategic Clarity
  </span>
</h2>

{/* SUBTEXT */}
<p className="text-3xl text-white mb-12 max-w-9xl leading-relaxed">
  Traditional analytics show what happened. We surface why it happened precisely at the stage where intent turns into decision.
</p>
</div>

<ul className="space-y-6 text-white">
  {[
    "After onboarding completion",
    "After pricing evaluation",
    "After checkout abandonment",
    "After support interaction",
    "After renewal or churn",
  ].map((item, index) => (
    <li key={index} className="flex items-center gap-4">

      {/* Icon Bubble */}
      <div className="h-8 w-8 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
        <span className="text-white text-xm">✓</span>
      </div>

      {/* Text */}
      <span className="text-xl md:text-2xl font-medium leading-relaxed">
        {item}
      </span>

    </li>
  ))}
</ul>
      </div>
        </div>
       </section>

       <section className="bg-gray-200 py-14">
      <div className="max-w-9xl mx-auto px-9 text-center">

        {/* BIG PRIMARY CONTENT */}
        <h2 className="text-white font-semibold tracking-widest leading-none space-y-8">
        </h2>
          
  {/* Heading */}
  <h2 className="font-semibold mb-16 leading-tight">
  <span className="block text-4xl md:text-5xl text-gray-400">
    Target Solutions For
  </span>
  <span className="block text-6xl md:text-7xl text-black">
    High Impact Stages
  </span>
</h2>

        {/* Cards Grid */}
        <div className="grid gap-12 md:grid-cols-2 max-w-5xl mx-auto">
        <a
  href="/solutions/checkout-drop-offs"
  className="group bg-white border border-gray-300 rounded-2xl p-8 
             transition-all duration-300 
             hover:bg-[#2563EB] hover:shadow-2xl hover:scale-[1.02]"
>
  <h3 className="text-2xl font-semibold mb-3 transition-colors duration-300 group-hover:text-white">
    Checkout Drop-offs
  </h3>
  <p className="text-gray-600 text-xl leading-relaxed transition-colors duration-300 group-hover:text-white">
    Understand why customers abandon checkout and eliminate real blockers
    tied to payment confidence, friction, and trust.
  </p>
</a>

  <a
    href="/solutions/pricing-friction"
    className="group bg-white border border-gray-300 rounded-2xl p-8 
               transition-all duration-300 
               hover:bg-blue-600 hover:shadow-2xl hover:scale-[1.02]"
  >
    <h3 className="text-2xl font-semibold mb-3 transition-colors duration-300 group-hover:text-white">
      Pricing Friction
    </h3>
    <p className="text-gray-600 text-xl leading-relaxed transition-colors duration-300 group-hover:text-white">
      Identify where price perception breaks, which objections repeat,
      and how positioning influences decision hesitation.
    </p>
  </a>

  <a
    href="/solutions/payment-failures"
    className="group bg-white border border-gray-300 rounded-2xl p-8 
               transition-all duration-300 
               hover:bg-blue-600 hover:shadow-2xl hover:scale-[1.02]"
  >
    <h3 className="text-2xl font-semibold mb-3 transition-colors duration-300 group-hover:text-white">
      Payment Failures
    </h3>
    <p className="text-gray-600 text-xl leading-relaxed transition-colors duration-300 group-hover:text-white">
      Capture real time signals when payments fail or options are missing,
      uncovering friction that traditional error logs miss.
    </p>
  </a>

  <a
    href="/solutions/post-purchase-drop-offs"
    className="group bg-white border border-gray-300 rounded-2xl p-8 
               transition-all duration-300 
               hover:bg-blue-600 hover:shadow-2xl hover:scale-[1.02]"
  >
    <h3 className="text-2xl font-semibold mb-3 transition-colors duration-300 group-hover:text-white">
      Post Purchase Drop-offs
    </h3>
    <p className="text-gray-600 text-xl leading-relaxed transition-colors duration-300 group-hover:text-white">
      Detect early churn signals after activation and understand why
      customers disengage before lifetime value is realized.
    </p>
  </a>

</div>
</div>
</section>

      {/* ALIGNMENT SECTION */}
      <section className="bg-gray-400 py-20">

<div className="max-w-6xl mx-auto px-6 text-center">

       {/* Heading */}
    <h2 className="text-4xl md:text-6xl font-semibold text-white mb-6 whitespace-nowrap">
      Designed For Cross Functional Alignment
    </h2>

    {/* Subheading */}
    <p className="text-4xl text-white max-w-4xl mx-auto mb-16">
      Built to connect product, growth, sales, and customer success teams around real customer insight.
    </p>

 {/* Bullet List */}
 <ul className="space-y-8 text-left">

<li>
  <h4 className="text-3xl text-white font-semibold mb-2">• Product</h4>
  <p className="text-white text-2xl text-justify leading-relaxed">
    Identify feature gaps and UX friction in real customer language.
    Prioritize roadmap decisions using contextual, stage-specific feedback.
  </p>
</li>

<li>
  <h4 className="text-3xl text-white font-semibold mb-2">• Growth</h4>
  <p className="text-white text-2xl text-justify leading-relaxed">
    Refine messaging based on true buyer objections.
    Optimize conversion across onboarding, pricing, and checkout.
  </p>
</li>

<li>
  <h4 className="text-3xl text-white font-semibold mb-2">• Sales</h4>
  <p className="text-white text-2xl text-justify leading-relaxed">
    Understand why deals stall and what objections dominate.
    Equip reps with insight-driven positioning to shorten sales cycles.
  </p>
</li>

<li>
  <h4 className="text-3xl text-white font-semibold mb-2">• Customer Success</h4>
  <p className="text-white text-2xl text-justify leading-relaxed">
    Detect churn signals early and act on friction to improve retention
    and lifetime value.
  </p>
</li>

<li>
  <h4 className="text-3xl text-white font-semibold mb-2">• Leadership</h4>
  <p className="text-white text-2xl text-justify leading-relaxed">
    Translate qualitative feedback into executive-ready insight and
    align cross-functional strategy with measurable revenue impact.
  </p>
</li>
</ul>
</div>
</section>

      {/* OUTCOME SECTION */}
<section className="mb-24 bg-black py-20 px-6">
  
  <h2 className="text-6xl font-semibold text-white text-center mb-12">
    Revenue Aligned Outcomes
  </h2>

  <ul className="grid md:grid-cols-2 gap-8 text-white max-w-4xl mx-auto text-3xl">
    <li>✔ Stronger product-market fit clarity</li>
    <li>✔ Reduced onboarding abandonment</li>
    <li>✔ Shorter sales cycles</li>
    <li>✔ Higher feature adoption</li>
    <li>✔ Lower churn rates</li>
    <li>✔ Revenue aligned outcomes</li>
  </ul>
</section>

 {/* ================= CTA ================= */}
 <section className="mx-auto max-w-6xl px-1 pt-1 pb-14 text-center">
      
        <h2 className="text-5xl md:text-6xl font-semibold tracking-tight text-gray-900 leading-tight">
        Make Insight Your {" "}
          <span className="text-gray-400">
          Unfair Advantage
          </span>
        </h2>

        <p className="mt-2 mx-auto max-w-3xl text-xl md:text-2xl text-gray-400">
          The companies that win don’t collect more data. They interpret it
          better, at the right moment.
        </p>

        <div className="mt-6">
          <a
            href="/request-demo"
            className="inline-flex items-center justify-center rounded-full
             bg-black px-8 py-4
             text-2xl font-semibold text-white
             transition hover:bg-gray-900"
          >
            Let’s Collaborate
          </a>
        </div>
      </section>
    </main>
  );
}