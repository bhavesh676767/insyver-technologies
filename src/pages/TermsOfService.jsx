import React from 'react';

export default function TermsOfService() {
  const sections = [
    {
      title: "Acceptance of Terms",
      content: [
        "By accessing and using Insyver Technologies' services, you accept and agree to be bound by the terms and provision of this agreement.",
        "If you do not agree to abide by the above, please do not use this service.",
        "These terms apply to all visitors, users, and others who access or use our services.",
        "We reserve the right to modify these terms at any time without prior notice."
      ]
    },
    {
      title: "Description of Service",
      content: [
        "Insyver Technologies provides comprehensive IT solutions including network infrastructure, cloud services, cybersecurity, and software development.",
        "Services are provided on a project basis or through managed service agreements.",
        "We reserve the right to modify, suspend, or discontinue any service at any time.",
        "Service availability may be affected by maintenance, updates, or unforeseen circumstances."
      ]
    },
    {
      title: "User Responsibilities",
      content: [
        "You are responsible for maintaining the confidentiality of your account credentials.",
        "You agree to provide accurate and complete information when using our services.",
        "You are responsible for all activities that occur under your account.",
        "You agree not to use our services for any illegal or unauthorized purpose.",
        "You must comply with all applicable laws and regulations when using our services."
      ]
    },
    {
      title: "Intellectual Property Rights",
      content: [
        "All content, features, and functionality of our services are owned by Insyver Technologies.",
        "You may not reproduce, distribute, or create derivative works without explicit permission.",
        "Our trademarks, service marks, and trade dress may not be used without permission.",
        "We respect the intellectual property rights of others and expect our users to do the same."
      ]
    },
    {
      title: "Service Fees and Payment",
      content: [
        "Service fees are agreed upon in writing before project commencement.",
        "Payment terms are specified in individual service agreements.",
        "Late payments may result in service suspension or additional charges.",
        "All fees are exclusive of applicable taxes unless otherwise stated.",
        "We reserve the right to modify pricing with 30 days advance notice."
      ]
    },
    {
      title: "Confidentiality and Data Protection",
      content: [
        "We maintain strict confidentiality of all client information and project details.",
        "Data protection measures comply with applicable privacy laws and regulations.",
        "We implement industry-standard security measures to protect client data.",
        "Confidential information excludes publicly available information or prior knowledge.",
        "Confidentiality obligations survive termination of our agreement."
      ]
    },
    {
      title: "Limitation of Liability",
      content: [
        "Our liability is limited to the amount paid for services in the preceding 12 months.",
        "We are not liable for indirect, incidental, or consequential damages.",
        "We are not responsible for third-party services or products.",
        "Our liability does not extend to acts of nature, war, or other force majeure events.",
        "You agree to indemnify us against claims arising from your use of our services."
      ]
    },
    {
      title: "Warranties and Disclaimers",
      content: [
        "Services are provided 'as is' without warranty of any kind.",
        "We do not warrant that services will be uninterrupted or error-free.",
        "We disclaim all warranties, express or implied, including merchantability.",
        "Results may vary based on specific circumstances and requirements.",
        "Client satisfaction is our goal, but outcomes are not guaranteed."
      ]
    },
    {
      title: "Termination",
      content: [
        "Either party may terminate services with written notice as specified in agreements.",
        "Upon termination, you remain liable for all outstanding fees.",
        "We may terminate services immediately for breach of these terms.",
        "Data backup and retrieval responsibilities are defined in service agreements.",
        "Termination does not relieve either party of obligations incurred prior to termination."
      ]
    },
    {
      title: "Governing Law and Dispute Resolution",
      content: [
        "These terms are governed by the laws of India.",
        "Disputes shall be resolved through arbitration in Gurgaon, Haryana.",
        "Both parties agree to submit to the exclusive jurisdiction of Indian courts.",
        "Arbitration shall be conducted under the Arbitration and Conciliation Act, 1996.",
        "The prevailing party shall be entitled to recover reasonable attorney's fees."
      ]
    },
    {
      title: "Miscellaneous Provisions",
      content: [
        "These terms constitute the entire agreement between the parties.",
        "Severability clause ensures invalid provisions don't affect the entire agreement.",
        "Waiver of any provision requires written consent from both parties.",
        "Notices shall be delivered via email or registered mail to official addresses.",
        "This agreement benefits and binds the parties and their respective successors."
      ]
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 dark:from-blue-950 dark:via-blue-900 dark:to-gray-900 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Terms of Service</h1>
          <p className="text-xl text-gray-300 mb-4 max-w-3xl">
            Please read these terms carefully before using our services. By using Insyver Technologies' services, you agree to be bound by these terms.
          </p>
          <p className="text-gray-400">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          {/* Overview */}
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg border border-gray-200 dark:border-gray-700 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Agreement Overview</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              These Terms of Service ("Terms") govern your use of the services provided by Insyver Technologies (OPC) Pvt. Ltd. ("Company," "we," "our," or "us"). By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of these terms, then you may not access our services.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Our services include but are not limited to technology consulting, network infrastructure, cloud solutions, cybersecurity services, software development, and managed IT services. These terms apply to all users of our services, whether accessed through our website, mobile applications, or other platforms.
            </p>
          </div>

          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg border border-gray-200 dark:border-gray-700 mb-8"
            >
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

          <div
            className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg border border-gray-200 dark:border-gray-700 mb-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">12. Contact Information</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please contact us:
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

          <div
            className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-lg border border-blue-200 dark:border-blue-800"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Acceptance of Terms</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, please discontinue use of our services immediately. Your continued use of our services constitutes acceptance of these terms and any future modifications.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
