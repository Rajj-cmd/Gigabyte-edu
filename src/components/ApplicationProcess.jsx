import { motion } from "framer-motion";
import { 
  FaUserGraduate, FaFileAlt, FaPassport, 
  FaPlane, FaUniversity, FaCheckCircle 
} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const ProcessCard = ({ icon: Icon, title, description, details, index, isLast }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    viewport={{ once: true }}
    className="relative group"
  >
    <div className="relative p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10
      hover:border-indigo-500/30 transition-all duration-300 h-full shadow-xl">
      {/* Number Badge */}
      <div className="absolute -top-4 -left-4 w-8 h-8 bg-indigo-600 rounded-full flex items-center 
        justify-center text-white font-bold shadow-lg">
        {index + 1}
      </div>
      
      {/* Icon Container */}
      <div className="flex justify-center mb-6">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="w-20 h-20 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600
            p-4 flex items-center justify-center text-white text-3xl shadow-xl
            group-hover:shadow-indigo-500/30 transition-all duration-300"
        >
          <Icon />
        </motion.div>
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-white mb-3 text-center">{title}</h3>
      <p className="text-slate-300 text-center mb-6">{description}</p>
      
      {/* Details List */}
      <ul className="space-y-3">
        {details.map((detail, idx) => (
          <li key={idx} className="flex items-start space-x-3 text-slate-300">
            <FaCheckCircle className="mt-1 text-indigo-400 flex-shrink-0" />
            <span>{detail}</span>
          </li>
        ))}
      </ul>

      {/* Connecting Line */}
      {!isLast && (
        <div className="absolute top-1/2 -right-16 w-32 border-t-2 border-dashed 
          border-indigo-500/20 hidden lg:block" />
      )}
    </div>
  </motion.div>
);

const ApplicationProcess = () => {
  const navigate = useNavigate();
  
  const steps = [
    {
      icon: FaUserGraduate,
      title: "Initial Consultation",
      description: "Begin your journey with a personalized consultation",
      details: [
        "Academic profile evaluation",
        "Career goals assessment",
        "Budget planning discussion",
        "Country preferences"
      ]
    },
    {
      icon: FaUniversity,
      title: "University Selection",
      description: "Find your perfect educational fit",
      details: [
        "Course recommendations",
        "University shortlisting",
        "ROI analysis",
        "Scholarship opportunities"
      ]
    },
    {
      icon: FaFileAlt,
      title: "Application Process",
      description: "Expert guidance through applications",
      details: [
        "Document preparation",
        "SOP & LOR assistance",
        "Application submission",
        "Follow-up support"
      ]
    },
    {
      icon: FaCheckCircle,
      title: "Offer Acceptance",
      description: "Secure your university placement",
      details: [
        "Offer evaluation",
        "Fee structure review",
        "Admission confirmation",
        "Payment guidance"
      ]
    },
    {
      icon: FaPassport,
      title: "Visa Processing",
      description: "Complete visa application support",
      details: [
        "Document verification",
        "Visa application filing",
        "Interview preparation",
        "Travel planning"
      ]
    },
    {
      icon: FaPlane,
      title: "Pre-Departure",
      description: "Prepare for your journey ahead",
      details: [
        "Accommodation assistance",
        "Travel arrangements",
        "Cultural orientation",
        "Banking setup"
      ]
    }
  ];

  return (
    <section className="relative min-h-screen w-screen overflow-hidden bg-slate-900">
      {/* Background with Parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          backgroundImage: "url('/images/study-abroad-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/95 via-slate-900/90 to-slate-900/95" />
      </motion.div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-24">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 
              border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-4"
          >
            Application Process
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Your Path to International Education
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-slate-300"
          >
            We guide you through every step of your journey to studying abroad,
            making the process smooth and stress-free.
          </motion.p>
        </div>

        {/* Process Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <ProcessCard
              key={index}
              {...step}
              index={index}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent" />
    </section>
  );
};

export default ApplicationProcess;