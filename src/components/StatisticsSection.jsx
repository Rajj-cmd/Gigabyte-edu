import { motion } from "framer-motion";
import { useState } from "react";

const StatisticsSection = () => {
  const [inView, setInView] = useState(false);

  const stats = [
    { value: "1000+", label: "Students Placed", color: "from-blue-500 to-indigo-500" },
    { value: "50+", label: "Partner Universities", color: "from-purple-500 to-pink-500" },
    { value: "95%", label: "Success Rate", color: "from-green-500 to-emerald-500" },
    { value: "5+", label: "Countries", color: "from-orange-500 to-red-500" }
  ];

  return (
    <motion.section
      className="py-16 relative overflow-hidden"
      onViewportEnter={() => setInView(true)}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <motion.div
                className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} 
                  bg-clip-text text-transparent mb-2`}
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ delay: index * 0.1, type: "spring" }}
              >
                {stat.value}
              </motion.div>
              <div className="text-slate-300">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default StatisticsSection;
