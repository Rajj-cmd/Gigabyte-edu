import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import { FaArrowRight, FaArrowLeft, FaUniversity, FaUsers, FaGraduationCap, FaGlobeAmericas, FaArrowUp, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import { useRef, useState, useEffect, useMemo } from "react";
import founderImage from "../assets/images/Founder.jpg"; 
import ApplicationProcess from '../components/ApplicationProcess';
import { universities as usaUniversities } from "../assets/data/usa";
import { ukUniversities } from "../assets/data/uk";
import { australianUniversities } from "../assets/data/australia";
import { germanUniversities } from "../assets/data/germany";
import { canadianUniversities } from "../assets/data/canada";
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import AnimatedLogo from '../components/AnimatedLogo';
import PropTypes from 'prop-types';

const Home = () => {
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const overlayOpacity = useTransform(scrollY, [200, 500], [0, 1]);

  // Define section refs
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const destinationsRef = useRef(null);
  const universitiesRef = useRef(null);
  const processRef = useRef(null);

  const [currentDestination, setCurrentDestination] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const featuredDestinations = [
    {
      name: "Study in USA",
      image: "https://images.unsplash.com/photo-1569447891824-7a1758aa73a2?auto=format&fit=crop&q=80",
      description: "Experience world-class education in the land of opportunities",
      stats: {
        students: "1.1M+",
        universities: "4,000+",
        ranking: "#1"
      },
      features: [
        "Optional Practical Training (OPT)",
        "World-leading research facilities",
        "Diverse campus culture",
        "Global career opportunities"
      ]
    },
    {
      name: "Study in UK",
      image: "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?auto=format&fit=crop&q=80",
      description: "Join institutions with centuries of academic excellence",
      stats: {
        students: "600K+",
        universities: "150+",
        ranking: "#2"
      },
      features: [
        "Post-study work visa",
        "Rich cultural heritage",
        "Global recognition",
        "Research excellence"
      ]
    },
    {
      name: "Study in Canada",
      image: "https://images.unsplash.com/photo-1580894908361-967195033215?auto=format&fit=crop&q=80",
      description: "Experience quality education in a welcoming environment",
      stats: {
        students: "640K+",
        universities: "100+",
        ranking: "#3"
      },
      features: [
        "Post-graduation work permit",
        "Immigration opportunities",
        "High quality of life",
        "Multicultural environment"
      ]
    },
    {
      name: "Study in Australia",
      image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&q=80",
      description: "World-class education in a beautiful country",
      stats: {
        students: "750K+",
        universities: "43+",
        ranking: "#4"
      },
      features: [
        "Post-study work rights",
        "High living standards",
        "Beautiful climate",
        "Strong economy"
      ]
    },
    {
      name: "Study in Germany",
      image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80",
      description: "Access quality education with minimal tuition fees",
      stats: {
        students: "400K+",
        universities: "400+",
        ranking: "#5"
      },
      features: [
        "Low/No tuition fees",
        "Strong job market",
        "Rich culture",
        "Research opportunities"
      ]
    }
  ];

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      if (isAutoPlaying) {
        setCurrentDestination(prev => (prev + 1) % featuredDestinations.length);
      }
    }, 6000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, featuredDestinations.length]);

  // Slide change handler
  const handleSlideChange = (index) => {
    setCurrentDestination(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 6000);
  };

  const handleLearnMoreClick = (destination) => {
    const sectionMap = {
      "Study in USA": "united-states",
      "Study in UK": "united-kingdom",
      "Study in Canada": "canada",
      "Study in Australia": "australia",
      "Study in Germany": "germany"
    };

    const sectionId = sectionMap[destination];
    navigate(`/study-abroad#${sectionId}`);

    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const onRegisterClick = () => {
    navigate('/schedule-visit'); // Changed from /register to /schedule-visit
  };

  // Wrap sections in useMemo
  const sections = useMemo(() => [
    { name: "Home", ref: heroRef },
    { name: "About", ref: aboutRef },
    { name: "Destinations", ref: destinationsRef },
    { name: "Universities", ref: universitiesRef },
    { name: "Process", ref: processRef }
  ], []);  // Empty dependency array since refs are stable

  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      const pageTop = window.scrollY;
      const offsets = sections.map(section => ({
        name: section.name,
        offset: section.ref.current?.offsetTop || 0
      }));

      for (let i = offsets.length - 1; i >= 0; i--) {
        if (pageTop >= offsets[i].offset - 100) {
          setActiveSection(offsets[i].name);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]); // Include sections in deps

  // Add scroll to top functionality
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Enhanced section navigation with hover labels
  const renderSectionNav = () => (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50">
      <div className="flex flex-col gap-4">
        {sections.map((section) => (
          <div key={section.name} className="group relative">
            <motion.button
              onClick={() => section.ref.current?.scrollIntoView({ behavior: 'smooth' })}
              className={`w-3 h-3 rounded-full transition-all duration-300
                ${activeSection === section.name 
                  ? 'bg-indigo-500 scale-125' 
                  : 'bg-white/50 hover:bg-white/75'}`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="sr-only">{section.name}</span>
            </motion.button>
            <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <motion.span
                initial={{ opacity: 0, x: 20 }}
                whileHover={{ opacity: 1, x: 0 }}
                className="text-white text-sm whitespace-nowrap bg-black/50 px-2 py-1 rounded"
              >
                {section.name}
              </motion.span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Render Featured Destinations
  const renderFeaturedDestinations = () => (
    <section className="relative min-h-screen bg-slate-900">
      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentDestination}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <img
              src={featuredDestinations[currentDestination].image}
              alt={featuredDestinations[currentDestination].name}
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/85 to-slate-900/50" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="relative z-10 container mx-auto px-4 h-screen flex items-center">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentDestination}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              {featuredDestinations[currentDestination].name}
            </h2>
            <p className="text-2xl text-slate-300 mb-8">
              {featuredDestinations[currentDestination].description}
            </p>

            <div className="grid grid-cols-3 gap-6 mb-8">
              {Object.entries(featuredDestinations[currentDestination].stats).map(([key, value]) => (
                <div key={key} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-white">{value}</div>
                  <div className="text-sm text-slate-400 capitalize">{key}</div>
                </div>
              ))}
            </div>

            <ul className="space-y-4 mb-8">
              {featuredDestinations[currentDestination].features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center text-slate-300"
                >
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3" />
                  {feature}
                </motion.li>
              ))}
            </ul>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleLearnMoreClick(featuredDestinations[currentDestination].name)}
              className="bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold"
            >
              Learn More
            </motion.button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="absolute z-20 inset-x-0 top-1/2 -translate-y-1/2 flex justify-between items-center px-4">
        <button
          onClick={() => handleSlideChange((currentDestination - 1 + featuredDestinations.length) % featuredDestinations.length)}
          className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors backdrop-blur-sm"
        >
          <FaArrowLeft className="text-white text-xl" />
        </button>
        <button
          onClick={() => handleSlideChange((currentDestination + 1) % featuredDestinations.length)}
          className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors backdrop-blur-sm"
        >
          <FaArrowRight className="text-white text-xl" />
        </button>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {featuredDestinations.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`transition-all duration-300 rounded-full
              ${currentDestination === index ? 'w-8 h-2 bg-white' : 'w-2 h-2 bg-white/50'}`}
          />
        ))}
      </div>
    </section>
  );

  // Get Featured Universities
  const getFeaturedUniversities = () => {
    const allUniversities = [
      ...usaUniversities.USA || [],
      ...ukUniversities || [],
      ...australianUniversities || [],
      ...germanUniversities || [],
      ...canadianUniversities || []
    ];
    
    return allUniversities
      .sort(() => 0.5 - Math.random())
      .slice(0, 6); // Changed from 3 to 6
  };

  const [featuredUniversities] = useState(getFeaturedUniversities());

  // Render Featured Universities
  const renderFeaturedUniversities = () => (
    <section className="relative bg-slate-900 py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Featured Universities
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Discover top-ranked institutions that offer exceptional education opportunities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {featuredUniversities.map((university, index) => (
            <motion.div
              key={university.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden 
                border border-white/10 hover:border-indigo-500/50 
                transition-all duration-300 group cursor-pointer"
              onClick={() => {
                const encodedName = encodeURIComponent(university.name);
                const countryCode = university.location.includes("USA") ? "USA" :
                                  university.location.includes("UK") ? "UK" :
                                  university.location.includes("Canada") ? "CANADA" :
                                  university.location.includes("Australia") ? "AUSTRALIA" :
                                  "GERMANY";
                navigate(`/explore-universities?country=${countryCode}&university=${encodedName}`);
              }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={university.images[0]}
                  alt={university.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{university.name}</h3>
                <p className="text-slate-400 mb-4 flex items-center">
                  <FaMapMarkerAlt className="mr-2 text-indigo-400" />
                  {university.location}
                </p>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-300">
                    <FaUniversity className="inline mr-2 text-indigo-400" />
                    {university.type}
                  </span>
                  <span className="text-slate-300">
                    <FaUsers className="inline mr-2 text-indigo-400" />
                    Ranking: {university.ranking}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button
            onClick={() => navigate('/explore-universities')}
            className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 
              rounded-xl text-lg font-semibold transition-all duration-300
              hover:shadow-lg hover:shadow-indigo-500/25"
          >
            Explore All Universities
          </button>
        </motion.div>
      </div>
    </section>
  );

  return (
    <>
      <SEO 
        title="Home"
        description="Start your international education journey with Gigabyte Education. Expert guidance for studying in USA, UK, Canada, Australia & Germany. Leading education consultancy in Nepal."
        keywords="study abroad, international education, education consultancy Nepal, university admissions, study in USA, study in UK, study in Canada, study in Australia, study in Germany"
        ogType="website"
      />
      <Layout>
        {renderSectionNav()}

        {/* Scroll to Top Button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              onClick={scrollToTop}
              className="fixed bottom-8 right-8 z-50 bg-indigo-600 text-white p-3 rounded-full 
                shadow-lg hover:bg-indigo-500 transition-colors duration-300"
            >
              <FaArrowUp />
            </motion.button>
          )}
        </AnimatePresence>

        <div className="relative">
          {/* Update section refs */}
          <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
            {/* Background Image Overlay */}
            <div className="absolute inset-0">
              <motion.div 
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <img 
                  src="src/assets/images/Graduation.jpg" 
                  alt="University Campus"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/90" />
              </motion.div>
            </div>

            {/* Content Container */}
            <div className="relative container mx-auto px-4 py-32">
              <div className="flex items-center justify-between max-w-7xl mx-auto">
                {/* Text Content */}
                <div className="flex-1 max-w-3xl">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm 
                      border border-white/20 text-sm font-medium text-indigo-300 mb-6"
                  >
                    Your Gateway to Global Education
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-6xl lg:text-8xl font-bold mb-6"
                  >
                    <span className="text-white block mb-2">Transform Your</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r 
                      from-indigo-400 via-purple-400 to-pink-400">
                      Future Globally
                    </span>
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-xl text-slate-300 mb-8 max-w-xl"
                  >
                    Get expert guidance and support for your international education journey. 
                    Join thousands of successful students studying at top universities worldwide.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="flex flex-col sm:flex-row items-center sm:items-start 
                      space-y-4 sm:space-y-0 sm:space-x-4"
                  >
                    <button
                      onClick={() => navigate('/explore-universities')}
                      className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 
                        rounded-xl text-lg font-semibold text-white w-full sm:w-auto
                        hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300
                        transform hover:-translate-y-1"
                    >
                      Explore Universities
                    </button>
                    <button
                      onClick={onRegisterClick}
                      className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 
                        rounded-xl text-lg font-semibold text-white w-full sm:w-auto
                        hover:bg-white/20 transition-all duration-300"
                    >
                      Schedule a Visit →
                    </button>
                  </motion.div>
                </div>

                {/* Logo with Symbols */}
                <div className="hidden md:flex flex-col items-center">
                  <div className="w-[300px] h-[300px] mb-4">
                    <AnimatedLogo className="w-full h-full" />
                  </div>
                  {/* Symbols positioned below logo */}
                  <div className="flex items-center justify-center space-x-4">
                    <FaGraduationCap className="text-indigo-400 text-xl hover:text-indigo-300 transition-colors" />
                    <FaGlobeAmericas className="text-purple-400 text-xl hover:text-purple-300 transition-colors" />
                    <FaUniversity className="text-pink-400 text-xl hover:text-pink-300 transition-colors" />
                    <FaUsers className="text-blue-400 text-xl hover:text-blue-300 transition-colors" />
                  </div>
                </div>

              </div>
            </div>
          </section>

          <section ref={aboutRef} id="about" className="relative min-h-screen">
            <div className="relative min-h-screen">
              <motion.div 
                className="absolute inset-0 z-0"
                style={{ 
                  backgroundImage: "url('https://images.unsplash.com/photo-1577412647305-991150c7d163?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <motion.div 
                  style={{ opacity: overlayOpacity }}
                  className="absolute inset-0 bg-gradient-to-b from-slate-900/98 via-slate-900/95 to-slate-900/98"
                />
              </motion.div>

              <div className="relative z-10 container mx-auto px-4 py-20">
                <div className="grid md:grid-cols-2 gap-16 items-start">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="backdrop-blur-sm bg-white/10 rounded-3xl p-8 shadow-2xl"
                  >
                    <div className="flex flex-col items-center text-center mb-8">
                      <div className="relative w-48 h-48 mb-6">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-spin-slow" />
                        <img
                          src={founderImage}
                          alt="Suman Pathak"
                          className="rounded-full w-full h-full object-cover border-4 border-white relative z-10"
                        />
                      </div>
                      <h2 className="text-3xl font-bold text-white mb-2">Suman Pathak</h2>
                      <p className="text-indigo-300 font-semibold">Founder & Lead Consultant</p>
                      <a 
                        href="https://www.linkedin.com/in/suman-pathak-702165276/" // Update this line with the new LinkedIn URL
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors"
                      >
                        <FaLinkedin size={24} className="mr-2" />
                        Connect on LinkedIn
                      </a>
                    </div>
                    <div className="text-slate-300 space-y-4">
                      <p className="leading-relaxed">
                      Suman Pathak is the Lead Consultant and Founder of Gigabyte Education Consultancy, bringing over 7 years of expertise in the education consultancy field. With a deep commitment to helping students achieve their academic goals, Suman has successfully guided numerous applicants toward securing places in their dream universities. His vast experience and personalized approach have made him a trusted advisor for students looking to study abroad, ensuring they receive the support and insights needed for a successful academic journey.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3" />
                          Certified Education Consultant
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3" />
                          Expert in International University Admissions
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3" />
                          Specialized in Study Abroad Programs
                        </li>
                      </ul>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="backdrop-blur-sm bg-white/10 rounded-3xl p-8 shadow-2xl"
                  >
                    <div className="text-center mb-8">
                      <h2 className="text-3xl font-bold text-white mb-4">
                        About Gigabyte Education
                      </h2>
                      <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto" />
                    </div>
                    <div className="text-slate-300 space-y-6">
                      <p className="leading-relaxed">
                      Gigabyte Education Consultancy is a leading education consultancy dedicated to providing expert guidance and support to students aspiring to study abroad. With years of experience and a deep understanding of the academic landscape, we help students navigate the complex processes of university applications, visa procedures, and scholarship opportunities. Our expert team is committed to ensuring that every student receives the personalized attention and support they deserve, making their dream of studying abroad a reality.
                      </p>
                      <div className="grid grid-cols-2 gap-6">
                        <div className="text-center p-4 rounded-xl bg-white/5">
                          <h3 className="text-xl font-semibold text-indigo-400 mb-2">Our Mission</h3>
                          <p className="text-sm">
                            To provide expert guidance and support for students
                            pursuing international education opportunities.
                          </p>
                        </div>
                        <div className="text-center p-4 rounded-xl bg-white/5">
                          <h3 className="text-xl font-semibold text-indigo-400 mb-2">Our Vision</h3>
                          <p className="text-sm">
                            To become the most trusted name in educational
                            consulting, known for excellence and student success.
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          <section ref={destinationsRef} id="destinations" className="relative min-h-screen">
            {renderFeaturedDestinations()}
          </section>

          <section ref={universitiesRef} id="universities" className="relative min-h-screen">
            {renderFeaturedUniversities()}
          </section>

          <section ref={processRef} id="process" className="relative pb-20">
            <ApplicationProcess />
          </section>
        </div>
      </Layout>
    </>
  );
};

export default Home;