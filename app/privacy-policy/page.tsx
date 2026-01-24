export default function PrivacyPolicyPage() {
    return (
      <main className="mx-auto max-w-4xl px-6 py-20 text-gray-800">
        <h1 className="text-4xl font-bold text-gray-900">
          Privacy Policy
        </h1>
  
        <p className="mt-6 text-sm text-gray-500">
          Last updated: {new Date().toLocaleDateString()}
        </p>
  
        <section className="mt-10 space-y-6 text-base leading-relaxed">
          <p>
            Uptrackt (“we”, “our”, or “us”) is committed to protecting your
            privacy. This Privacy Policy explains how we collect, use,
            disclose, and safeguard your information when you use our
            platform.
          </p>
  
          <h2 className="text-xl font-semibold text-gray-900">
            Information We Collect
          </h2>
          <p>
            We may collect information you voluntarily provide to us,
            including but not limited to name, email address, company
            details, and usage data when you interact with our services.
          </p>
  
          <h2 className="text-xl font-semibold text-gray-900">
            How We Use Your Information
          </h2>
          <p>
            Your information is used to operate, improve, and personalize
            our platform, communicate with you, provide support, and
            comply with legal obligations.
          </p>
  
          <h2 className="text-xl font-semibold text-gray-900">
            Data Security
          </h2>
          <p>
            We implement industry-standard security measures to protect
            your data. However, no electronic transmission or storage
            method is 100% secure.
          </p>
  
          <h2 className="text-xl font-semibold text-gray-900">
            Third-Party Services
          </h2>
          <p>
            We may use trusted third-party services to help operate our
            platform. These parties are obligated to keep your information
            confidential.
          </p>
  
          <h2 className="text-xl font-semibold text-gray-900">
            Your Rights
          </h2>
          <p>
            Depending on your jurisdiction, you may have rights regarding
            access, correction, or deletion of your personal data.
          </p>
  
          <h2 className="text-xl font-semibold text-gray-900">
            Contact Us
          </h2>
          <p>
            If you have any questions about this Privacy Policy, please
            contact us at{" "}
            <span className="font-medium">
              privacy@uptrackt.com
            </span>.
          </p>
        </section>
      </main>
    );
  }
  