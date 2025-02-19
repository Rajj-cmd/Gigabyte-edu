import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-bold text-white mb-4"
        >
          404
        </motion.h1>
        <p className="text-xl text-slate-300 mb-8">Page not found</p>
        <Link 
          to="/"
          className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3 rounded-lg"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

// Add the default export
export default NotFound;