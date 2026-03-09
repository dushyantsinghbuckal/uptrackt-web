export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20 text-gray-800">
      <h1 className="text-6xl font-bold text-gray-900">
        Privacy Policy
      </h1>

      <p className="mt-6 text-sm text-gray-500">
        Last updated: {new Date().toLocaleDateString()}
      </p>

      <section className="mt-10 text-justify space-y-8 text-base leading-relaxed">

        <p>
          Uptrackt (“Uptrackt”, “we”, “our”, or “us”) respects your privacy and is
          committed to protecting personal information entrusted to us. This
          Privacy Policy explains how we collect, use, disclose, process, and
          safeguard information when you access or use our platform, website,
          and related services (collectively, the “Services”).
        </p>

        {/* Scope */}
        <div>
          <h2 className="text-2xl text-justify font-semibold text-gray-900">
            1. Scope of This Policy
          </h2>
          <p className="mt-3">
            This Privacy Policy applies when Uptrackt provides Services directly
            to individuals or businesses, when you access our website, and when
            you communicate with us for support, sales, or marketing purposes.
          </p>
          <p className="mt-3">
            When you create an account or interact directly with Uptrackt, we
            act as a <strong>Data Controller</strong>. When enterprise customers
            use Uptrackt to collect feedback or behavioral data from their users,
            we act as a <strong>Data Processor</strong> and process data strictly
            according to their instructions.
          </p>
        </div>

        {/* Information We Collect */}
        <div>
          <h2 className="text-2xl text-justify font-semibold text-gray-900">
            2. Information We Collect
          </h2>

          <h3 className="mt-4 font-semibold">Information You Provide</h3>
          <p className="mt-2">
            This may include your name, email address, company name, job title,
            billing details, account credentials, and communications with us.
          </p>

          <h3 className="mt-4 font-semibold">Usage & Technical Data</h3>
          <p className="mt-2">
            We may collect IP address, browser type, device information,
            operating system, session duration, referral source, and interaction
            data to understand how our Services are used.
          </p>

          <h3 className="mt-4 font-semibold">Customer Data (Enterprise Accounts)</h3>
          <p className="mt-2">
            When businesses use Uptrackt to collect feedback or behavioral
            signals, we process such data on their behalf in accordance with
            contractual agreements and applicable data protection laws.
          </p>
        </div>

        {/* How We Use Information */}
        <div>
          <h2 className="text-2xl text-justify font-semibold text-gray-900">
            3. How We Use Your Information
          </h2>
          <p className="mt-3">
            We use information to provide, operate, and maintain the Services;
            authenticate users; process payments; provide support; improve
            platform functionality; analyze usage trends; detect fraud or abuse;
            and comply with legal obligations.
          </p>
          <p className="mt-3">
            Where permitted by law, we may also send marketing communications.
            You may opt out at any time.
          </p>
        </div>

        {/* Legal Basis */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">
            4. Legal Basis for Processing
          </h2>
          <p className="mt-3">
            Depending on your jurisdiction, we process personal data under one
            or more of the following legal bases: performance of a contract,
            legitimate business interests, compliance with legal obligations, or
            your consent (where required).
          </p>
        </div>

        {/* Cookies */}
        <div>
          <h2 className="text-2xl text-justify font-semibold text-gray-900">
            5. Cookies & Tracking Technologies
          </h2>
          <p className="mt-3">
            We use cookies and similar technologies to maintain sessions,
            improve functionality, analyze performance, and support marketing
            efforts. You may manage cookie preferences through your browser
            settings.
          </p>
        </div>

        {/* Data Sharing */}
        <div>
          <h2 className="text-2xl text-justify font-semibold text-gray-900">
            6. Data Sharing & Disclosure
          </h2>
          <p className="mt-3">
            We do not sell personal data. We may share information with trusted
            service providers such as hosting providers, payment processors, and
            analytics services who are contractually obligated to protect your
            data.
          </p>
          <p className="mt-3">
            We may also disclose information if required by law or in connection
            with a merger, acquisition, or asset sale.
          </p>
        </div>

        {/* Data Retention */}
        <div>
          <h2 className="text-2xl text-justify font-semibold text-gray-900">
            7. Data Retention
          </h2>
          <p className="mt-3">
            We retain personal information for as long as your account remains
            active and as necessary to provide Services, comply with legal
            obligations, resolve disputes, and enforce agreements. Data is
            deleted or anonymized when no longer required.
          </p>
        </div>

        {/* International Transfers */}
        <div>
          <h2 className="text-2xl text-justify font-semibold text-gray-900">
            8. International Data Transfers
          </h2>
          <p className="mt-3">
            Your information may be processed in countries outside your own.
            Where required, we implement appropriate safeguards such as standard
            contractual clauses or equivalent legal protections.
          </p>
        </div>

        {/* Security */}
        <div>
          <h2 className="text-2xl text-justify font-semibold text-gray-900">
            9. Data Security
          </h2>
          <p className="mt-3">
            We implement administrative, technical, and organizational security
            measures including encryption in transit (TLS/HTTPS), access controls,
            and secure cloud infrastructure. While we strive to protect your
            information, no system is completely secure.
          </p>
        </div>

        {/* Public Content */}
        <div>
          <h2 className="text-2xl text-justify font-semibold text-gray-900">
            10. Public Content & User Responsibility
          </h2>
          <p className="mt-3">
            If you share content publicly through the Services, it may be visible
            to others. Please avoid sharing sensitive information in public
            areas. If you submit personal data about others, you confirm you have
            the legal right to do so.
          </p>
        </div>

        {/* Rights */}
        <div>
          <h2 className="text-2xl text-justify font-semibold text-gray-900">
            11. Your Rights
          </h2>
          <p className="mt-3">
            Subject to applicable law, you may have the right to access, correct,
            delete, restrict, or object to processing of your personal data, as
            well as request data portability or withdraw consent.
          </p>
          <p className="mt-3">
            To exercise your rights, contact us at{" "}
            <span className="font-medium">
              privacy@uptrackt.com
            </span>.
          </p>
        </div>

        {/* Children */}
        <div>
          <h2 className="text-2xl text-justify font-semibold text-gray-900">
            12. Children’s Privacy
          </h2>
          <p className="mt-3">
            Uptrackt is not intended for individuals under the age of 16. We do
            not knowingly collect personal data from children.
          </p>
        </div>

        {/* Changes */}
        <div>
          <h2 className="text-2xl text-justify font-semibold text-gray-900">
            13. Changes to This Policy
          </h2>
          <p className="mt-3">
            We may update this Privacy Policy from time to time. The “Last
            updated” date above reflects the latest revision. Continued use of
            our Services after updates constitutes acceptance of the revised
            policy.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-2xl text-justify font-semibold text-gray-900">
            14. Contact Us
          </h2>
          <p className="mt-3">
            If you have questions or concerns about this Privacy Policy, please
            contact us at{" "}
            <span className="font-medium">
              privacy@uptrackt.com
            </span>.
          </p>
        </div>

      </section>
    </main>
  );
}