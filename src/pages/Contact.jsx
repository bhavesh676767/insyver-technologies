import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaCheckCircle,
  FaExclamationTriangle,
  FaSpinner,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaStar,
  FaShieldAlt,
  FaRocket,
  FaUsers,
  FaGlobe
} from 'react-icons/fa';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    service: '',
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const services = [
    'Enterprise Network & ICT Solutions',
    'Network Design & Infrastructure',
    'Cloud Solutions & Hosting',
    'Cloud Migration & Optimization',
    'Cybersecurity & Ethical Hacking',
    'Security Auditing & Testing',
    'Web & Mobile Development',
    'Custom Applications & Platforms',
    'Data Analytics & ERP/CRM Solutions',
    'Business Intelligence & ERP',
    'Managed IT Services',
    '24/7 Support & Consultancy'
  ];

  const businessHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM IST' },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM IST' },
    { day: 'Sunday', hours: 'Emergency Support Only' },
    { day: 'Public Holidays', hours: 'Emergency Support Only' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const result = await emailjs.send(
        'service_85j7l5y',
        'template_0zmtphm',
        {
          service: formData.service,
          full_name: formData.fullName,
          company_name: formData.companyName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message
        },
        'MrOFJuHksFpB__uNV'
      );

      if (result.text === 'OK') {
        setSubmitStatus('success');
        setFormData({
          service: '',
          fullName: '',
          companyName: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const whyChooseUs = [
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "Security First",
      description: "Your data security and privacy are our top priorities. We implement industry-leading security measures."
    },
    {
      icon: <FaRocket className="w-8 h-8" />,
      title: "Fast Response",
      description: "We respond to all inquiries within 24 hours and provide rapid solutions to your technology challenges."
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "Expert Team",
      description: "Our certified professionals bring decades of combined experience in technology consulting and implementation."
    },
    {
      icon: <FaGlobe className="w-8 h-8" />,
      title: "Global Standards",
      description: "We follow international best practices and maintain compliance with global industry standards."
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
              Get in
              <span className="block text-accent-500">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary mb-8 max-w-4xl mx-auto">
              Ready to transform your business with intelligent technology solutions?
              Let's start a conversation about your digital future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-text-primary mb-8">Send Us a Message</h2>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-text-primary mb-2">
                    Service Interested In *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background-900 border border-primary-700 rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-text-primary mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-background-900 border border-primary-700 rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="companyName" className="block text-sm font-medium text-text-primary mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-background-900 border border-primary-700 rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-background-900 border border-primary-700 rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                      placeholder="your.email@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-background-900 border border-primary-700 rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-background-900 border border-primary-700 rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent resize-none"
                    placeholder="Tell us about your project requirements, challenges, or any questions you have..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent-500 hover:bg-accent-400 disabled:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 disabled:transform-none disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <FaSpinner className="w-5 h-5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <span>Send Message</span>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center space-x-2 text-green-400 bg-green-400/10 p-4 rounded-lg"
                  >
                    <FaCheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span>Message sent successfully! We'll get back to you within 24 hours.</span>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center space-x-2 text-red-400 bg-red-400/10 p-4 rounded-lg"
                  >
                    <FaExclamationTriangle className="w-5 h-5 flex-shrink-0" />
                    <span>Failed to send message. Please try again or contact us directly.</span>
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Direct Contact */}
              <div>
                <h3 className="text-2xl font-bold text-text-primary mb-6">Direct Contact</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <FaMapMarkerAlt className="w-6 h-6 text-accent-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-text-primary mb-1">Office Address</h4>
                      <p className="text-text-secondary">
                        P. NO-02 Laxman Vihar, Phase II<br />
                        New Colony, Gurgaon - 122001<br />
                        Haryana, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <FaPhone className="w-6 h-6 text-accent-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-text-primary mb-1">Phone</h4>
                      <p className="text-text-secondary">+91 98992 13865</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <FaEnvelope className="w-6 h-6 text-accent-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-text-primary mb-1">Email</h4>
                      <p className="text-text-secondary">info@insyvertechnologies.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div>
                <h3 className="text-2xl font-bold text-text-primary mb-6">Business Hours</h3>
                <div className="bg-background-900 p-6 rounded-xl border border-primary-700">
                  <div className="flex items-center mb-4">
                    <FaClock className="w-5 h-5 text-accent-500 mr-2" />
                    <span className="font-semibold text-text-primary">Support Hours</span>
                  </div>
                  <div className="space-y-3">
                    {businessHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-text-secondary">{schedule.day}</span>
                        <span className="text-text-primary font-medium">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-3 bg-accent-500/10 rounded-lg">
                    <p className="text-sm text-accent-400">
                      <strong>24/7 Emergency Support:</strong> Available for critical system issues
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Maps Placeholder */}
              <div>
                <h3 className="text-2xl font-bold text-text-primary mb-6">Our Location</h3>
                <div className="bg-background-900 p-6 rounded-xl border border-primary-700">
                  <div className="aspect-video bg-primary-800 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <FaMapMarkerAlt className="w-12 h-12 text-accent-500 mx-auto mb-4" />
                      <p className="text-text-secondary">Interactive Map</p>
                      <p className="text-sm text-text-secondary mt-2">
                        Gurgaon Office Location<br />
                        Haryana, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">Why Choose Us</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              What makes Insyver Technologies the right partner for your technology needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-background-800 p-8 rounded-xl border border-primary-700 hover:border-accent-500 transition-all duration-300"
              >
                <div className="text-accent-500 mb-6">{item.icon}</div>
                <h3 className="text-xl font-semibold text-text-primary mb-4">{item.title}</h3>
                <p className="text-text-secondary">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media & Additional Contact */}
      <section className="py-20 bg-background-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">Connect With Us</h2>
            <p className="text-xl text-text-secondary mb-12">
              Follow us on social media for the latest updates, technology insights, and industry news.
            </p>

            <div className="flex justify-center space-x-8 mb-12">
              {[
                { icon: <FaLinkedin />, name: 'LinkedIn', color: 'hover:text-blue-400' },
                { icon: <FaFacebook />, name: 'Facebook', color: 'hover:text-blue-600' },
                { icon: <FaTwitter />, name: 'Twitter', color: 'hover:text-blue-400' },
                { icon: <FaInstagram />, name: 'Instagram', color: 'hover:text-pink-400' }
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className={`text-text-secondary ${social.color} transition-colors duration-300 text-3xl`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <div className="bg-background-900 p-8 rounded-xl border border-primary-700">
              <h3 className="text-2xl font-bold text-text-primary mb-4">Need Immediate Assistance?</h3>
              <p className="text-text-secondary mb-6">
                For urgent technical issues or emergency support, don't hesitate to reach out directly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+919899213865"
                  className="bg-accent-500 hover:bg-accent-400 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <FaPhone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>
                <a
                  href="mailto:info@insyvertechnologies.com"
                  className="border-2 border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <FaEnvelope className="w-4 h-4" />
                  <span>Email Us</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
