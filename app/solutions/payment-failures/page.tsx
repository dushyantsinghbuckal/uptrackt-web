export default function PaymentFailuresPage() {
    return (
      <main className="bg-white text-white py-14 px-1 text-center">
         <div className="mx-auto max-w-5xl"></div>
        <h1 className="text-9xl text-black md:text-8xl font-semibold tracking-tight leading-tight">
          Payment Failures
        </h1>
  
        <p className="mt-1 text-4xl md:text-4xl text-gray-400 leading-relaxed">
          Failed payments don’t just lose transactions. They lose trust.
        </p>
  
        <section className="bg-white py-14 px-2">
        <div className="mx-auto max-w-7xl text-left">

        {/* Where Transactions Break Down */}
    <div className="mb-20">
      <h2 className="text-5xl font-semibold mb-6 text-black">
      Where Transactions Break Down
      </h2>

      <p className="text-xl text-black text-justify leading-relaxed">
      When a payment fails or a preferred method is unavailable, customers rarely return to explain what happened. They exit.
      </p>
      <p className="text-xl text-black text-justify leading-relaxed">
      From a dashboard perspective, the transaction simply registers as unsuccessful. However, the underlying cause often remains unclear. Was it a
      gateway timeout, a declined card, a confusing error message, or a moment of doubt about security? Behavioral analytics record the event. They do not
      capture the customer’s reasoning.
      </p>
      <p className="text-xl text-black text-justify leading-relaxed">
      Without clarity, payment friction becomes a recurring and expensive blind spot.
      </p>
      </div>

{/* Capturing Signal Behind the Error */}
<div className="mb-20">
      <h2 className="text-5xl font-semibold mb-6 text-black">
      Capturing Signal Behind the Error
      </h2>
      
      <p className="text-xl text-black text-justify leading-relaxed">
      Uptrackt engages customers immediately following a failed payment or interrupted transaction. Rather than relying solely on technical logs, it 
      captures direct feedback that clarifies whether the issue was functional, experiential, or trust related.
      </p>
      <p className="text-xl text-black text-justify leading-relaxed">
      The system identifies recurring themes such as missing payment methods, gateway instability, authentication confusion, or perceived security concerns.
      Feedback is structured and categorized to distinguish technical defects from perception gaps.
      </p>
      <p className="text-xl text-black text-justify leading-relaxed">
      This ensures that revenue teams address the actual source of abandonment rather than assuming the cause.
      </p>
    </div>

          {/* Converting Friction Into Recovery */}
    <div>
      <h2 className="text-3xl font-semibold mb-6 text-gray-900">
        Converting Friction Into Recovery
      </h2>

      <p className="text-xl text-black text-justify leading-relaxed">
      When payment failures are understood accurately, remediation becomes precise. Teams can prioritize gateway reliability improvements, expand 
      accepted payment methods, refine error messaging, or strengthen visible trust signals based on validated customer input.
      </p>
      <p className="text-xl text-black text-justify leading-relaxed">
      Instead of reacting to aggregate failure rates, organizations act on specific friction points tied directly to lost revenue.
      </p>
      <p className="text-xl text-black text-justify leading-relaxed">
      Over time, payment flows become more resilient, more transparent, and more aligned with customer expectations, reducing abandonment at one of the
       most commercially sensitive stages of the journey.
       </p>
        </div>
         </div>
         </section>

         {/* Related Customer Story */}
         <section className="mb-1 border-t pt-12">
         <h3 className="text-2xl text-black font-semibold mb-4">
         Related Customer Story
          </h3>

          <blockquote className="text-black text-xl mb-4">
        “We captured honest feedback from users who never logged in,
        revealing payment issues analytics completely missed.”
        </blockquote>

      <p className="text-sm text-gray-500 mb-6">
      - CX Operations Lead, Online Marketplace
      </p>

      <a
      href="/testimonials/we-finally-understood-why-customers-didnt-buy"
        className="text-2xl font-medium text-black hover:underline"
      >
      Read full story →
      </a>
      </section>
      </main>
    );
  }