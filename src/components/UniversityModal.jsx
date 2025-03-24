import { motion } from "framer-motion";
import PropTypes from 'prop-types';
import { FaMapMarkerAlt, FaDollarSign, FaHome } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const UniversityModal = ({ university, onClose, onApplyNow }) => {
  if (!university) return null;

  const handleApplyNow = () => {
    onApplyNow(university); // Use the handler passed from parent
  };

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
      />

      {/* Modal Dialog */}
      <div className="fixed inset-0 z-[110] overflow-y-auto">
        <div className="flex min-h-screen items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="w-full max-w-4xl mx-4"
          >
            <div className="relative bg-slate-900 rounded-2xl border border-white/10 shadow-2xl">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 bg-black/50 p-2 rounded-full text-white hover:bg-black/75 transition-colors"
              >
                ✕
              </button>

              {/* Image Carousel */}
              <div className="relative h-[200px] sm:h-[300px] md:h-[400px]">
                <img
                  src={university.images[0]}
                  alt={university.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-900 to-transparent h-32" />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 md:p-8">
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-8">
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
                <div className="mt-8">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleApplyNow}
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 
                      rounded-xl font-semibold transition-all duration-200 hover:shadow-lg 
                      hover:shadow-indigo-500/25"
                  >
                    Apply Now
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

UniversityModal.propTypes = {
  university: PropTypes.object,
  onClose: PropTypes.func.isRequired,
  onApplyNow: PropTypes.func.isRequired
};

export default UniversityModal;