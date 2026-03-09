import { Zap, Bug, TrendingUp } from 'lucide-react';

export default function WhyUptrackt() {
  return (
    <section className="relative py-1 overflow-hidden bg-white">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #000 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Large geometric accent */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-gray-100 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-gray-200 rounded-full blur-3xl opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900">
        Why Uptrackt
        </h2>
          <p className="mt-8 text-xl md:text-2xl text-gray-500 leading-relaxed max-w-2xl mx-auto">
          Uptrackt helps teams understand where users struggle in real time, so you can remove friction earlier and improve the customer journey faster.
          </p>
        </div>

        {/* Feature grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Act faster */}
          <div className="group p-8 bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 rounded-2xl">
          <div className="flex items-center gap-4 mb-4">
          <div className="inline-flex p-3 bg-gray-50 rounded-xl text-gray-600">
          <Zap className="w-7 h-7" strokeWidth={1.5} />
         </div>

         <h3 className="text-2xl font-medium text-gray-900">
          Act faster
          </h3>
            </div>
            <p className="text-gray-500 leading-relaxed">
              Real‑time insights let your team respond immediately to user feedback, 
              reducing decision latency and accelerating iteration cycles.
            </p>
          </div>

          {/* Card 2: Fix friction earlier */}
          <div className="group p-8 bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 rounded-2xl">
          <div className="flex items-center gap-4 mb-4">
          <div className="inline-flex p-3 bg-gray-50 rounded-xl text-gray-600">
          <Zap className="w-7 h-7" strokeWidth={1.5} />
          </div>

          <h3 className="text-2xl font-medium text-gray-900">
          Fix Friction Earlier
           </h3>
           </div>
            <p className="text-gray-500 leading-relaxed">
              Identify pain points before they escalate. Our moment‑based approach 
              highlights friction points early, so you can smooth the user journey.
            </p>
          </div>

          {/* Card 3: Grow smarter */}
          <div className="group p-8 bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 rounded-2xl">
          <div className="flex items-center gap-4 mb-4">
          <div className="inline-flex p-3 bg-gray-50 rounded-xl text-gray-600">
          <Zap className="w-7 h-7" strokeWidth={1.5} />
          </div>

            <h3 className="text-2xl font-medium text-gray-900">
            Grow Smarter
            </h3>
            </div>
            <p className="text-gray-500 leading-relaxed">
              Data‑driven decisions become your competitive advantage. Leverage 
              insights that matter to scale efficiently and delight users.
            </p>
          </div>
        </div>
       </div>
    </section>
  );
}