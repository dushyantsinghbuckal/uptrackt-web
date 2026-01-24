export default function HowItWorks() {
    const steps = [
      {
        title: "Capture",
        desc: "Collect feedback at critical journey moments automatically."
      },
      {
        title: "Analyze",
        desc: "Identify friction, drop-offs, and sentiment patterns in real time."
      },
      {
        title: "Act",
        desc: "Trigger alerts and insights that teams can act on instantly."
      }
    ];
  
    return (
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            How Uptrackt Works
          </h2>
  
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {steps.map((step, i) => (
              <div
                key={i}
                className="rounded-xl border p-8 bg-white shadow-sm"
              >
                <h3 className="text-xl font-semibold text-gray-900">
                  {step.title}
                </h3>
                <p className="mt-3 text-gray-600">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  