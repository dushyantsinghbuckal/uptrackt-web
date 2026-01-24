export default function PlatformPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-24">

      {/* PLATFORM HERO */}
      <section id="platform">
        <h1 className="text-4xl font-bold text-gray-900">
          The Uptrackt Platform
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-3xl">
          Uptrackt is an enterprise-grade customer experience intelligence
          platform built for modern retail and e-commerce teams to detect
          friction, understand behavior, and act faster.
        </p>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="mt-24">
        <h2 className="text-3xl font-semibold text-gray-900">
          How It Works
        </h2>

        <p className="mt-4 text-gray-600 max-w-3xl">
          Uptrackt captures feedback at critical moments in the customer journey,
          helping teams understand intent, emotion, and drop-offs in real time.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <Step
            title="Detect Key Moments"
            desc="Identify friction points like cart abandonment, checkout hesitation, or onboarding drop-offs."
          />
          <Step
            title="Capture In-the-Moment Feedback"
            desc="Trigger contextual surveys when customer intent and emotion are highest."
          />
          <Step
            title="Turn Insights into Action"
            desc="Analyze patterns and prioritize actions that directly impact conversion and revenue."
          />
        </div>
      </section>

      {/* CAPABILITIES */}
<section id="capabilities" className="mt-32">
  <div className="text-center mb-14">
    <p className="text-sm font-medium text-gray-500 mb-2">
      What you can do with Uptrackt
    </p>
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
      Platform Capabilities
    </h2>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
    <Feature
      title="Journey Intelligence"
      desc="Understand how customers move across touchpoints and where friction begins."
    />
    <Feature
      title="Real-time Feedback"
      desc="Capture in-the-moment feedback when intent and emotion are at their peak."
    />
    <Feature
      title="Actionable Insights"
      desc="Convert raw feedback into clear, prioritized actions for teams."
    />
    <Feature
      title="Friction Detection"
      desc="Identify blockers early before they turn into drop-offs."
    />
    <Feature
      title="Real-time Alerts"
      desc="Get notified instantly when customer experience degrades."
    />
    <Feature
      title="Enterprise-ready Security"
      desc="Built with privacy, compliance, and scale in mind."
    />
  </div>
</section>


    </main>
  );
}

/* COMPONENTS */

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl bg-white p-7 shadow-sm hover:shadow-md transition">
      <h3 className="text-base font-semibold text-gray-900">
        {title}
      </h3>
      <p className="mt-3 text-sm text-gray-600 leading-relaxed">
        {desc}
      </p>
    </div>
  );
}

function Step({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-lg bg-gray-50 p-6">
      <h3 className="font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{desc}</p>
    </div>
  );
}
