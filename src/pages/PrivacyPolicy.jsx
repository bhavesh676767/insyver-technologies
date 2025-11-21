import React from 'react';

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "Information We Collect",
      content: [
        "Personal information you provide directly to us (name, email, phone, company details)",
        "Information collected automatically (IP address, browser type, device information)",
        "Communication data from emails, calls, or messages sent to us",
        "Usage data about how you interact with our website and services"
      ]
    },
    {
      title: "How We Use Your Information",
      content: [
        "To provide and maintain our technology services",
        "To communicate with you about our services and respond to inquiries",
        "To improve our website and services based on usage patterns",
        "To send marketing communications (with your consent)",
        "To comply with legal obligations and protect our rights"
      ]
    },
    {
      title: "Information Sharing and Disclosure",
      content: [
        "We do not sell, trade, or rent your personal information to third parties",
        "We may share information with trusted service providers who assist our operations",
        "Information may be disclosed if required by law or to protect our rights",
        "We may share aggregated, non-personally identifiable information for business purposes"
      ]
    },
    {
      title: "Data Security",
      content: [
        "We implement industry-standard security measures to protect your data",
        "All sensitive data is encrypted in transit and at rest",
        "Regular security audits and vulnerability assessments are conducted",
        "Access to personal information is restricted to authorized personnel only",
        "We maintain backup systems to prevent data loss"
      ]
    },
    {
      title: "Data Retention",
      content: [
        "Personal information is retained only as long as necessary for business purposes",
        "Contact information may be kept for marketing purposes until you unsubscribe",
        "Usage data is typically retained for 2 years for analytics purposes",
        "Legal requirements may necessitate longer retention periods",
        "You can request deletion of your data at any time"
      ]
    },
    {
      title: "Your Rights and Choices",
      content: [
        "Right to access the personal information we hold about you",
        "Right to correct inaccurate or incomplete information",
        "Right to delete your personal information (subject to legal requirements)",
        "Right to object to or restrict processing of your information",
        "Right to data portability for information you provided to us",
        "Right to withdraw consent for marketing communications"
      ]
    },
    {
      title: "Cookies and Tracking Technologies",
      content: [
        "We use cookies to enhance your browsing experience and analyze website usage",
        "Essential cookies are required for website functionality",
        "Analytics cookies help us understand how visitors use our website",
        "Marketing cookies may be used to show relevant advertisements",
        "You can control cookie preferences through your browser settings"
      ]
    },
    {
      title: "Third-Party Services",
      content: [
        "Our website may contain links to third-party websites",
        "We are not responsible for the privacy practices of third-party sites",
        "We use trusted third-party service providers for various functions",
        "All third-party providers are bound by confidentiality agreements",
        "We regularly review and audit our third-party relationships"
      ]
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 dark:from-blue-950 dark:via-blue-900 dark:to-gray-900 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-xl text-gray-300 mb-4 max-w-3xl">
            Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
          </p>
          <p className="text-gray-400">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg border border-gray-200 dark:border-gray-700 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Introduction</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Insyver Technologies (OPC) Pvt. Ltd. ("we," "our," or "us") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              By using our services or providing us with your information, you consent to the collection, use, and disclosure of your information as described in this Privacy Policy. If you do not agree with our policies and practices, please do not use our services.
            </p>
          </div>

          {/* Sections */}
          {sections.map((section, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg border border-gray-200 dark:border-gray-700 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{index + 1}. {section.title}</h2>
              <ul className="space-y-3">
                {section.content.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start text-gray-700 dark:text-gray-300">
                    <span className="text-blue-600 dark:text-blue-400 mr-3 mt-1 font-bold">•</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Section */}
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg border border-gray-200 dark:border-gray-700 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">9. Contact Us</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Insyver Technologies (OPC) Pvt. Ltd.</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    P. NO-02 Laxman Vihar, Phase II<br />
                    New Colony, Gurgaon - 122001<br />
                    Haryana, India
                  </p>
                </div>
                <div>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Email:</strong> info@insyvertechnologies.com<br />
                    <strong>Phone:</strong> +91 98992 13865<br />
                    <strong>Website:</strong> www.insyvertechnologies.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Changes Section */}
          <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-lg border border-blue-200 dark:border-blue-800">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Changes to This Privacy Policy</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated Privacy Policy on our website and updating the "Last updated" date. Your continued use of our services after any such changes constitutes your acceptance of the updated Privacy Policy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
