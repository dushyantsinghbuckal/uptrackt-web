import TestimonialLayout from "../../components/testimonials/TestimonialLayout";

export default function TestimonialPage() {
  return (
    <TestimonialLayout title="Captured Feedback from Anonymous Visitors (No Login Needed)">

      {/* The Challenge */}
      <section className="testimonial-section">
        <h2>The Challenge</h2>
        <p>
          A large majority of visitors browsed products, compared options,
          and even added items to their cart — but left without completing
          a purchase. Because these users never logged in or shared personal
          details, their perspective was effectively invisible.
        </p>
        <p>
          Traditional feedback methods relied on post-purchase surveys,
          email follow-ups, or account-based interactions. As a result,
          insights were skewed toward converted or logged-in users, while
          the largest segment of traffic remained unheard.
        </p>
      </section>

      {/* The Difference */}
      <section className="testimonial-section">
        <h2>The Difference</h2>
        <p>
          An in-journey feedback mechanism was introduced at key decision
          points such as cart and checkout abandonment. This allowed users
          to share what stopped them — instantly and anonymously — without
          interrupting their browsing experience.
        </p>
        <p>
          No login. No email. No phone number. No follow-up required.
          Feedback was tied directly to the moment of hesitation, not
          to a user identity.
        </p>
      </section>

      {/* What We Learned */}
      <section className="testimonial-section testimonial-evidence">
        <h2>What We Learned from Anonymous Visitors</h2>

        <div className="quote-card">
          <p className="quote-text">
            “Unexpected costs appeared late in the checkout process.”
          </p>
          <span className="quote-meta">Anonymous Visitor · Checkout Stage</span>
        </div>

        <div className="quote-card">
          <p className="quote-text">
            “My preferred payment method wasn’t available.”
          </p>
          <span className="quote-meta">Anonymous Visitor · Payment Selection</span>
        </div>

        <div className="quote-card">
          <p className="quote-text">
            “Delivery timelines were unclear and hard to trust.”
          </p>
          <span className="quote-meta">Anonymous Visitor · Cart Review</span>
        </div>

        <div className="quote-card">
          <p className="quote-text">
            “I wasn’t confident about returns and policies.”
          </p>
          <span className="quote-meta">Anonymous Visitor · Pre-Checkout</span>
        </div>
      </section>

      {/* Business Impact */}
      <section className="testimonial-section">
        <h2>The Impact</h2>
        <p>
          For the first time, teams were able to hear from the users who
          typically disappear without a trace. This revealed blind spots
          in funnel analysis that had previously gone unnoticed.
        </p>
        <p>
          Product, growth, and experience teams aligned around fixes that
          affected the largest audience — not just the subset of users
          who completed a purchase or created an account.
        </p>

        <p className="testimonial-attribution">
          — Head of Growth, Consumer Platform
        </p>
      </section>

      {/* CTA */}
      <section className="testimonial-cta">
        <h3>Hear from the users who usually disappear</h3>
        <p>
          Capture feedback from anonymous visitors at the exact moment
          they decide not to convert.
        </p>
        <a href="/contact" className="cta-button">
          Request a Demo
        </a>
      </section>

    </TestimonialLayout>
  );
}

<section style={{ marginTop: "64px" }}>
  <a href="/testimonials/we-finally-understood-why-customers-didnt-buy">
    ← Previous story
  </a>
</section>
