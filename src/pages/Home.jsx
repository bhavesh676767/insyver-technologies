import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaRocket, FaLightbulb, FaClock, FaGlobe } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative py-32 px-6 overflow-hidden bg-gradient-to-br from-blue-50 dark:from-gray-900 via-white dark:via-gray-950 to-blue-50 dark:to-gray-900">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-50 dark:opacity-30"></div>
        <div className="absolute bottom-0 left-0 -z-10 w-96 h-96 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-3xl opacity-50 dark:opacity-30"></div>

        <div className="max-w-6xl mx-auto relative">
          <div className="animate-slideInUp">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 dark:from-white to-gray-700 dark:to-gray-400">
              Insyver Technologies
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold text-blue-600 dark:text-blue-400 mb-8">
              Intelligent Systems. Ever Evolving.
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6 max-w-3xl leading-relaxed">
              Transforming businesses through intelligent technology solutions that drive innovation, efficiency, and growth.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-3xl leading-relaxed">
              Your trusted partner for digital excellence, infrastructure modernization, and enterprise innovation — 
              in Gurgaon, Delhi NCR, and beyond.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95"
              >
                Get a Free Consultation
              </Link>
              <Link 
                to="/services" 
                className="px-8 py-4 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950 rounded-lg font-semibold transition-all duration-300 active:scale-95"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section Preview */}
      <section className="py-24 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 animate-slideInLeft">
            About Insyver Technologies
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-blue-400 rounded mb-8"></div>
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              Founded in Gurgaon, Insyver Technologies (OPC) Pvt. Ltd. is redefining how businesses evolve through intelligent,
              secure, and scalable digital systems.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
              We specialize in ICT infrastructure, cybersecurity, cloud solutions, and enterprise-grade software,
              delivering customized technologies that fuel sustainable growth.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
              Our team of certified engineers, developers, and cybersecurity experts ensures every project aligns
              technology with real business value.
            </p>
          </div>
          <Link 
            to="/about" 
            className="inline-block mt-8 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-semibold text-lg hover-scale"
          >
            Learn More About Us →
          </Link>
        </div>
      </section>

      {/* Core Services Overview */}
      <section className="py-24 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">Our Core Services Overview</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-blue-400 rounded mb-8"></div>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-16 max-w-3xl">
            Comprehensive Digital Solutions. From infrastructure to innovation — we provide end-to-end ICT and
            digital transformation services built for scalability, performance, and security.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Cards */}
            {[
              { title: 'Enterprise Network & ICT Infrastructure', desc: 'Build robust, scalable, and secure network systems — the foundation of modern enterprise operations.' },
              { title: 'Cloud Solutions & Hosting', desc: 'Adopt the cloud with confidence. We deliver migration, hosting, and multi-cloud management strategies.' },
              { title: 'Cybersecurity & Ethical Hacking', desc: 'Stay ahead of cyber threats. Our ethical hacking services identify vulnerabilities before attackers do.' },
              { title: 'Web & Mobile App Development', desc: 'From sleek websites to scalable enterprise apps — our development team crafts digital experiences.' },
              { title: 'Data Analytics & ERP/CRM Solutions', desc: 'Unlock insights and efficiency. We design data-driven dashboards and predictive models.' },
              { title: 'Managed IT Services & Consultancy', desc: 'Focus on your business — we\'ll manage your technology. 24/7 managed IT support and monitoring.' },
            ].map((service, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-8 hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 card">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{service.title}</h3>
                <p className="text-gray-700 dark:text-gray-400 mb-6">
                  {service.desc}
                </p>
                <Link to="/services" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-semibold inline-flex items-center gap-2">
                  Learn More <span>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="animate-slideInLeft">
              <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Our Mission</h3>
              <div className="h-1 w-16 bg-gradient-to-r from-blue-600 to-blue-400 rounded mb-6"></div>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                To deliver future-proof, customized digital solutions that drive efficiency, innovation, and security
                in an ever-evolving technological world. We commit to empowering businesses with scalable, secure, and
                intelligent systems that solve real challenges and create sustainable value.
              </p>
            </div>
            <div className="animate-slideInRight">
              <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Our Vision</h3>
              <div className="h-1 w-16 bg-gradient-to-r from-blue-600 to-blue-400 rounded mb-6"></div>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                To become a leading force in building India's digital backbone and expanding globally with trustworthy,
                scalable, and intelligent ICT solutions. We envision a future where every organization, regardless of size,
                has access to enterprise-grade technology and expert guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">Why Choose Insyver Technologies</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-blue-400 rounded mb-16"></div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 animate-slideInLeft">
              {[
                'Certified experts in ICT, Cloud, and Cybersecurity',
                'End-to-end digital transformation partner',
                'Scalable and secure technology frameworks',
                '24/7 support and proactive management'
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 dark:bg-blue-400 flex items-center justify-center mt-1">
                    <span className="text-white dark:text-gray-900 text-sm font-bold">✓</span>
                  </div>
                  <p className="text-lg text-gray-700 dark:text-gray-300 font-semibold">{item}</p>
                </div>
              ))}
            </div>
            <div className="space-y-6 animate-slideInRight">
              {[
                'Proven track record across industries',
                'Innovation-driven approach',
                'Transparent communication & reporting',
                'Enterprise-grade security standards'
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 dark:bg-blue-400 flex items-center justify-center mt-1">
                    <span className="text-white dark:text-gray-900 text-sm font-bold">✓</span>
                  </div>
                  <p className="text-lg text-gray-700 dark:text-gray-300 font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 p-8 bg-gradient-to-r from-blue-600/10 dark:from-blue-400/10 to-purple-600/10 dark:to-purple-400/10 rounded-xl border border-blue-200 dark:border-blue-800">
            <p className="text-center text-2xl font-semibold text-gray-900 dark:text-white">
              We don't just implement technology — we engineer progress.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-blue-400 rounded mb-16"></div>
          
          <div className="space-y-6">
            {[
              { q: 'What industries do you serve?', a: 'We serve clients across IT, finance, manufacturing, healthcare, education, logistics, and government sectors, providing tailor-made digital infrastructure.' },
              { q: 'Do you provide 24/7 technical support?', a: 'Yes. Our round-the-clock managed IT support ensures uninterrupted business operations and rapid issue resolution.' },
              { q: 'How do you ensure data security?', a: 'We follow ISO-compliant, multi-layered cybersecurity protocols — including encryption, access control, and threat detection systems.' },
              { q: 'Can you assist with complete digital transformation?', a: 'Absolutely. From cloud migration to cybersecurity, we provide end-to-end modernization strategies for enterprises of all sizes.' },
            ].map((faq, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 hover-lift card">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{faq.q}</h3>
                <p className="text-gray-700 dark:text-gray-400">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-6 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 dark:from-blue-900 dark:via-blue-950 dark:to-gray-950 text-white overflow-hidden">
        {/* Decorative background */}
        <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Partner with Insyver Technologies — your trusted ally for digital excellence and sustainable growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { title: 'Quick Response', desc: 'Get a detailed project proposal within 24 hours.' },
              { title: 'Expert Team', desc: 'Certified professionals with years of industry experience.' },
              { title: 'Proven Results', desc: 'Strong portfolio across diverse industries.' },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                <p className="text-white/80">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex gap-4 flex-wrap justify-center">
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95"
            >
              Start Your Digital Transformation
            </Link>
            <Link 
              to="/contact" 
              className="px-8 py-4 border-2 border-white text-white hover:bg-white/10 rounded-lg font-semibold transition-all duration-300 active:scale-95"
            >
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
