export default function TermsOfServicePage() {
    return (
      <main className="mx-auto max-w-4xl px-6 py-20 text-gray-800">
        <h1 className="text-4xl font-bold text-gray-900">
          Terms of Service
        </h1>
  
        <p className="mt-6 text-sm text-gray-500">
          Last updated: {new Date().toLocaleDateString()}
        </p>
  
        <section className="mt-10 space-y-6 text-base leading-relaxed">
          <p>
            These Terms of Service (“Terms”) govern your access to and use
            of the Uptrackt platform. By accessing or using our services,
            you agree to be bound by these Terms.
          </p>
  
          <h2 className="text-xl font-semibold text-gray-900">
            Use of the Service
          </h2>
          <p>
            You agree to use the platform only for lawful purposes and in
            accordance with these Terms. You may not misuse, disrupt, or
            attempt to gain unauthorized access to our systems.
          </p>
  
          <h2 className="text-xl font-semibold text-gray-900">
            Accounts and Access
          </h2>
          <p>
            You are responsible for maintaining the confidentiality of
            your account credentials and for all activities that occur
            under your account.
          </p>
  
          <h2 className="text-xl font-semibold text-gray-900">
            Intellectual Property
          </h2>
          <p>
            All content, features, and functionality of the platform are
            the exclusive property of Uptrackt and are protected by
            applicable intellectual property laws.
          </p>
  
          <h2 className="text-xl font-semibold text-gray-900">
            Limitation of Liability
          </h2>
          <p>
            To the maximum extent permitted by law, Uptrackt shall not be
            liable for any indirect, incidental, or consequential damages
            arising from your use of the platform.
          </p>
  
          <h2 className="text-xl font-semibold text-gray-900">
            Termination
          </h2>
          <p>
            We reserve the right to suspend or terminate your access to
            the platform at our discretion, without notice, for conduct
            that violates these Terms.
          </p>
  
          <h2 className="text-xl font-semibold text-gray-900">
            Changes to These Terms
          </h2>
          <p>
            We may update these Terms from time to time. Continued use of
            the platform after changes indicates acceptance of the revised
            Terms.
          </p>
  
          <h2 className="text-xl font-semibold text-gray-900">
            Contact Information
          </h2>
          <p>
            If you have questions about these Terms, contact us at{" "}
            <span className="font-medium">
              legal@uptrackt.com
            </span>.
          </p>
        </section>
      </main>
    );
  }
  