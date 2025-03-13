import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const NavigationIndicator = () => {
  const [activeSection, setActiveSection] = useState('hero');
  
  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'destinations', label: 'Destinations' },
    { id: 'universities', label: 'Universities' },
    { id: 'process', label: 'Process' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Get vertical scroll position
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      // Find the current section
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 64; // Height of fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4">
      {sections.map(section => (
        <motion.button
          key={section.id}
          onClick={() => scrollToSection(section.id)}
          className="relative group"
          whileHover={{ scale: 1.2 }}
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeSection === section.id
                ? 'bg-indigo-500 scale-125' 
                : 'bg-white/50 hover:bg-white'
            }`}
          />
          <span 
            className="absolute left-0 transform -translate-x-full -translate-y-1/2 top-1/2 
              mr-6 px-2 py-1 bg-white/10 backdrop-blur-sm rounded text-white text-sm 
              transition-all duration-300 whitespace-nowrap opacity-0 group-hover:opacity-100 
              group-hover:-translate-x-[120%] -translate-x-full"
          >
            {section.label}
          </span>
        </motion.button>
      ))}
    </div>
  );
};

export default NavigationIndicator;
