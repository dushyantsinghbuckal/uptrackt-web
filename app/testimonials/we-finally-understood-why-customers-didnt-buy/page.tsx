import TestimonialLayout from "../../components/testimonials/TestimonialLayout";

export default function TestimonialPage() {
  return (
    <TestimonialLayout
  bannerColor="#000000"
  pageBgColor="#ffffff"
  eyebrow="CUSTOMER STORIES"
  title={
    <>
      We Finally Understood
      <br />
      Why Customers Didn’t Buy
    </>
  }
  subtitle={
    <>
      Analytics showed where customers dropped off.
      <br />
      Uptrackt revealed why.
    </>
  }
>

      {/* ======================================================
         UNIFIED DARK SECTION
         Business Context → Challenge → Insight → Impact
      ====================================================== */}
      <section
        style={{
          backgroundColor: "#0E2A47",
          padding: "64px 40px",     
          borderRadius: "20px",
          marginTop: "32px",        
          marginBottom: "52px",
        }}
      >
        {/* ================= BUSINESS CONTEXT ================= */}
        <div
  style={{
    maxWidth: "1000px",
    margin: "0 auto 76px auto",   
  }}
           >     
          <h2
            style={{
              fontSize: "48px",
              fontWeight: 800,
              marginBottom: "22px",
              color: "#ffffff",
            }}
          >
            Business Context
          </h2>

          <p style={{ fontSize: "22px", lineHeight: "1.9", color: "#e5e7eb", marginBottom: "24px", textAlign: "justify" }}>
          A leading retail player dominating the direct-to-consumer market was facing a quiet but dangerous paradox. 
          On the surface, everything looked strong- brand recall was high, website traffic was steadily increasing, 
          and customers were spending more time than ever browsing product pages. But revenue wasn’t reflecting that momentum.
          Despite heavy investments in paid acquisition, UI optimization, performance marketing, and advanced analytics dashboards, 
          conversion rates at checkout had plateaued. Quarter after quarter, traffic climbed, yet sales growth lagged behind. 
          Cart abandonment rates were rising, and the gap between “interest” and “intent to purchase” kept widening.
          </p>

          <p style={{ fontSize: "22px", lineHeight: "1.9", color: "#e5e7eb", marginBottom: "24px", textAlign: "justify" }}>
          Marketing was driving demand. Product was improving experience. Analytics was tracking every click. Yet customers were still walking away.
          This wasn’t a visibility problem. The funnel drop-offs were measurable. The data clearly showed where users exited.
          But that wasn’t the real issue anymore. Leadership wasn’t asking, “Where are users dropping off?”
          They were asking something far more uncomfortable: Why are customers deciding not to buy even when everything appears to be working?
          What made this challenge more complex was that there was no obvious technical failure. 
          The checkout worked. The pricing was competitive. The UX followed industry best practices. Nothing was “broken.”
          And that’s what made it dangerous. Because when nothing is broken, but growth stalls, the root cause is often behavioral, 
          emotional, or psychological. Customers were engaging, comparing, evaluating, and then hesitating.
          </p>

          <p style={{ fontSize: "22px", lineHeight: "1.9", color: "#e5e7eb", textAlign: "justify" }}>
          The organization had reached a point where optimizing buttons and reducing load time would no longer move 
          the needle. Leadership needed clarity, not more dashboards. They needed to understand the human behind the click. 
          The central question became:
            <strong> What invisible forces are shaping purchase hesitation, and how do we systematically uncover and eliminate them?</strong>
          </p>
        </div>

        {/* ================= CHALLENGE + INSIGHT ================= */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "90px",
            marginBottom: "36px",
          }}
        >

          {/* The Challenge */}
          <div>
            <h2
              style={{
                fontSize: "46px",
                fontWeight: 800,
                marginBottom: "28px",
                color: "#ffffff",
              }}
            >
              The Challenge
            </h2>

            <p style={{ fontSize: "22px", lineHeight: "1.9", color: "#e5e7eb", marginBottom: "22px", textAlign: "justify" }}>
            Traditional analytics tools were doing their job, at least on paper. Session recordings showed hesitation before checkout.
            Funnels revealed precise drop-off points. Heatmaps highlighted ignored buttons.
            Event tracking mapped every click, scroll, and pause. The dashboards were full.
            But clarity was not. Because while these tools revealed what customers were doing, they remained silent on the more important question:
            Why were they doing it? The organization found itself surrounded by data, yet starving for understanding.
            </p>

            <p style={{ fontSize: "22px", lineHeight: "1.9", color: "#e5e7eb", marginBottom: "22px", textAlign: "justify" }}>
            Marketing believed pricing transparency was the issue. Operations suspected delivery delays were eroding trust.
            Finance pointed to payment method limitations. Product teams argued UX complexity was causing cognitive overload.
            Customer support flagged hidden checkout friction and trust barriers. Each department had data to 
            support its perspective. And each team defended its assumptions with conviction.
            Instead of clarity driving execution, opinions began driving prioritization.
            Roadmaps shifted based on the loudest voice in the room rather than validated 
            customer insight. Fixes were implemented in isolation, optimizing parts of the journey without addressing the underlying hesitation.
            </p>

            <p style={{ fontSize: "22px", lineHeight: "1.9", color: "#e5e7eb",textAlign: "justify" }}>
            The result? Reactive decision-making. Teams responded to symptoms instead of diagnosing root causes.
            The business wasn’t lacking intelligence. It was lacking a unified, customer-level understanding of decision psychology. 
            Leadership realized something critical: They needed interpretive intelligence and decode hesitation at scale.
            Because until the “why” was uncovered, every solution would remain an educated guess. And educated guesses don’t scale revenue.
            </p>
          </div>

          {/* The Insight */}
          <div>
            <h2
              style={{
                fontSize: "46px",
                fontWeight: 800,
                marginBottom: "21px",
                color: "#ffffff",
              }}
            >
              The Insight
            </h2>

            <p style={{ fontSize: "22px", lineHeight: "1.9", color: "#e5e7eb", marginBottom: "22px", textAlign: "justify" }}>
            Uptrack enabled in-the-moment feedback capture precisely at the point of abandonment before users exited the purchase journey.
             Within the first 30 days, 18,742 abandonment-triggered feedback responses were captured, 64% of responses came from anonymous users,
             71% of respondents had never previously interacted with support, 43% were first-time visitors.
             For the first time, the “silent majority” was no longer silent.
            </p>

            <p style={{ fontSize: "22px", lineHeight: "1.9", color: "#e5e7eb", marginBottom: "22px", textAlign: "justify" }}>
            Feedback was captured from users who never logged in or submitted contact details, unlocking insight from the most commercially 
            valuable yet least visible audience segment. Within weeks, repeatable decision-level patterns emerged:
            38% cited unexpected additional costs at checkout, 27% reported unclear delivery timelines, 19% abandoned due to unavailable 
            preferred payment methods, 11% expressed trust-related hesitation (return policy, warranty clarity),
            5% indicated general indecision. More importantly, behavioral signals aligned with feedback: Users who saw shipping fees only at 
            checkout were 2.4x more likely to abandon, visitors from paid ads showed 31% higher sensitivity to delivery delays, cart value above ₹6,000 
            saw a 17% spike in trust-related hesitation, behavioral data transformed into strategic clarity.
            </p>

            <p style={{ fontSize: "22px", lineHeight: "1.9", color: "#e5e7eb", textAlign: "justify" }}>
            Instead of debating hypotheses, leadership now had quantified customer reasoning at scale. Optimization shifted from interface 
            tweaks to structural fixes. The conversation changed from: “Which team is right?” to “What does the customer need to say yes?”
            </p>
          </div>
        </div>

        {/* ======================================================
         WHAT CUSTOMERS ACTUALLY SAID
      ====================================================== */}
      <section
        style={{
          backgroundColor: "#000000",
          padding: "12px 84px",
          borderRadius: "24px",
          marginBottom: "46px",
          maxWidth: "1300px",
        }}
      >
        <h2
          style={{
            fontSize: "48px",
            fontWeight: 800,
            marginBottom: "40px",
            color: "#ffffff",
          }}
        >
          What Customers Actually Said
        </h2>

        {/* Quote 1 */}
        <div style={{ backgroundColor: "#0E2A47", padding: "32px", borderRadius: "16px", marginBottom: "24px" }}>
          <p style={{ fontSize: "24px", lineHeight: "1.7", color: "#ffffff", marginBottom: "14px" }}>
            “The delivery date kept shifting further out once I reached checkout.
            I had already compared options and selected this product,
            but the uncertainty made me reconsider and postpone the purchase.”
          </p>
          <span style={{ fontSize: "19px", color: "#ffffff" }}>
            Operations Manager · D2C Retail
          </span>
        </div>

        {/* Quote 2 */}
        <div style={{ backgroundColor: "#ffffff", padding: "32px", borderRadius: "16px", marginBottom: "24px" }}>
          <p style={{ fontSize: "24px", lineHeight: "1.7", color: "#000000", marginBottom: "14px" }}>
            “The total price changed at the final step.
            It felt like something was hidden earlier in the process,
            and that immediately reduced my trust in the platform.”
          </p>
          <span style={{ fontSize: "19px", color: "#000000" }}>
            Repeat Buyer · Online Marketplace
          </span>
        </div>

        {/* Quote 3 */}
        <div style={{ backgroundColor: "#0E2A47", padding: "32px", borderRadius: "16px", marginBottom: "24px" }}>
          <p style={{ fontSize: "24px", lineHeight: "1.7", color: "#FFFFFF", marginBottom: "14px" }}>
            “I prefer paying via a specific method.
            When it wasn’t available at checkout,
            I didn’t feel comfortable switching to another option.”
          </p>
          <span style={{ fontSize: "19px", color: "#FFFFFF" }}>
            First-time Buyer
          </span>
        </div>

        {/* Quote 4 */}
        <div style={{ backgroundColor: "#FFFFFF", padding: "32px", borderRadius: "16px" }}>
          <p style={{ fontSize: "24px", lineHeight: "1.7", color: "#000000", marginBottom: "14px" }}>
            “Everything looked good until the last screen.
            But when I saw unexpected charges and longer delivery timelines,
            I decided to abandon and explore alternatives.”
          </p>
          <span style={{ fontSize: "19px", color: "#000000" }}>
            Price-sensitive Shopper
          </span>
        </div>
      </section>

         {/* ================= IMPACT ================= */}
         <div style={{ maxWidth: "1000px", margin: "0 auto", }}>
          <h2
            style={{
              fontSize: "46px",
              fontWeight: 800,
              marginBottom: "28px",
              color: "#ffffff",
            }}
          >
            The Impact
          </h2>

          <p style={{ fontSize: "22px", lineHeight: "1.9", color: "#e5e7eb", marginBottom: "24px", textAlign: "justify" }}>
          With verified customer reasons behind abandonment, prioritization shifted from assumption-driven debates to evidence-backed execution.
          Within 90 days of implementation, checkout conversion rate increased from 2.8% to 3.6% (+28% uplift), cart abandonment reduced by 19%, 
          revenue per visitor improved by 22%, average order value increased by 8%. The impact wasn’t driven by a major redesign,
          but by targeted structural fixes.
          </p>

          <p style={{ fontSize: "22px", lineHeight: "1.9", color: "#e5e7eb", marginBottom: "24px", textAlign: "justify" }}>
          Pricing communication was restructured, making shipping costs visible earlier in the journey.
          Delivery timelines were displayed before checkout rather than after address entry.
          Two high-demand payment options were added, reducing payment-stage exits by 31%.
          Small but high-impact changes were deployed rapidly, because decisions were no longer speculative.
          </p>

          <p style={{ fontSize: "22px", lineHeight: "1.9", color: "#e5e7eb", marginBottom: "32px", textAlign: "justify" }}>
          Operational impact was equally significant. Roadmap prioritization cycles shortened by 35 %, cross-functional alignment scores 
          improved in internal surveys, experiment velocity increased from 3 tests per month to 9+, executive review meetings shifted from 
          debate-heavy to action-oriented. Most importantly, customer trust indicators improved. Return visitor purchase rate increased by 17%,
          Customer support tickets related to pricing confusion dropped by 24%, post-purchase satisfaction scores improved within two quarters.
          The organization reduced internal debate cycles, accelerated roadmap execution, and aligned cross-functional teams around real 
          customer blockers- not internal assumptions. What changed wasn’t just performance metrics, it was decision confidence as well.
          </p>
        </div>
      </section>
      </TestimonialLayout>
  );
}
