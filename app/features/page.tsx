"use client";

export default function FeaturesPage() {
  return (
    <main className="bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">

        {/* HERO */}
        <section className="mb-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Platform Features
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Everything you need to capture decision-level customer feedback,
            uncover friction, and turn insights into growth.
          </p>
        </section>

        {/* CATEGORY 1 */}
        <FeatureSection title="Moment-Based Feedback">
          <FeatureCard
            icon={<FeedbackIcon />}
            title="Moment-Based Surveys"
            description="Trigger feedback exactly at checkout, payment failure, delivery, or drop-off moments."
          />
          <FeatureCard
            icon={<UserIcon />}
            title="Anonymous & Identified Responses"
            description="Collect frictionless feedback without login, or identify users when needed."
          />
          <FeatureCard
            icon={<QuestionIcon />}
            title="Contextual Question Engine"
            description="Ask the right question based on user behavior, not static surveys."
          />
        </FeatureSection>

        {/* CATEGORY 2 */}
        <FeatureSection title="Journey Intelligence">
          <FeatureCard
            title="Stage-wise Journey Mapping"
            description="Track every step from landing to purchase to post-delivery."
          />
          <FeatureCard
            title="Cross-Stage Analysis"
            description="Understand how friction in one stage impacts conversions downstream."
          />
          <FeatureCard
            title="Drop-off Root Cause Detection"
            description="Automatically surface why users abandon specific stages."
          />
        </FeatureSection>

        {/* CATEGORY 3 */}
        <FeatureSection title="Insights & Action">
          <FeatureCard
            title="Plain-English Insights"
            description="No dashboards overload. Clear explanations anyone can understand."
          />
          <FeatureCard
            title="Real-Time Alerts"
            description="Get notified the moment performance drops at a tracked stage."
          />
          <FeatureCard
            title="Revenue Impact Indicators"
            description="See which issues are hurting revenue the most."
          />
        </FeatureSection>

        {/* CATEGORY 4 */}
        <FeatureSection title="Enterprise Readiness">
          <FeatureCard
            title="Custom Stage Configuration"
            description="Define your own journey stages — standard or custom."
          />
          <FeatureCard
            title="Integrations"
            description="Plug into your existing analytics, CRM, or data stack."
          />
          <FeatureCard
            title="Security & Compliance"
            description="Enterprise-grade data security, access control, and compliance readiness."
          />
        </FeatureSection>

        {/* CTA */}
        <section className="mt-24 text-center">
          <h3 className="text-2xl font-semibold mb-4">
            See Uptrackt in Action
          </h3>
          <p className="text-gray-600 mb-6">
            Discover how moment-based feedback changes your growth story.
          </p>
          <a
            href="/request-demo"
            className="inline-block bg-black text-white px-8 py-3 rounded-md font-medium"
          >
            Request a Demo
          </a>
        </section>

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
    <section className="mb-24">
      <h2 className="text-2xl font-semibold mb-10">{title}</h2>
      <div className="grid md:grid-cols-3 gap-8">{children}</div>
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
    <div className="border rounded-xl p-6 hover:shadow-md transition">
      {icon && <div className="mb-4">{icon}</div>}
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

/* ---------------- ICONS ---------------- */

function FeedbackIcon() {
  return (
    <svg width="24" height="24" fill="none" stroke="#0a66c2" strokeWidth="2">
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12h8" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg width="24" height="24" fill="none" stroke="#0a66c2" strokeWidth="2">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 16-4 16 0" />
    </svg>
  );
}

function QuestionIcon() {
  return (
    <svg width="24" height="24" fill="none" stroke="#0a66c2" strokeWidth="2">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 17h.01" />
      <path d="M12 7a3 3 0 0 1 3 3c0 2-3 2-3 4" />
    </svg>
  );
}
