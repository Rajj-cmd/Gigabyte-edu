import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const LazyImage = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  
  // Default placeholder image
  const placeholderImage = '/images/placeholder-university.jpg';

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setIsLoaded(true);
      setError(false);
    };
    img.onerror = () => {
      setError(true);
      setIsLoaded(true);
    };
  }, [src]);

  return (
    <motion.img
      src={error ? placeholderImage : src}
      alt={alt}
      className={`${className} ${!isLoaded ? 'animate-pulse bg-slate-700' : ''}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    />
  );
};

LazyImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string
};

LazyImage.defaultProps = {
  className: ''
};

export default LazyImage;
