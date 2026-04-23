import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-6">Last Updated: [Add Date]</p>

        <Section title="1. Information We Collect">
          <ul className="list-disc pl-5 space-y-2">
            <li>Name</li>
            <li>Phone number</li>
            <li>Email address</li>
            <li>Location details</li>
            <li>Property preferences</li>
            <li>Any other information you provide</li>
          </ul>
        </Section>

        <Section title="2. How We Use Your Information">
          <ul className="list-disc pl-5 space-y-2">
            <li>Respond to inquiries</li>
            <li>Schedule site visits</li>
            <li>Share project updates & offers</li>
            <li>Improve services & marketing</li>
            <li>Contact via call, SMS, WhatsApp, email</li>
          </ul>
        </Section>

        <Section title="3. Data Protection & Security">
          <p>
            We use secure servers, restricted access, and monitoring systems to
            protect your data. However, no method of transmission is 100% secure.
          </p>
        </Section>

        <Section title="4. Sharing of Information">
          <p>
            We do not sell or rent your data. Information may be shared only with
            trusted partners or when required by law.
          </p>
        </Section>

        <Section title="5. Cookies & Tracking">
          <p>
            Cookies help improve user experience and analyze traffic. You can
            disable cookies in your browser settings.
          </p>
        </Section>

        <Section title="6. Third-Party Links">
          <p>
            We are not responsible for privacy practices of external websites.
          </p>
        </Section>

        <Section title="7. Your Consent">
          <p>
            By using our website, you agree to this Privacy Policy.
          </p>
        </Section>

        <Section title="8. Your Rights">
          <ul className="list-disc pl-5 space-y-2">
            <li>Access your data</li>
            <li>Request correction or deletion</li>
            <li>Opt-out of marketing</li>
          </ul>
        </Section>

        <Section title="9. Updates to This Policy">
          <p>
            We may update this policy anytime. Changes will be posted here.
          </p>
        </Section>

        <Section title="10. Contact Us">
          <p>Email: [ninewallreality@gmail.com]</p>
          <p>Phone: [9831598950]</p>
          <p>Address: [office no. - S-09 , 6th floor , Urbtech NPX, Sec 153, Noida , UP 201310]</p>
        </Section>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2 text-gray-700">{title}</h2>
      <div className="text-gray-600">{children}</div>
    </div>
  );
}