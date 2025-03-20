import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaChevronDown, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Navbar = ({ onRegisterClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const handleDropdownClick = (href) => {
    setActiveDropdown(null);
    setIsOpen(false);

    if (href.includes('#')) {
      const [path, hash] = href.split('#');
      
      // If we're already on the study abroad page
      if (location.pathname === path) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Navigate to the page first, then scroll
        navigate(path);
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    } else {
      navigate(href);
    }
  };

  const scrollToHero = () => {
    const heroSection = document.getElementById('hero-section');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If we're not on home page, first navigate to home then scroll
      navigate('/');
      setTimeout(() => {
        document.getElementById('hero-section')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const navigation = [
    { name: 'Home', href: '/' },
    {
      name: 'Study Abroad',
      href: '/study-abroad',
      dropdown: [
        {
          name: 'Study in USA',
          href: '/study-abroad#united-states', // Updated hash to match ID in StudyAbroad component
          description: 'Top universities, OPT opportunities, and diverse programs',
        },
        {
          name: 'Study in UK',
          href: '/study-abroad#united-kingdom', // Updated hash to match ID in StudyAbroad component
          description: 'Historic institutions with global recognition',
        },
        {
          name: 'Study in Canada',
          href: '/study-abroad#canada', // Updated hash to match ID in StudyAbroad component
          description: 'Quality education with immigration pathways',
        },
        {
          name: 'Study in Australia',
          href: '/study-abroad#australia', // Updated hash to match ID in StudyAbroad component
          description: 'World-class education in a beautiful environment',
        },
        {
          name: 'Study in Germany',
          href: '/study-abroad#germany', // Updated hash to match ID in StudyAbroad component
          description: 'Tuition-free education in Europe\'s powerhouse',
        }
      ]
    },
    {
      name: 'Services',
      href: '/services',
      dropdown: [
        {
          name: 'Pre-Application Services',
          href: '/services#pre-application-services',
          description: 'University selection, admission guidance, and application assistance',
        },
        {
          name: 'Financial Support',
          href: '/services#financial-support-services',
          description: 'Scholarships, educational loans, and financial planning',
        },
        {
          name: 'Visa & Travel Support',
          href: '/services#visa-travel-support',
          description: 'Visa application, travel planning, and accommodation',
        },
        {
          name: 'Post-Arrival Support',
          href: '/services#post-arrival-support',
          description: 'Cultural adaptation and student community network',
        },
        {
          name: 'Academic Support',
          href: '/services#academic-support-services',
          description: 'Course selection and academic performance guidance',
        }
      ]
    },
    {
      name: 'Explore Universities',
      href: '/explore-universities',
      dropdown: [
        {
          name: 'All Universities',
          href: '/explore-universities',
          description: 'Browse our complete database of partner universities',
        },
        {
          name: 'Universities in USA',
          href: '/explore-universities?country=USA',  // Fixed URL format
          description: 'Leading universities in technology, research, and innovation',
        },
        {
          name: 'Universities in UK',
          href: '/explore-universities?country=UK',  // Fixed URL format
          description: 'Historic institutions with centuries of academic excellence',
        },
        {
          name: 'Universities in Canada',
          href: '/explore-universities?country=CANADA',  // Fixed URL format
          description: 'Top-ranked universities with post-graduation opportunities',
        },
        {
          name: 'Universities in Australia',
          href: '/explore-universities?country=AUSTRALIA',  // Fixed URL format
          description: 'World-class education in a vibrant environment',
        },
        {
          name: 'Universities in Germany',
          href: '/explore-universities?country=GERMANY',  // Fixed URL format
          description: 'Innovation-focused universities with minimal tuition fees',
        }
      ]
    },
    { name: 'Contact', href: '/contact' }
  ];

  const socialLinks = [
    { 
      icon: <FaFacebook />, 
      href: "https://www.facebook.com/profile.php?id=61557666615964", 
      label: "Facebook",
      color: "hover:text-blue-500" 
    },
    { 
      icon: <FaInstagram />, 
      href: "https://www.instagram.com/gigabyte_education?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", 
      label: "Instagram",
      color: "hover:text-pink-500" 
    },
    { 
      icon: <FaWhatsapp />, 
      href: "https://wa.me/9779767659319",
      label: "WhatsApp",
      color: "hover:text-green-500" 
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-800/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo section */}
          <div className="flex items-center">
            <motion.button 
              onClick={scrollToHero} 
              className="flex-shrink-0 relative cursor-pointer group"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="flex flex-col">
                <span className="text-base sm:text-xl font-bold text-white tracking-wide">
                  Gigabyte
                </span>
                <span className="text-[10px] sm:text-sm text-indigo-400">
                  Education Consultancy
                </span>
              </div>
            </motion.button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {/* Social Media Icons */}
            <div className="flex items-center space-x-4 mr-6 border-r border-white/10 pr-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className={`text-white/70 transition-colors duration-200 ${social.color}`}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            {navigation.map((item) => (
              <div key={item.name} 
                   className="relative"
                   onMouseEnter={() => setActiveDropdown(item.name)}
                   onMouseLeave={() => setActiveDropdown(null)}>
                <Link
                  to={item.href}
                  className="text-gray-100 hover:text-white px-3 py-2 text-sm font-semibold
                    flex items-center transition-colors duration-200 hover:bg-white/10 rounded-lg"
                >
                  {item.name}
                  {item.dropdown && <FaChevronDown className="ml-1 h-3 w-3" />}
                </Link>

                <AnimatePresence>
                  {item.dropdown && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute left-0 w-72 mt-2 bg-slate-800/95 backdrop-blur-md rounded-xl 
                        shadow-xl py-2 border border-slate-700/50"
                    >
                      {item.dropdown.map((subItem) => (
                        <button
                          key={subItem.name}
                          onClick={() => handleDropdownClick(subItem.href)}
                          className="w-full text-left px-4 py-3 hover:bg-slate-700/50 
                            transition-colors duration-200"
                        >
                          <div className="text-sm font-medium text-white">{subItem.name}</div>
                          <div className="text-xs text-slate-400 mt-0.5">{subItem.description}</div>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            
            {/* Desktop Register Button - Updated with blue glow */}
            <button
              onClick={onRegisterClick}
              className="relative inline-flex items-center justify-center px-8 py-2.5 
                text-sm font-semibold text-white overflow-hidden rounded-xl
                transition-all duration-300 ease-out
                bg-blue-600 hover:bg-blue-500
                shadow-[0_0_15px_rgba(37,99,235,0.3)]
                hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]
                focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-800"
            >
              <span className="relative z-20">Register Now</span>
            </button>
          </div>

          {/* Mobile menu button - Improved touch target */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-3"
              style={{ touchAction: 'manipulation' }}
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu - Improved scrolling and touch interaction */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed top-16 left-0 right-0 bg-slate-800/95 backdrop-blur-md 
              border-t border-slate-700/50 overflow-auto"
            style={{ 
              maxHeight: 'calc(100vh - 64px)',
              overflowY: 'auto',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 max-h-[80vh] overflow-y-auto">
              {/* Social Media Icons for Mobile */}
              <div className="flex justify-center space-x-6 py-4 border-b border-white/10 mb-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-white/70 transition-colors duration-200 ${social.color}`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              {navigation.map((item) => (
                <div key={item.name}>
                  <button
                    onClick={() => handleDropdownClick(item.href)}
                    className="w-full text-left text-gray-300 hover:text-white px-3 py-2 
                      rounded-md text-base font-medium"
                  >
                    {item.name}
                  </button>
                  
                  {item.dropdown && (
                    <div className="pl-4 space-y-1">
                      {item.dropdown.map((subItem) => (
                        <button
                          key={subItem.name}
                          onClick={() => handleDropdownClick(subItem.href)}
                          className="w-full text-left text-gray-400 hover:text-white px-3 
                            py-2 rounded-md text-sm"
                        >
                          <div className="font-medium">{subItem.name}</div>
                          <div className="text-xs text-slate-500 mt-0.5">
                            {subItem.description}
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Mobile Register Button - Updated with blue glow */}
              <button
                onClick={() => {
                  setIsOpen(false);
                  onRegisterClick();
                }}
                className="w-full relative inline-flex items-center justify-center px-6 py-3
                  text-sm font-semibold text-white overflow-hidden rounded-xl
                  transition-all duration-300 ease-out
                  bg-blue-600 hover:bg-blue-500
                  shadow-[0_0_15px_rgba(37,99,235,0.3)]
                  hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]"
              >
                <span className="relative z-20">Register Now</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;