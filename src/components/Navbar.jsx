import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

const Navbar = ({ onRegisterClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const navigation = [
    { name: 'Home', href: '/' },
    {
      name: 'Study Abroad',
      href: '/study-abroad',
      dropdown: [
        {
          name: 'Study in USA',
          href: '/study-abroad#united-states',
          description: 'Top universities, OPT opportunities, and diverse programs',
        },
        {
          name: 'Study in UK',
          href: '/study-abroad#united-kingdom',
          description: 'Historic institutions with global recognition',
        },
        {
          name: 'Study in Canada',
          href: '/study-abroad#canada',  // Fixed hash
          description: 'Quality education with immigration pathways',
        },
        {
          name: 'Study in Australia',
          href: '/study-abroad#australia',  // Fixed hash
          description: 'World-class education in a beautiful environment',
        },
        {
          name: 'Study in Germany',
          href: '/study-abroad#germany',  // Fixed hash
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownClick = (href) => {
    setActiveDropdown(null);
    setIsOpen(false);
    // Instead of using navigate directly, parse the URL first
    if (href.includes('?')) {
      const [path, query] = href.split('?');
      const params = new URLSearchParams(query);
      const country = params.get('country');
      // Use the parsed country parameter
      navigate(`/explore-universities?country=${country}`);
    } else {
      navigate(href);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-800/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Adjusted for mobile */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold text-white tracking-wide">Gigabyte</span>
                <span className="text-xs sm:text-sm text-indigo-400 font-medium">Education Consultancy</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
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
            
            {/* Updated Register Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onRegisterClick}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 
                text-white px-8 py-2.5 rounded-xl text-sm font-semibold 
                transition-all duration-200 shadow-[0_4px_20px_rgba(79,70,229,0.3)]
                hover:shadow-[0_6px_24px_rgba(79,70,229,0.4)]
                border border-white/10"
            >
              Register Now
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu - Adjusted height and scrolling */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed top-16 left-0 right-0 bg-slate-800/95 backdrop-blur-md border-t border-slate-700/50"
            style={{ maxHeight: 'calc(100vh - 64px)', overflowY: 'auto' }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 max-h-[80vh] overflow-y-auto">
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
              
              <button
                onClick={() => {
                  setIsOpen(false);
                  onRegisterClick();
                }}
                className="w-full bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 
                  rounded-lg text-sm font-medium transition-colors duration-200 mt-4"
              >
                Register Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;