import { motion } from "framer-motion";
import PropTypes from 'prop-types';
import { useResponsive } from '../hooks/useResponsive';

const NavigationIndicator = ({ step = 1, totalSteps = 3 }) => {
  const { isMobile } = useResponsive();

  return (
    <div className="flex justify-center items-center gap-2 sm:gap-4">
      {[...Array(totalSteps)].map((_, index) => (
        <motion.div
          key={index}
          className={`
            relative 
            ${isMobile ? 'w-2 h-2' : 'w-3 h-3'} 
            rounded-full
            ${index < step ? 'bg-indigo-500' : 'bg-slate-600'}
          `}
          initial={false}
          animate={{
            scale: index === step - 1 ? 1.2 : 1,
          }}
        >
          {index < step - 1 && (
            <motion.div
              className="absolute inset-0 rounded-full bg-indigo-500/50"
              initial={{ scale: 1 }}
              animate={{ scale: 1.5, opacity: 0 }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                delay: index * 0.2,
              }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
};

NavigationIndicator.propTypes = {
  step: PropTypes.number,
  totalSteps: PropTypes.number
};

export default NavigationIndicator;
