export default function SolutionsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-24">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Solutions
      </h1>

      <p className="text-lg text-gray-600 mb-16">
        Real customer problems, solved with decision-level feedback at the exact moment it matters.
      </p>

      <div className="grid gap-8 md:grid-cols-2">

        <a
          href="/solutions/checkout-drop-offs"
          className="border rounded-xl p-6 hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold mb-2">
            Checkout Drop-offs
          </h2>
          <p className="text-gray-600">
            Understand why customers abandon checkout and fix the real blockers.
          </p>
        </a>

        <a
          href="/solutions/pricing-friction"
          className="border rounded-xl p-6 hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold mb-2">
            Pricing Friction
          </h2>
          <p className="text-gray-600">
            Identify where price perception breaks and why customers hesitate.
          </p>
        </a>

        <a
          href="/solutions/payment-failures"
          className="border rounded-xl p-6 hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold mb-2">
            Payment Failures
          </h2>
          <p className="text-gray-600">
            Capture real-time feedback when payments fail or options are missing.
          </p>
        </a>

        <a
       href="/solutions/post-purchase-drop-offs"
       className="border rounded-xl p-6 hover:shadow-lg transition"
       >
       <h2 className="text-xl font-semibold mb-2">
       Post-Purchase Drop-offs
       </h2>
       <p className="text-gray-600">
       Understand why customers disengage after purchase and prevent churn early.
       </p>
       </a>

      </div>
    </main>
  );
}
