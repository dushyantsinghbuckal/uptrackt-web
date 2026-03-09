export default function TermsOfServicePage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20 text-gray-800">
      <h1 className="text-6xl font-bold text-gray-900">
        Terms of Service
      </h1>

      <p className="mt-6 text-sm text-gray-500">
        Last updated: {new Date().toLocaleDateString()}
      </p>

      <section className="mt-10 text-justify space-y-8 text-base leading-relaxed">

        <p>
          These Terms of Service (“Terms”) govern your access to and use of the
          Uptrackt platform and related services (“Service”). By accessing or
          using the Service, you agree to be bound by these Terms.
        </p>

        {/* Use of Service */}
        <div>
          <h2 className="text-xl text-justify font-semibold text-gray-900">
            1. Use of the Service
          </h2>
          <p className="mt-3">
            You agree to use the Service only for lawful purposes and in
            accordance with these Terms. You may not misuse, disrupt, interfere
            with, or attempt to gain unauthorized access to the Service, its
            infrastructure, or related systems.
          </p>
        </div>

        {/* Accounts */}
        <div>
          <h2 className="text-xl text-justify font-semibold text-gray-900">
            2. Accounts and Access
          </h2>
          <p className="mt-3">
            You are responsible for maintaining the confidentiality of your
            account credentials and for all activities that occur under your
            account. You agree to notify us immediately of any unauthorized use
            of your account.
          </p>
        </div>

        {/* Customer Content */}
        <div>
          <h2 className="text-xl text-justify font-semibold text-gray-900">
            3. Customer Content and Ownership
          </h2>
          <p className="mt-3">
            Customers retain ownership of surveys, responses, feedback, and
            other content created or collected through the Service
            (“Customer Content”).
          </p>
          <p className="mt-3">
            By using the Service, you grant Uptrackt a limited, non-exclusive,
            worldwide license to host, process, analyze, and display Customer
            Content solely for the purpose of operating, maintaining, improving,
            and securing the Service, enforcing these Terms, and complying with
            applicable law.
          </p>
          <p className="mt-3">
            Uptrackt does not assume ownership of Customer Content.
          </p>
        </div>

        {/* Customer Responsibility */}
        <div>
          <h2 className="text-xl text-justify font-semibold text-gray-900">
            4. Responsibility for Collected Data
          </h2>
          <p className="mt-3">
            You are solely responsible for ensuring that you have a lawful basis
            to collect, process, and store personal data using the Service.
            Uptrackt acts as a data processor where applicable and processes
            such data according to your instructions.
          </p>
        </div>

        {/* Monitoring */}
        <div>
          <h2 className="text-xl text-justify font-semibold text-gray-900">
            5. Monitoring and Enforcement
          </h2>
          <p className="mt-3">
            Uptrackt may use automated systems and, where necessary, human
            review processes to detect illegal, abusive, fraudulent, or harmful
            activity. We reserve the right to remove or restrict access to
            content that violates these Terms or applicable law.
          </p>
        </div>

        {/* Intellectual Property */}
        <div>
          <h2 className="text-xl text-justify font-semibold text-gray-900">
            6. Intellectual Property
          </h2>
          <p className="mt-3">
            All content, features, and functionality of the Service, excluding
            Customer Content, are the exclusive property of Uptrackt and are
            protected by applicable intellectual property laws.
          </p>
        </div>

        {/* Service Availability */}
        <div>
          <h2 className="text-xl text-justify font-semibold text-gray-900">
            7. Service Availability
          </h2>
          <p className="mt-3">
            The Service is provided on an “as is” and “as available” basis. We
            do not guarantee uninterrupted, secure, or error-free operation of
            the Service.
          </p>
        </div>

        {/* Disclaimer */}
        <div>
          <h2 className="text-xl text-justify font-semibold text-gray-900">
            8. Disclaimer of Warranties
          </h2>
          <p className="mt-3">
            Except as expressly stated, the Service is provided without
            warranties of any kind, whether express or implied, including but
            not limited to warranties of merchantability, fitness for a
            particular purpose, or non-infringement.
          </p>
        </div>

        {/* Limitation */}
        <div>
          <h2 className="text-xl text-justify font-semibold text-gray-900">
            9. Limitation of Liability
          </h2>
          <p className="mt-3">
            To the maximum extent permitted by law, Uptrackt shall not be liable
            for any indirect, incidental, special, consequential, or punitive
            damages arising out of or related to your use of the Service.
          </p>
          <p className="mt-3">
            Uptrackt’s total liability arising from or related to these Terms
            shall not exceed the amount paid by you to Uptrackt in the twelve
            (12) months preceding the claim.
          </p>
        </div>

        {/* Indemnification */}
        <div>
          <h2 className="text-xl text-justify font-semibold text-gray-900">
            10. Indemnification
          </h2>
          <p className="mt-3">
            You agree to indemnify and hold harmless Uptrackt, its affiliates,
            officers, and employees from any claims, damages, liabilities, and
            expenses arising from your use of the Service, your Customer
            Content, or your violation of these Terms.
          </p>
        </div>

        {/* Termination */}
        <div>
          <h2 className="text-xl text-justify font-semibold text-gray-900">
            11. Termination
          </h2>
          <p className="mt-3">
            We reserve the right to suspend or terminate your access to the
            Service at our discretion if you violate these Terms.
          </p>
        </div>

        {/* Governing Law */}
        <div>
          <h2 className="text-xl text-justify font-semibold text-gray-900">
            12. Governing Law
          </h2>
          <p className="mt-3">
            These Terms shall be governed by and construed in accordance with
            the laws of India, without regard to conflict of law principles.
          </p>
        </div>

        {/* Changes */}
        <div>
          <h2 className="text-xl text-justify font-semibold text-gray-900">
            13. Changes to These Terms
          </h2>
          <p className="mt-3">
            We may update these Terms from time to time. Continued use of the
            Service after changes indicates acceptance of the revised Terms.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-xl text-justify font-semibold text-gray-900">
            14. Contact Information
          </h2>
          <p className="mt-3">
            If you have questions about these Terms, contact us at{" "}
            <span className="font-medium">
              legal@uptrackt.com
            </span>.
          </p>
        </div>

      </section>
    </main>
  );
}