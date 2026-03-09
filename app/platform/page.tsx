export default function PlatformPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-24">

      {/* PLATFORM HERO */}
      <section id="platform" className="text-center">
        <h1 className="text-4xl md:text-7xl font-bold text-gray-900">
          <span className="text-black">Understand Behavior</span>
          <span className="text-gray-400">.</span>
          <br />
          <span className="text-gray-400">Unlock Growth</span>
          <span className="text-black">.</span>
        </h1>
        <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
          Customer experience intelligence platform built for modern retail and e-commerce teams to detect friction, understand behavior, and
          act with clarity and speed.
        </p>
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          {/* Buttons removed from hero as per your code */}
        </div>
      </section>

      {/* TRUST BADGES */}
      <section className="mt-16 border-y border-gray-200 py-4">
        <div className="flex flex-wrap items-center justify-center gap-8 text-xl text-gray-600">
          <span className="font-medium">Integrates with 20+ platforms</span>
          <div className="h-6 w-px bg-gray-300 hidden md:block"></div>
          <span>⚡ 2000+ events processed monthly</span>
          <div className="h-6 w-px bg-gray-300 hidden md:block"></div>
          <span>🔒 97% uptime SLA</span>
        </div>
      </section>

      {/* PLATFORM HIGHLIGHTS (alternating feature blocks) */}
      <section id="highlights" className="mt-20 space-y-16">
        <FeatureBlock
          title="Journey Intelligence"
          labels={['Real-time', 'AI-powered']}
          description="Automatically map every customer interaction and uncover hidden friction."
          imageSide="left"
        />
        <FeatureBlock
          title="In-the-Moment Surveys"
          labels={['Contextual', 'No-code']}
          description="Trigger micro-surveys exactly when users hesitate or convert."
          imageSide="right"
        />
        <FeatureBlock
          title="Action Center"
          labels={['Integrations', 'Automated']}
          description="Convert feedback into Jira tickets, Slack alerts, or CRM updates."
          imageSide="left"
        />
      </section>

      {/* TRUST & SECURITY (boxes) */}
      <section id="trust" className="mt-24">
        <h2 className="text-5xl font-bold text-gray-900 text-center">Built for Scale. Secured by Design.</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          <TrustBox title="Security" desc="SOC2, GDPR, encryption at rest." />
          <TrustBox title="Scalability" desc="Handles millions of events without breaking a sweat." />
          <TrustBox title="Support" desc="24/7 enterprise support with dedicated CSM." />
        </div>
      </section>

      {/* ===== EXPERIENCE INTELLIGENCE IN ACTION ===== */}
      <section id="experience-intelligence" className="bg-gray-50 py-12 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mt-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-bold text-gray-900">
              Experience Intelligence <br />
              In Action
            </h2>
            <p className="mt-6 text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Uptrackt captures feedback throughout the customer journey,
              enabling teams to understand intent, emotion, and conversion drop-offs in real time.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl bg-gray-400 p-8 shadow-md hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold text-white">Detect High Impact Moments</h3>
              <p className="mt-4 text-xl text-white leading-relaxed">
                Identify friction signals like cart abandonment, checkout hesitation, onboarding confusion,
                and behavioral drop-offs before revenue is lost.
              </p>
            </div>
            <div className="rounded-2xl bg-gray-400 p-8 shadow-md hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold text-white">Capture Real Time Intent Signals</h3>
              <p className="mt-4 text-xl text-white leading-relaxed">
                Trigger contextual surveys and collect feedback precisely when customer intent and emotional
                engagement are at their peak.
              </p>
            </div>
            <div className="rounded-2xl bg-gray-400 p-8 shadow-md hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold text-white">Turn Insights Into Revenue Actions</h3>
              <p className="mt-4 text-xl text-white leading-relaxed">
                Convert structured customer intelligence into prioritized recommendations that directly improve
                conversion, retention, and growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PLATFORM CAPABILITIES ===== */}
      <section id="capabilities" className="mt-24">
        <div className="text-center mb-14">
          <h2 className="text-6xl md:text-7xl font-bold text-gray-900">Platform Capabilities</h2>
          <p className="text-4xl font-medium text-gray-500 mt-4">What you can do with Uptrackt</p>
        </div>

        <div className="max-w-8xl space-y-10">
          <div>
            <h3 className="text-3xl md:text-3xl font-semibold text-black">Map the journey.</h3>
            <p className="mt-3 text-xl text-gray-800 leading-relaxed">
              Understand how customers move across touchpoints, where friction begins, and how behavior shifts
              before conversion decisions are made.
            </p>
          </div>
          <div>
            <h3 className="text-3xl md:text-3xl font-semibold text-black">Capture real-time intent signals.</h3>
            <p className="mt-3 text-xl text-gray-800 leading-relaxed">
              Collect contextual feedback when customer intent and emotional engagement are at their peak
              moments of hesitation or commitment.
            </p>
          </div>
          <div>
            <h3 className="text-3xl md:text-3xl font-semibold text-black">Turn noise into action.</h3>
            <p className="mt-3 text-xl text-gray-800 leading-relaxed">
              Convert raw customer input into structured insights, prioritized recommendations, and measurable
              optimization initiatives across teams.
            </p>
          </div>
          <div>
            <h3 className="text-3xl md:text-3xl font-semibold text-black">Stop revenue leaks early.</h3>
            <p className="mt-3 text-xl text-gray-800 leading-relaxed">
              Identify emerging blockers early, surface hidden friction patterns, and prevent preventable
              abandonment across high-impact journey stages.
            </p>
          </div>
          <div>
            <h3 className="text-3xl md:text-3xl font-semibold text-black">Move fast when it matters.</h3>
            <p className="mt-3 text-xl text-gray-800 leading-relaxed">
              Receive real-time notifications when experience quality declines, friction spikes, or conversion
              performance deviates from expected benchmarks.
            </p>
          </div>
          <div>
            <h3 className="text-3xl md:text-3xl font-semibold text-black">Built with trust.</h3>
            <p className="mt-3 text-xl text-gray-800 leading-relaxed">
              Designed with privacy-first architecture, compliance standards, scalable infrastructure, and
              secure data handling for modern commerce teams.
            </p>
          </div>
        </div>
      </section>
      </main>
  );
}

/* ===== COMPONENTS ===== */

function Step({ number, title, desc }: { number: string; title: string; desc: string }) {
  return (
    <div className="text-center">
      <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700 font-bold text-xl mx-auto">
        {number}
      </div>
      <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{desc}</p>
    </div>
  );
}

function FeatureBlock({
  title,
  labels,
  description,
  imageSide,
}: {
  title: string;
  labels: string[];
  description: string;
  imageSide: 'left' | 'right';
}) {
  // Choose illustration based on title
  const illustration = (() => {
    switch (title) {
      case 'Journey Intelligence':
        return (
          <div className="relative w-full h-64 bg-white rounded-3xl p-6 flex flex-col items-center justify-center">
            <svg className="w-full max-w-xs" viewBox="0 0 400 140" preserveAspectRatio="xMidYMid meet">
              <path
                d="M40,70 Q140,20 240,70 T360,60"
                stroke="#4F46E5"
                strokeWidth="5"
                fill="none"
                strokeDasharray="10 10"
              />
              <circle cx="40" cy="70" r="10" fill="#4F46E5" stroke="white" strokeWidth="3" />
              <circle cx="140" cy="20" r="10" fill="#4F46E5" stroke="white" strokeWidth="3" />
              <circle cx="240" cy="70" r="10" fill="#4F46E5" stroke="white" strokeWidth="3" />
              <circle cx="360" cy="60" r="10" fill="#4F46E5" stroke="white" strokeWidth="3" />
            </svg>
            <div className="mt-4 bg-indigo-50 px-4 py-2 rounded-full text-indigo-700 font-medium text-base">
              ⚠️ friction point • 84% drop‑off
            </div>
          </div>
        );
      case 'In-the-Moment Surveys':
        return (
          <div className="relative w-full h-64 bg-white rounded-3xl p-8 flex items-center justify-center">
            <div className="w-full max-w-sm bg-gray-50 rounded-2xl border-2 border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Just now</span>
                <span className="text-xl text-gray-400">⏱️</span>
              </div>
              <p className="text-gray-800 font-medium text-lg mb-6">
                Any friction during checkout?
              </p>
              <div className="flex gap-4 justify-center">
                <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center text-2xl border-2 border-green-200">
                  😌
                </div>
                <div className="w-14 h-14 rounded-full bg-yellow-100 flex items-center justify-center text-2xl border-2 border-yellow-200">
                  😐
                </div>
                <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center text-2xl border-2 border-red-200">
                  😤
                </div>
              </div>
            </div>
          </div>
        );
      case 'Action Center':
        return (
          <div className="relative w-full h-64 bg-white rounded-3xl flex items-center justify-around px-8">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-indigo-100 rounded-2xl flex items-center justify-center text-4xl border-2 border-indigo-200">
                📋
              </div>
              <span className="text-gray-700 font-medium text-lg mt-3">Jira</span>
            </div>
            <div className="text-gray-400 text-3xl">→</div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-indigo-100 rounded-2xl flex items-center justify-center text-4xl border-2 border-indigo-200">
                💬
              </div>
              <span className="text-gray-700 font-medium text-lg mt-3">Slack</span>
            </div>
            <div className="text-gray-400 text-3xl">→</div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-indigo-100 rounded-2xl flex items-center justify-center text-4xl border-2 border-indigo-200">
                📊
              </div>
              <span className="text-gray-700 font-medium text-lg mt-3">CRM</span>
            </div>
          </div>
        );
      default:
        return (
          <div className="flex-1 bg-gray-100 rounded-3xl h-64 flex items-center justify-center text-gray-400">
            [illustration]
          </div>
        );
    }
  })();

  const content = (
    <div className="flex-1 space-y-4">
      <div className="flex gap-2">
        {labels.map((label) => (
          <span
            key={label}
            className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-full border border-gray-200"
          >
            {label}
          </span>
        ))}
      </div>
      <h3 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">{title}</h3>
      <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-xl">{description}</p>
    </div>
  );

  return (
    <div className={`flex flex-col ${imageSide === 'left' ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
      {imageSide === 'left' ? (
        <>
          <div className="flex-1 w-full">{illustration}</div>
          {content}
        </>
      ) : (
        <>
          {content}
          <div className="flex-1 w-full">{illustration}</div>
        </>
      )}
    </div>
  );
}

function TrustBox({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-gray-100 rounded-2xl border border-gray-100 p-6 text-center">
      <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-xl text-gray-600">{desc}</p>
    </div>
  );
}

function Testimonial({ quote, author, title }: { quote: string; author: string; title: string }) {
  return (
    <div className="bg-gray-50 rounded-2xl p-6">
      <p className="text-gray-700 italic">“{quote}”</p>
      <div className="mt-4">
        <p className="font-semibold text-gray-900">{author}</p>
        <p className="text-sm text-gray-500">{title}</p>
      </div>
    </div>
  );
}
