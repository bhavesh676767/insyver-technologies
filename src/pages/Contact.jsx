import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    companyName: '',
    service: 'ict-infrastructure',
    message: ''
  });
  
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    'ICT Infrastructure',
    'Cloud Solutions',
    'Cybersecurity',
    'Web & Mobile App Development',
    'Data Analytics & ERP/CRM',
    'Managed IT Services'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Initialize EmailJS (replace with your public key)
      emailjs.init('MrOFJuHksFpB__uNV');

      const templateParams = {
        to_email: 'info@insyvertechnologies.com',
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone: formData.phone,
        company: formData.companyName,
        service: formData.service,
        message: formData.message,
        reply_to: formData.email
      };

      const result = await emailjs.send(
        'service_85j7l5y',
        'template_0zmtphm',
        templateParams
      );

      if (result.status === 200) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully. Our team will get back to you shortly.'
        });
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          companyName: '',
          service: 'ict-infrastructure',
          message: ''
        });
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or contact us directly.'
      });
    } finally {
      setIsSubmitting(false);
      // Clear message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 dark:from-blue-950 dark:via-blue-900 dark:to-gray-900 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-300 mb-4 max-w-3xl">
            Have a question or ready to transform your business? We're here to help. Reach out to our team and let's discuss your technology needs.
          </p>
          <p className="text-lg text-gray-400">
            Whether you need a free consultation or want to discuss a specific project, we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-900">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Send us a Message</h2>
              
              {submitStatus && (
                <div className={`mb-6 p-4 rounded-lg ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800' 
                    : 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800'
                }`}>
                  <p className={submitStatus.type === 'success' ? 'text-green-800 dark:text-green-300' : 'text-red-800 dark:text-red-300'}>
                    {submitStatus.message}
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:focus:ring-blue-400"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:focus:ring-blue-400"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:focus:ring-blue-400"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:focus:ring-blue-400"
                    placeholder="+91 98992 13865"
                  />
                </div>

                {/* Company Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:focus:ring-blue-400"
                    placeholder="Your Company"
                  />
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Service Interested In *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:focus:ring-blue-400"
                  >
                    <option value="ict-infrastructure">ICT Infrastructure</option>
                    <option value="cloud-solutions">Cloud Solutions</option>
                    <option value="cybersecurity">Cybersecurity</option>
                    <option value="web-mobile">Web & Mobile App Development</option>
                    <option value="data-analytics">Data Analytics & ERP/CRM</option>
                    <option value="managed-it">Managed IT Services</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:focus:ring-blue-400 resize-none"
                    placeholder="Tell us about your project or requirements..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 dark:disabled:bg-gray-700 text-white font-semibold py-3 rounded-lg transition dark:hover:bg-blue-700"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                <p className="text-sm text-gray-600 dark:text-gray-400">
                  * Required fields. We'll get back to you within 24 hours.
                </p>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              {/* Direct Contact */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Contact Information</h3>
                
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="text-3xl flex-shrink-0">📞</div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">Phone</h4>
                      <p className="text-gray-700 dark:text-gray-300 mb-1">
                        <a href="tel:+919899213865" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                          +91 98992 13865
                        </a>
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Available Monday - Friday, 9 AM - 6 PM IST</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="text-3xl flex-shrink-0">📧</div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">Email</h4>
                      <p className="text-gray-700 dark:text-gray-300 mb-1">
                        <a href="mailto:info@insyvertechnologies.com" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                          info@insyvertechnologies.com
                        </a>
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">We aim to respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="text-3xl flex-shrink-0">📍</div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">Office Location</h4>
                      <p className="text-gray-700 dark:text-gray-300">
                        Insyver Technologies (OPC) Pvt. Ltd.<br/>
                        India
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="text-3xl flex-shrink-0">🕐</div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">Business Hours</h4>
                      <div className="text-gray-700 dark:text-gray-300 space-y-1">
                        <p><span className="font-semibold">Monday - Friday:</span> 9:00 AM - 6:00 PM IST</p>
                        <p><span className="font-semibold">Saturday:</span> 10:00 AM - 2:00 PM IST</p>
                        <p><span className="font-semibold">Sunday:</span> Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Services Quick Links */}
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Our Services</h3>
                <div className="grid grid-cols-2 gap-4">
                  <Link to="/services#ict" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline text-sm">
                    → Enterprise Network & ICT
                  </Link>
                  <Link to="/services#cloud" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline text-sm">
                    → Cloud Solutions
                  </Link>
                  <Link to="/services#security" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline text-sm">
                    → Cybersecurity
                  </Link>
                  <Link to="/services#development" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline text-sm">
                    → Web & Mobile
                  </Link>
                  <Link to="/services#analytics" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline text-sm">
                    → Data Analytics & ERP
                  </Link>
                  <Link to="/services#managed-it" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline text-sm">
                    → Managed IT Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">We Serve Clients Worldwide</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-8 max-w-3xl mx-auto">
            While based in India, Insyver Technologies provides digital solutions to enterprises across the globe. Our team works with clients in different time zones to ensure seamless project delivery.
          </p>
          
          <div className="bg-gradient-to-br from-blue-100 dark:from-blue-900/30 to-blue-50 dark:to-blue-800/20 p-8 rounded-lg border-2 border-blue-200 dark:border-blue-700 text-center">
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              🌍 Global Reach • 🤝 Local Support • 🎯 24/7 Availability
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-900 to-slate-900 dark:from-blue-950 dark:to-slate-950 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Ready to Start Your Project?</h2>
          <p className="text-xl mb-12 max-w-3xl">
            Let's discuss your requirements and create a customized solution that drives your business forward.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href="#contact-form" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition">
              Fill Contact Form
            </a>
            <Link to="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition">
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
