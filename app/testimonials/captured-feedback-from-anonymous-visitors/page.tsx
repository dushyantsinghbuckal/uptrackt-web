import TestimonialLayout from "../../components/testimonials/TestimonialLayout";

export default function TestimonialPage() {
  return (
    <TestimonialLayout
    bannerColor="#0E2A47"
    pageBgColor="#ffffff"
    eyebrow="CUSTOMER STORIES"
    title={
      <>
        Captured Feedback from
        <br />
        Anonymous Visitors
      </>
    }
    subtitle={
      <>
        Without forcing sign-ups or logins, the company gained
        <br />
        quality insights from users who would otherwise remain invisible.
      </>
    }
  > 

      {/* COMPANY BACKGROUND */}
      <section style={{ marginTop: "80px", marginBottom: "36px" }}>
        <h2 style={{ fontSize: "42px", fontWeight: 400, marginBottom: "18px", color: "#0E2A47" }}>
          Company Background
        </h2>

        <p style={{ textAlign: "justify", lineHeight: 1.9, fontSize: "18px", marginBottom: "18px" }}>
  A fast-growing B2B SaaS company operating in the workflow automation and operational efficiency space had built impressive 
  top-of-funnel momentum. Over a 3year period, the company scaled from early-stage traction to a structured mid-market player serving clients 
  across India, Southeast Asia, and the UK. By the time this case unfolded, the company was attracting more than 180,000 monthly website visitors.
  Paid acquisition, SEO, partner referrals, and content marketing were all contributing to a steady and predictable traffic pipeline.
  Monthly marketing investments had crossed ₹45 lakhs, supported by a full in-house growth team and external performance agencies.
      </p>

      <p style={{ textAlign: "justify", lineHeight: 1.9, fontSize: "18px" }}>
  From a surface-level analytics perspective, engagement signals were healthy. 
  Average session duration was 3 minutes 42 seconds. Nearly 38% of visitors reached the pricing page. Over 26% interacted with feature comparison sections. 
  Approximately 31% of users returned at least once within a 14 day period. Visitors were not bouncing immediately. They were evaluating. 
  The product addressed clear operational pain points- manual approvals, inefficient task routing, spreadsheet dependency, and cross-team 
  communication breakdowns. Demand existed. Interest was measurable. Yet, the most important metric remained stagnant.
      </p>
      </section>

      {/* CORE PROBLEM */}
      <section style={{ marginBottom: "36px" }}>
        <h2 style={{ fontSize: "42px", fontWeight: 400, marginBottom: "18px", color: "#0E2A47"}}>
          Core Problem
        </h2>

        <p style={{ textAlign: "justify", lineHeight: 1.9, fontSize: "18px", marginBottom: "18px" }}>
        Despite strong traffic and engagement, the visitor-to-signup conversion rate was locked at 1.8%, significantly below the 3–4% benchmark 
        observed among comparable B2B SaaS platforms targeting mid-market buyers. More than 74% of visitors exited without signing up, requesting 
        a demo, or initiating a trial. Internal dashboards showed drop-offs clustering around pricing pages and comparison sections. Heatmaps 
        suggested hesitation. Funnel reports showed repeated evaluation behavior before exit. However, the company lacked a fundamental layer of insight.
        Feedback systems were built entirely around existing customers. Post-onboarding surveys captured early satisfaction. Quarterly NPS campaigns 
        measured advocacy among active users. Customer success managers gathered qualitative feedback during account reviews.
        </p>

        <p style={{ textAlign: "justify", lineHeight: 1.9, fontSize: "18px" }}>
        The company had extensive visibility into why customers stayed. It had zero visibility into why prospects left. Strategic decisions were
         therefore based on assumption clusters. Some teams believed pricing was too complex. Others suspected messaging lacked clarity. A few argued 
         that additional features would increase conversion. Several A/B tests were run on headline variations, CTA placements, and page design 
         structures. Small improvements were observed, but the core conversion ceiling persisted. The organization was optimizing what it could see,
         while the largest opportunity remained hidden.
        </p>
      </section>

      {/* TURNING POINT */}
      <section style={{ marginBottom: "36px" }}>
        <h2 style={{ fontSize: "42px", fontWeight: 400, marginBottom: "18px", color: "#0E2A47" }}>
          Turning Point
        </h2>

        <p style={{ textAlign: "justify", lineHeight: 1.9, fontSize: "18px" }}>
        The inflection moment came during a quarterly growth review meeting. One observation reframed the discussion entirely: “If nearly three out 
        of four visitors leave without converting, why are we only listening to the one who stays?” The realization was uncomfortable but undeniable.
        The company had built systems to measure satisfaction, but not friction. They understood the motivations of committed buyers, but not the 
        objections of undecided ones. Growth, they realized, was not sitting inside positive feedback. It was sitting inside hesitation.
        And hesitation was invisible.
        </p>
      </section>

      {/* PROPOSAL */}
      <section style={{ marginBottom: "36px" }}>
        <h2 style={{ fontSize: "42px", fontWeight: 400, marginBottom: "18px", color: "#0E2A47"}}>
          Proposal
        </h2>

        <p style={{ textAlign: "justify", lineHeight: 1.9, fontSize: "18px", marginBottom: "18px" }}>
        Instead of increasing traffic spend or redesigning the homepage yet again, the team decided to introduce friction-aware intelligence. They 
        implemented contextual, moment-based feedback prompts triggered during high-intent or high-hesitation scenarios. Triggers included:
        When a visitor spent more than 45 seconds on the pricing page. When a returning user visited three times within 14 days without converting.
        When cursor movement suggested exit intent. When users scrolled beyond 75% of feature comparison content. The prompt was deliberately minimal.
        No login required. No email capture forced. No multi-field forms.
        </p>

        <p style={{ textAlign: "justify", lineHeight: 1.9, fontSize: "18px"}}>
        Visitors were asked a single, open-ended question at their moment of pause: “What’s stopping you from starting today?”
        “Is anything unclear about this page?” “What would make this decision easier?”
         The goal was not to extract data. It was to remove friction from giving feedback. Within the first 30 days, 2,300+ anonymous 
         responses were captured. Over 90 days, that number exceeded 7,800 responses. For the first time, the company could hear the silent majority.
        </p>
      </section>

      {/* WHAT THE DATA REVEALED */}
      <section style={{ marginBottom: "36px" }}>
        <h2 style={{ fontSize: "42px", fontWeight: 400, marginBottom: "18px", color: "#0E2A47" }}>
          What the Data Revealed
        </h2>

        <p style={{ textAlign: "justify", lineHeight: 1.9, fontSize: "18px", marginBottom: "18px" }}>
        The qualitative data was structured, categorized, and analyzed across recurring themes. 31% of respondents expressed confusion around 
        pricing tiers and feature boundaries. 24% perceived the solution as enterprise-focused and assumed it would be too complex for mid-sized teams.
        19% were unclear about how the product differentiated from competitors offering similar automation tools. 14% required clearer ROI justification 
        before committing budget. 8% indicated internal approval barriers or procurement delays. Beyond percentages, the language patterns were revealing.
        Internal messaging emphasized “workflow digitization,” “operational orchestration,” and “cross-functional alignment.” Visitors consistently used 
        phrases such as: “We want to reduce manual approvals.” “We are tired of tracking everything in Excel.” “We need something simple for a 20-person team.”
        </p>

        <p style={{ textAlign: "justify", lineHeight: 1.9, fontSize: "18px" }}>
        The company realized it was speaking at a strategic level while visitors were thinking at a practical level.
        Positioning and perception were misaligned.
        This insight would never have emerged from NPS surveys sent to satisfied customers.
        </p>
      </section>

      {/* STRATEGIC ADJUSTMENTS */}
      <section style={{ marginBottom: "36px" }}>
        <h2 style={{ fontSize: "42px", fontWeight: 400, marginBottom: "18px", color: "#0E2A47" }}>
          Strategic Adjustments
        </h2>

        <p style={{ textAlign: "justify", lineHeight: 1.9, fontSize: "18px", marginBottom: "18px" }}>
        Armed with structured friction data, the company avoided a complete redesign. Instead, it pursued targeted correction. Pricing was simplified 
        from four tiers to three clearly defined packages. Feature overlap confusion was removed. A dynamic ROI calculator was introduced to quantify 
        time and cost savings. Messaging across landing pages was rewritten using direct phrases from visitor responses.
        A “Built for Mid-Sized Teams” section was added prominently above the fold. Competitor comparison tables were introduced with transparent 
        differentiation points. Importantly, changes were not rushed. Adjustments were implemented incrementally over six weeks, with conversion 
        tracking tied to each modification. Instead of design experimentation, the company now ran objection-resolution experiments.
        </p>
      </section>

      {/* IMPACT */}
      <section style={{ marginBottom: "36px" }}>
        <h2 style={{ fontSize: "42px", fontWeight: 400, marginBottom: "18px", color: "#0E2A47" }}>
          Impact
        </h2>

        <p style={{ textAlign: "justify", lineHeight: 1.9, fontSize: "18px", marginBottom: "18px" }}>
        Within 90 days of implementing friction-based insights: Visitor-to-signup conversion increased from 1.8% to 2.9%, representing a 61% relative 
        improvement. Bounce rates on pricing pages decreased by 22%. Demo requests increased by 37%. Average time on pricing pages increased by 18%.
        Customer acquisition cost dropped by 18% due to improved conversion efficiency. Revenue impact was measurable within the following quarter.
        Beyond metrics, internal culture shifted. Growth meetings transitioned from opinion-based debates to evidence-driven discussions. Marketing, 
        product, and sales teams aligned around real visitor language rather than internal assumptions. Decision-making became grounded in observed 
        friction rather than theoretical optimization.
        </p>
        </section>

      {/* DEEPER INSIGHT */}
      <section style={{ marginBottom: "36px" }}>
        <h2 style={{ fontSize: "42px", fontWeight: 400, marginBottom: "18px", color: "#0E2A47" }}>
          Deeper Insight
        </h2>

        <p style={{ textAlign: "justify", lineHeight: 1.9, fontSize: "18px" }}>
        The company discovered a structural truth. Anonymous visitors provide the most honest feedback because they have no relationship bias, 
        no sunk cost, and no social obligation. They do not respond to surveys out of loyalty. They respond out of hesitation.
        Traditional feedback mechanisms measure satisfaction after commitment. Moment-based feedback measures friction before commitment.
        And friction, not satisfaction, determines growth velocity.
        </p>
      </section>

      {/* CONCLUSION */}
      <section style={{ marginBottom: "36px" }}>
        <h2 style={{ fontSize: "42px", fontWeight: 400, marginBottom: "18px", color: "#0E2A47" }}>
          Conclusion
        </h2>

        <p style={{ textAlign: "justify", lineHeight: 1.9, fontSize: "18px" }}>
        The breakthrough did not come from increasing traffic spend or launching a major product update. It came from listening at the precise moment 
        of uncertainty. By removing login barriers and capturing feedback in real time, the company transformed anonymous drop-offs into strategic clarity.
        Conversion improved not because the product changed dramatically- but because understanding changed fundamentally. The silent majority stopped 
        being silent. And growth followed.
        </p>
      </section>

    </TestimonialLayout>
  );
}
