import Link from "next/link";
export default function ResourcesPage() {
  return (
    <>
      {/* ===== Black Banner ===== */}
      <section className="bg-black text-white py-6 px-6 text-center relative overflow-hidden">
        {/* Subtle pattern overlay for texture */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
        
        <div className="mx-auto max-w-4xl relative">
          <h1 className="text-5xl md:text-9xl font-semibold tracking-tight">
            Resources<span className="text-indigo-500">.</span>
          </h1>

          <p className="mt-8 text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Practical insight for teams optimizing high impact customer moments
            across checkout, pricing, payments, and post purchase experience.
          </p>
        </div>
      </section>

      {/* ===== Content Below ===== */}
      <main className="mx-auto max-w-7xl px-6 py-24">
        
        {/* Featured Tool Section - Makes it pop */}
        <div className="mb-20">
          <div className="bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-700 rounded-3xl p-10 text-white relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full transform translate-x-32 -translate-y-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500 opacity-20 rounded-full transform -translate-x-24 translate-y-24"></div>
            
            <div className="relative flex flex-col md:flex-row items-center gap-8">
              <div className="bg-white/20 p-5 rounded-2xl backdrop-blur">
                <span className="text-4xl">⚡️</span>
              </div>
              <div className="flex-1 text-center md:text-left">
                <span className="text-indigo-200 text-sm font-semibold uppercase tracking-wider">Benchmark Tool</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2">Calculate ROI</h2>
                <p className="text-indigo-100 text-lg mt-3 max-w-2xl">
                  See how much revenue you're losing to checkout friction. Get clear, actionable fixes.
                </p>
              </div>
              <Link
               href="/roi-calculator"
               className="bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg backdrop-blur border border-white/20 whitespace-nowrap hover:bg-white/20 transition"
               >
                Calculate your impact →
               </Link>
            </div>
          </div>
        </div>

       {/* Resource Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch">
          <Resource
            icon="📘"
            iconBg="bg-blue-100"
            iconColor="text-blue-600"
            title="CX Playbooks"
            description="Structured, step by step frameworks for diagnosing and resolving friction at critical revenue stages including checkout 
            abandonment, pricing hesitation, payment instability, and early churn signals. Each playbook connects customer feedback directly to measurable
            optimization actions."
            badges={['Actionable Framework', 'Detailed Templates']}
          />

          <Resource
            icon="📊"
            iconBg="bg-cyan-100"
            iconColor="text-cyan-600"
            title="Retail Benchmarks"
            description="Industry level insight into common abandonment drivers, pricing perception gaps, payment reliability themes, and post purchase friction patterns. Benchmark your performance against broader market behavior and identify structural opportunity areas."
            badges={['Industry Insights', 'Interactive Dashboard']}
          />

          <Resource
            icon="🚀"
            iconBg="bg-amber-100"
            iconColor="text-amber-600"
            title="Product Updates"
            description="Platform enhancements, new feedback triggers, reporting improvements, and workflow automation capabilities designed to strengthen
            visibility at commercially sensitive journey moments and accelerate revenue recovery."
            badges={['Latest Release', 'New Features']}
          />

          <Resource
            icon="📑"
            iconBg="bg-emerald-100"
            iconColor="text-emerald-600"
            title="Case Studies"
            description="Detailed real world examples showing how organizations identified friction, implemented targeted corrective action, and achieved
            measurable improvements in conversion, trust, and long term retention."
            badges={['Real Examples', 'Success Stories']}
          />

          <Resource
            icon="⚙️"
            iconBg="bg-purple-100"
            iconColor="text-purple-600"
            title="Implementation Guides"
            description="Practical deployment guidance covering trigger timing, workflow configuration, feedback routing, and cross functional adoption
            to ensure insight capture strengthens rather than disrupts the customer experience."
            badges={['Technical Guide', 'Best Practices']}
          />

          <Resource
            icon="📋"
            iconBg="bg-rose-100"
            iconColor="text-rose-600"
            title="Research Briefings"
            description="Executive level summaries highlighting emerging friction trends, behavioral shifts, pricing sensitivity signals, and payment
            related trust concerns across industries."
            badges={['Trend Analysis', 'Executive Summary']}
          />
        </div>

       {/* Bottom CTA Section - static */}
       <div className="mt-6 text-center p-6 md:p-10 border border-gray-200 rounded-3xl bg-gray-50 max-w-5xl mx-auto">
       <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Can't find what you're looking for?</h3>
       <p className="text-gray-600 mt-2 text-xl md:text-2xl max-w-3xl mx-auto">
    Our team can create custom resources tailored to your specific industry and use case.
  </p>
  <div className="mt-4 bg-black text-white px-8 py-3 rounded-2xl font-semibold text-2xl inline-block shadow-md">
     Talk to An Expert
       </div>
        </div>
      </main>
    </>
  );
}

function Resource({
  icon,
  iconBg,
  iconColor,
  title,
  description,
  badges = [],
  showChart = false
}: {
  icon: string;
  iconBg: string;
  iconColor: string;
  title: string;
  description: string;
  badges?: string[];
  showChart?: boolean;
}) {
  return (
    <div className="group rounded-2xl border border-gray-200 p-8 hover:shadow-xl transition-all duration-300 bg-white h-full flex flex-col hover:border-transparent relative overflow-hidden">
      {/* Subtle hover gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative">
        {/* Icon and Title side by side */}
        <div className="flex items-center gap-4 mb-6">
          <div className={`${iconBg} w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
            <span className={`text-2xl ${iconColor}`}>{icon}</span>
          </div>
          <h3 className="font-bold text-gray-900 text-2xl tracking-tight">
            {title}
          </h3>
        </div>

       {/* Mini chart visualization for benchmarks card */}
       {showChart && (
          <div className="absolute top-0 right-0 flex items-end gap-1 h-12 opacity-50">
            <div className="w-2 bg-indigo-600 h-6 rounded-t"></div>
            <div className="w-2 bg-indigo-600 h-8 rounded-t"></div>
            <div className="w-2 bg-indigo-600 h-10 rounded-t"></div>
            <div className="w-2 bg-indigo-600 h-7 rounded-t"></div>
            <div className="w-2 bg-indigo-600 h-4 rounded-t"></div>
          </div>
        )}

        {/* Badges */}
        {badges.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {badges.map((badge, index) => (
              <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
                {badge}
              </span>
            ))}
          </div>
        )}

        <p className="mt-4 text-gray-600 leading-relaxed">
          {description}
        </p>
        </div>
    </div>
  );
}