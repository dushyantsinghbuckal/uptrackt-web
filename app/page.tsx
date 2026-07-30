import TestimonialsPreview from "./components/home/TestimonialsPreview";
import TrustedBy from "./components/home/TrustedBy";
import HowItWorksSection from "./components/home/HowItWorksSection";
import Capabilities from "./components/home/Capabilities";
import WhyUptrackt from "./components/home/WhyUptrackt";
import FaqSection from "./components/FaqSection";
import FinalCTA from "./components/home/FinalCTA";
import {HeroGeometric} from "./components/UI/shape-landing-hero";
import {getTranslations} from "next-intl/server";

export default async function Home() {
  const t = await getTranslations("Home");

  return (
    <>
      <HeroGeometric badge={t("badge")}>
        <h1 className="mx-auto max-w-[1200px] text-balance text-center text-4xl font-bold leading-[1.2] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          {t("heroTitleLine1")}
          <br />
          {t("heroTitleLine2")}
        </h1>

        <p className="mx-auto mt-20 max-w-[1200px] text-center text-2xl font-semibold text-white md:text-3xl">
          {t("heroSubtitle")}
        </p>
      </HeroGeometric>

      <div className="mx-auto mt-8 max-w-7xl px-4 text-center text-2xl font-bold leading-tight tracking-tight text-gray-300 sm:px-6 sm:text-3xl md:text-4xl">
        {t("unifiedView")}
      </div>

      <main className="bg-white px-4 sm:px-6">
        <TestimonialsPreview />
      </main>

      <main className="bg-white px-4 sm:px-6">
        <section className="mx-auto max-w-6xl pb-28 pt-24 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {t("enterpriseTitle")}
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base text-gray-600 sm:text-lg">
            {t("enterpriseDescription")}
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

        <section className="bg-black pb-28 pt-16">
          <Capabilities />
        </section>

        <FaqSection />

        <section className="mx-auto max-w-6xl px-2 py-11 text-center">
          <div className="mx-auto mb-16 h-px w-24 bg-gray-300" />

          <h2 className="text-5xl font-semibold leading-tight tracking-tight text-gray-900 md:text-6xl">
            {t("discoveryTitle")}{" "}
            <span className="text-gray-400">
              {t("discoveryHighlight")}
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-400 md:text-2xl">
            {t("discoveryDescription")}
          </p>

          <div className="mt-14">
            <a
              href="/request-demo"
              className="inline-flex items-center justify-center rounded-full bg-black px-5 py-2 text-2xl font-semibold text-white transition hover:bg-gray-900"
            >
              {t("collaborate")}
            </a>
          </div>

          <div className="mx-auto mt-12 h-px w-24 bg-gray-300" />
        </section>

        <FaqSection />
        <FinalCTA />
      </main>
    </>
  );
}