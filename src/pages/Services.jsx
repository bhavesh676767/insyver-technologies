import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaRocket,
  FaNetworkWired,
  FaCloud,
  FaShieldAlt,
  FaCode,
  FaChartLine,
  FaHeadset,
  FaCheckCircle,
  FaArrowRight,
  FaStar,
  FaClock,
  FaUsers,
  FaGlobe,
  FaAward,
  FaLightbulb,
  FaHandshake,
  FaCog,
  FaDatabase,
  FaMobileAlt,
  FaServer,
  FaLock,
  FaSearch,
  FaTools
} from 'react-icons/fa';

const Services = () => {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      id: 'enterprise-network',
      icon: <FaNetworkWired className="w-12 h-12" />,
      title: "Enterprise Network & ICT Solutions",
      overview: "Comprehensive network infrastructure design, implementation, and management for modern enterprises.",
      expertise: [
        "Network Architecture Design",
        "LAN/WAN Implementation",
        "Wireless Network Solutions",
        "Network Security Integration",
        "Unified Communications",
        "SD-WAN Solutions"
      ],
      benefits: [
        "Improved network performance and reliability",
        "Enhanced security and compliance",
        "Scalable infrastructure for growth",
        "Reduced downtime and maintenance costs",
        "Future-ready technology stack"
      ],
      whyInsyver: "15+ years of network engineering experience with certifications from Cisco, Juniper, and Microsoft.",
      cta: "Optimize Your Network Infrastructure"
    },
    {
      id: 'network-design',
      icon: <FaRocket className="w-12 h-12" />,
      title: "Network Design & Infrastructure",
      overview: "Strategic network planning and infrastructure development to support your business objectives.",
      expertise: [
        "Infrastructure Assessment",
        "Capacity Planning",
        "Technology Roadmap",
        "Vendor Selection",
        "Implementation Strategy",
        "Migration Planning"
      ],
      benefits: [
        "Optimized network performance",
        "Cost-effective solutions",
        "Future-proof architecture",
        "Improved user experience",
        "Business continuity assurance"
      ],
      whyInsyver: "Proven track record with 500+ network design projects across various industries.",
      cta: "Design Your Future Network"
    },
    {
      id: 'cloud-solutions',
      icon: <FaCloud className="w-12 h-12" />,
      title: "Cloud Solutions & Hosting",
      overview: "Complete cloud migration, hosting, and management services for digital transformation.",
      expertise: [
        "Cloud Strategy & Consulting",
        "Multi-Cloud Architecture",
        "Cloud Migration Services",
        "Infrastructure as Code",
        "Cloud Security",
        "Cost Optimization"
      ],
      benefits: [
        "Reduced infrastructure costs",
        "Improved scalability and flexibility",
        "Enhanced disaster recovery",
        "Global accessibility",
        "Automatic updates and maintenance"
      ],
      whyInsyver: "AWS, Azure, and GCP certified professionals with extensive cloud implementation experience.",
      cta: "Accelerate Your Cloud Journey"
    },
    {
      id: 'cloud-migration',
      icon: <FaServer className="w-12 h-12" />,
      title: "Cloud Migration & Optimization",
      overview: "Seamless migration to cloud platforms with performance optimization and cost management.",
      expertise: [
        "Migration Assessment",
        "Data Migration",
        "Application Refactoring",
        "Performance Tuning",
        "Cost Analysis",
        "Post-Migration Support"
      ],
      benefits: [
        "Minimized migration downtime",
        "Optimized cloud costs",
        "Improved application performance",
        "Enhanced security posture",
        "Better resource utilization"
      ],
      whyInsyver: "Specialized migration frameworks and tools for zero-downtime transitions.",
      cta: "Migrate to Cloud Efficiently"
    },
    {
      id: 'cybersecurity',
      icon: <FaShieldAlt className="w-12 h-12" />,
      title: "Cybersecurity & Ethical Hacking",
      overview: "Comprehensive security solutions including penetration testing, vulnerability assessment, and compliance.",
      expertise: [
        "Penetration Testing",
        "Vulnerability Assessment",
        "Security Audits",
        "Incident Response",
        "Compliance Consulting",
        "Security Training"
      ],
      benefits: [
        "Proactive threat detection",
        "Regulatory compliance",
        "Reduced security risks",
        "Incident prevention",
        "Peace of mind"
      ],
      whyInsyver: "Certified ethical hackers with CEH, OSCP, and CISSP certifications.",
      cta: "Secure Your Digital Assets"
    },
    {
      id: 'security-auditing',
      icon: <FaSearch className="w-12 h-12" />,
      title: "Security Auditing & Testing",
      overview: "Thorough security assessments and testing to identify and mitigate potential vulnerabilities.",
      expertise: [
        "Risk Assessment",
        "Compliance Audits",
        "Web Application Testing",
        "Network Security Testing",
        "Social Engineering Tests",
        "Security Policy Review"
      ],
      benefits: [
        "Comprehensive security coverage",
        "Detailed vulnerability reports",
        "Remediation guidance",
        "Compliance assurance",
        "Risk mitigation strategies"
      ],
      whyInsyver: "Industry-leading testing methodologies with detailed reporting and actionable insights.",
      cta: "Audit Your Security Posture"
    },
    {
      id: 'web-development',
      icon: <FaCode className="w-12 h-12" />,
      title: "Web & Mobile Development",
      overview: "Custom web applications and mobile solutions built with modern technologies and best practices.",
      expertise: [
        "Full-Stack Development",
        "Progressive Web Apps",
        "Mobile App Development",
        "E-commerce Solutions",
        "API Development",
        "UI/UX Design"
      ],
      benefits: [
        "Modern, responsive designs",
        "Cross-platform compatibility",
        "Scalable architecture",
        "Enhanced user experience",
        "SEO optimization"
      ],
      whyInsyver: "Expert developers with experience in React, Node.js, Flutter, and modern web technologies.",
      cta: "Build Your Digital Presence"
    },
    {
      id: 'custom-applications',
      icon: <FaMobileAlt className="w-12 h-12" />,
      title: "Custom Applications & Platforms",
      overview: "Tailored software solutions designed to meet your specific business requirements and workflows.",
      expertise: [
        "Requirements Analysis",
        "Custom Software Development",
        "System Integration",
        "Legacy System Modernization",
        "Workflow Automation",
        "Database Design"
      ],
      benefits: [
        "Tailored to your needs",
        "Improved operational efficiency",
        "Competitive advantage",
        "Scalable solutions",
        "Future-ready architecture"
      ],
      whyInsyver: "Agile development methodology with focus on quality, testing, and documentation.",
      cta: "Create Your Custom Solution"
    },
    {
      id: 'data-analytics',
      icon: <FaChartLine className="w-12 h-12" />,
      title: "Data Analytics & ERP/CRM Solutions",
      overview: "Business intelligence, data analytics, and comprehensive ERP/CRM implementations.",
      expertise: [
        "Business Intelligence",
        "Data Warehousing",
        "ERP Implementation",
        "CRM Solutions",
        "Data Visualization",
        "Predictive Analytics"
      ],
      benefits: [
        "Data-driven decision making",
        "Improved operational insights",
        "Enhanced customer relationships",
        "Increased productivity",
        "Competitive intelligence"
      ],
      whyInsyver: "Certified consultants in SAP, Oracle, Salesforce, and Microsoft Dynamics platforms.",
      cta: "Unlock Your Data Potential"
    },
    {
      id: 'business-intelligence',
      icon: <FaDatabase className="w-12 h-12" />,
      title: "Business Intelligence & ERP",
      overview: "Advanced business intelligence solutions and enterprise resource planning systems.",
      expertise: [
        "BI Dashboard Development",
        "ERP System Integration",
        "Data Modeling",
        "Reporting Solutions",
        "Performance Analytics",
        "Real-time Monitoring"
      ],
      benefits: [
        "Real-time business insights",
        "Streamlined operations",
        "Better resource allocation",
        "Improved decision making",
        "Increased profitability"
      ],
      whyInsyver: "End-to-end BI and ERP implementation with post-deployment support and training.",
      cta: "Transform Your Business Intelligence"
    },
    {
      id: 'managed-services',
      icon: <FaHeadset className="w-12 h-12" />,
      title: "Managed IT Services",
      overview: "Comprehensive IT management and support services to keep your systems running optimally.",
      expertise: [
        "IT Infrastructure Management",
        "System Monitoring",
        "Help Desk Support",
        "Backup & Recovery",
        "Patch Management",
        "Performance Optimization"
      ],
      benefits: [
        "Reduced IT costs",
        "Predictable budgeting",
        "24/7 system availability",
        "Proactive maintenance",
        "Expert technical support"
      ],
      whyInsyver: "24/7 NOC operations with certified technicians and advanced monitoring tools.",
      cta: "Outsource Your IT Management"
    },
    {
      id: 'support-consultancy',
      icon: <FaTools className="w-12 h-12" />,
      title: "24/7 Support & Consultancy",
      overview: "Round-the-clock technical support and strategic technology consulting services.",
      expertise: [
        "24/7 Technical Support",
        "Strategic Consulting",
        "Technology Planning",
        "Vendor Management",
        "Project Management",
        "Knowledge Transfer"
      ],
      benefits: [
        "Always-available support",
        "Strategic technology guidance",
        "Reduced response times",
        "Expert problem resolution",
        "Continuous improvement"
      ],
      whyInsyver: "Dedicated support teams with deep technical expertise and industry knowledge.",
      cta: "Get Expert Support & Guidance"
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      position: "CTO, TechCorp India",
      content: "Insyver's network infrastructure design exceeded our expectations. Their expertise in enterprise networking is unmatched.",
      rating: 5,
      service: "Enterprise Network Solutions"
    },
    {
      name: "Priya Sharma",
      position: "CEO, Innovate Solutions",
      content: "The custom ERP solution transformed our operations completely. Outstanding implementation and support.",
      rating: 5,
      service: "ERP/CRM Solutions"
    },
    {
      name: "Amit Patel",
      position: "Director, Global Systems Ltd",
      content: "Their cybersecurity services gave us peace of mind. Professional, thorough, and highly effective.",
      rating: 5,
      service: "Cybersecurity"
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
              Comprehensive Technology
              <span className="block text-accent-500">Solutions & Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary mb-8 max-w-4xl mx-auto">
              From network infrastructure to cloud solutions, cybersecurity to custom development -
              we deliver end-to-end technology services that drive your business forward.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">Our Service Portfolio</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Explore our comprehensive range of technology services designed to meet every aspect of your digital needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-background-900 p-8 rounded-xl border border-primary-700 hover:border-accent-500 transition-all duration-300 group cursor-pointer"
                onClick={() => setActiveService(activeService === service.id ? null : service.id)}
              >
                <div className="text-accent-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-4">{service.title}</h3>
                <p className="text-text-secondary mb-4">{service.overview}</p>

                <AnimatePresence>
                  {activeService === service.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-6 pt-6 border-t border-primary-700"
                    >
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-text-primary mb-2">Expertise Areas:</h4>
                          <ul className="grid grid-cols-1 gap-1">
                            {service.expertise.map((item, idx) => (
                              <li key={idx} className="flex items-center text-sm text-text-secondary">
                                <FaCheckCircle className="w-3 h-3 text-accent-500 mr-2 flex-shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-text-primary mb-2">Key Benefits:</h4>
                          <ul className="space-y-1">
                            {service.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-start text-sm text-text-secondary">
                                <FaCheckCircle className="w-3 h-3 text-accent-500 mr-2 mt-0.5 flex-shrink-0" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-primary-800 p-4 rounded-lg">
                          <h4 className="font-semibold text-accent-500 mb-2">Why Choose Insyver:</h4>
                          <p className="text-sm text-text-secondary">{service.whyInsyver}</p>
                        </div>

                        <Link
                          to="/contact"
                          className="inline-flex items-center space-x-2 bg-accent-500 hover:bg-accent-400 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 w-full justify-center"
                        >
                          <span>{service.cta}</span>
                          <FaArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="flex items-center justify-between mt-4">
                  <span className="text-sm text-accent-500 font-medium">
                    {activeService === service.id ? 'Show Less' : 'Learn More'}
                  </span>
                  <FaArrowRight className={`w-4 h-4 text-accent-500 transition-transform duration-300 ${
                    activeService === service.id ? 'rotate-90' : ''
                  }`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-background-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">Why Choose Our Services</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              What sets Insyver apart in delivering exceptional technology solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <FaAward />, title: "Certified Experts", desc: "Industry-certified professionals with proven expertise" },
              { icon: <FaClock />, title: "Timely Delivery", desc: "Committed to delivering projects on time and within budget" },
              { icon: <FaUsers />, title: "Dedicated Teams", desc: "Personalized attention with dedicated project teams" },
              { icon: <FaShieldAlt />, title: "Quality Assurance", desc: "Rigorous testing and quality control processes" },
              { icon: <FaGlobe />, title: "Global Standards", desc: "International best practices and compliance standards" },
              { icon: <FaLightbulb />, title: "Innovation Focus", desc: "Cutting-edge technologies and innovative solutions" },
              { icon: <FaHandshake />, title: "Partnership Approach", desc: "Long-term partnerships, not just transactions" },
              { icon: <FaHeadset />, title: "24/7 Support", desc: "Round-the-clock technical support and maintenance" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-background-800 p-6 rounded-xl border border-primary-700 hover:border-accent-500 transition-all duration-300 text-center"
              >
                <div className="text-accent-500 mb-4 text-3xl mx-auto w-fit">{item.icon}</div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">{item.title}</h3>
                <p className="text-text-secondary text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-background-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">Client Success Stories</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Real results from real clients who trusted us with their technology needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-background-900 p-8 rounded-xl border border-primary-700"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="w-4 h-4 text-accent-500" />
                  ))}
                </div>
                <p className="text-text-secondary mb-6 italic">"{testimonial.content}"</p>
                <div className="border-t border-primary-700 pt-4">
                  <div className="font-semibold text-text-primary">{testimonial.name}</div>
                  <div className="text-text-secondary text-sm">{testimonial.position}</div>
                  <div className="text-accent-500 text-sm mt-1">{testimonial.service}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-900 via-primary-800 to-accent-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-text-secondary mb-8">
              Let's discuss how our comprehensive technology services can help you achieve your goals.
              Get a free consultation and discover the perfect solution for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-accent-500 hover:bg-accent-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Your Free Consultation
              </Link>
              <Link
                to="/about"
                className="border-2 border-text-primary text-text-primary hover:bg-text-primary hover:text-background-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Learn About Our Expertise
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
