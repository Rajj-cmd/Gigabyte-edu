import { motion, useAnimationControls } from "framer-motion";
import { useState, useEffect } from "react";
import logo from "../assets/images/gigabyte-logo.png";
import PropTypes from 'prop-types';

const AnimatedLogo = ({ isBackground = false }) => {
  const controls = useAnimationControls();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    controls.start({
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    });
  }, [controls]);

  return (
    <div className={`relative ${isBackground ? 'w-[800px] h-[800px]' : 'w-full h-full'}`}>
      {/* Adjusted Background Rings */}
      <motion.div
        className="absolute inset-0"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* Improved ring styling */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 rounded-full border-2 border-indigo-500/20"
            style={{
              transform: `scale(${1 + i * 0.08})`,
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 3,
              delay: i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      {/* Logo Container - Improved padding and positioning */}
      <motion.div
        className="relative w-full h-full"
        animate={controls}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Enhanced Glowing Background */}
        <motion.div
          className="absolute inset-0 rounded-full blur-2xl"
          animate={{
            background: [
              "radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)",
              "radial-gradient(circle, rgba(168,85,247,0.2) 0%, transparent 70%)",
              "radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)",
            ]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Logo Image - Improved container proportions */}
        <motion.div
          className="relative w-full h-full p-8 flex items-center justify-center"
          animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.img
            src={logo}
            alt="Gigabyte Education Logo"
            className="w-4/5 h-4/5 object-contain drop-shadow-2xl"
            style={{
              filter: "drop-shadow(0 0 20px rgba(99,102,241,0.3))"
            }}
          />
        </motion.div>

        {/* Floating Particles */}
        {isHovered && (
          <motion.div className="absolute inset-0">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 bg-blue-400 rounded-full"
                initial={{
                  x: Math.random() * 100 - 50,
                  y: Math.random() * 100 - 50,
                  opacity: 0,
                  scale: 0
                }}
                animate={{
                  y: [-20, -60],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 1.5 + Math.random(),
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeOut"
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

AnimatedLogo.propTypes = {
  isBackground: PropTypes.bool
};

export default AnimatedLogo;