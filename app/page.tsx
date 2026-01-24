import TestimonialsPreview from "./components/home/TestimonialsPreview";
import TrustedBy from "./components/home/TrustedBy";
import HowItWorksSection from "./components/home/HowItWorksSection";
import Capabilities from "./components/home/Capabilities";
import WhyUptrackt from "./components/home/WhyUptrackt";
import FaqSection from "./components/FaqSection";
import FinalCTA from "./components/home/FinalCTA";

export default function Home() {
  return (
    <main className="bg-white px-4 sm:px-6">
      {/* ================= HERO ================= */}
      <section className="mx-auto max-w-6xl pt-24 pb-28 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
          Enterprise-ready Customer Experience Intelligence
        </h1>

        <p className="mt-6 mx-auto max-w-3xl text-base sm:text-lg text-gray-600">
          Capture customer feedback at critical moments across the retail and
          e-commerce journey. Identify friction, act faster, and drive
          measurable growth.
        </p>
      </section>

      <TestimonialsPreview />

      {/* ================= TRUSTED BY ================= */}
      <section className="py-16">
        <TrustedBy />
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="bg-gray-50 py-20">
        <HowItWorksSection />
      </section>

      {/* ================= WHY UPTRACKT ================= */}
      <section className="py-20">
        <WhyUptrackt />
      </section>

      {/* ================= CAPABILITIES ================= */}
      <section className="py-20">
        <Capabilities />
      </section>

      {/* ================= FAQs ================= */}
      <FaqSection />

      {/* ================= CTA ================= */}
      <FinalCTA />
    </main>
  );
}
