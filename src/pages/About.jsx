import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaRocket,
  FaUsers,
  FaLightbulb,
  FaHandshake,
  FaAward,
  FaGlobe,
  FaCheckCircle,
  FaArrowRight,
  FaQuoteLeft,
  FaStar,
  FaShieldAlt,
  FaHeart,
  FaTrophy,
  FaEye,
  FaTarget,
  FaCog,
  FaChartLine
} from 'react-icons/fa';

const About = () => {
  const coreValues = [
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "Security First",
      description: "We prioritize the security and protection of our clients' data and systems above all else."
    },
    {
      icon: <FaLightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "We continuously explore and implement cutting-edge technologies to stay ahead of the curve."
    },
    {
      icon: <FaHandshake className="w-8 h-8" />,
      title: "Partnership",
      description: "We build long-term relationships with our clients, acting as trusted technology partners."
    },
    {
      icon: <FaHeart className="w-8 h-8" />,
      title: "Excellence",
      description: "We strive for excellence in every project, delivering high-quality solutions that exceed expectations."
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "Collaboration",
      description: "We work closely with our clients to understand their needs and co-create solutions."
    }
  ];

  const approach = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "We begin by thoroughly understanding your business needs, challenges, and objectives through comprehensive analysis."
    },
    {
      step: "02",
      title: "Strategic Planning",
      description: "Based on our findings, we develop a customized technology roadmap aligned with your business goals."
    },
    {
      step: "03",
      title: "Implementation",
      description: "Our expert team executes the plan with precision, using industry best practices and cutting-edge technologies."
    },
    {
      step: "04",
      title: "Support & Optimization",
      description: "We provide ongoing support and continuously optimize solutions to ensure maximum performance and ROI."
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "15+", label: "Years Experience" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" }
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
              Innovating the Future of
              <span className="block text-accent-500">Digital Infrastructure</span>
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary mb-8 max-w-4xl mx-auto">
              Since our inception, Insyver Technologies has been at the forefront of technological innovation,
              helping businesses transform and thrive in the digital age.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-background-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-text-secondary">
                <p>
                  Founded in 2009, Insyver Technologies began as a small consultancy focused on network infrastructure.
                  Over the years, we've evolved into a comprehensive technology solutions provider, serving clients
                  across multiple industries and geographies.
                </p>
                <p>
                  Our journey has been driven by a passion for technology and a commitment to helping businesses
                  leverage digital tools to achieve their goals. We've witnessed firsthand how the right technology
                  can transform operations, enhance customer experiences, and create new opportunities for growth.
                </p>
                <p>
                  Today, we stand as a trusted partner for enterprises seeking to navigate the complexities of
                  digital transformation, offering end-to-end solutions that combine technical expertise with
                  deep industry knowledge.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <div key={index} className="bg-background-900 p-6 rounded-xl border border-primary-700 text-center">
                  <div className="text-3xl md:text-4xl font-bold text-accent-500 mb-2">{stat.number}</div>
                  <div className="text-text-secondary">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-background-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">Who We Are</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              We are a team of passionate technology professionals dedicated to delivering innovative solutions
              that drive business success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaUsers className="w-12 h-12" />,
                title: "Expert Team",
                description: "Our certified professionals bring decades of combined experience in technology consulting and implementation."
              },
              {
                icon: <FaRocket className="w-12 h-12" />,
                title: "Innovation Leaders",
                description: "We stay at the forefront of technological advancements, continuously exploring new ways to solve complex challenges."
              },
              {
                icon: <FaGlobe className="w-12 h-12" />,
                title: "Global Perspective",
                description: "While based in India, we serve clients worldwide, bringing diverse insights and international best practices."
              }
            ].map((item, index) => (
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
                <FaTarget className="w-8 h-8 text-accent-500 mr-4" />
                <h2 className="text-3xl font-bold text-text-primary">Our Mission</h2>
              </div>
              <p className="text-lg text-text-secondary leading-relaxed">
                To empower businesses with intelligent technology solutions that drive innovation, enhance efficiency,
                and create sustainable competitive advantages in the digital age. We are committed to delivering
                transformative solutions that help our clients navigate the complexities of digital transformation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-6">
                <FaEye className="w-8 h-8 text-accent-500 mr-4" />
                <h2 className="text-3xl font-bold text-text-primary">Our Vision</h2>
              </div>
              <p className="text-lg text-text-secondary leading-relaxed">
                To be the leading technology partner for enterprises worldwide, recognized for delivering
                transformative solutions that shape the future of digital business. We envision a world where
                technology seamlessly integrates with business strategy to create unprecedented value.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-background-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">Our Core Values</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              These principles guide everything we do and shape our relationships with clients and partners.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-background-800 p-8 rounded-xl border border-primary-700 hover:border-accent-500 transition-all duration-300"
              >
                <div className="text-accent-500 mb-6">{value.icon}</div>
                <h3 className="text-xl font-semibold text-text-primary mb-4">{value.title}</h3>
                <p className="text-text-secondary">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-background-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">Our Approach</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              We follow a systematic, client-centric approach to ensure successful project delivery and lasting results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {approach.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-background-900 p-8 rounded-xl border border-primary-700 relative"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-accent-500 rounded-full flex items-center justify-center text-background-900 font-bold text-lg">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-4 mt-4">{step.title}</h3>
                <p className="text-text-secondary">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="py-20 bg-background-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">Leadership Philosophy</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-semibold text-text-primary mb-6">Empowering Through Technology</h3>
              <div className="space-y-4 text-lg text-text-secondary">
                <p>
                  Our leadership philosophy centers on empowering businesses to harness the full potential of technology.
                  We believe that the right technology, implemented correctly, can transform challenges into opportunities.
                </p>
                <p>
                  We lead by example, staying ahead of technological trends and continuously investing in our team's
                  development. Our commitment to excellence drives us to deliver solutions that not only meet today's
                  needs but also anticipate tomorrow's challenges.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 gap-6"
            >
              {[
                "Continuous Learning",
                "Client-Centric Focus",
                "Innovation-Driven",
                "Quality Excellence",
                "Ethical Practices"
              ].map((principle, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <FaCheckCircle className="w-5 h-5 text-accent-500 flex-shrink-0" />
                  <span className="text-text-primary">{principle}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Clients Trust Us */}
      <section className="py-20 bg-background-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">Why Clients Trust Us</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Our track record speaks for itself. Here's what makes us a preferred technology partner.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <FaAward />, title: "Proven Track Record", desc: "500+ successful projects across industries" },
              { icon: <FaShieldAlt />, title: "Security Expertise", desc: "Certified security professionals and practices" },
              { icon: <FaChartLine />, title: "Measurable Results", desc: "98% client satisfaction and ROI delivery" },
              { icon: <FaHeadset />, title: "24/7 Support", desc: "Round-the-clock technical assistance" },
              { icon: <FaUsers />, title: "Dedicated Teams", desc: "Personalized attention and account management" },
              { icon: <FaRocket />, title: "Agile Methodology", desc: "Flexible and efficient project delivery" },
              { icon: <FaGlobe />, title: "Global Standards", desc: "International best practices and compliance" },
              { icon: <FaHandshake />, title: "Long-term Partnership", desc: "Building lasting relationships, not transactions" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-background-900 p-6 rounded-xl border border-primary-700 hover:border-accent-500 transition-all duration-300 text-center"
              >
                <div className="text-accent-500 mb-4 text-2xl mx-auto w-fit">{item.icon}</div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">{item.title}</h3>
                <p className="text-text-secondary text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-20 bg-background-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">Global Reach, Local Expertise</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              While headquartered in India, we serve clients across the globe, bringing international perspectives
              and localized expertise to every project.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-background-800 p-8 rounded-xl border border-primary-700 text-center"
            >
              <FaGlobe className="w-12 h-12 text-accent-500 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-text-primary mb-4">International Presence</h3>
              <p className="text-text-secondary">
                Serving clients in multiple countries with seamless cross-border project management and support.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-background-800 p-8 rounded-xl border border-primary-700 text-center"
            >
              <FaUsers className="w-12 h-12 text-accent-500 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-text-primary mb-4">Multicultural Teams</h3>
              <p className="text-text-secondary">
                Diverse teams bringing global insights and cultural understanding to every client engagement.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-background-800 p-8 rounded-xl border border-primary-700 text-center"
            >
              <FaTrophy className="w-12 h-12 text-accent-500 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-text-primary mb-4">Industry Recognition</h3>
              <p className="text-text-secondary">
                Recognized for excellence in technology consulting and digital transformation services.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Join Our Journey CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-900 via-primary-800 to-accent-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
              Join Our Journey
            </h2>
            <p className="text-xl text-text-secondary mb-8">
              Ready to transform your business with intelligent technology solutions?
              Let's start a conversation about your digital future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-accent-500 hover:bg-accent-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Start Your Transformation
              </Link>
              <Link
                to="/services"
                className="border-2 border-text-primary text-text-primary hover:bg-text-primary hover:text-background-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Explore Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
