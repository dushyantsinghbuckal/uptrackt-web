export default function HowItWorksSection() {
  return (
    <section className="bg-black py-14">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* BIG PRIMARY CONTENT */}
        <h2 className="text-white font-semibold tracking-widest leading-none space-y-8">
          <div className="text-6xl md:text-8xl">CAPTURE</div>
          <div className="text-6xl md:text-8xl text-gray-500">ANALYZE</div>
          <div className="text-6xl md:text-8xl">ACT</div>
        </h2>

        {/* SUBTEXT / EXPLANATION */}
        <div className="mt-14 max-w-3xl mx-auto space-y-5 text-white text-base md:text-2xl leading-relaxed">
          <p>
            Capture feedback at the exact moments that shape customer decisions.
          </p>
          <p>
            Analyze friction, sentiment, and drop-offs as they happen.
          </p>
          <p>
            Act instantly with insights your teams can’t ignore.
          </p>
        </div>

      </div>
    </section>
  );
}
