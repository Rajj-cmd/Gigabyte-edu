import { motion } from "framer-motion";
import { FaGraduationCap, FaGlobe, FaBook, FaPassport, FaUniversity, FaPaperPlane } from "react-icons/fa";
import { useState } from "react";
import logo from "../assets/images/gigabyte-logo.png";

const AnimatedLogo = () => {
  const [isHovered, setIsHovered] = useState(false);

  const orbitElements = [
    { icon: FaGraduationCap, color: "text-blue-500", delay: 0 },
    { icon: FaGlobe, color: "text-purple-500", delay: 0.1 },
    { icon: FaBook, color: "text-indigo-500", delay: 0.2 },
    { icon: FaPassport, color: "text-pink-500", delay: 0.3 },
    { icon: FaUniversity, color: "text-cyan-500", delay: 0.4 },
    { icon: FaPaperPlane, color: "text-rose-500", delay: 0.5 }
  ];

  return (
    <div className="flex items-center justify-center min-h-[300px] sm:min-h-[400px]">
      <div 
        className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Central Logo - Enhanced glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                     rounded-full p-6 sm:p-12 flex items-center justify-center"
          animate={{
            boxShadow: isHovered 
              ? "0 0 60px rgba(129, 140, 248, 0.4)" 
              : "0 0 30px rgba(129, 140, 248, 0.3)"
          }}
        >
          <motion.div
            className="relative w-48 h-48 sm:w-64 sm:h-64"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src={logo} 
              alt="Gigabyte Logo" 
              className="w-full h-full object-contain
                         filter drop-shadow-[0_0_15px_rgba(99,102,241,0.5)]" 
            />
          </motion.div>
        </motion.div>

        {/* Bottom Icons Row */}
        <div className="absolute bottom-8 sm:bottom-16 left-1/2 transform -translate-x-1/2 flex items-center gap-4 sm:gap-6">
          {orbitElements.map((element, index) => (
            <motion.div
              key={index}
              className={`${element.color}`}
              initial={{ y: 20, opacity: 0 }}
              animate={{ 
                y: 0, 
                opacity: 1,
                scale: isHovered ? 1.2 : 1
              }}
              transition={{
                duration: 0.5,
                delay: element.delay,
                scale: { duration: 0.3 }
              }}
            >
              <element.icon 
                size={24} // Reduced from 32
                className="filter drop-shadow-[0_0_8px_rgba(99,102,241,0.5)]" 
              />
            </motion.div>
          ))}
        </div>

        {/* Updated glow effects */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                     rounded-full border-2 border-indigo-500/20"
          initial={{ width: '100%', height: '100%' }}
          animate={{
            boxShadow: isHovered 
              ? "0 0 100px rgba(129, 140, 248, 0.3)" 
              : "0 0 50px rgba(129, 140, 248, 0.2)"
          }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </div>
  );
};

export default AnimatedLogo;