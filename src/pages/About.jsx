import React from 'react';
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
  FaBullseye,
  FaCog,
  FaChartLine
} from 'react-icons/fa';

export default function About() {
  return (
    <div className="bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 dark:from-blue-950 dark:via-blue-900 dark:to-gray-900 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Innovating the Future of Digital Infrastructure</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl">
            We're more than a technology company — we're your strategic partner in digital evolution, 
            enabling enterprises to grow smarter, faster, and safer in an ever-changing digital world.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link to="/about" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition">
              Learn More
            </Link>
            <Link to="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">Our Story</h2>
          <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <p>
              Founded in Gurgaon, India, Insyver Technologies (OPC) Pvt. Ltd. was established with a singular goal — 
              to redefine the standards of ICT, cloud, and cybersecurity solutions for modern enterprises.
            </p>
            <p>
              With technology rapidly transforming industries, we saw the need for a company that could integrate 
              intelligence, scalability, and innovation into every layer of a business's digital infrastructure.
            </p>
            <p>
              From our humble beginnings as a specialized IT consultancy, we've grown into a multidisciplinary ICT powerhouse, 
              delivering network design, cloud migration, web development, and managed services to clients across India and around the world.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Who We Are</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            At Insyver Technologies, we are a team of engineers, cybersecurity specialists, software architects, 
            and digital innovators driven by a shared purpose — to make technology simpler, smarter, and more secure for every business.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-12">
            We design future-ready solutions that help organizations unlock efficiency, enhance security, 
            and achieve sustainable digital transformation.
          </p>
          
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Our Expertise Spans</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <span className="text-blue-600 dark:text-blue-400 text-xl">✓</span>
              <span className="text-gray-700 dark:text-gray-300">ICT & Enterprise Network Infrastructure</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-blue-600 dark:text-blue-400 text-xl">✓</span>
              <span className="text-gray-700 dark:text-gray-300">Cloud Solutions & Hosting</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-blue-600 dark:text-blue-400 text-xl">✓</span>
              <span className="text-gray-700 dark:text-gray-300">Cybersecurity & Ethical Hacking</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-blue-600 dark:text-blue-400 text-xl">✓</span>
              <span className="text-gray-700 dark:text-gray-300">Software Development</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-blue-600 dark:text-blue-400 text-xl">✓</span>
              <span className="text-gray-700 dark:text-gray-300">ERP/CRM & Business Analytics</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-blue-600 dark:text-blue-400 text-xl">✓</span>
              <span className="text-gray-700 dark:text-gray-300">Managed IT & 24/7 Consultancy</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-gradient-to-br from-blue-50 dark:from-blue-900/20 to-blue-100 dark:to-blue-800/20 p-8 rounded-lg">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                To empower businesses with intelligent, secure, and scalable digital systems that drive growth, 
                innovation, and resilience in an ever-evolving technological landscape.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                We believe technology should not just serve — it should lead transformation. 
                Every solution we create is aligned with business outcomes, data security, and long-term scalability.
              </p>
            </div>
            <div className="bg-gradient-to-br from-slate-50 dark:from-slate-800/30 to-slate-100 dark:to-slate-700/30 p-8 rounded-lg">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                To be a global leader in integrated ICT and enterprise digital solutions, 
                known for innovation, reliability, and integrity.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                We envision a connected future where enterprises harness the full power of intelligent systems 
                to shape industries, economies, and communities for the better.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg dark:hover:shadow-2xl transition">
              <FaShieldAlt className="text-4xl text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Integrity</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We build trust through transparency, accountability, and uncompromised ethical standards.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg dark:hover:shadow-2xl transition">
              <FaRocket className="text-4xl text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Innovation</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We thrive on innovation — exploring emerging technologies to design solutions that redefine what's possible.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg dark:hover:shadow-2xl transition">
              <FaHandshake className="text-4xl text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Partnership</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We see every client relationship as a long-term collaboration, built on mutual success and shared growth.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg dark:hover:shadow-2xl transition">
              <FaAward className="text-4xl text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Excellence</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Every project is delivered with precision, performance, and an unrelenting pursuit of quality.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg dark:hover:shadow-2xl transition">
              <FaGlobe className="text-4xl text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Sustainability</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We embrace technology that contributes to sustainable, inclusive, and environmentally responsible progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">Our Approach</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1️⃣
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Understand</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We analyze your digital ecosystem, identify challenges, and define clear goals.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2️⃣
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Innovate</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Our experts design tailor-made solutions integrating AI, automation, and cloud technologies.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3️⃣
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Secure</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Cybersecurity is built into every layer of our process — from planning to deployment.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4️⃣
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Evolve</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We continuously monitor, optimize, and scale your systems to stay ahead.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="py-16 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Leadership Philosophy</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            At Insyver, leadership means enabling innovation, not controlling it. Our management philosophy 
            empowers every team member to think independently, collaborate fearlessly, and innovate boldly.
          </p>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">We Foster a Culture of:</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-center gap-4">
              <div className="w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
              <span className="text-lg text-gray-700 dark:text-gray-300 font-semibold">Continuous Learning</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
              <span className="text-lg text-gray-700 dark:text-gray-300 font-semibold">Data-Driven Decision Making</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
              <span className="text-lg text-gray-700 dark:text-gray-300 font-semibold">Customer-Centric Design</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
              <span className="text-lg text-gray-700 dark:text-gray-300 font-semibold">Technical Integrity</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Clients Trust Us */}
      <section className="py-16 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">Why Clients Trust Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="text-2xl">✓</span>
                <p className="text-lg text-gray-700 dark:text-gray-300"><strong>10+ years of combined technical expertise</strong></p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl">✓</span>
                <p className="text-lg text-gray-700 dark:text-gray-300"><strong>Multi-industry experience</strong> — Finance, Manufacturing, Healthcare, IT, Education</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl">✓</span>
                <p className="text-lg text-gray-700 dark:text-gray-300"><strong>ISO-aligned cybersecurity and cloud protocols</strong></p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="text-2xl">✓</span>
                <p className="text-lg text-gray-700 dark:text-gray-300"><strong>24/7 Managed IT and Support Services</strong></p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl">✓</span>
                <p className="text-lg text-gray-700 dark:text-gray-300"><strong>100% transparency and client-first communication</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-16 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Global Reach</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Though headquartered in Gurgaon, Haryana, our reach extends beyond borders.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            We proudly serve clients across India, the Middle East, Europe, and North America, 
            providing consistent, high-performance solutions to enterprises worldwide.
          </p>
        </div>
      </section>

      {/* Join Our Journey CTA */}
      <section className="bg-gradient-to-r from-blue-900 to-slate-900 dark:from-blue-950 dark:to-slate-950 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Join Our Journey</h2>
          <p className="text-xl mb-8">
            We're constantly evolving — and we invite innovators, organizations, and partners to grow with us.
          </p>
          <p className="text-lg text-gray-300 mb-8">
            Whether you're a startup building from scratch or an enterprise upgrading your infrastructure, 
            Insyver Technologies is here to help you succeed in the digital future.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link to="/contact" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition">
              Work With Us
            </Link>
            <Link to="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition">
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
