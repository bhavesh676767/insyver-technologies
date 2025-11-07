import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaRocket,
  FaShieldAlt,
  FaCloud,
  FaCode,
  FaChartLine,
  FaHeadset,
  FaCheckCircle,
  FaArrowRight,
  FaQuoteLeft,
  FaStar,
  FaUsers,
  FaGlobe,
  FaAward,
  FaLightbulb,
  FaHandshake,
  FaChevronDown
} from 'react-icons/fa';

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Rajesh Kumar",
      position: "CTO, TechCorp India",
      content: "Insyver Technologies transformed our entire IT infrastructure. Their expertise in cloud migration and cybersecurity is unmatched.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      position: "CEO, Innovate Solutions",
      content: "The custom ERP solution delivered by Insyver has increased our operational efficiency by 40%. Exceptional service and support.",
      rating: 5
    },
    {
      name: "Amit Patel",
      position: "Director, Global Systems Ltd",
      content: "Outstanding network infrastructure design and 24/7 support. Insyver is our trusted technology partner.",
      rating: 5
    }
  ];

  const services = [
    {
      icon: <FaRocket className="w-8 h-8" />,
      title: "Enterprise Network Solutions",
      description: "Comprehensive ICT solutions for modern enterprises"
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "Cybersecurity",
      description: "Advanced security auditing and ethical hacking services"
    },
    {
      icon: <FaCloud className="w-8 h-8" />,
      title: "Cloud Solutions",
      description: "Migration, hosting, and optimization services"
    },
    {
      icon: <FaCode className="w-8 h-8" />,
      title: "Web & Mobile Development",
      description: "Custom applications and digital platforms"
    },
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: "Data Analytics",
      description: "Business intelligence and ERP/CRM solutions"
    },
    {
      icon: <FaHeadset className="w-8 h-8" />,
      title: "24/7 Support",
      description: "Round-the-clock managed IT services"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" },
    { number: "15+", label: "Years Experience" }
  ];

  const faqs = [
    {
      question: "What services does Insyver Technologies offer?",
      answer: "We offer comprehensive IT solutions including enterprise networking, cybersecurity, cloud services, web/mobile development, data analytics, and 24/7 managed IT support."
    },
    {
      question: "Do you provide 24/7 technical support?",
      answer: "Yes, we provide round-the-clock technical support and managed IT services to ensure your systems are always running optimally."
    },
    {
      question: "What industries do you serve?",
      answer: "We serve clients across various industries including healthcare, finance, manufacturing, retail, education, and government sectors."
    },
    {
      question: "How do you ensure data security?",
      answer: "We implement industry-leading security measures, conduct regular audits, and follow best practices for data protection and compliance."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-400/10 rounded-full blur-3xl animate-pulse-slow"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-6">
              Insyver Technologies
              <span className="block text-accent-500 animate-gradient bg-gradient-to-r from-accent-500 via-primary-300 to-accent-400 bg-clip-text text-transparent">
                Intelligent Systems. Ever Evolving.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary mb-8 max-w-3xl mx-auto">
              Transforming businesses through intelligent technology solutions that drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-accent-500 to-primary-500 hover:from-accent-400 hover:to-primary-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get a Free Consultation
              </Link>
              <Link
                to="/services"
                className="border-2 border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Explore Our Services
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <FaChevronDown className="w-6 h-6 text-text-secondary" />
        </motion.div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-background-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
              Why Choose Insyver Technologies?
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to deliver solutions that drive real business results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-accent-500 mb-2">{stat.number}</div>
                <div className="text-text-secondary">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
              Our Core Services
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your digital transformation journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-background-800 p-8 rounded-xl border border-primary-700 hover:border-accent-500 transition-all duration-300 group"
              >
                <div className="text-accent-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">{service.title}</h3>
                <p className="text-text-secondary">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-12"
          >
            <Link
              to="/services"
              className="inline-flex items-center space-x-2 bg-accent-500 hover:bg-accent-400 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <span>View All Services</span>
              <FaArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-6">
                <FaLightbulb className="w-8 h-8 text-accent-500 mr-4" />
                <h2 className="text-3xl font-bold text-text-primary">Our Mission</h2>
              </div>
              <p className="text-lg text-text-secondary leading-relaxed">
                To empower businesses with intelligent technology solutions that drive innovation, enhance efficiency, and create sustainable competitive advantages in the digital age.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-6">
                <FaAward className="w-8 h-8 text-accent-500 mr-4" />
                <h2 className="text-3xl font-bold text-text-primary">Our Vision</h2>
              </div>
              <p className="text-lg text-text-secondary leading-relaxed">
                To be the leading technology partner for enterprises worldwide, recognized for delivering transformative solutions that shape the future of digital business.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
              Why Choose Us
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <FaUsers />, title: "Expert Team", desc: "Certified professionals with 15+ years of experience" },
              { icon: <FaShieldAlt />, title: "Security First", desc: "Industry-leading security practices and compliance" },
              { icon: <FaGlobe />, title: "Global Reach", desc: "Serving clients across multiple countries and industries" },
              { icon: <FaHandshake />, title: "Trusted Partner", desc: "98% client satisfaction and long-term relationships" },
              { icon: <FaRocket />, title: "Innovation Focus", desc: "Cutting-edge technologies and solutions" },
              { icon: <FaHeadset />, title: "24/7 Support", desc: "Round-the-clock technical assistance" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-background-800 p-6 rounded-xl border border-primary-700 hover:border-accent-500 transition-all duration-300"
              >
                <div className="text-accent-500 mb-4 text-2xl">{item.icon}</div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">{item.title}</h3>
                <p className="text-text-secondary">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
              What Our Clients Say
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5 }}
              className="bg-background-900 p-8 rounded-xl border border-primary-700"
            >
              <FaQuoteLeft className="w-8 h-8 text-accent-500 mb-4" />
              <p className="text-lg text-text-secondary mb-6 italic">
                "{testimonials[currentTestimonial].content}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-text-primary">{testimonials[currentTestimonial].name}</div>
                  <div className="text-text-secondary">{testimonials[currentTestimonial].position}</div>
                </div>
                <div className="flex space-x-1">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <FaStar key={i} className="w-4 h-4 text-accent-500" />
                  ))}
                </div>
              </div>
            </motion.div>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentTestimonial ? 'bg-accent-500' : 'bg-primary-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-background-800 p-6 rounded-xl border border-primary-700"
              >
                <h3 className="text-lg font-semibold text-text-primary mb-3">{faq.question}</h3>
                <p className="text-text-secondary">{faq.answer}</p>
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
              Let's discuss how Insyver Technologies can help you achieve your digital transformation goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-accent-500 hover:bg-accent-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Started Today
              </Link>
              <Link
                to="/about"
                className="border-2 border-text-primary text-text-primary hover:bg-text-primary hover:text-background-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Learn More About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background-900 border-t border-primary-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <img
                src="/src/assets/Transparent Main Logo.png"
                alt="Insyver Technologies Logo"
                className="h-12 w-auto object-contain mb-4"
              />
              <p className="text-text-secondary mb-4">
                Intelligent Systems. Ever Evolving. - Transforming businesses through innovative technology solutions.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-text-secondary hover:text-accent-500 transition-colors duration-300">
                  LinkedIn
                </a>
                <a href="#" className="text-text-secondary hover:text-accent-500 transition-colors duration-300">
                  Facebook
                </a>
                <a href="#" className="text-text-secondary hover:text-accent-500 transition-colors duration-300">
                  Twitter
                </a>
                <a href="#" className="text-text-secondary hover:text-accent-500 transition-colors duration-300">
                  Instagram
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-text-primary mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-text-secondary hover:text-accent-500 transition-colors duration-300">Home</Link></li>
                <li><Link to="/about" className="text-text-secondary hover:text-accent-500 transition-colors duration-300">About</Link></li>
                <li><Link to="/services" className="text-text-secondary hover:text-accent-500 transition-colors duration-300">Services</Link></li>
                <li><Link to="/contact" className="text-text-secondary hover:text-accent-500 transition-colors duration-300">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-text-primary mb-4">Contact Info</h3>
              <div className="text-text-secondary space-y-2">
                <p>P. NO-02 Laxman Vihar, Phase II</p>
                <p>New Colony, Gurgaon - 122001</p>
                <p>Haryana, India</p>
                <p className="mt-4">+91 98992 13865</p>
                <p>info@insyvertechnologies.com</p>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-700 mt-8 pt-8 text-center">
            <p className="text-text-secondary">
              © 2024 Insyver Technologies (OPC) Pvt. Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
