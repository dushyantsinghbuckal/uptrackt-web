const testimonials = [
  {
    title: "We Finally Understood Why Customers Didn’t Buy",
    description:
      "By capturing feedback at the exact moment users dropped off, the team uncovered friction points that traditional analytics completely missed.",
    href: "/testimonials/we-finally-understood-why-customers-didnt-buy",
  },
  {
    title: "Captured Feedback from Anonymous Visitors",
    description:
      "Without forcing sign-ups or logins, the company collected high-quality insights from users who would otherwise remain invisible.",
    href: "/testimonials/captured-feedback-from-anonymous-visitors",
  },
  {
    title: "Turned Drop-Off Feedback into Revenue Impact",
    description:
      "Actionable feedback loops helped prioritize fixes that directly improved conversions and measurable revenue outcomes.",
    href: "/testimonials/turned-drop-off-feedback-into-revenue-impact",
  },
  {
    title: "Plugged Cleanly into Our Existing Stack",
    description:
      "The solution integrated seamlessly with existing analytics and tooling, without disrupting live customer journeys.",
    href: "/testimonials/plugged-cleanly-into-our-existing-stack",
  },
];

export default function TestimonialsPage() {
  return (
    <main
      style={{
        backgroundColor: "#000",
        minHeight: "100vh",
        padding: "120px 24px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {/* Heading */}
        <h2 className="text-white font-semibold tracking-widest leading-none mb-12">
          <div className="text-4xl md:text-8xl">CUSTOMER</div>
          <div className="text-4xl md:text-8xl text-gray-500">
            STORIES
          </div>
        </h2>

        {/* Testimonials Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "40px",
          }}
        >
          {testimonials.map((item, index) => (

            <div
              key={item.href}
              style={{
                backgroundColor: index === 1 || index === 2 ? "#cfcfcf" : "#ffffff",
                border: index % 2 === 0 ? "1px solid #e5e7eb" : "none",
                padding: "48px",
                borderRadius: "6px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "320px",
              }}
            >
              <div>
                <h3
                  style={{
                    fontSize: "30px",
                    fontWeight: 700,
                    color: "#000",
                    marginBottom: "24px",
                    lineHeight: 1.25,
                    textDecoration: "underline",
                    textUnderlineOffset: "6px",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    fontSize: "18px",
                    color: "#333",
                    lineHeight: 1.8,
                  }}
                >
                  {item.description}
                </p>
              </div>

              <a
  href={item.href}
  style={{
    marginTop: "40px",
    alignSelf: "center",       
    backgroundColor: "#000",
    color: "#fff",
    padding: "14px 32px",       
    fontSize: "20px",           
    fontWeight: 600,
    textDecoration: "none",
    borderRadius: "9999px",
    lineHeight: 1,
    whiteSpace: "nowrap",     
  }}
>
  Explore Full Story
          </a>

            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
