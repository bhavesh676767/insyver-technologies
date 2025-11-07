import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSun, FaMoon, FaDesktop, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services', hasDropdown: true },
    { name: 'Contact', path: '/contact' },
  ];

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
    '24/7 Support & Consultancy',
  ];

  const getThemeIcon = () => {
    switch (theme) {
      case 'light':
        return <FaSun className="w-5 h-5" />;
      case 'system':
        return <FaDesktop className="w-5 h-5" />;
      default:
        return <FaMoon className="w-5 h-5" />;
    }
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background-900/95 backdrop-blur-md shadow-lg border-b border-primary-700'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/src/assets/Transparent Main Logo.png"
              alt="Insyver Technologies Logo"
              className="h-10 w-auto object-contain"
            />
            <span className="text-xl font-bold text-text-primary hidden sm:block">
              Insyver Technologies
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                {link.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsServicesDropdownOpen(true)}
                    onMouseLeave={() => setIsServicesDropdownOpen(false)}
                  >
                    <button
                      className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                        isActive(link.path)
                          ? 'text-accent-500'
                          : 'text-text-primary hover:text-accent-400'
                      }`}
                    >
                      <span>{link.name}</span>
                      <FaChevronDown className="w-3 h-3" />
                    </button>
                    <AnimatePresence>
                      {isServicesDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute top-full left-0 mt-2 w-80 bg-background-800 rounded-lg shadow-xl border border-primary-700 py-2 z-50"
                        >
                          <div className="grid grid-cols-1 gap-1">
                            {services.map((service, index) => (
                              <Link
                                key={index}
                                to={`/services#${service.toLowerCase().replace(/\s+/g, '-')}`}
                                className="px-4 py-2 text-sm text-text-secondary hover:text-accent-400 hover:bg-primary-700 transition-colors duration-200"
                                onClick={() => setIsServicesDropdownOpen(false)}
                              >
                                {service}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      isActive(link.path)
                        ? 'text-accent-500'
                        : 'text-text-primary hover:text-accent-400'
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-primary-800 hover:bg-primary-700 text-text-primary transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {getThemeIcon()}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-primary-800 hover:bg-primary-700 text-text-primary transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background-900/95 backdrop-blur-md border-t border-primary-700"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                        className="flex items-center justify-between w-full px-3 py-2 text-left text-text-primary hover:text-accent-400 transition-colors duration-200"
                      >
                        <span>{link.name}</span>
                        <FaChevronDown className={`w-3 h-3 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {isServicesDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="ml-4 mt-2 space-y-1"
                          >
                            {services.map((service, index) => (
                              <Link
                                key={index}
                                to={`/services#${service.toLowerCase().replace(/\s+/g, '-')}`}
                                className="block px-3 py-2 text-sm text-text-secondary hover:text-accent-400 transition-colors duration-200"
                                onClick={() => {
                                  setIsMobileMenuOpen(false);
                                  setIsServicesDropdownOpen(false);
                                }}
                              >
                                {service}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                        isActive(link.path)
                          ? 'text-accent-500'
                          : 'text-text-primary hover:text-accent-400'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
