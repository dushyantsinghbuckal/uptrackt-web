import TestimonialsPreview from "./components/home/TestimonialsPreview";
import TrustedBy from "./components/home/TrustedBy";
import HowItWorksSection from "./components/home/HowItWorksSection";
import Capabilities from "./components/home/Capabilities";
import WhyUptrackt from "./components/home/WhyUptrackt";
import FaqSection from "./components/FaqSection";

export default function Home() {
  return (
    <main className="bg-white px-4 sm:px-6">
      {/* HERO */}
      <section className="mx-auto max-w-6xl pt-24 pb-28 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
          Enterprise-ready Customer Experience Intelligence
        </h1>

        <p className="mt-6 mx-auto max-w-3xl text-lg text-gray-600">
          Capture customer feedback at critical moments across the retail and
          e-commerce journey. Identify friction, act faster, and drive
          measurable growth.
        </p>
      </section>

      <TestimonialsPreview />

      <section className="py-16">
        <TrustedBy />
      </section>

      <section className="bg-gray-50 py-20">
        <HowItWorksSection />
      </section>

      <section className="py-20">
        <WhyUptrackt />
      </section>

      <section className="py-20">
        <Capabilities />
      </section>

      <FaqSection />

      {/* FINAL CTA */}
      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <div className="mx-auto mb-12 h-px w-24 bg-gray-300" />

        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
          Not sure where to start?{" "}
          <span className="text-gray-400">
            We’re here to tailor a solution just for you.
          </span>
        </h2>

        <p className="mt-4 mx-auto max-w-3xl text-lg text-gray-400">
          Book a discovery call, and let’s explore the possibilities together.
        </p>

        <div className="mt-10">
          <a
            href="/request-demo"
            className="inline-flex items-center justify-center rounded-full bg-black px-10 py-4 text-base font-medium text-white transition hover:bg-gray-900"
          >
            Let’s Collaborate
          </a>
        </div>

        <div className="mx-auto mt-12 h-px w-24 bg-gray-300" />
      </section>
    </main>
  );
}
