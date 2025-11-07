import React from 'react';
import { motion } from 'framer-motion';

const TermsOfService = () => {
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
    <div className="min-h-screen bg-background-900">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6">
              Terms of
              <span className="block text-accent-500">Service</span>
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary mb-8 max-w-4xl mx-auto">
              Please read these terms carefully before using our services. By using Insyver Technologies' services, you agree to be bound by these terms.
            </p>
            <div className="text-text-secondary">
              <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-background-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="bg-background-900 p-8 rounded-xl border border-primary-700 mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">Agreement Overview</h2>
              <p className="text-text-secondary leading-relaxed">
                These Terms of Service ("Terms") govern your use of the services provided by Insyver Technologies (OPC) Pvt. Ltd. ("Company," "we," "our," or "us"). By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of these terms, then you may not access our services.
              </p>
              <p className="text-text-secondary leading-relaxed mt-4">
                Our services include but are not limited to technology consulting, network infrastructure, cloud solutions, cybersecurity services, software development, and managed IT services. These terms apply to all users of our services, whether accessed through our website, mobile applications, or other platforms.
              </p>
            </div>
          </motion.div>

          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-background-900 p-8 rounded-xl border border-primary-700 mb-8"
            >
              <h2 className="text-2xl font-bold text-text-primary mb-6">{index + 1}. {section.title}</h2>
              <ul className="space-y-3">
                {section.content.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start text-text-secondary">
                    <span className="text-accent-500 mr-3 mt-1">•</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-background-900 p-8 rounded-xl border border-primary-700 mb-8"
          >
            <h2 className="text-2xl font-bold text-text-primary mb-6">12. Contact Information</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-primary-800 p-6 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-text-primary mb-2">Insyver Technologies (OPC) Pvt. Ltd.</h3>
                  <p className="text-text-secondary">
                    P. NO-02 Laxman Vihar, Phase II<br />
                    New Colony, Gurgaon - 122001<br />
                    Haryana, India
                  </p>
                </div>
                <div>
                  <p className="text-text-secondary">
                    <strong>Email:</strong> info@insyvertechnologies.com<br />
                    <strong>Phone:</strong> +91 98992 13865<br />
                    <strong>Website:</strong> www.insyvertechnologies.com
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-accent-500/10 border border-accent-500/30 p-8 rounded-xl"
          >
            <h2 className="text-2xl font-bold text-text-primary mb-4">Acceptance of Terms</h2>
            <p className="text-text-secondary leading-relaxed">
              By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, please discontinue use of our services immediately. Your continued use of our services constitutes acceptance of these terms and any future modifications.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
