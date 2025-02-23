import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import AnimatedLogo from "../components/AnimatedLogo";
import { FaLinkedin, FaMapMarkerAlt, FaArrowRight, FaArrowLeft, FaFacebook, FaEnvelope, FaGlobeAmericas, FaGraduationCap, FaChalkboardTeacher } from "react-icons/fa";
import founderImage from "../assets/images/Founder.jpg"; 
import ApplicationProcess from '../components/ApplicationProcess';
import { useRef, useState } from "react";
import { universities as usaUniversities } from "../assets/data/usa";
import { ukUniversities } from "../assets/data/uk";
import { australianUniversities } from "../assets/data/australia";
import { germanUniversities } from "../assets/data/germany";
import { canadianUniversities } from "../assets/data/canada";

const Home = () => {
  const navigate = useNavigate();  // Add this
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], ['0%', '20%']);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const overlayOpacity = useTransform(scrollY, [200, 500], [0, 1]);
  const scrollContainerRef = useRef(null);

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const isInView1 = useInView(ref1, { once: true, margin: "-100px" });
  const isInView2 = useInView(ref2, { once: true, margin: "-100px" });
  const isInView3 = useInView(ref3, { once: true, margin: "-100px" });

  const [isButtonVisible, setIsButtonVisible] = useState(true);

  const benefits = [
    {
      icon: "🎯",
      title: "Expert Guidance",
      description: "Our experienced consultants provide personalized advice tailored to your academic goals and aspirations."
    },
    {
      icon: "🌍",
      title: "Global Network",
      description: "Access our extensive network of top universities and educational institutions worldwide."
    },
    {
      icon: "⚡",
      title: "Streamlined Process",
      description: "Navigate complex application procedures with ease through our structured approach."
    },
    {
      icon: "💎",
      title: "Quality Assurance",
      description: "Benefit from our high success rate and proven track record of student placements."
    },
    {
      icon: "🤝",
      title: "Complete Support",
      description: "From application to arrival, receive comprehensive assistance at every step."
    },
    {
      icon: "🚀",
      title: "Future Ready",
      description: "Get guidance that prepares you for both academic success and career growth."
    }
  ];

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const [hoveredPath, setHoveredPath] = useState(null);

  // Interactive paths with animations
  const educationPaths = [
    {
      id: 'usa',
      title: "Study in USA",
      icon: FaGlobeAmericas,
      color: "from-blue-500 to-indigo-600",
      route: "/study-abroad#united-states"
    },
    {
      id: 'uk',
      title: "Study in UK",
      icon: FaGraduationCap,
      color: "from-purple-500 to-pink-600",
      route: "/study-abroad#united-kingdom"
    },
    {
      id: 'canada',
      title: "Study in Canada",
      icon: FaChalkboardTeacher,
      color: "from-red-500 to-orange-600",
      route: "/study-abroad#canada"
    }
  ];

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Parallax effect for images
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  // Enhanced scroll animations
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 400], [1, 0.95]);
  const heroY = useTransform(scrollY, [0, 400], [0, 100]);
  const blurStrength = useTransform(scrollY, [0, 200], [0, 8]);

  return (
    <div className="relative bg-slate-900">
      {/* Hero Section - Updated styling and animations */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background with enhanced parallax */}
        <motion.div 
          className="absolute inset-0"
          style={{ 
            opacity: heroOpacity,
            scale: heroScale,
            y: heroY
          }}
        >
          {/* Main Background Image */}
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1"
            className="w-full h-full object-cover opacity-30"
            alt="Background"
          />
          
          {/* Updated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/95 via-slate-900/85 to-transparent" />

          {/* Enhanced gradient orbs */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.15, 0.35, 0.15],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-1/4 -left-48 w-96 h-96 bg-indigo-500/40 rounded-full blur-[100px]"
            style={{
              filter: `blur(${Math.min(100, scrollY.get() / 5)}px)`
            }}
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.15, 0.35, 0.15],
            }}
            transition={{ duration: 8, repeat: Infinity, delay: 2 }}
            className="absolute bottom-1/4 -right-48 w-96 h-96 bg-purple-500/40 rounded-full blur-[100px]"
            style={{
              filter: `blur(${Math.min(100, scrollY.get() / 5)}px)`
            }}
          />
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ opacity: heroOpacity }}
        >
          <div className="flex flex-col items-center">
            <div className="w-1 h-16 rounded-full bg-gradient-to-b from-white/20 to-transparent" />
            <p className="text-white/50 text-sm mt-2">Scroll to explore</p>
          </div>
        </motion.div>

        {/* Content with enhanced animations */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6">
          <motion.div 
            className="min-h-screen flex items-center"
            style={{ 
              opacity: heroOpacity,
              scale: heroScale,
              y: heroY
            }}
          >
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 w-full items-center py-20 lg:py-0">
              {/* Left Column */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="space-y-6 lg:space-y-8 text-center lg:text-left"
              >
                {/* Title and Description */}
                <div className="space-y-4 lg:space-y-6">
                  <motion.h1 
                    className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <span className="text-white">Transform Your</span>
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                      Future Globally
                    </span>
                  </motion.h1>

                  <motion.p
                    className="text-lg sm:text-xl text-slate-200 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    Expert guidance for your international education journey. Get personalized 
                    support to study at top universities worldwide.
                  </motion.p>
                </div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate('/explore-universities')}
                    className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 
                      rounded-xl text-lg font-semibold text-white
                      shadow-[0_4px_20px_rgba(79,70,229,0.3)]
                      hover:shadow-[0_6px_24px_rgba(79,70,229,0.4)]
                      transition-all duration-300"
                  >
                    Explore Universities
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate('/register')}
                    className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white 
                      rounded-xl text-lg font-semibold backdrop-blur-sm 
                      border border-white/10
                      shadow-[0_4px_20px_rgba(255,255,255,0.1)]
                      hover:shadow-[0_6px_24px_rgba(255,255,255,0.15)]
                      transition-all duration-300"
                  >
                    Free Consultation
                  </motion.button>
                </motion.div>
              </motion.div>

              {/* Right Column - Animated Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="relative hidden lg:block"
              >
                <AnimatedLogo />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Seamless transition to next section */}
      <motion.div
        className="absolute left-0 right-0 h-32 -mt-32 bg-gradient-to-b from-transparent to-slate-900"
        style={{
          opacity: useTransform(scrollY, [0, 200], [0, 1])
        }}
      />

      {/* About Section */}
      <section className="relative min-h-screen bg-slate-900/95">
        {/* Background with Overlay */}
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

        {/* About Content */}
        <div className="relative z-10 container mx-auto px-4 py-20">
          {/* Fix the About Us section structure */}
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Founder Section */}
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
                  href="https://linkedin.com/in/your-profile" // Update with actual LinkedIn URL
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

            {/* Company Section */}
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
                  Gigabyte Education Consultancy is a leading education consultancy dedicated to providing expert guidance and 
                  support to students aspiring to study abroad. With years of experience and a deep understanding of the academic 
                  landscape, we help students navigate the complex processes of university applications, visa procedures, and 
                  scholarship opportunities. Our expert team is committed to ensuring that every student receives the personalized 
                  attention and support they deserve, making their dream of studying abroad a reality.
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

          <div className="relative py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ 
                once: true,
                amount: 0.5 // Increased trigger area
              }}
              transition={{ 
                duration: 0.5,
                ease: "easeOut"
              }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Featured Study Destinations
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Explore opportunities at prestigious universities across the globe
              </p>
            </motion.div>

            <div className="relative max-w-7xl mx-auto px-4">
              {/* Scroll Controls */}
              <button
                onClick={() => scrollContainerRef.current?.scrollBy({ left: -400, behavior: 'smooth' })}
                className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-slate-800/80 hover:bg-slate-700/80 
                  text-white p-3 rounded-full backdrop-blur-sm shadow-lg"
                aria-label="Scroll left"
              >
                <FaArrowLeft />
              </button>
              <button
                onClick={() => scrollContainerRef.current?.scrollBy({ left: 400, behavior: 'smooth' })}
                className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-slate-800/80 hover:bg-slate-700/80 
                  text-white p-3 rounded-full backdrop-blur-sm shadow-lg"
                aria-label="Scroll right"
              >
                <FaArrowRight />
              </button>

              {/* Scrollable Cards */}
              <div
                ref={scrollContainerRef}
                className="overflow-x-auto scrollbar-hide flex space-x-6 pb-4"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {[
                  {
                    name: "Study in USA",
                    image: "https://images.unsplash.com/photo-1569247442329-5c793b316b36",
                    description: "Home to many world-renowned universities offering diverse opportunities.",
                    stats: ["1.1M+ International Students", "Top Research Facilities", "Optional Practical Training"]
                  },
                  {
                    name: "Study in UK",
                    image: "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9",
                    description: "Excellence in education with a rich academic heritage spanning centuries.",
                    stats: ["650K+ International Students", "Short Program Duration", "Post-Study Work Visa"]
                  },
                  {
                    name: "Study in Canada",
                    image: "https://images.unsplash.com/photo-1569124589354-615739ae007b",
                    description: "High quality of life and welcoming environment for international students.",
                    stats: ["640K+ International Students", "Work While Studying", "Immigration Pathway"]
                  },
                  {
                    name: "Study in Australia",
                    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be",
                    description: "World-class education with excellent weather and lifestyle.",
                    stats: ["750K+ International Students", "Post-Study Work Rights", "High Living Standards"]
                  },
                  {
                    name: "Study in Germany",
                    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b",
                    description: "Innovation hub with many tuition-free public universities.",
                    stats: ["400K+ International Students", "No/Low Tuition Fees", "Strong Economy"]
                  }
                ].map((destination, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex-shrink-0 w-80 bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden 
                      border border-white/10 group hover:bg-white/10 transition-all duration-300 cursor-pointer"
                    onClick={() => navigate(`/study-abroad#${destination.name.toLowerCase().split(' ')[2]}`)}
                  >
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={destination.image} 
                        alt={destination.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{destination.name}</h3>
                      <p className="text-slate-300 mb-4">{destination.description}</p>
                      <div className="space-y-2">
                        {destination.stats.map((stat, idx) => (
                          <div key={idx} className="flex items-center text-sm text-slate-400">
                            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2" />
                            {stat}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Move ApplicationProcess outside the grid */}
          <ApplicationProcess />
        </div>
      </section>

      {/* Services Section */}
      <section className="relative min-h-screen bg-slate-900">
        {/* Background with Parallax Effect */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')", // Eiffel Tower image
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/98 via-slate-900/90 to-slate-900/98" />
        </motion.div>

        <div className="relative z-10 container mx-auto px-4 py-24">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }} // Changed from whileInView to animate
            transition={{ 
              duration: 0.8,
              ease: "easeOut"
            }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Professional Guidance?
            </h2>
            <p className="text-xl text-slate-300">
              Your journey to studying abroad deserves expert support. Let us be your trusted partner in making your international education dreams a reality.
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="backdrop-blur-sm bg-white/5 rounded-xl p-6 hover:bg-white/10 
                  transition-all duration-300 border border-white/10"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-slate-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Services Preview Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "University Admissions",
                description: "Expert guidance for university selection and application process.",
                icon: "🎓",
                hash: "pre-application-services"
              },
              {
                title: "Visa Assistance",
                description: "Complete support for student visa applications and documentation.",
                icon: "✈️",
                hash: "visa-travel-support"
              },
              {
                title: "Financial Planning",
                description: "Comprehensive guidance on funding and scholarship opportunities.",
                icon: "💰",
                hash: "financial-support-services"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-500/10 
                  to-purple-500/10 p-8 hover:from-indigo-500/20 hover:to-purple-500/20 transition-all duration-300
                  cursor-pointer transform hover:scale-105"
                onClick={() => navigate(`/services#${service.hash}`)}
              >
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-300 mb-6">{service.description}</p>
                <div className="absolute bottom-4 right-4 text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More →
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-slate-900">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ 
            backgroundImage: `
              linear-gradient(to bottom, rgba(15, 23, 42, 0.98), rgba(15, 23, 42, 0.95)),
              url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')
            `,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/95 to-slate-900/90" />
        </motion.div>

        <div className="relative z-10 container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-bold text-white">GIGABYTE</h3>
              <p className="text-slate-300">
                Your trusted partner in international education, guiding students towards their academic dreams since 2016.
              </p>
              <div className="flex space-x-4 mt-4">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-indigo-400 transition-colors"
                >
                  <FaFacebook size={24} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-indigo-400 transition-colors"
                >
                  <FaLinkedin size={24} />
                </motion.a>
              </div>
            </div>
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['About Us', 'Services', 'Study Abroad', 'Contact'].map((item) => (
                  <li key={item}>
                    <motion.span
                      className="text-slate-300 hover:text-indigo-400 cursor-pointer transition-colors"
                      whileHover={{ x: 5 }}
                      onClick={() => navigate(`/${item.toLowerCase().replace(' ', '-')}`)}
                    >
                      {item}
                    </motion.span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Our Services</h4>
              <ul className="space-y-2">
                {[
                  { name: 'University Admissions', hash: 'pre-application-services' },
                  { name: 'Visa Assistance', hash: 'visa-travel-support' },
                  { name: 'Financial Planning', hash: 'financial-support-services' },
                  { name: 'Career Guidance', hash: 'academic-support-services' },
                ].map((service) => (
                  <li key={service.name}>
                    <motion.span
                      className="text-slate-300 hover:text-indigo-400 cursor-pointer transition-colors"
                      whileHover={{ x: 5 }}
                      onClick={() => navigate(`/services#${service.hash}`)}
                    >
                      {service.name}
                    </motion.span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3 text-slate-300">
                  <FaMapMarkerAlt className="mt-1 text-indigo-400 flex-shrink-0" />
                  <span>123 Education Street, Tech City, TC 12345</span>
                </li>
                <li>
                  <a 
                    href="mailto:info@gigabyte-education.com" 
                    className="flex items-center space-x-3 text-slate-300 hover:text-indigo-400 transition-colors"
                  >
                    <FaEnvelope className="text-indigo-400" /> 
                    <span>info@gigabyte-education.com</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Copyright */}
          <div className="mt-16 pt-8 border-t border-slate-800">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-slate-400"
            >
              <p>&copy; {new Date().getFullYear()} Gigabyte Education. All rights reserved.</p>
            </motion.div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;