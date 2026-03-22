export default function AboutPage() {
    return (
      <main className="mx-auto max-w-5xl px-6 py-20">
  
        {/* Page Heading */}
        <h1 className="text-5xl font-bold text-gray-900 mb-10">
          About Uptrackt
        </h1>
  
        {/* Intro */}
        <p className="text-xl text-gray-700 leading-relaxed mb-8">
          Uptrackt was built around a simple belief: businesses should understand
          what their customers experience in real moments, not just through
          delayed reports and disconnected analytics.
        </p>
  
        <p className="text-lg text-gray-700 leading-relaxed mb-10">
          Traditional analytics tools show what users do, but rarely explain
          <strong> why they do it.</strong> Teams are often left guessing why
          customers abandon a journey, drop off before purchasing, or struggle
          during onboarding.
        </p>
  
        {/* Mission */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-gray-900">
            Our Mission
          </h2>
  
          <p className="text-lg text-gray-700 leading-relaxed">
            Our mission is to help companies capture feedback at the exact
            moments that shape customer decisions. By combining contextual
            feedback, behavioral signals, and journey analytics, Uptrackt enables
            teams to uncover friction quickly and act with confidence.
          </p>
        </section>
  
        {/* What we solve */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-gray-900">
            The Problem We Solve
          </h2>
  
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Modern customer journeys span multiple touchpoints — websites, apps,
            checkout flows, onboarding experiences, and support interactions.
            When something breaks in this journey, most teams only see the
            outcome: lost conversions.
          </p>
  
          <p className="text-lg text-gray-700 leading-relaxed">
            Uptrackt helps businesses identify the true reasons behind customer
            drop-offs by capturing real feedback during critical moments in the
            journey.
          </p>
        </section>
  
        {/* Vision */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-gray-900">
            Our Vision
          </h2>
  
          <p className="text-lg text-gray-700 leading-relaxed">
            We believe the future of customer experience will be driven by
            real-time intelligence — where teams can instantly detect friction,
            understand sentiment, and resolve issues before they impact growth.
          </p>
        </section>
  
        {/* Founder */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-gray-900">
            Built for modern product and CX teams
          </h2>
  
          <p className="text-lg text-gray-700 leading-relaxed">
            Uptrackt is designed for product teams, customer experience leaders,
            and growth teams who want a clearer understanding of how their
            customer journey truly performs.
          </p>
        </section>
  
        {/* CTA */}
        <section className="mt-16 text-center">
          <h3 className="text-3xl font-semibold text-gray-900 mb-4">
            See how your customer journey really performs
          </h3>
  
          <a
            href="/request-demo"
            className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-white font-semibold hover:bg-gray-900 transition"
          >
            Request a Demo
          </a>
        </section>
  
      </main>
    );
  }