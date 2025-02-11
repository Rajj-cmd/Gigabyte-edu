import { motion } from "framer-motion";

const StudyAbroad = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-6"
      >
        Study Abroad Programs
      </motion.h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Why Study Abroad?</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Global exposure and cultural experience</li>
            <li>World-class education opportunities</li>
            <li>Career advancement prospects</li>
            <li>Personal growth and independence</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Popular Destinations</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>United States</li>
            <li>United Kingdom</li>
            <li>Canada</li>
            <li>Australia</li>
            <li>Germany</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StudyAbroad;