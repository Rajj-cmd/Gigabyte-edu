import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaWhatsapp, FaEnvelope, FaCaretDown } from "react-icons/fa";

const Navbar = ({ onRegisterClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRefs = useRef({});

  const handleRegisterClick = () => {
    setIsOpen(false); // Close mobile menu if open
    onRegisterClick(); // Call the register click handler
  };

  const menuItems = {
    Home: {
      path: "/",
      items: [
        { label: "About Us", hash: "about" },
        { label: "Our Services", hash: "services" },
        { label: "Application Process", hash: "process" }
      ]
    },
    Services: {
      path: "/services",
      items: [
        { label: "Pre-Application Services", hash: "pre-application-services" },
        { label: "Financial Support", hash: "financial-support-services" },
        { label: "Visa & Travel Support", hash: "visa-travel-support" },
        { label: "Post-Arrival Support", hash: "post-arrival-support" },
        { label: "Academic Support", hash: "academic-support-services" }
      ]
    },
    "Study Abroad": {
      path: "/study-abroad",
      items: [
        { label: "USA", hash: "usa" },
        { label: "UK", hash: "uk" },
        { label: "Canada", hash: "canada" },
        { label: "Australia", hash: "australia" },
        { label: "Germany", hash: "germany" }
      ]
    },
    "Explore Universities": {
      path: "/explore-universities",
      items: [
        { path: "/explore-universities/top-rankings", label: "Top Rankings" },
        { path: "/explore-universities/search-by-country", label: "Search by Country" },
        { path: "/explore-universities/compare-universities", label: "Compare Universities" }
      ]
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (activeDropdown && !dropdownRefs.current[activeDropdown]?.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeDropdown]);

  return (
    <nav className="bg-slate-900 text-white p-4 sticky top-0 z-50 shadow-lg backdrop-blur-sm bg-opacity-90">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold hover:text-indigo-400 transition-colors duration-200">
          GIGABYTE
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Navigation Dropdowns */}
          {Object.entries(menuItems).map(([menu, { path, items }]) => (
            <div
              key={menu}
              ref={(el) => (dropdownRefs.current[menu] = el)}
              className="relative group"
              onMouseEnter={() => setActiveDropdown(menu)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to={path}
                className={`flex items-center space-x-1 py-2 px-4 rounded-md transition-all duration-200 
                  ${activeDropdown === menu 
                    ? 'bg-indigo-600 text-white' 
                    : 'hover:bg-slate-800 hover:text-indigo-300'
                  }`}
              >
                <span>{menu}</span>
                <FaCaretDown className={`transform transition-transform duration-200 ml-1 
                  ${activeDropdown === menu ? 'rotate-180' : ''}`}
                />
              </Link>
              
              <div className={`absolute left-0 mt-2 w-56 bg-slate-800 rounded-md shadow-xl py-2 
                transform transition-all duration-200 border border-slate-700
                ${activeDropdown === menu ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
              >
                {items.map((item) => (
                  <Link
                    key={item.label || item}
                    to={item.path || (item.hash ? 
                      `${path}#${item.hash}` : 
                      `${path}/${(item.label || item).toLowerCase().replace(/\s+/g, "-")}`
                    )}
                    className="block px-4 py-2 text-slate-200 hover:bg-slate-700 hover:text-indigo-300 
                      transition-colors duration-200"
                    onClick={() => {
                      setActiveDropdown(null);
                      if (item.hash) {
                        setTimeout(() => {
                          const element = document.getElementById(item.hash);
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
                        }, 100);
                      }
                    }}
                  >
                    {item.label || item}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* Static Links */}
          <button 
            onClick={handleRegisterClick}
            className="py-2 px-4 bg-indigo-600 hover:bg-indigo-500 rounded-md transition-colors duration-200 
              font-semibold shadow-lg hover:shadow-indigo-500/25"
          >
            Register Now
          </button>
          <Link 
            to="/contact" 
            className="py-2 px-4 hover:bg-slate-800 rounded-md transition-colors duration-200 hover:text-indigo-300"
          >
            Contact Us
          </Link>

          {/* Social Media Icons */}
          <div className="flex items-center space-x-4 pl-4 border-l border-slate-700">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition-colors duration-200"
              aria-label="Facebook"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition-colors duration-200"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={20} />
            </a>
            <a
              href="mailto:info@gigabyte-education.com"
              className="hover:text-indigo-400 transition-colors duration-200"
              aria-label="Email"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 hover:bg-slate-800 rounded-md"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 mt-2 rounded-md shadow-lg border border-slate-700">
          {Object.entries(menuItems).map(([menu, { path, items }]) => (
            <div key={menu} className="py-2 px-4">
              <Link
                to={path}
                className="flex items-center justify-between w-full text-left py-2 hover:text-indigo-300"
                onClick={() => setIsOpen(false)}
              >
                <span>{menu}</span>
                <FaCaretDown className="transform transition-transform duration-200" />
              </Link>
              <div className="pl-4 mt-1 border-l-2 border-indigo-600">
                {items.map((item) => (
                  <Link
                    key={item.label || item}
                    to={item.hash ? `/services#${item.hash}` : `${path}/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="block py-2 hover:text-indigo-300 transition-colors duration-200"
                    onClick={() => {
                      setIsOpen(false);
                      if (item.hash) {
                        const currentPath = window.location.pathname;
                        if (currentPath === '/services') {
                          // If already on services page, just scroll
                          setTimeout(() => {
                            const element = document.getElementById(item.hash);
                            if (element) {
                              element.scrollIntoView({ behavior: 'smooth' });
                            }
                          }, 100);
                        } else {
                          // If not on services page, navigate and then scroll
                          setTimeout(() => {
                            const element = document.getElementById(item.hash);
                            if (element) {
                              element.scrollIntoView({ behavior: 'smooth' });
                            }
                          }, 500);
                        }
                      }
                    }}
                  >
                    {item.label || item}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <div className="border-t border-slate-700 mt-2 pt-2 px-4">
            <button  // Change from Link to button
              onClick={handleRegisterClick}
              className="block w-full text-left py-2 text-indigo-400 font-semibold hover:text-indigo-300"
            >
              Register Now
            </button>
            <Link 
              to="/contact" 
              className="block py-2 hover:text-indigo-300"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;