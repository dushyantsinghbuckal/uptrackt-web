import TestimonialLayout from "../../components/testimonials/TestimonialLayout";

export default function TestimonialPage() {
  return (
    <TestimonialLayout
  bannerColor="#000000"
  pageBgColor="#0E2A47"
  eyebrow="CUSTOMER STORIES"

  // 👇 NEW TEXT COLORS
  eyebrowColor="#FFFFFF"
  titleColor="#FFFFFF"
  subtitleColor="#FFFFFF"

  title={
    <>
      Plugged Cleanly Into
      <br />
      Our Existing Stack
    </>
  }
  subtitle={
    <>
      Integrated without disrupting analytics, performance,
      <br />
      or live customer journeys.
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
          A rapidly growing fintech company headquartered in the Middle East
          was managing over 2.4 million monthly user sessions across web and
          mobile platforms. Their technology stack was modern and mature-
          built on a React frontend, Node-based backend, Google Analytics 4,
          Mixpanel behavioral tracking, server-side event pipelines, and
          executive BI dashboards powering regional reporting.
        </p>
        <p style={{ color: "#e5e7eb", textAlign: "justify", fontSize: "21px", lineHeight: 1.8 }}>
          From an analytics perspective, nothing was missing. The organization
          had invested heavily in funnel tracking, attribution modeling,
          experimentation frameworks, and customer journey analytics.
          However, despite strong quantitative visibility, a persistent blind
          spot remained: the data showed what users were doing- but not why
          they were hesitating at critical decision points.
        </p>
        <p style={{ color: "#e5e7eb", textAlign: "justify", fontSize: "21px", lineHeight: 1.8 }}>
          Leadership was firm on one condition: any new solution must integrate
          cleanly into the existing infrastructure without disrupting performance,
          reporting integrity, compliance requirements, or live customer journeys.
          Engineering bandwidth was limited, and there was no appetite for
          architectural overhaul.
          </p>

  </div>
</section>


      {/* The Challenge */}
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
      The Challenge
    </h2>
    <p style={{ color: "#e5e7eb", textAlign: "justify", fontSize: "21px", lineHeight: 1.8 }}>
    Introducing new tools in a regulated fintech environment carries risk.
  Every additional script can affect page performance, data consistency, or compliance workflows. Previous integrations had created tool sprawl,
  overlapping event tracking, and reporting inconsistencies. Product and engineering teams were cautious. They needed qualitative
  insight, but not at the cost of slowing down releases, modifying existing schemas, or introducing dependency on backend deployment.
  Any solution that required architectural restructuring, event remapping, or data warehouse changes would immediately face resistance.
        </p>
        <p style={{ color: "#e5e7eb", textAlign: "justify", fontSize: "21px", lineHeight: 1.8 }}>
        Beyond technical constraints, regulatory sensitivity amplified the
  complexity. Audit trails, consent tracking, and regional compliance requirements demanded strict data discipline. A single misconfigured
  event or duplicated data stream could distort executive reporting or trigger internal governance reviews. Trust in the analytics layer
  could not be compromised. Performance benchmarks were equally non-negotiable. The organization
  had invested heavily in optimizing Core Web Vitals across web and mobile. Any measurable degradation in load speed or rendering stability would
  directly impact acquisition costs and conversion rates. The margin for experimentation was narrow.
        </p>
        <p style={{ color: "#e5e7eb", textAlign: "justify", fontSize: "21px", lineHeight: 1.8 }}>
        In short, the challenge was not simply adding another tool. It was
        introducing a new qualitative intelligence layer into a mature, tightly governed analytics ecosystem without increasing operational complexity,
        technical debt, or performance risk.
        </p>
        </div>
      </section>

      {/* Evaluation & Implementation */}
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
      Evaluation & Implementation
    </h2>
      <p style={{ color: "#e5e7eb",textAlign: "justify",fontSize: "21px" }}>
      The company conducted a controlled technical assessment before rollout. Performance impact, script weight, event collision risk, and Core Web
  Vitals were closely monitored. Initial tests showed that the solution loaded asynchronously, added minimal page weight, and operated
  independently of existing analytics events. A sandbox deployment was first executed across a limited set of high-traffic
  pages. Engineering teams monitored network calls, event sequencing, and memory consumption under peak load conditions. No duplicate events were
  triggered, no conflicts with existing GA4 or Mixpanel schemas were detected, and reporting outputs remained consistent with historical baselines.
        </p>
        <p style={{ color: "#e5e7eb",textAlign: "justify",fontSize: "21px" }}>
        Special attention was given to regulatory and governance considerations. Data flows were audited to ensure no sensitive information was captured
  outside predefined compliance boundaries. Consent frameworks and regional privacy requirements were preserved without modification. Deployment required 
  only a single script insertion via tag manager. No backend changes were necessary. No tracking schemas were modified.
  Within 30 minutes, the system was live across priority funnels without affecting existing dashboards or attribution models.
  Rollout was phased over two weeks, beginning with acquisition funnels and expanding to onboarding and pricing flows. Throughout the expansion,
  performance metrics remained stable. Core Web Vitals held steady, and conversion baselines showed no regression during the transition.
          </p>

  </div>
</section>


      {/* What the Data Revealed */}
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
      What The Data Revealed
    </h2>

        <p style={{ color: "#e5e7eb",fontSize: "21px",textAlign: "justify" }}>
        Within the first month, over 3,000 structured feedback responses were captured directly from live users. Patterns quickly surfaced. Enterprise
  prospects expected stronger compliance visibility. Certain pricing terminology created confusion. Mobile onboarding steps introduced
  hesitation that analytics alone could not explain. A significant portion of drop-offs clustered around moments that, on the
  surface, appeared technically healthy. Pages were loading quickly. Funnel transitions were functioning correctly. Yet users expressed uncertainty
  around regulatory certifications, data security posture, and integration capabilities. The friction was not mechanical, it was psychological.
        </p>
        <p style={{ color: "#e5e7eb",textAlign: "justify",fontSize: "21px" }}>
        Pricing-page interactions revealed another pattern. Prospects were comparing tiers extensively but hesitating at terminology that lacked
  contextual explanation. Words that internal teams considered obvious were interpreted differently by mid-market buyers. The hesitation was
  rooted in clarity, not value. Mobile onboarding analysis uncovered micro-friction points- short pauses,
  repeated field edits, and abandonment following compliance-related disclosures. Traditional analytics showed the drop-off. This qualitative
  layer exposed the reasoning behind it.
          </p>

</div>
</section>

{/* How It Fit */}
<section
  style={{
    width: "100vw",
    marginLeft: "calc(50% - 50vw)",
    marginRight: "calc(50% - 50vw)",
    backgroundColor: "#0E2A47",
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
      How It Fit Into The Stack
    </h2>

    <div
      style={{
        backgroundColor: "#8A6CFF",
        borderRadius: "18px",
        padding: "36px",
        marginBottom: "32px",
        color: "#0E2A47",
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
        "Integrated seamlessly with GA4 and Mixpanel without event duplication or schema conflicts. We did not have to adjust our existing tracking
  taxonomy, attribution models, or reporting dashboards. It operated independently while enriching the insight layer. From a data integrity
  standpoint, this was critical- our pipelines, validation checks, and reporting governance remained untouched. The implementation respected
  our established architecture, ensuring no disruption to regional compliance reporting or executive BI workflows. It felt additive,
  not intrusive."
      </p>
      <span style={{ fontWeight: 600, color: "#111827",fontSize: "21px" }}>
        Data Engineering
      </span>
    </div>

    <div
      style={{
        backgroundColor: "#8A6CFF",
        borderRadius: "18px",
        padding: "36px",
        marginBottom: "32px",
        color: "#111827",
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
        "Zero impact on performance metrics or Core Web Vitals. The script loaded asynchronously, did not block rendering, and maintained
  full compliance with our performance benchmarks across web and mobile environments. We closely monitored LCP, CLS, and FID during
  rollout, and there were no measurable regressions. From an engineering operations perspective, it required minimal oversight and introduced
  no additional maintenance overhead. It aligned with our performance-first standards while delivering incremental analytical value."
      </p>
      <span style={{ fontWeight: 600, color: "#111827",fontSize: "21px" }}>
        Platform Engineering
      </span>
    </div>

    <div
      style={{
        backgroundColor: "#8A6CFF",
        borderRadius: "18px",
        padding: "36px",
        color: "#111827",
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
        "It felt like an extension of our analytics stack rather than a replacement. We continued using our existing dashboards for quantitative tracking,
while this layer provided decision-level context that our metrics alone could never surface. Instead of disrupting established reporting workflows,
it complemented them- translating behavioral signals into clear customer intent and hesitation patterns. Product, Growth, and Engineering teams
were able to align around the same source of insight without reworking dashboards or redefining KPIs. It strengthened our decision-making
capability without forcing organizational change."
      </p>
      <span style={{ fontWeight: 600, color: "#111827",fontSize: "21px" }}>
        Product Leadership
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
      Strategic Adjustments
    </h2>
        <p style={{ color: "#e5e7eb",textAlign: "justify",fontSize: "21px" }}>
        Armed with qualitative clarity, the product team prioritized targeted refinements instead of broad redesigns. Compliance certifications were
        elevated in visibility across high-intent pages. Pricing language was simplified to remove ambiguity that had previously created hesitation.
        Mobile onboarding friction points were streamlined, particularly at verification and documentation stages where uncertainty was highest.
        </p>
        <p style={{ color: "#e5e7eb",textAlign: "justify",fontSize: "21px" }}>
        Rather than relying on assumptions, teams mapped documented user objections to specific funnel stages and addressed them with focused messaging,
         interface clarity, and contextual reassurance. Micro-copy adjustments, layout refinements, and decision-support cues were introduced where
         hesitation signals were strongest. These were precise interventions- not structural overhauls — designed to reduce cognitive load without
         disrupting the broader product architecture.
          </p>

          <p style={{ color: "#e5e7eb", textAlign: "justify", fontSize: "21px" }}>
         Because the integration required no engineering redeployment for adjustments, iteration cycles accelerated significantly. Product,
         Growth, and Engineering teams were able to test refinements in shorter feedback loops, evaluate qualitative impact alongside quantitative metrics,
         and deploy improvements without introducing operational risk. The result was a more disciplined experimentation culture grounded in real user
         intent rather than inferred behavior alone.
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
        <p style={{ color: "#e5e7eb",textAlign: "justify",fontSize: "21px" }}>
        Within the first 60 days of deployment, measurable performance improvements were visible across both acquisition and retention metrics. 
        Onboarding completion rates increased by 21%, driven by clearer friction identification during critical decision moments. Mobile abandonment 
        dropped by 17%, particularly within pricing and KYC transition stages where hesitation had previously gone undiagnosed. Pricing-related support 
        queries decreased by 28%, reducing operational load on customer success teams and freeing bandwidth for higher-value engagement. Notably, these 
        improvements were achieved without any additional engineering lift post-implementation. Tracking maintenance hours remained flat, confirming that 
        integration did not introduce technical debt or workflow overhead. Beyond surface-level metrics, the organization experienced a deeper operational 
        shift. Product and Growth teams began referencing qualitative hesitation data alongside traditional dashboards in weekly decision forums. Instead 
        of debating assumptions, teams prioritized documented customer objections tied to specific funnel stages. Release cycles accelerated. Experiments 
        became sharper. Messaging adjustments aligned directly with expressed customer language rather than inferred behavior. Importantly, compliance and
        performance benchmarks remained unaffected. Core Web Vitals held steady across web and mobile environments. No event duplication or reporting 
        inconsistencies were introduced into the analytics ecosystem.
        </p>
        <p
      style={{
    color: "#e5e7eb",
    textAlign: "justify",
    fontSize: "21px",
    marginTop: "32px",  
    marginBottom: "12px",  
    }}
     >
    "The organization gained a qualitative decision layer without increasing
     operational complexity or technical debt. What stood out was how seamlessly
     it complemented our existing analytics stack. We did not need to re-architect
     our tracking infrastructure, alter schemas, or compromise performance
      benchmarks. Instead, it strengthened our decision-making by revealing the
      intent behind user behavior enabling faster, more confident product
      adjustments grounded in real customer signals."
    </p>

<p
  className="testimonial-attribution"
  style={{
    color: "#ffffff",
    fontSize: "19px",
    marginTop: "0px",  
    marginBottom: "0px",   
  }}
>
  - Platform Engineering Director, Middle East
</p>

       </div>
       </section>
    </TestimonialLayout>
  );
}