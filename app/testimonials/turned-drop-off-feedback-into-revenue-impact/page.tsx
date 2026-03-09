import TestimonialLayout from "../../components/testimonials/TestimonialLayout";

export default function TestimonialPage() {
  return (
    <TestimonialLayout
  bannerColor="#ffffff"
  pageBgColor="#6b7280"
  eyebrow="CUSTOMER STORIES"

  // 👇 NEW TEXT COLORS
  eyebrowColor="#6b7280"
  titleColor="#4b5563"
  subtitleColor="#6b7280"

  title={
    <>
      Turned Drop-Off Feedback
      <br />
      Into Revenue Impact
    </>
  }
  subtitle={
    <>
      Bridging behavioral data with real customer reasoning 
      <br />
      to drive smarter optimization.
    </>
  }
>

{/* Business Context */}
<section
  style={{
    width: "100vw",
    marginLeft: "calc(50% - 50vw)",
    marginRight: "calc(50% - 50vw)",
    backgroundColor: "#0E2A47",
    padding: "30px 0",
  }}
>
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 24px",
    }}
  >
    <h2
      style={{
        color: "#ffffff",
        fontSize: "42px",
        fontWeight: 700,
        marginBottom: "14px",
      }}
    >
      Business Context
    </h2>
    <p style={{ color: "#e5e7eb", textAlign: "justify", fontSize: "21px", lineHeight: 1.8 }}>
    A fast-growing digital commerce platform headquartered in South America had built strong acquisition momentum across Brazil, Colombia, and Chile. 
    Traffic volumes were consistent, paid channels were optimized, and analytics dashboards reflected healthy engagement across landing pages and product 
    discovery flows. On the surface, performance appeared stable. Add-to-cart rates were solid, session durations were competitive, and marketing 
    efficiency remained within target thresholds. However, conversion from evaluation to completed purchase had plateaued.
        </p>
        <p style={{ color: "#e5e7eb", textAlign: "justify", fontSize: "21px", lineHeight: 1.8 }}>
  Funnel analytics clearly showed where users were exiting- pricing comparisons, checkout steps, and payment selections. However, the underlying 
  reasons were unclear. Behavioral data highlighted drop-off points, yet it did not explain customer hesitation. Operating in a region characterized
  by price sensitivity, installment-based payment preferences, and strong trust considerations around online transactions, even minor friction points
  could significantly impact revenue outcomes. Internally, optimization efforts became fragmented. Product, Growth, and Pricing teams proposed improvements,
  but prioritization relied heavily on assumptions rather than validated customer reasoning. Leadership recognized that while they could see where revenue 
  leakage was occurring, they lacked clarity on why customers were abandoning high-intent journeys. The organization needed a way to bridge behavioral 
  analytics with real customer insight without disrupting existing systems or slowing execution velocity.
        </p>
       
  </div>
</section>

      {/* The Challenge */}
      <section
    style={{
    width: "100vw",
    marginLeft: "calc(50% - 50vw)",
    marginRight: "calc(50% - 50vw)",
    backgroundColor: "#6b7280",
    padding: "30px 0",
  }}
>
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 24px",
    }}
  >
    <h2
      style={{
        color: "#ffffff",
        fontSize: "42px",
        fontWeight: 700,
        marginBottom: "24px",
      }}
    >
      The Challenge
    </h2>
    <p style={{ color: "#e5e7eb", textAlign: "justify", fontSize: "21px", lineHeight: 1.8 }}>
    Customer drop-offs were visible across the funnel, but prioritization was unclear. Analytics dashboards highlighted exit points at pricing 
    comparisons, shipping selections, installment options, and checkout steps, yet they failed to explain the motivations behind those exits. Teams 
    could see where users were leaving, but not why. Multiple departments proposed improvements simultaneously. Pricing suggested promotional adjustments. 
    UX teams recommended interface simplifications. Marketing pushed messaging refinements. Checkout owners focused on reducing form friction. However, 
    without shared insight into actual customer objections, alignment proved difficult. As a result, optimization efforts became fragmented. Roadmaps 
    filled with experiments that were directionally reasonable but lacked validated impact assumptions. Some changes improved micro-metrics without 
    influencing completed purchases. Others consumed engineering bandwidth without measurable revenue return.
        </p>
        <p style={{ color: "#e5e7eb", textAlign: "justify", fontSize: "21px", lineHeight: 1.8 }}>
    Debates increasingly replaced data backed decision making. Revenue leakage was acknowledged in leadership discussions, but it was neither precisely
    quantified nor attributed to specific customer concerns. High intent traffic was being acquired efficiently, yet conversion efficiency remained 
    inconsistent. The organization did not need more experimentation, instead it needed clarity. It needed to understand which friction points were materially 
    affecting revenue, which objections were most frequently expressed, and which barriers represented the highest opportunity cost.
        </p>
        <p style={{ color: "#e5e7eb", textAlign: "justify", fontSize: "21px", lineHeight: 1.8 }}>
        Without that clarity, optimization remained reactive rather than strategic.
        </p>
        </div>
      </section>

      {/* Introducing Actionable Feedback Loops */}
      <section
  style={{
    width: "100vw",
    marginLeft: "calc(50% - 50vw)",
    marginRight: "calc(50% - 50vw)",
    backgroundColor: "#0E2A47",
    padding: "30px 0",
  }}
>
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 24px",
    }}
  >
    <h2
      style={{
        color: "#ffffff",
        fontSize: "42px",
        fontWeight: 700,
        marginBottom: "24px",
      }}
    >
      Introducing Actionable Feedback Loops
    </h2>
      <p style={{ color: "#e5e7eb",textAlign: "justify",fontSize: "21px" }}>
      Structured drop-off feedback was introduced directly at high-intent decision points across the customer journey. Instead of relying solely on 
      behavioral analytics, users were prompted to share the reason behind hesitation at moments of abandonment- pricing pages, shipping selections, 
      payment steps, and form submissions. The goal was not to replace analytics, but to complement it. Funnel data already revealed where users exited. 
      This new layer captured the reasoning behind those exits in real time. Feedback responses were automatically grouped into structured categories such
      as pricing confusion, trust concerns, hidden fees, installment limitations, missing product information, checkout friction, internal approval delays,
      and technical usability barriers. Each category could be measured, tracked, and compared over time.
        </p>
        <p style={{ color: "#e5e7eb",textAlign: "justify",fontSize: "21px" }}>
      Within the first month, thousands of structured responses were collected, revealing patterns invisible in traditional funnel reports. Certain 
      objections appeared disproportionately among high-intent users. Others were concentrated within specific traffic segments or device types. For the
      first time, qualitative signals were quantified. Friction was no longer anecdotal- it was categorized, ranked, and tied to specific revenue impacting
     stages of the journey. This transformed feedback from passive commentary into an actionable prioritization engine.
          </p>
      
  </div>
</section>

      {/* The Difference */}
      <section
  style={{
    width: "100vw",
    marginLeft: "calc(50% - 50vw)",
    marginRight: "calc(50% - 50vw)",
    backgroundColor: "#6b7280",
    padding: "30px 0",
  }}
>
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 24px",
    }}
  >
    <h2
      style={{
        color: "#ffffff",
        fontSize: "42px",
        fontWeight: 700,
        marginBottom: "24px",
      }}
    >
      The Difference
    </h2>

        <p style={{ color: "#e5e7eb",fontSize: "21px",textAlign: "justify" }}>
        Drop-off feedback was mapped directly to specific decision points in the customer journey- pricing comparisons, shipping selection, payment 
        confirmation, and final checkout review. Instead of treating abandonment as a generic metric, each exit became traceable to a documented 
        customer reported reason. Every abandonment reason could be grouped, counted, segmented by traffic source and device type, and evaluated based on 
        its potential revenue impact. High-frequency objections were distinguished from high-value objections. This allowed the organization to 
        differentiate between noise and meaningful friction.
        </p>
        <p style={{ color: "#e5e7eb",textAlign: "justify",fontSize: "21px" }}>
        Instead of asking "What should we improve next?", teams began asking which customer-reported blocker is affecting the largest share of revenue?
        Optimization shifted from assumption-based experimentation to evidence-based prioritization. Cross-functional discussions became shorter, clearer,
        and more commercially grounded. Product, Growth, Pricing, and CX teams aligned around a shared dataset, one that connected behavioral drop offs 
        with real customer reasoning.
          </p>
          <p style={{ color: "#e5e7eb",textAlign: "justify",fontSize: "21px" }}>
          The result was not more experiments, it was smarter ones.
          </p>

</div>
</section>

{/* What Changed */}
<section
  style={{
    width: "100vw",
    marginLeft: "calc(50% - 50vw)",
    marginRight: "calc(50% - 50vw)",
    backgroundColor: "#6b7280",
    padding: "30px 0",
  }}
>
  {/* Shared container */}
  <div
    style={{
      maxWidth: "1200px",  
      margin: "0 auto",
      padding: "0 24px",
    }}
  >
    <h2
      style={{
        color: "#ffffff",
        fontSize: "42px",
        fontWeight: 700,
        marginBottom: "32px",
      }}
    >
      What Changed
    </h2>

    <div
      style={{
        backgroundColor: "#0E2A47",
        borderRadius: "18px",
        padding: "36px",
        marginBottom: "32px",
        color: "#FFFFFF",
      }}
    >
      <p
        style={{
          marginBottom: "16px",
          lineHeight: 1.7,
          textAlign: "justify",
          fontSize: "21px",
        }}
      >
        “Drop off reasons were ranked not only by frequency, but by associated revenue severity and customer segment impact. This allowed us to 
        distinguish between minor UX friction and high-value commercial blockers. Instead of reacting to the loudest issue, we focused on the issues 
        costing the most revenue. Prioritization became disciplined, measurable, and directly tied to financial outcomes.”
      </p>
      <span style={{ fontWeight: 600, color: "#ffffff",fontSize: "21px" }}>
        Product & Growth Teams
      </span>
    </div>

    <div
      style={{
        backgroundColor: "#0E2A47",
        borderRadius: "18px",
        padding: "36px",
        marginBottom: "32px",
        color: "#ffffff",
      }}
    >
      <p
        style={{
          marginBottom: "16px",
          lineHeight: 1.7,
          textAlign: "justify",
          fontSize: "21px",
        }}
      >
        “Product, pricing, and CX teams aligned around shared priorities rooted in real customer-reported friction. Roadmaps were consolidated, duplicated
        experiments were eliminated, and conflicting initiatives were replaced with coordinated execution. Decision-making accelerated because alignment 
        was built on evidence, not opinion.”
      </p>
      <span style={{ fontWeight: 600, color: "#ffffff",fontSize: "21px" }}>
        Cross- functional Leadership
      </span>
    </div>

    <div
      style={{
        backgroundColor: "#0E2A47",
        borderRadius: "18px",
        padding: "36px",
        color: "#ffffff",
      }}
    >
      <p
        style={{
          marginBottom: "16px",
          lineHeight: 1.7,
          textAlign: "justify",
          fontSize: "21px",
        }}
      >
      “Targeted fixes replaced broad, unfocused experimentation. Each change was directly tied to documented customer friction and validated against 
      revenue impact. Instead of running parallel A/B tests driven by assumption, the roadmap was rebuilt around high frequency, high-severity blockers.
      This reduced noise in experimentation, improved release confidence, and ensured that every sprint delivered measurable commercial progress.”
      </p>
      <span style={{ fontWeight: 600, color: "#ffffff",fontSize: "21px" }}>
        Optimization Roadmap
      </span>
    </div>
  </div>
</section>

      {/* Strategic Adjustments */}
      <section
  style={{
    width: "100vw",
    marginLeft: "calc(50% - 50vw)",
    marginRight: "calc(50% - 50vw)",
    backgroundColor: "#6b7280",
    padding: "30px 0",
  }}
>
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 24px",
    }}
  >
    <h2
      style={{
        color: "#ffffff",
        fontSize: "42px",
        fontWeight: 700,
        marginBottom: "24px",
      }}
    >
      Strategic Adjustments
    </h2>
        <p style={{ color: "#e5e7eb",textAlign: "justify",fontSize: "21px" }}>
        Compliance messaging was elevated specifically for enterprise buyers who required stronger trust and governance signals before committing. 
        Pricing descriptions were clarified to remove ambiguity around feature tiers, contract terms, and total cost implications. Checkout validation 
        errors were simplified, reducing frustration during high-intent purchase moments. Mobile responsiveness gaps were addressed to ensure parity between
        desktop and mobile conversion experiences.
        </p>
        <p style={{ color: "#e5e7eb",textAlign: "justify",fontSize: "21px" }}>
        Rather than launching sweeping redesigns, the team implemented surgical, high-impact adjustments mapped to documented hesitation themes. Each 
        refinement was prioritized based on revenue exposure and customer frequency. As a result, iteration cycles shortened, stakeholder debates decreased,
        and optimization efforts became visibly tied to financial performance rather than subjective preference.
          </p>
        </div>
         </section>

      {/* Business Impact */}
      <section
  style={{
    width: "100vw",
    marginLeft: "calc(50% - 50vw)",
    marginRight: "calc(50% - 50vw)",
    backgroundColor: "#0E2A47",
    padding: "30px 0",
  }}
>
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 24px",
    }}
  >
    <h2
      style={{
        color: "#ffffff",
        fontSize: "42px",
        fontWeight: 700,
        marginBottom: "24px",
      }}
    >
      The Impact
    </h2>
        <p style={{ color: "#FFFFFF",textAlign: "justify",fontSize: "21px" }}>
        Within 60 days, measurable improvements were observed across conversion and revenue metrics. Checkout completion rates increased by 18%, driven by
        clearer pricing communication and reduced validation friction. Mobile abandonment declined by 14% after usability bottlenecks were addressed at 
        high-intent steps.
        </p>
        <p style={{ color: "#FFFFFF",textAlign: "justify",fontSize: "21px" }}>
        More importantly, optimization efficiency improved. Experiment cycles became shorter, with higher win rates because initiatives were tied to 
        documented customer reasoning rather than assumptions. Cross-functional alignment reduced duplicated efforts, accelerating time-to-impact across 
        product and growth teams. Revenue forecasting also became more predictable. Instead of reacting to unexplained drop-offs, leadership could quantify
        which friction points represented the highest commercial risk. This shifted the organization from reactive optimization to structured, 
        revenue informed prioritization.
        </p>
        <p style={{ color: "#FFFFFF",textAlign: "justify",fontSize: "21px" }}>
        Beyond the metrics, decision culture evolved. Customer-reported hesitation became a standing input in roadmap planning discussions. Optimization 
        moved from debate driven to evidence led, and revenue outcomes reflected that discipline.
        </p>
       </div>
       </section>
    </TestimonialLayout>
  );
}