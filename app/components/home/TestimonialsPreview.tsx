export default function TestimonialsPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          What Our Customers Discovered
        </h2>

        <div className="space-y-4">
          <a
            href="/testimonials/we-finally-understood-why-customers-didnt-buy"
            className="block text-lg text-gray-800 hover:text-black"
          >
            “We finally understood why customers didn’t buy” →
          </a>

          <a
            href="/testimonials/captured-feedback-from-anonymous-visitors"
            className="block text-lg text-gray-800 hover:text-black"
          >
            “Captured feedback from anonymous visitors” →
          </a>

          <a
           href="/testimonials/plugged-cleanly-into-our-existing-stack"
          className="block text-lg text-gray-800 hover:text-black"
          >
          “Plugged cleanly into our existing stack” →
          </a>

          <a
          href="/testimonials/turned-drop-off-feedback-into-revenue-impact"
         className="block text-lg text-gray-800 hover:text-black"
         >
         “Turned drop-off feedback into revenue impact” →
         </a>
         
        </div>
      </div>
    </section>
  );
}
