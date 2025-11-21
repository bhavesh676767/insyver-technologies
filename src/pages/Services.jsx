import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

export default function Services() {
  const { isDark } = useTheme();
  const services = [
    {
      id: 'ict',
      number: '01',
      title: 'Enterprise Network & ICT Solutions',
      description: 'Build the foundation of digital success with robust, scalable, and secure network systems.',
      expertise: [
        'End-to-end LAN/WAN design & implementation',
        'Data center setup and server configuration',
        'Network performance optimization',
        'Structured cabling and hardware integration',
        'VPN and remote access solutions'
      ],
      benefits: [
        'Increased reliability and uptime',
        'Enhanced connectivity and scalability',
        'Seamless communication between locations',
        'Reduced operational costs'
      ],
      cta: 'Get a Network Assessment'
    },
    {
      id: 'cloud',
      number: '02',
      title: 'Cloud Solutions & Hosting',
      description: 'Accelerate transformation with secure, scalable, and cost-efficient cloud environments.',
      expertise: [
        'Public, private, and hybrid cloud design',
        'AWS, Azure, and Google Cloud migration',
        'Application hosting & virtualization',
        'Cloud cost optimization & security'
      ],
      benefits: [
        'Reduced infrastructure cost',
        'Greater agility and flexibility',
        'Improved collaboration and performance'
      ],
      cta: 'Explore Cloud Solutions'
    },
    {
      id: 'security',
      number: '03',
      title: 'Cybersecurity & Ethical Hacking',
      description: 'Safeguard your assets and data integrity with advanced security services.',
      expertise: [
        'Vulnerability assessment & penetration testing (VAPT)',
        'Ethical hacking simulations',
        'Security hardening & compliance audits',
        'Threat detection & incident response'
      ],
      benefits: [
        'Minimized data breach risks',
        'Real-time threat visibility',
        'Strengthened organizational compliance'
      ],
      cta: 'Request a Security Audit'
    },
    {
      id: 'development',
      number: '04',
      title: 'Web & Mobile App Development',
      description: 'Transform your digital presence with custom websites and mobile applications.',
      expertise: [
        'Full-stack web development (React, Node, Laravel, etc.)',
        'Android and iOS app development',
        'UI/UX design and API integration',
        'Scalable backend systems'
      ],
      benefits: [
        'Modern, responsive designs',
        'Optimized speed and SEO readiness',
        'Intuitive interfaces that boost engagement'
      ],
      cta: 'View Our Work'
    },
    {
      id: 'analytics',
      number: '05',
      title: 'Data Analytics & ERP/CRM Solutions',
      description: 'Turn raw data into real business intelligence with actionable insights.',
      expertise: [
        'Power BI, Tableau & custom dashboards',
        'ERP/CRM implementation and integration',
        'Predictive analytics & data visualization',
        'Database architecture and management'
      ],
      benefits: [
        'Data-driven decision-making',
        'Enhanced operational visibility',
        'Improved ROI and business forecasting'
      ],
      cta: 'Schedule a Consultation'
    },
    {
      id: 'managed-it',
      number: '06',
      title: 'Managed IT Services',
      description: 'Focus on your business while we manage your IT operations 24/7.',
      expertise: [
        'Network and server management',
        'System monitoring and issue resolution',
        'Backup, disaster recovery & patch management',
        'Helpdesk and remote support'
      ],
      benefits: [
        'Reduced downtime',
        'Predictable IT costs',
        '24/7 system health monitoring'
      ],
      cta: 'Talk to Our IT Experts'
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="animate-fade-in-up">
            <div className="inline-block mb-6">
              <span className="text-sm font-medium tracking-wider uppercase text-blue-300 border border-blue-400/30 px-4 py-2 rounded-full backdrop-blur-sm">
                Our Services
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
              Comprehensive Digital &<br />ICT Solutions
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-3xl leading-relaxed">
              Empowering organizations with secure, scalable, and intelligent technology ecosystems that evolve with your business.
            </p>
            <p className="text-base md:text-lg text-gray-400 max-w-3xl leading-relaxed">
              Whether you're migrating to the cloud, building enterprise-grade networks, or strengthening cybersecurity — 
              Insyver Technologies delivers innovation with reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-24 md:space-y-32">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id} 
                className="service-card group"
              >
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start pb-24 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                  {/* Content */}
                  <div className={`space-y-8 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold text-2xl transition-all duration-300 group-hover:bg-blue-600 group-hover:dark:bg-blue-600 group-hover:text-white group-hover:scale-110">
                        {service.number}
                      </div>
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                        {service.title}
                      </h2>
                      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    
                    <div className="space-y-6">
                      <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">Our Expertise</h3>
                      <ul className="space-y-3">
                        {service.expertise.map((item, i) => (
                          <li 
                            key={i} 
                            className="flex items-start gap-3 group/item transition-transform duration-200 hover:translate-x-2"
                          >
                            <span className="flex-shrink-0 w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mt-2.5 transition-all duration-200 group-hover/item:w-2 group-hover/item:h-2"></span>
                            <span className="text-gray-700 dark:text-gray-300 leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-6">
                      <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">Key Benefits</h3>
                      <ul className="space-y-3">
                        {service.benefits.map((item, i) => (
                          <li 
                            key={i} 
                            className="flex items-start gap-3 group/item transition-transform duration-200 hover:translate-x-2"
                          >
                            <svg 
                              className="flex-shrink-0 w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 transition-transform duration-200 group-hover/item:scale-125" 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700 dark:text-gray-300 leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4">
                      <Link 
                        to="/contact" 
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/30 hover:-translate-y-0.5 group/btn"
                      >
                        {service.cta}
                        <svg 
                          className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>

                  {/* Visual */}
                  <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative bg-gradient-to-br from-blue-50 dark:from-blue-900/20 to-slate-50 dark:to-slate-800/20 p-12 md:p-16 rounded-2xl border border-gray-200 dark:border-gray-700 h-80 md:h-96 flex items-center justify-center overflow-hidden transition-all duration-500 hover:shadow-xl hover:border-blue-300 dark:hover:border-blue-600 group-hover:scale-[1.02]">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 dark:from-blue-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="text-center relative z-10">
                        <div className="text-7xl md:text-8xl lg:text-9xl font-bold text-gray-200 dark:text-gray-700 mb-4 transition-all duration-500 group-hover:text-blue-200 dark:group-hover:text-blue-300 group-hover:scale-110">
                          {service.number}
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg font-medium max-w-xs mx-auto leading-snug">
                          {service.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-20 md:py-28 px-6 bg-gradient-to-b from-gray-50 dark:from-gray-800 to-white dark:to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-medium tracking-wider uppercase text-blue-600 dark:text-blue-400 mb-4 block">
              Extended Capabilities
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Additional Services
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Beyond our core offerings, we provide specialized services to complement your digital transformation journey.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: 'Network Design & Infrastructure',
                description: 'Engineer robust networks designed for performance, stability, and future scalability.'
              },
              {
                title: 'Cloud Migration & Optimization',
                description: 'Move your workloads to the cloud with confidence. Seamless, secure, and fully managed.'
              },
              {
                title: 'Security Auditing & Testing',
                description: 'Ensure complete security compliance with structured testing and auditing frameworks.'
              },
              {
                title: 'Custom Applications & Platforms',
                description: 'Build the software your business truly needs — tailored enterprise platforms.'
              },
              {
                title: 'Business Intelligence & ERP',
                description: 'Enable enterprise-wide efficiency with intelligent ERP and BI systems.'
              },
              {
                title: '24/7 Support & Consultancy',
                description: 'Your success doesn\'t clock out — neither do we. Round-the-clock support available.'
              }
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {item.description}
                </p>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-all duration-200 group-hover:gap-3"
                >
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Insyver */}
      <section className="py-20 md:py-28 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-16">
            Why Choose Insyver for Your Services
          </h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'Tailored Solutions',
                description: 'Every solution is customized to your specific business needs and challenges.'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: 'Fast Implementation',
                description: 'Quick deployment without compromising on quality or security.'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                ),
                title: 'Security-First Approach',
                description: 'Every solution built with compliance and resilience at its core.'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                title: 'Business-Aligned',
                description: 'Technology solutions that directly support your business objectives and growth.'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: 'Expert Teams',
                description: 'Certified professionals with proven track records across industries.'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'Global Standards, Local Support',
                description: 'Enterprise-quality delivery with personalized, accessible service.'
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="flex items-start gap-5 group hover:translate-x-2 transition-transform duration-300"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center transition-all duration-300 group-hover:bg-blue-600 dark:group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2 text-lg transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 dark:from-slate-950 dark:via-blue-950 dark:to-gray-950 text-white py-20 md:py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Let's Build the Future of Technology — Together
          </h2>
          <p className="text-lg md:text-xl mb-12 max-w-3xl text-gray-300 leading-relaxed">
            Partner with Insyver Technologies and unlock the full potential of intelligent digital transformation.
          </p>
          <div className="flex gap-4 flex-wrap mb-16">
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/50 hover:-translate-y-0.5"
            >
              Request a Proposal
            </Link>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:-translate-y-0.5"
            >
              Schedule a Call
            </Link>
          </div>
          <div className="pt-8 border-t border-blue-800/50 grid sm:grid-cols-3 gap-6 text-gray-300">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="font-medium text-white">info@insyvertechnologies.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="font-medium text-white">+91 98992 13865</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p className="text-sm text-gray-400">Serving</p>
                <p className="font-medium text-white">India & Global Enterprises</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom CSS */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }

        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 40px 40px;
        }

        .service-card {
          animation: fade-in-up 0.6s ease-out;
        }

        .service-card:nth-child(even) {
          animation-delay: 0.1s;
        }
      `}</style>
    </div>
  );
}
