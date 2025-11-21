import React from 'react';

export default function CookiePolicy() {
  const sections = [
    {
      title: "What Are Cookies",
      content: [
        "Cookies are small text files stored on your device when you visit our website",
        "They help us provide a better browsing experience and analyze website usage",
        "Cookies can be session-based (temporary) or persistent (stored longer-term)",
        "We use both first-party cookies (set by our website) and third-party cookies",
        "Cookies contain information about your browsing preferences and activity"
      ]
    },
    {
      title: "Types of Cookies We Use",
      content: [
        "Essential cookies: Required for website functionality and security",
        "Analytics cookies: Help us understand how visitors use our website",
        "Functional cookies: Remember your preferences and settings",
        "Marketing cookies: Used to deliver relevant advertisements",
        "Third-party cookies: Set by trusted partners for specific services",
        "Session cookies: Temporary cookies that expire when you close your browser"
      ]
    },
    {
      title: "How We Use Cookies",
      content: [
        "To ensure our website functions properly and securely",
        "To remember your preferences and login status",
        "To analyze website traffic and user behavior patterns",
        "To improve our services based on usage data",
        "To provide personalized content and recommendations",
        "To measure the effectiveness of our marketing campaigns"
      ]
    },
    {
      title: "Managing Your Cookie Preferences",
      content: [
        "You can control cookies through your browser settings",
        "Most browsers allow you to block or delete cookies",
        "Disabling cookies may affect website functionality",
        "You can opt out of non-essential cookies using our cookie banner",
        "Cookie preferences are stored locally on your device",
        "You can change your preferences at any time"
      ]
    },
    {
      title: "Third-Party Cookies",
      content: [
        "We use trusted third-party services that may set their own cookies",
        "These include analytics providers, social media platforms, and advertising networks",
        "Third-party cookies are subject to their respective privacy policies",
        "We carefully select partners who comply with data protection regulations",
        "You can opt out of third-party cookies through their respective websites",
        "We regularly review our third-party relationships for compliance"
      ]
    },
    {
      title: "Cookie Retention",
      content: [
        "Session cookies are deleted when you close your browser",
        "Persistent cookies remain until deleted or expired",
        "Essential cookies typically last for your browsing session",
        "Analytics cookies are usually retained for 2 years",
        "Marketing cookies may be stored for up to 2 years",
        "You can delete cookies at any time through your browser"
      ]
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 dark:from-blue-950 dark:via-blue-900 dark:to-gray-900 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Cookie Policy</h1>
          <p className="text-xl text-gray-300 mb-4 max-w-3xl">
            This policy explains how we use cookies and similar technologies to improve your experience on our website.
          </p>
          <p className="text-gray-400">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Cookie Policy Content */}
      <section className="py-20 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          {/* Overview */}
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg border border-gray-200 dark:border-gray-700 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Cookie Policy Overview</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              This Cookie Policy explains how Insyver Technologies (OPC) Pvt. Ltd. ("we," "our," or "us") uses cookies and similar technologies on our website. By using our website, you consent to the use of cookies in accordance with this policy.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Cookies are essential for providing you with a personalized and efficient browsing experience. They help us understand how you use our website and allow us to improve our services. You can control your cookie preferences, but please note that disabling certain cookies may affect the functionality of our website.
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
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">7. Updates to This Policy</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website and updating the "Last updated" date.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Your continued use of our website after any such changes constitutes your acceptance of the updated Cookie Policy. We encourage you to review this policy periodically to stay informed about our cookie practices.
            </p>
          </div>

          <div
            className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg border border-gray-200 dark:border-gray-700 mb-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">8. Contact Us</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              If you have any questions about this Cookie Policy or our use of cookies, please contact us:
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
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Cookie Consent</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              By continuing to use our website, you consent to the use of cookies as described in this policy. You can withdraw your consent or modify your cookie preferences at any time by adjusting your browser settings or contacting us directly. However, please note that some features of our website may not function properly without certain cookies.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
