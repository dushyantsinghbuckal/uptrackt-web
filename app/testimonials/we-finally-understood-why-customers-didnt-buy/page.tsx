import TestimonialLayout from "../../components/testimonials/TestimonialLayout";

export default function TestimonialPage() {
  return (
    <TestimonialLayout title="We Finally Understood Why Customers Didn’t Buy">

      {/* Challenge */}
      <section className="testimonial-section">
        <h2>The Challenge</h2>
        <p>
          Customer analytics showed strong traffic across product and cart pages,
          yet a significant number of users abandoned the journey before completing
          checkout. While drop-off points were visible, the underlying reasons
          behind those decisions were not.
        </p>
        <p>
          Teams debated possible causes — pricing, delivery timelines, payment
          limitations, or UX friction — but lacked direct customer confirmation.
          As a result, prioritization was driven by assumptions rather than evidence.
        </p>
      </section>

      {/* Insight */}
      <section className="testimonial-section">
        <h2>The Insight</h2>
        <p>
          MOTS captured in-the-moment feedback at the exact point of abandonment,
          including from anonymous users who never logged in or shared personal
          details.
        </p>
        <p>
          This revealed clear, repeatable patterns in customer intent — transforming
          behavioral drop-offs into decision-level insights that analytics alone
          could not provide.
        </p>
      </section>

      <section className="testimonial-section testimonial-evidence">
  <h2>What Customers Actually Said</h2>

  <div className="quote-card">
    <p className="quote-text">
      “Delivery date is too late for my requirement.”
    </p>
    <span className="quote-meta">Operations Manager · D2C Retail</span>
  </div>

  <div className="quote-card">
    <p className="quote-text">
      “Extra charges appeared at checkout.”
    </p>
    <span className="quote-meta">Repeat Buyer · Online Marketplace</span>
  </div>

  <div className="quote-card">
    <p className="quote-text">
      “My preferred payment option wasn’t available.”
    </p>
    <span className="quote-meta">First-time Buyer</span>
  </div>

  <div className="quote-card">
    <p className="quote-text">
      “The final price didn’t match what I saw earlier.”
    </p>
    <span className="quote-meta">Price-sensitive Shopper</span>
  </div>
</section>

      {/* Impact */}
      <section className="testimonial-section">
        <h2>The Impact</h2>
        <p>
          With clear visibility into why customers were not converting,
          prioritization became straightforward. Product, pricing, and UX
          decisions were aligned around the most frequent and highest-impact
          customer blockers.
        </p>
        <p>
          Teams moved faster, debated less, and focused on fixes that were
          grounded in real customer input rather than internal interpretation.
        </p>

        <p className="testimonial-attribution">
          — Head of Product, Online Retail Platform
        </p>
      </section>

      {/* CTA */}
      <section className="testimonial-cta">
        <h3>Understand why your customers don’t convert</h3>
        <p>
          Capture decision-level feedback at the moment it matters — before
          customers disappear.
        </p>
        <a href="/contact" className="cta-button">
          Request a Demo
        </a>
      </section>

    </TestimonialLayout>
  );
}

<section style={{ marginTop: "64px" }}>
  <a href="/testimonials/captured-feedback-from-anonymous-visitors">
    Next story →
  </a>
</section>
