export default function Capabilities() {
  const items = [
    {
      title: "Moment-based Surveys",
      desc: "Capture feedback at the exact moment customers experience friction or intent.",
    },
    {
      title: "Journey Analytics",
      desc: "Understand how customers move across touchpoints and where they drop off.",
    },
    {
      title: "Customer Friction Detection",
      desc: "Identify blockers early before they impact conversions or retention.",
    },
    {
      title: "Real-time Alerts",
      desc: "Get notified instantly when customer experience starts to degrade.",
    },
    {
      title: "Actionable CX Insights",
      desc: "Turn feedback into clear, prioritized actions for product and CX teams.",
    },
    {
      title: "Enterprise-ready Security",
      desc: "Built with privacy, compliance, and scale in mind.",
    },
  ];

  return (
    <section className="bg-gray-50 py-32 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Platform Capabilities
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {items.map((item, i) => (
            <div
            key={i}
            className="group relative rounded-2xl bg-white p-8
             shadow-sm hover:shadow-xl
             transition-all duration-300
             text-gray-900"
          >        
          
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-4 text-base font-semibold text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
