export default function RefundPolicyPage() {
    return (
      <main className="max-w-4xl mx-auto px-6 py-20 text-gray-800 text-justify">
        <h1 className="text-5xl font-bold mb-10">Refund Policy</h1>
  
        <p className="mb-6">
          Effective Date: May 19, 2026
        </p>
  
        <p className="mb-6">
          At Uptrackt, we aim to provide reliable, enterprise-grade customer
          experience and survey infrastructure for global retail and ecommerce
          businesses.
        </p>
  
        <p className="mb-10">
          Because our platform includes software access, infrastructure
          provisioning, integrations, onboarding, and enterprise services,
          refunds are generally limited, as outlined in this policy and our
          Terms of Service.
        </p>
  
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Subscription Refunds
          </h2>
  
          <p className="mb-4">
            In most cases, Uptrackt subscriptions are non-refundable once a billing cycle has started. This helps us continue investing in
          platform reliability, infrastructure, security, product development, and enterprise support services.
          </p>
  
          <p>
            However, we review refund requests individually and aim to be fair
            and reasonable in every situation.
          </p>
        </section>
  
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Enterprise Plans & Custom Services
          </h2>
  
          <p>
            Enterprise agreements, implementation services, API integrations,
            onboarding, and custom deployments are generally non-refundable
            unless otherwise specified in a signed commercial agreement.
          </p>
        </section>
  
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Duplicate Charges or Billing Errors
          </h2>
  
          <p>
            If you believe you were charged incorrectly or more than once, contact us within 7 business days so we can investigate and assist. 
            After verification, eligible refunds will be processed to the original payment method used during the transaction.
          </p>
          </section>
  
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Refund Processing Time
          </h2>
          <p className="my-8 text-justify">
          If your refund request is approved, processing timelines may vary depending on your payment provider, banking institution, country,
          currency conversion process, and payment method used during the transaction.
         </p>
         <p className="my-7 text-justify">
    Typical refund processing timelines are:
  </p>

  <ul className="list-disc pl-8 space-y-4 mb-6">
    <li>
    ✔ Credit and debit cards: Typically processed within 5–10
      business days.
    </li>

    <li>
    ✔ International wire or bank transfers: Usually processed within
      7–15 business days depending on intermediary banks and regional
      banking systems.
    </li>

    <li>
    ✔ Digital wallets and alternative payment providers: Processing
      timelines may vary based on the provider’s internal policies.
    </li>

    <li>
      Currency conversion refunds may be subject to exchange rate fluctuations and additional processing delays by financial
      institutions. Also, certain banks or card issuers may temporarily display the refund as a pending transaction before final settlement.
    </li>
     </ul>
          <p className="mt-5">
          While Uptrackt processes approved refunds promptly, final settlement timelines are controlled by third-party financial institutions and
    payment networks, which may occasionally result in additional delays outside our control.
        </p>
        </section>
  
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Cancelling Your Subscription
          </h2>
  
          <p>
            You may cancel your subscription at any time to stop future renewals.
            Cancellation does not automatically trigger a refund.
          </p>
          <p className="mb-5">
          Unless otherwise stated in a commercial agreement, you will continue to have access to paid features until the end of your active billing
          period. Enterprise customers may be subject to separate cancellation, renewal, or notice period requirements under their signed agreements.
        </p>
        </section>
  
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Contact Us
          </h2>
          <p className="mb-3">
          For billing questions, subscription support, or refund-related
          inquiries, please contact billing@uptrackt.com.
        </p>
        </section>
      </main>
    );
  }