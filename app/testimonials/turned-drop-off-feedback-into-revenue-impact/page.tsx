import TestimonialLayout from "../../components/testimonials/TestimonialLayout";

export default function TestimonialPage() {
  return (
    <TestimonialLayout title="Turned Drop-Off Feedback into Revenue Impact">

      {/* Primary Quote */}
      <section className="testimonial-section">
        <p>
          “Understanding why customers dropped off allowed us to focus on the right fixes.
          Instead of optimizing blindly, we addressed the issues that were actually costing us revenue.”
        </p>

        <p className="testimonial-attribution">
          — Revenue & Growth Lead, Digital Commerce Platform
        </p>
      </section>

      {/* The Challenge */}
      <section className="testimonial-section">
        <h2>The Challenge</h2>
        <p>
          Customer drop-offs were visible across the funnel, but prioritization was unclear.
          Multiple teams proposed changes across pricing, UX, offers, and checkout flows
          without alignment on what would truly move the needle.
        </p>
        <p>
          As a result, effort was spread across low-impact optimizations, debates replaced
          data-backed decisions, and revenue leakage was acknowledged but not quantified.
        </p>
      </section>

      {/* The Difference */}
      <section className="testimonial-section">
        <h2>The Difference</h2>
        <p>
          Drop-off feedback was mapped directly to specific decision points in the customer journey.
          Each abandonment reason could be grouped, counted, and evaluated based on its
          potential business impact.
        </p>
        <p>
          Instead of asking what to improve, teams could now ask which customer-reported
          blocker was affecting the most revenue.
        </p>
      </section>

      {/* What Changed */}
      <section className="testimonial-section testimonial-evidence">
        <h2>What Changed</h2>

        <div className="quote-card">
          <p className="quote-text">
            “Drop-off reasons were ranked by frequency and severity.”
          </p>
          <span className="quote-meta">Product & Growth Teams</span>
        </div>

        <div className="quote-card">
          <p className="quote-text">
            “Product, pricing, and CX teams aligned around shared priorities.”
          </p>
          <span className="quote-meta">Cross-functional Leadership</span>
        </div>

        <div className="quote-card">
          <p className="quote-text">
            “Targeted fixes replaced broad, unfocused experimentation.”
          </p>
          <span className="quote-meta">Optimization Roadmap</span>
        </div>
      </section>

      {/* Business Impact */}
      <section className="testimonial-section">
        <h2>The Impact</h2>
        <p>
          Optimization conversations shifted from opinion-driven debates to disciplined,
          insight-led execution. Teams focused on fixes that customers themselves pointed out,
          with clearer ownership and faster decision cycles.
        </p>

        <p className="testimonial-attribution">
          — Commercial Director
        </p>
      </section>

      {/* CTA */}
      <section className="testimonial-cta">
        <h3>Focus on fixes that actually drive revenue</h3>
        <p>
          Tie customer drop-off feedback directly to business impact and
          prioritize what matters most.
        </p>
        <a href="/contact" className="cta-button">
          Request a Demo
        </a>
      </section>

    </TestimonialLayout>
  );
}
