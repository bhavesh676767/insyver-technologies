import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
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
              Privacy
              <span className="block text-accent-500">Policy</span>
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary mb-8 max-w-4xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
            </p>
            <div className="text-text-secondary">
              <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20 bg-background-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="bg-background-900 p-8 rounded-xl border border-primary-700 mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">Introduction</h2>
              <p className="text-text-secondary leading-relaxed">
                Insyver Technologies (OPC) Pvt. Ltd. ("we," "our," or "us") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us.
              </p>
              <p className="text-text-secondary leading-relaxed mt-4">
                By using our services or providing us with your information, you consent to the collection, use, and disclosure of your information as described in this Privacy Policy. If you do not agree with our policies and practices, please do not use our services.
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
            <h2 className="text-2xl font-bold text-text-primary mb-6">9. Contact Us</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or our privacy practices, please contact us:
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
            <h2 className="text-2xl font-bold text-text-primary mb-4">Changes to This Privacy Policy</h2>
            <p className="text-text-secondary leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated Privacy Policy on our website and updating the "Last updated" date. Your continued use of our services after any such changes constitutes your acceptance of the updated Privacy Policy.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
