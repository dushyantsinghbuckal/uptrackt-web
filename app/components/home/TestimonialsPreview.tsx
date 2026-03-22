import { FloatingPaths } from "../UI/background-paths";

export default function TestimonialsPreview() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white dark:bg-neutral-950">
      {/* Animated background paths */}
      <div className="absolute inset-0 transform translate-y-20">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      {/* Content - NO top padding, h2 has NO top margin */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-0 pb-16 w-full">
        <h2 className="max-w-4xl mx-auto text-4xl text-center md:text-5xl font-semibold leading-tight text-gray-900 dark:text-white mt-0">
          That’s how our customers uncover hidden drop-offs, understand true intent,
          <span className="font-semibold text-black">
            {" "}and turn feedback into real business outcomes.
          </span>
        </h2>

        {/* Card - minimal top margin */}
        <div className="mt-6 mx-auto max-w-4xl rounded-4xl bg-black/80 backdrop-blur-sm px-12 py-12 w-full">
          <ul className="space-y-6">
            <li>
              <a
                href="/testimonials/we-finally-understood-why-customers-didnt-buy"
                className="block text-3xl font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:underline underline-offset-4 cursor-pointer"
              >
                We Finally Understood Why Customers Didn’t Buy
              </a>
            </li>
            <li>
              <a
                href="/testimonials/captured-feedback-from-anonymous-visitors"
                className="block text-3xl font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:underline underline-offset-4 cursor-pointer"
              >
                Captured Feedback From Anonymous Visitors
              </a>
            </li>
            <li>
              <a
                href="/testimonials/plugged-cleanly-into-our-existing-stack"
                className="block text-3xl font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:underline underline-offset-4 cursor-pointer"
              >
                Plugged Cleanly Into Our Existing Stack
              </a>
            </li>
            <li>
              <a
                href="/testimonials/turned-drop-off-feedback-into-revenue-impact"
                className="block text-3xl font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:underline underline-offset-4 cursor-pointer"
              >
                Turned Drop-Off Feedback Into Revenue Impact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}