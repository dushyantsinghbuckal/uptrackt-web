import { GradientBackground } from "../UI/gradient-background";

export default function TestimonialsPreview() {
  return (
    <GradientBackground className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="max-w-4xl mx-auto text-4xl text-center md:text-5xl font-semibold leading-tight text-white">
          That’s how our customers uncover hidden drop-offs, understand true intent,
          <span className="font-semibold text-gray-400">
            {" "}and turn feedback into real business outcomes.
          </span>
        </h2>

        {/* Semi‑transparent card with backdrop blur – gradient shines through */}
        <div className="mt-16 mx-auto max-w-4xl rounded-4xl bg-black/80 backdrop-blur-sm px-12 py-12">
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
    </GradientBackground>
  );
}