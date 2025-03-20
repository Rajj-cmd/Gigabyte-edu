import { motion, AnimatePresence } from "framer-motion";
import { FaCheck, FaTimes } from "react-icons/fa";
import PropTypes from 'prop-types';

const Toast = ({ message, type, isVisible, onClose }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className={`fixed bottom-4 right-4 p-4 rounded-lg shadow-lg flex items-center space-x-2
            ${type === 'success' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}
        >
          {type === 'success' ? <FaCheck className="flex-shrink-0" /> : <FaTimes className="flex-shrink-0" />}
          <span className="text-sm">{message}</span>
          <button 
            onClick={onClose} 
            className="ml-4 hover:text-white transition-colors"
            aria-label="Close notification"
          >
            ×
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

Toast.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'error']).isRequired,
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

// Add proper default export
export default Toast;
