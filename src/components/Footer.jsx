import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGlobe, FaWhatsapp, FaArrowRight } from "react-icons/fa";

const Footer = () => {
  const navigate = useNavigate(); // Add this hook

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Study Abroad", href: "/study-abroad" },
    { name: "Universities", href: "/explore-universities" },
    { name: "Contact", href: "/contact" }
  ];

  const destinations = [
    { name: "Study in USA", href: "/study-abroad#united-states" },
    { name: "Study in UK", href: "/study-abroad#united-kingdom" },
    { name: "Study in Canada", href: "/study-abroad#canada" },
    { name: "Study in Australia", href: "/study-abroad#australia" },
    { name: "Study in Germany", href: "/study-abroad#germany" }
  ];

  const contact = [
    { icon: <FaEnvelope />, text: "gigabyteedu@gmail.com", href: "mailto:gigabyteedu@gmail.com" },
    { icon: <FaPhone />, text: "+977 9767659319", href: "tel:+9779767659319" },
    { icon: <FaMapMarkerAlt />, text: "Kathmandu, Nepal", href: "https://maps.app.goo.gl/SknJSTnkqV2pum3W6" }
  ];

  const socials = [
    { 
      icon: <FaFacebook size={28} />, 
      href: "https://www.facebook.com/profile.php?id=61557666615964",
      label: "Facebook",
      color: "hover:text-blue-500 text-blue-600" 
    },
    { 
      icon: <FaInstagram size={28} />, 
      href: "https://www.instagram.com/gigabyte_education?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      label: "Instagram",
      color: "hover:text-pink-500 text-pink-600" 
    },
    { 
      icon: <FaWhatsapp size={28} />, 
      href: "https://wa.me/9779767659319",
      label: "WhatsApp",
      color: "hover:text-green-500 text-green-600" 
    },
    { 
      icon: <FaEnvelope size={28} />, 
      href: "mailto:gigabyteedu@gmail.com",
      label: "Email",
      color: "hover:text-red-500 text-red-600" 
    }
  ];

  const handleDestinationClick = (e, href) => {
    e.preventDefault();
    const [path, hash] = href.split('#');
    
    // Navigate to study-abroad page first
    navigate(path);
    
    // Then scroll to the section after a short delay
    setTimeout(() => {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <footer className="relative z-10">
      {/* Map Section with Enhanced Styling */}
      <div className="relative">
        {/* Title Section with Gradient */}
        <div className="absolute top-0 left-0 right-0 z-20 text-center py-8 bg-gradient-to-b from-slate-900 to-transparent">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-200"
          >
            Visit Our Office
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-300 mt-2"
          >
            Come meet our expert consultants in person
          </motion.p>
        </div>

        {/* Map Container with Enhanced Styling */}
        <div className="w-full h-[600px] relative overflow-hidden">
          {/* Bright Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-600/10 via-transparent to-slate-900/90 mix-blend-overlay z-10" />
          
          {/* Map Frame */}
          <div className="absolute inset-4 rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d883.4853341053516!2d85.3120527!3d27.7097115!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1941889d3b85%3A0xd12d297723bfd157!2sGigabyte%20Education%20Consultancy%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1706771485311"
              className="w-full h-full"
              style={{ border: 0, filter: 'contrast(1.1) brightness(1.1)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Gigabyte Education Location"
            />
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                Gigabyte Education
              </h3>
              <p className="text-slate-300 mb-6">
                Your trusted partner for international education guidance and university admissions support.
              </p>
              <div className="flex space-x-6">
                {socials.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className={`bg-white/10 p-4 rounded-lg hover:bg-white/20 transition-all duration-300 ${social.color}`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="text-slate-300 hover:text-indigo-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Study Destinations */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Study Destinations</h4>
              <ul className="space-y-3">
                {destinations.map((destination, index) => (
                  <li key={index}>
                    <a
                      href={destination.href}
                      onClick={(e) => handleDestinationClick(e, destination.href)}
                      className="text-slate-300 hover:text-indigo-400 transition-colors"
                    >
                      {destination.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Contact Us</h4>
              <ul className="space-y-4">
                {contact.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start space-x-3 text-slate-300 hover:text-indigo-400 transition-colors"
                    >
                      <span className="text-indigo-400 mt-1">{item.icon}</span>
                      <span>{item.text}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-slate-400 text-sm">
                © {new Date().getFullYear()} Gigabyte Education. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
