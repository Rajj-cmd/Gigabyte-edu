import { motion, useScroll, useTransform } from "framer-motion";
import { FaGraduationCap, FaGlobe, FaBook, FaPlane, FaUniversity, FaPencilAlt } from "react-icons/fa";
import { useEffect, useState } from "react";

const AnimatedBackground = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0.5]);

  // Enhanced background elements
  const backgroundElements = [
    { icon: FaGraduationCap, color: "text-indigo-400" },
    { icon: FaGlobe, color: "text-blue-400" },
    { icon: FaBook, color: "text-purple-400" },
    { icon: FaPlane, color: "text-cyan-400" },
    { icon: FaUniversity, color: "text-indigo-500" },
    { icon: FaPencilAlt, color: "text-blue-500" }
  ];

  // Generate more varied floating elements
  const floatingElements = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    ...backgroundElements[i % backgroundElements.length],
    size: Math.random() * 15 + 8,
    duration: Math.random() * 25 + 15,
    delay: Math.random() * 5,
    opacity: Math.random() * 0.07 + 0.03
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Enhanced Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-indigo-950/90 to-slate-900">
        {/* Radial Gradient Overlay */}
        <div className="absolute inset-0 opacity-30"
             style={{
               background: "radial-gradient(circle at 50% 50%, rgba(99,102,241,0.15), transparent 70%)"
             }}
        />
      </div>

      {/* Animated Gradient Patterns */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 20% 20%, rgba(99,102,241,0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 80%, rgba(99,102,241,0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 20%, rgba(99,102,241,0.15) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Enhanced Floating Elements */}
      {floatingElements.map((element) => (
        <motion.div
          key={element.id}
          className={`absolute ${element.color}`}
          initial={{ x: `${element.x}vw`, y: `${element.y}vh` }}
          animate={{
            y: [`${element.y}vh`, `${element.y + 15}vh`, `${element.y}vh`],
            x: [`${element.x}vw`, `${element.x + 5}vw`, `${element.x}vw`],
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ 
            fontSize: element.size,
            opacity: element.opacity,
            filter: 'blur(1px)'
          }}
        >
          <element.icon />
        </motion.div>
      ))}

      {/* Mesh Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM38.284 0l7.9 7.9-1.415 1.413-9.9-9.9h3.415zM20.686 0l-7.9 7.9 1.415 1.413 9.9-9.9h-3.415zM3.415 0L13.314 9.9 11.9 11.314l-9.9-9.9h1.414zm53.17 0L46.686 9.9l1.415 1.414 9.9-9.9h-1.414zM53.313 0L41.414 11.9l1.414 1.413L55.727 0h-2.414zm-46.626 0L18.586 11.9l-1.414 1.413L4.273 0h2.414zM46.626 0L32.727 13.9l1.414 1.414L48.04 0h-1.414zM13.374 0L27.272 13.9l-1.414 1.414L11.96 0h1.414zM41.384 0L28.384 13L29.8 14.414 45.384 0h-4zm-22.768 0L32.414 13l-1.414 1.414L15.384 0h3.232zm16.768 0L50.384 14l-1.414 1.414-29-29h4.768zm-10.768 0L9.384 14l1.414 1.414 29-29H24.616zM0 0l.828.828-1.414 1.414L2.243 0H0zm5.283 0L8.314 3.03 6.9 4.444 0 0h5.283zm8.596 0L16.97 3.03 15.556 4.444 0 0h13.879zm-3.03 0l2.828 2.828L12.263 4.242 0 0h10.849z' fill='%234F46E5' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/30 to-slate-900/70" />
    </div>
  );
};

export default AnimatedBackground;
