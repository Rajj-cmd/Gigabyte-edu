import PropTypes from 'prop-types';
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FaTimes, FaUserGraduate, FaGlobe } from "react-icons/fa";
import Toast from './Toast';  // Make sure this import path is correct

const RegisterModal = ({ isOpen, onClose, selectedUniversity }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    program: "",
    university: "",
    message: ""
  });

  // Update form data when selectedUniversity changes
  useEffect(() => {
    if (selectedUniversity) {
      const getCountryFromLocation = (location) => {
        if (location.includes('USA')) return 'USA';
        if (location.includes('UK')) return 'UK';
        if (location.includes('Canada')) return 'Canada';
        if (location.includes('Australia')) return 'Australia';
        if (location.includes('Germany')) return 'Germany';
        return '';
      };

      setFormData(prev => ({
        ...prev,
        university: selectedUniversity.name,
        country: getCountryFromLocation(selectedUniversity.location)
      }));
    }
  }, [selectedUniversity]);

  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Add form validation here
      if (!formData.name || !formData.email || !formData.phone) {
        throw new Error('Please fill in all required fields');
      }
      
      // Handle form submission logic here
      console.log(formData);

      setToast({
        show: true,
        message: 'Application submitted successfully!',
        type: 'success'
      });
      setTimeout(onClose, 2000);
    } catch (error) {
      setToast({
        show: true,
        message: error.message || 'Failed to submit application',
        type: 'error'
      });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal - Adjusted max-width and padding */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-xl z-50 max-h-[90vh] overflow-y-auto"
          >
            <div className="bg-slate-900 rounded-2xl border border-white/10 shadow-2xl p-6 relative">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute right-4 top-4 text-slate-400 hover:text-white transition-colors"
              >
                <FaTimes size={24} />
              </button>

              {/* Modal Content */}
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl 
                    flex items-center justify-center text-white text-3xl">
                    <FaUserGraduate />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">Start Your Journey</h2>
                <p className="text-slate-300">Fill out the form below and we&apos;ll help you begin your international education journey.</p>
                <p>Don&apos;t wait - start your journey today!</p>
              </div>

              {/* Form - Modified select styling */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-300 mb-2" htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white 
                        focus:outline-none focus:border-indigo-500 transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 mb-2" htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white 
                        focus:outline-none focus:border-indigo-500 transition-colors"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 mb-2" htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white 
                      focus:outline-none focus:border-indigo-500 transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-slate-300 mb-2" htmlFor="university">University</label>
                  <input
                    type="text"
                    id="university"
                    value={formData.university}
                    onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white 
                      focus:outline-none focus:border-indigo-500 transition-colors"
                    readOnly={!!selectedUniversity}
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 mb-2" htmlFor="country">Preferred Country</label>
                    <select
                      id="country"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-2.5 text-white 
                        focus:outline-none focus:border-indigo-500 transition-colors [&>option]:bg-slate-800"
                      required
                      disabled={!!selectedUniversity}
                    >
                      <option value="">Select Country</option>
                      <option value="USA">USA</option>
                      <option value="UK">UK</option>
                      <option value="Canada">Canada</option>
                      <option value="Australia">Australia</option>
                      <option value="Germany">Germany</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-slate-300 mb-2" htmlFor="program">Program Level</label>
                    <select
                      id="program"
                      value={formData.program}
                      onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                      className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-2.5 text-white 
                        focus:outline-none focus:border-indigo-500 transition-colors [&>option]:bg-slate-800"
                      required
                    >
                      <option value="">Select Level</option>
                      <option value="Undergraduate">Undergraduate</option>
                      <option value="Postgraduate">Postgraduate</option>
                      <option value="PhD">PhD</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 mb-2" htmlFor="message">Additional Message</label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={3}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white 
                      focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 
                    rounded-xl font-semibold transition-all duration-200 hover:shadow-lg 
                    hover:shadow-indigo-500/25"
                >
                  Submit Application
                </motion.button>
              </form>
            </div>
          </motion.div>
          <Toast 
            isVisible={toast.show}
            message={toast.message}
            type={toast.type}
            onClose={() => setToast({ ...toast, show: false })}
          />
        </>
      )}
    </AnimatePresence>
  );
};

RegisterModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  selectedUniversity: PropTypes.object
};

export default RegisterModal;
