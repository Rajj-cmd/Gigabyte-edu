import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import AnimatedLogo from "../components/AnimatedLogo";
import { FaLinkedin } from "react-icons/fa";
import founderImage from "../assets/images/Founder.jpg"; 
import ApplicationProcess from '../components/ApplicationProcess';

const Home = () => {
  const navigate = useNavigate();  // Add this
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], ['0%', '20%']);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const overlayOpacity = useTransform(scrollY, [200, 500], [0, 1]);

  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative min-h-screen">
        {/* Background with Parallax */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ 
            y: backgroundY,
            backgroundImage: "url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <motion.div 
            style={{ opacity }}
            className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-800/95 to-indigo-900/90"
          />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center min-h-[calc(100vh-6rem)]">
            {/* Left Column - About Us */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white space-y-6"
            >
              <h1 className="text-5xl font-bold leading-tight">
                Your Gateway to Global Education
              </h1>
              <p className="text-xl text-slate-200 leading-relaxed">
                At Gigabyte Education Consultancy, we transform educational aspirations into reality. 
                Our expert guidance ensures your path to international education is clear and achievable.
              </p>
              <div className="space-y-4 text-lg text-slate-200">
                <div className="flex items-center space-x-3">
                  <motion.div 
                    className="w-2 h-2 bg-indigo-400 rounded-full"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                  <span>Expert guidance from certified consultants</span>
                </div>
                <div className="flex items-center space-x-3">
                  <motion.div 
                    className="w-2 h-2 bg-indigo-400 rounded-full"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                  />
                  <span>Partnerships with top global universities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <motion.div 
                    className="w-2 h-2 bg-indigo-400 rounded-full"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                  />
                  <span>Comprehensive visa assistance</span>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3 rounded-lg 
                  shadow-lg transition-all duration-200 text-lg font-semibold mt-8"
              >
                Start Your Journey
              </motion.button>
            </motion.div>

            {/* Right Column - 3D Logo */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 shadow-2xl">
                <AnimatedLogo />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="relative min-h-screen">
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

          {/* Move ApplicationProcess outside the grid */}
          <ApplicationProcess />
        </div>
      </div>

      {/* Services Preview Section */}
      <div className="relative min-h-screen">
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
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
            {[
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
            ].map((benefit, index) => (
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
                transition={{ delay: index * 0.2 }}
                onClick={() => navigate(`/services#${service.hash}`)}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-500/10 
                  to-purple-500/10 p-8 hover:from-indigo-500/20 hover:to-purple-500/20 transition-all duration-300
                  cursor-pointer transform hover:scale-105"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-300 mb-6">{service.description}</p>
                <div className="absolute bottom-4 right-4 text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More →
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;