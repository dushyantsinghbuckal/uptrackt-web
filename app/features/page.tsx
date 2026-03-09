"use client";

export default function FeaturesPage() {
  return (
    <main className="bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">

        {/* HERO */}
        <section className="mb-10 text-center">
          <h1 className="text-5xl md:text-9xl font-bold tracking-tight leading-tight">
            <span className="text-black">Platform</span>{" "}
            <span className="text-gray-400">Features</span>
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto">
            Everything you need to capture decision-level customer feedback,
            uncover friction, and turn insights into growth.
          </p>
        </section>

        {/* CATEGORY 1 */}
        <FeatureSection title="Moment-Based Feedback">
          <FeatureCard
            icon="💬"
            title="Moment-Based Surveys"
            description="Capture feedback precisely when it matters most. Deploy micro-surveys at critical journey points. Understand exactly what customers were thinking and feeling in the moment, before
            context fades."
          />
          <FeatureCard
            icon="👤"
            title="Anonymous & Identified Responses"
            description="Collect frictionless feedback from anonymous visitors to understand broad patterns, then seamlessly
            identify returning users to connect feedback across sessions. Choose the right balance of privacy and personalization."
          />
          <FeatureCard
            icon="❓"
            title="Contextual Question Engine"
            description="Static surveys miss the mark. Our engine adapts questions based on real-time behavior- page visited, time spent, stage 
            abandoned- asking different follow-ups for richer insights."
          />
        </FeatureSection>

        {/* CATEGORY 2 */}
        <FeatureSection title="Journey Intelligence">
          <FeatureCard
            icon="🗺️"
            title="Stage-wise Journey Mapping"
            description="Visualize the complete customer trajectory from first click to final delivery. Map every touchpoint to see where users flow 
            smoothly and where they drop off, all in a single unified view."
          />
          <FeatureCard
            icon="🔄"
            title="Cross-Stage Analysis"
            description="Friction rarely lives in isolation. Analyze how issues in one stage ripple downstream. Connect the dots between early browsing
            behavior and final conversion outcomes."
          />
          <FeatureCard
            icon="🔍"
            title="Drop-off Root Cause Detection"
            description="Stop guessing why users leave. Automatically identify the most common friction points at each abandonment stage.
            Get surfaced insights, not just raw data dumps."
          />
        </FeatureSection>

        {/* CATEGORY 3 */}
        <FeatureSection title="Insights & Action">
          <FeatureCard
            icon="💡"
            title="Plain English Insights"
            description="Dashboards are for data teams, insights are for everyone. Transform complex behavioral data into clear, actionable summaries
            that executives can act on immediately. No training required, no charts to decode."
          />
          <FeatureCard
            icon="🔔"
            title="Real Time Alerts"
            description="Respond the moment things go wrong. Get instant notifications when key metrics drop like checkout completion falls, payment failure,
            or post-purchase satisfaction dips. Address issues before they become revenue crises."
          />
          <FeatureCard
            icon="💰"
            title="Revenue Impact Indicators"
            description="Not all friction is equal. Prioritize fixes based on revenue impact. Identify your biggest cost drivers and recovery 
            opportunities. Focus effort where it matters most."
          />
        </FeatureSection>

        {/* CATEGORY 4 */}
        <FeatureSection title="Enterprise Readiness">
          <FeatureCard
            icon="⚙️"
            title="Custom Stage Configuration"
            description="Define your own journey stages that match your specific funnel, whether that's subscription sign-up,
            loan application, or enterprise procurement. Map feedback to the moments that matter for your customers."
          />
          <FeatureCard
            icon="🧩"
            title="Integrations"
            description="Plug insights directly into your existing workflow. Connect seamlessly with analytics platforms, CRM systems, and data warehouses.
            Enrich customer profiles with feedback data and trigger actions based on sentiment."
          />
          <FeatureCard
            icon="🛡️"
            title="Security & Compliance"
            description="SOC 2 compliance, end-to-end encryption, and granular access controls ensure your customer
            feedback data stays secure. Built for organizations that take data privacy and regulatory requirements seriously."
          />
        </FeatureSection>
      </div>
    </main>
  );
}

/* ---------------- COMPONENTS ---------------- */

function FeatureSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-20 last:mb-0">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 tracking-tight">
        {title}
      </h2>
      <div className="grid md:grid-cols-3 gap-6">{children}</div>
    </section>
  );
}

function FeatureCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="flex items-center gap-3 mb-3">
        {icon && (
          <div className="text-indigo-600 flex-shrink-0 text-2xl w-8 h-8 flex items-center justify-center">
            {icon}
          </div>
        )}
        <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600 text-xl leading-relaxed">{description}</p>
    </div>
  );
}