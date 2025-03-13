import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { FaGraduationCap, FaPassport, FaPlane, FaHome, FaFileAlt, FaBriefcase, 
         FaDollarSign, FaUserGraduate, FaHandshake, FaGlobe, FaBook, FaUsers,
         FaPencilAlt, FaComments, FaUniversity, FaHeart, FaEdit, FaUserTie,
         FaLightbulb, FaCog } from "react-icons/fa";
import AnimatedLogo from "../components/AnimatedLogo";
import Layout from "../components/Layout";

const Services = () => {
  const { section } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [expandedService, setExpandedService] = useState(null);
  
  // Scroll to section when component mounts or section changes
  useEffect(() => {
    if (section) {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [section]);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const serviceCategories = [
    {
      title: "Pre-Application Services",
      id: "pre-application-services",
      services: [
        {
          icon: <FaUniversity />,
          name: "University Selection & Admission Guidance",
          description: `Our expert consultants provide personalized university recommendations based on your academic background, 
          career aspirations, and financial considerations. We analyze factors such as university rankings, program curriculum, 
          research opportunities, and campus culture to help you make an informed decision.`
        },
        {
          icon: <FaEdit />,
          name: "Application Assistance",
          description: `We provide comprehensive support throughout the application process, including guidance on crafting 
          compelling Statements of Purpose (SOPs), securing strong Letters of Recommendation (LORs), and preparing a 
          professional academic resume. Our team ensures all application components meet university standards and deadlines.`
        },
        {
          icon: <FaPencilAlt />,
          name: "SOP & Essay Writing Assistance",
          description: `Our experienced writers help you craft compelling Statements of Purpose and admission essays that effectively 
          communicate your achievements, aspirations, and unique qualities. We ensure your writing stands out while maintaining 
          authenticity and meeting academic standards.`
        }
      ]
    },
    {
      title: "Financial Support Services",
      id: "financial-support-services",
      services: [
        {
          icon: <FaDollarSign />,
          name: "Scholarship & Financial Aid Guidance",
          description: `Our team helps identify and apply for relevant scholarships, grants, and financial aid opportunities. 
          We assist in preparing compelling scholarship applications and guide you through the documentation requirements to 
          maximize your chances of securing financial support.`
        },
        {
          icon: <FaFileAlt />,
          name: "Educational Loan Assistance",
          description: `We provide comprehensive guidance on educational loans, helping you understand different loan options, 
          interest rates, and repayment terms. We connect you with trusted financial institutions and assist with loan application 
          documentation.`
        },
        {
          icon: <FaHandshake />,
          name: "Financial Planning Support",
          description: `We help create detailed financial plans covering tuition, living expenses, and other costs. Our experts 
          provide advice on managing finances abroad, including setting up bank accounts and understanding currency exchange.`
        }
      ]
    },
    {
      title: "Visa & Travel Support",
      id: "visa-travel-support",
      services: [
        {
          icon: <FaPassport />,
          name: "Visa Application Support",
          description: `Expert guidance through the entire student visa process, including document preparation, application 
          submission, and interview preparation. We stay updated with the latest visa requirements and procedures for all major 
          study destinations.`
        },
        {
          icon: <FaPlane />,
          name: "Travel Planning Assistance",
          description: `Comprehensive travel planning support, including flight bookings, airport pickup arrangements, and 
          emergency contact setup. We provide detailed pre-departure briefings to ensure you're well-prepared for your journey.`
        },
        {
          icon: <FaHome />,
          name: "Accommodation Arrangements",
          description: `We help secure comfortable and convenient accommodation options, whether on-campus or off-campus. Our team 
          assists with housing applications, lease agreements, and understanding local rental markets and regulations.`
        }
      ]
    },
    {
      title: "Post-Arrival Support",
      id: "post-arrival-support",
      services: [
        {
          icon: <FaGlobe />,
          name: "Cultural Adaptation Support",
          description: `Guidance on adjusting to your new environment, including cultural norms, local customs, and practical aspects 
          of daily life. We provide resources and support to help you integrate into your new academic and social community.`
        },
        {
          icon: <FaUsers />,
          name: "Student Community Network",
          description: `Access to our network of current students and alumni studying abroad. Connect with peers, share experiences, 
          and get practical advice from those who have successfully navigated the international education journey.`
        },
        {
          icon: <FaBriefcase />,
          name: "Career Development Support",
          description: `Ongoing career guidance, including resume building, interview preparation, and job search strategies. We help 
          you understand work opportunities during and after your studies, including internship placements and post-study work visas.`
        }
      ]
    },
    {
      title: "Academic Support Services",
      id: "academic-support-services",
      services: [
        {
          icon: <FaBook />,
          name: "Course Selection Guidance",
          description: `Expert advice on choosing the right courses and specializations that align with your career goals. We help you 
          understand credit requirements, course prerequisites, and academic policies.`
        },
        {
          icon: <FaUserGraduate />,
          name: "Academic Performance Support",
          description: `Resources and guidance to help you excel in your studies, including study techniques, time management 
          strategies, and connecting with academic support services at your institution.`
        },
        {
          icon: <FaLightbulb />,
          name: "Research & Project Guidance",
          description: `Support for research projects, thesis work, and academic publications. We help you connect with research 
          opportunities and provide guidance on academic writing and presentation skills.`
        }
      ]
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-slate-900 py-24 relative overflow-hidden">
        {/* Background Effect */}
        <div className="fixed inset-0 pointer-events-none">
          <div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            style={{ width: '200%', height: '200%' }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
              className="w-full h-full opacity-[0.02]"
            >
              <AnimatedLogo isBackground={true} />
            </motion.div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive Study Abroad Services
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              From application to graduation, we provide expert guidance and support at every step 
              of your international education journey.
            </p>
          </motion.div>

          {/* Service Categories */}
          <div className="space-y-12 mb-20">
            {serviceCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                id={category.id}  // Use the defined ID instead of generating it
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.2 }}
                className="scroll-mt-24" // Add this class for better scrolling with fixed header
              >
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
                  {category.title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={serviceIndex}
                      className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 
                               hover:bg-white/10 transition-all duration-300 cursor-pointer"
                      onClick={() => setExpandedService(
                        expandedService === `${categoryIndex}-${serviceIndex}` 
                          ? null 
                          : `${categoryIndex}-${serviceIndex}`
                      )}
                    >
                      {/* Service Content */}
                      <div className="flex items-start space-x-4">
                        <div className="text-indigo-400 text-2xl mt-1">
                          {service.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">
                            {service.name}
                          </h3>
                          <AnimatePresence>
                            {expandedService === `${categoryIndex}-${serviceIndex}` ? (
                              <motion.p
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="text-slate-300"
                              >
                                {service.description}
                              </motion.p>
                            ) : (
                              <p className="text-slate-300 line-clamp-2">
                                {service.description}
                              </p>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your International Education Journey?
            </h2>
            <p className="text-slate-300 mb-8">
              Let our experts guide you through every step of the way. Schedule a free consultation today!
            </p>
            <motion.button
              onClick={() => navigate('/register')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center justify-center px-8 py-4 
                       text-lg font-bold text-white bg-gradient-to-r from-indigo-600 
                       to-purple-600 rounded-full overflow-hidden shadow-lg"
            >
              <span className="relative z-10">Schedule Free Consultation</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full 
                            group-hover:translate-y-0 transition-transform duration-300" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Services;