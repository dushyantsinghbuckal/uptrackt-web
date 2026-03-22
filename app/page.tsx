import TestimonialsPreview from "./components/home/TestimonialsPreview";
import TrustedBy from "./components/home/TrustedBy";
import HowItWorksSection from "./components/home/HowItWorksSection";
import Capabilities from "./components/home/Capabilities";
import WhyUptrackt from "./components/home/WhyUptrackt";
import FaqSection from "./components/FaqSection";
import FinalCTA from "./components/home/FinalCTA";
import { HeroGeometric } from "./components/ui/shape-landing-hero";

export default function Home() {
  return (

    <>
      {/* ================= HERO SECTION with Geometric Background ================= */}
      <HeroGeometric badge="Customer Experience Intelligence">
  <h1 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.2] max-w-[1200px] mx-auto text-balance">
    Capture customer feedback at critical moments
    <br />
    across the journey.
  </h1>

  <p className="mt-20 text-2xl md:text-3xl font-semibold text-white text-center max-w-[1200px] mx-auto">
    Identify friction, act faster, and drive measurable growth.
  </p>
</HeroGeometric>

        {/* Unified view line */}
        <div className="mt-8 text-3xl md:text-4xl font-bold tracking-tight text-gray-300 max-w-7xl mx-auto">
  <span className="whitespace-nowrap">We bring together </span>
  <span className="mx-1">Feedback</span>
  <span className="mx-1">+</span>
  <span className="mx-1">Behavior</span>
  <span className="mx-1">+</span>
  <span className="mx-1">Intent</span>
  <span className="whitespace-nowrap"> under one unified view.</span>
       </div>
    
      {/* ================= REST OF THE PAGE (unchanged) ================= */}
      <main className="bg-white px-4 sm:px-6">
        <TestimonialsPreview />
      </main>

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

      <section className="py-16">
        <TrustedBy />
      </section>
     
      <HowItWorksSection />

      <section className="py-20">
        <WhyUptrackt />
      </section>

      <section className="bg-black pt-16 pb-28">
        <Capabilities />
      </section>

      <FaqSection />

      <section className="mx-auto max-w-6xl px-2 py-11 text-center">
        <div className="mx-auto mb-16 h-px w-24 bg-gray-300" />
        <h2 className="text-5xl md:text-6xl font-semibold tracking-tight text-gray-900 leading-tight">
          Not sure where to start?{" "}
          <span className="text-gray-400">
            We’re here to tailor a solution just for you.
          </span>
        </h2>
        <p className="mt-6 mx-auto max-w-3xl text-xl md:text-2xl text-gray-400">
          Book a discovery call, and let’s explore the possibilities together.
        </p>
        <div className="mt-14">
          <a
            href="/request-demo"
                className="inline-flex items-center justify-center rounded-full bg-black px-5 py-2 text-2xl font-semibold text-white transition 
                hover:bg-gray-900"
          >
            Let’s Collaborate
          </a>
        </div>
        <div className="mx-auto mt-12 h-px w-24 bg-gray-300" />
      </section>
  
      {/* ================= FAQs ================= */}
      <FaqSection />

      {/* ================= CTA ================= */}
      <FinalCTA />
    </main>
    </>
  );
}