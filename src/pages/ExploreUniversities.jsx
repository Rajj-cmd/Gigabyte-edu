import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMapMarkerAlt, FaDollarSign, FaHome } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { universities as usaUniversities } from "../assets/data/usa";
import { ukUniversities } from "../assets/data/uk";
import { australianUniversities } from "../assets/data/australia";
import { germanUniversities } from "../assets/data/germany";
import { canadianUniversities } from "../assets/data/canada";
import LoadingSpinner from "../components/LoadingSpinner";
import UniversityModal from '../components/UniversityModal';

const universities = {
  USA: usaUniversities.USA || [],  // USA data is nested under USA key
  UK: ukUniversities || [],
  CANADA: canadianUniversities || [],
  AUSTRALIA: australianUniversities || [],
  GERMANY: germanUniversities || []
};

const ExploreUniversities = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [selectedUniversity, setSelectedUniversity] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState("All");
  const [filteredUniversities, setFilteredUniversities] = useState([]);

  // Use query params for country selection
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const country = params.get('country');
    if (country) {
      setSelectedCountry(country.toUpperCase());
    }
  }, [location.search]);

  // Update filtered universities when country changes
  useEffect(() => {
    setIsLoading(true);
    try {
      let universityList = [];
      if (selectedCountry === "All") {
        // Flatten all university arrays
        universityList = Object.values(universities).flat();
      } else {
        // Get universities for selected country
        universityList = universities[selectedCountry] || [];
      }
      
      console.log(`Loading ${universityList.length} universities for ${selectedCountry}`);
      setFilteredUniversities(universityList);
    } catch (error) {
      console.error('Error loading universities:', error);
      setFilteredUniversities([]);
    } finally {
      setIsLoading(false);
    }
  }, [selectedCountry]);

  const handleCountryChange = (value) => {
    setSelectedCountry(value);
    // Update URL with query parameter
    navigate(value === "All" ? '/explore-universities' : `/explore-universities?country=${value}`);
  };

  // Add debug check for empty state
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

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-900 py-24">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-8"
        >
          Explore Universities
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10">
            <select
              value={selectedCountry}
              onChange={(e) => handleCountryChange(e.target.value)}
              className="w-full bg-slate-800 text-white rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="All">All Countries</option>
              <option value="USA">United States</option>
              <option value="UK">United Kingdom</option>
              <option value="CANADA">Canada</option>
              <option value="AUSTRALIA">Australia</option>
              <option value="GERMANY">Germany</option>
            </select>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredUniversities.map((university, index) => (
            <motion.div
              key={`${university.name}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden 
                border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={university.images[0]}
                  alt={university.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{university.name}</h3>
                <p className="text-slate-300 mb-4 flex items-center">
                  <FaMapMarkerAlt className="mr-2" />
                  {university.location}
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-slate-300">
                    <FaDollarSign className="mr-2" />
                    Tuition: ${university.tuition.toLocaleString()}/year
                  </div>
                  <div className="flex items-center text-slate-300">
                    <FaHome className="mr-2" />
                    Living Cost: ${university.livingCost.toLocaleString()}/year
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedUniversity(university)}
                  className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-3 rounded-xl font-semibold transition-all duration-200"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedUniversity && (
          <UniversityModal
            university={selectedUniversity}
            onClose={() => setSelectedUniversity(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ExploreUniversities;