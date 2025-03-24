import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMapMarkerAlt, FaDollarSign, FaHome, FaArrowRight } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { universities as usaUniversities } from "../assets/data/usa";
import { ukUniversities } from "../assets/data/uk";
import { australianUniversities } from "../assets/data/australia";
import { germanUniversities } from "../assets/data/germany";
import { canadianUniversities } from "../assets/data/canada";
import LoadingSpinner from "../components/LoadingSpinner";
import UniversityModal from '../components/UniversityModal';
import Layout from '../components/Layout';
import RegisterModal from '../components/RegisterModal';

const universities = {
  USA: Array.isArray(usaUniversities.USA) ? usaUniversities.USA : [],
  UK: Array.isArray(ukUniversities) ? ukUniversities : [],
  CANADA: Array.isArray(canadianUniversities) ? canadianUniversities : [],
  AUSTRALIA: Array.isArray(australianUniversities) ? australianUniversities : [],
  GERMANY: Array.isArray(germanUniversities) ? germanUniversities : []
};

const ExploreUniversities = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [filteredUniversities, setFilteredUniversities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedUniversity, setSelectedUniversity] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState("All");
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  // Add this utility function for shuffling arrays
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const countryParam = params.get('country');
    
    setIsLoading(true);
    try {
      let universityList;
      if (!countryParam || countryParam.toUpperCase() === "ALL") {
        universityList = Object.values(universities).flat().filter(Boolean);
      } else {
        const normalizedCountry = countryParam.toUpperCase();
        universityList = universities[normalizedCountry] || [];
      }
      
      // Shuffle the university list before filtering
      const shuffledList = shuffleArray(universityList);
      setFilteredUniversities(shuffledList.filter(uni => uni && uni.images && uni.images.length > 0));
      
    } catch (error) {
      console.error('Error loading universities:', error);
      setFilteredUniversities([]);
    } finally {
      setIsLoading(false);
    }
  }, [location.search]);

  const handleCountryChange = (value) => {
    const normalizedValue = value.toUpperCase();
    setSelectedCountry(normalizedValue);
    
    if (normalizedValue === "ALL") {
      navigate("/explore-universities", { replace: true });
    } else {
      navigate(`/explore-universities?country=${normalizedValue}`, { replace: true });
    }
  };

  const formatCurrency = (value) => {
    if (typeof value !== 'number') return 'N/A';
    return value.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });
  };

  const handleApplyNow = (university) => {
    // Store university selection in localStorage
    localStorage.setItem('selectedUniversity', JSON.stringify({
      name: university.name,
      country: university.location.split(', ').pop(),
      program: university.programs[0]
    }));

    // Close university modal if open
    setSelectedUniversity(university);

    // Open registration modal
    setIsRegisterOpen(true);
  };

  if (!filteredUniversities.length && !isLoading) {
    return (
      <div className="min-h-screen bg-slate-900 py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">No Universities Found</h1>
          <p>Please try selecting a different country or check back later.</p>
        </div>
      </div>
    );
  }

  return (
    <Layout showMap={false}>
      <div className="min-h-screen bg-slate-900 py-24 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -left-48 w-96 h-96 bg-indigo-500/30 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-purple-500/30 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 mb-16 relative z-10">
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Explore Universities
            </h1>
            <p className="text-xl text-slate-300">
              Discover top universities worldwide and find your perfect educational destination
            </p>
          </motion.div>

          {/* Filter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto mb-16"
          >
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 shadow-xl">
              <select
                value={selectedCountry}
                onChange={(e) => handleCountryChange(e.target.value)}
                className="w-full bg-slate-800 text-white rounded-xl py-4 px-6 text-lg
                  focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all
                  border border-white/10 hover:border-indigo-500/50"
              >
                <option value="ALL">All Countries</option>
                <option value="USA">United States</option>
                <option value="UK">United Kingdom</option>
                <option value="CANADA">Canada</option>
                <option value="AUSTRALIA">Australia</option>
                <option value="GERMANY">Germany</option>
              </select>
            </div>
          </motion.div>

          {/* University Cards Grid */}
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredUniversities.map((university, index) => (
                <motion.div
                  key={`${university.name}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="relative bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden 
                    border border-white/10 hover:border-indigo-500/50 hover:bg-white/10 
                    transition-all duration-300 shadow-xl hover:shadow-2xl"
                  >
                    {/* Image Container */}
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={university.images[0]}
                        alt={university.name}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                    </div>

                    {/* Content Container */}
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-white mb-3">{university.name}</h3>
                      <p className="text-lg text-slate-300 mb-6 flex items-center">
                        <FaMapMarkerAlt className="mr-2 text-indigo-400" />
                        {university.location}
                      </p>

                      {/* Stats Grid */}
                      <div className="grid md:grid-cols-2 gap-4 mb-8">
                        <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                          <div className="flex items-center text-slate-300 mb-1">
                            <FaDollarSign className="mr-2 text-indigo-400" />
                            Tuition
                          </div>
                          <div className="text-xl font-bold text-white">
                            {formatCurrency(university?.tuition)}/year
                          </div>
                        </div>
                        <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                          <div className="flex items-center text-slate-300 mb-1">
                            <FaHome className="mr-2 text-indigo-400" />
                            Living Cost
                          </div>
                          <div className="text-xl font-bold text-white">
                            {formatCurrency(university?.livingCost)}/year
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-4">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setSelectedUniversity(university)}
                          className="flex-1 bg-white/5 hover:bg-white/10 text-white py-4 rounded-xl 
                            font-semibold text-lg transition-all duration-300 flex items-center 
                            justify-center gap-2 border border-white/10 hover:border-indigo-500/50"
                        >
                          Learn More
                        </motion.button>

                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleApplyNow(university)} // Use the same handler
                          className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 
                            text-white py-4 rounded-xl font-semibold text-lg
                            transition-all duration-300 hover:shadow-lg
                            hover:shadow-indigo-500/25 flex items-center justify-center gap-2"
                        >
                          Apply Now
                          <FaArrowRight className="text-sm" />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* University Modal */}
        <AnimatePresence>
          {selectedUniversity && (
            <UniversityModal
              university={selectedUniversity}
              onClose={() => setSelectedUniversity(null)}
              onApplyNow={handleApplyNow}
            />
          )}
        </AnimatePresence>

        {/* Register Modal */}
        <AnimatePresence>
          {isRegisterOpen && (
            <RegisterModal 
              isOpen={isRegisterOpen}
              onClose={() => {
                setIsRegisterOpen(false);
                setSelectedUniversity(null);
              }}
              selectedUniversity={selectedUniversity}
            />
          )}
        </AnimatePresence>
      </div>
    </Layout>
  );
};

export default ExploreUniversities;