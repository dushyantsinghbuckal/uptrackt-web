import TestimonialLayout from "../../components/testimonials/TestimonialLayout";

export default function TestimonialPage() {
  return (
    <TestimonialLayout title="Plugged Cleanly into Our Existing Stack">

      {/* Primary Quote */}
      <section className="testimonial-section">
        <p>
          “We were concerned about adding another tool to an already complex stack.
          MOTS integrated cleanly into our existing systems without disrupting
          workflows or slowing teams down.”
        </p>

        <p className="testimonial-attribution">
          — Head of Technology, Digital Commerce Platform
        </p>
      </section>

      {/* The Challenge */}
      <section className="testimonial-section">
        <h2>The Challenge</h2>
        <p>
          The organization already relied on multiple tools across analytics,
          experimentation, customer experience, and reporting. Introducing
          another system raised concerns about engineering effort, workflow
          disruption, and operational overhead.
        </p>
        <p>
          Previous tools had increased complexity instead of reducing it,
          making adoption a real risk for product and engineering teams.
        </p>
      </section>

      {/* The Difference */}
      <section className="testimonial-section">
        <h2>The Difference</h2>
        <p>
          MOTS was designed to work alongside existing systems rather than
          replace them. It plugged directly into the live customer journey
          and complemented current analytics and decision-making workflows.
        </p>
        <p>
          There was no need to re-architect funnels, retrain teams, or introduce
          new operational dependencies.
        </p>
      </section>

      {/* How It Fit */}
      <section className="testimonial-section testimonial-evidence">
        <h2>How It Fit into the Stack</h2>

        <div className="quote-card">
          <p className="quote-text">
            “Integrated seamlessly with existing analytics and funnel tracking.”
          </p>
          <span className="quote-meta">Product & Growth Teams</span>
        </div>

        <div className="quote-card">
          <p className="quote-text">
            “Worked within current reporting and prioritization processes.”
          </p>
          <span className="quote-meta">Business Operations</span>
        </div>

        <div className="quote-card">
          <p className="quote-text">
            “Required minimal engineering effort after initial setup.”
          </p>
          <span className="quote-meta">Platform Engineering</span>
        </div>
      </section>

      {/* What Changed */}
      <section className="testimonial-section">
        <h2>What Changed</h2>
        <p>
          Adoption was immediate across Product, Growth, and CX teams.
          Feedback insights were referenced alongside existing metrics,
          enabling faster decisions without changing how teams worked.
        </p>
        <p>
          MOTS felt like a natural extension of the stack rather than
          another system to manage.
        </p>
      </section>

      {/* Business Impact */}
      <section className="testimonial-section">
        <h2>The Impact</h2>
        <p>
          Teams gained direct customer insight without increasing tool
          sprawl or operational complexity. Decision-making improved
          while engineering overhead remained low.
        </p>

        <p className="testimonial-attribution">
          — Platform Engineering Lead
        </p>
      </section>

      {/* CTA */}
      <section className="testimonial-cta">
        <h3>Add customer insight without adding stack complexity</h3>
        <p>
          Capture in-the-moment feedback that fits seamlessly into how
          your teams already work.
        </p>
        <a href="/contact" className="cta-button">
          Request a Demo
        </a>
      </section>

    </TestimonialLayout>
  );
}
