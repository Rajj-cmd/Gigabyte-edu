import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaDollarSign, FaHome, FaExternalLinkAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const UniversityModal = ({ university, onClose }) => {
  const navigate = useNavigate();

  const handleApplyNow = () => {
    // Close the modal first
    onClose();
    // Store university selection in localStorage
    localStorage.setItem('selectedUniversity', JSON.stringify({
      name: university.name,
      country: university.location.split(', ').pop(),
      program: university.programs[0] // Default to first program
    }));
    // Create and dispatch the custom event
    const event = new CustomEvent('openRegisterModal', {
      detail: {
        universityName: university.name,
        country: university.location.split(', ').pop(),
        program: university.programs[0]
      }
    });
    document.dispatchEvent(event);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-slate-900/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl bg-slate-800 rounded-2xl shadow-2xl overflow-hidden"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black/50 p-2 rounded-full text-white hover:bg-black/75 transition-colors"
        >
          ✕
        </button>

        {/* Image Carousel */}
        <div className="relative h-[400px]">
          <img
            src={university.images[0]}
            alt={university.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-900 to-transparent h-32" />
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">{university.name}</h2>
              <p className="text-slate-300 flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                {university.location}
              </p>
            </div>
            <div className="bg-indigo-600 px-4 py-2 rounded-full">
              <span className="text-white font-semibold">Rank #{university.ranking}</span>
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Overview</h3>
              <p className="text-slate-300">{university.description}</p>
              
              <div className="mt-6 space-y-4">
                <div className="flex items-center text-slate-300">
                  <FaDollarSign className="mr-2 text-indigo-400" />
                  <span>Tuition: ${university.tuition.toLocaleString()}/year</span>
                </div>
                <div className="flex items-center text-slate-300">
                  <FaHome className="mr-2 text-indigo-400" />
                  <span>Living Cost: ${university.livingCost.toLocaleString()}/year</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Programs</h3>
                <ul className="grid grid-cols-2 gap-3">
                  {university.programs.map((program, idx) => (
                    <li key={idx} className="flex items-center text-slate-300">
                      <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-2" />
                      {program}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Features</h3>
                <ul className="grid grid-cols-2 gap-3">
                  {university.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-slate-300">
                      <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleApplyNow}
              className="flex-1 bg-indigo-600 hover:bg-indigo-500 text-white py-3 rounded-xl font-semibold"
            >
              Apply Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.open(`https://www.${university.name.toLowerCase().replace(/\s+/g, '')}.edu`, '_blank')}
              className="flex-1 bg-white/10 hover:bg-white/20 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2"
            >
              Visit Website <FaExternalLinkAlt size={14} />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default UniversityModal;