import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaMapMarkerAlt, FaDollarSign, FaHome, FaSearch, FaFilter } from "react-icons/fa";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { universities as usaUniversities } from "../assets/data/usa.jsx";
import { ukUniversities } from "../assets/data/uk.jsx";
import { australianUniversities } from "../assets/data/australia.jsx";
import { germanUniversities } from "../assets/data/germany.jsx";
import { canadianUniversities } from "../assets/data/canada.jsx";
import AnimatedLogo from "../components/AnimatedLogo";

// Debug log for imported data
console.log('Imported Data:', {
  USA: usaUniversities,
  UK: ukUniversities,
  Canada: canadianUniversities,
  Australia: australianUniversities,
  Germany: germanUniversities
});

// Combined universities data with proper structure
const universities = {
  USA: Array.isArray(usaUniversities?.USA) ? usaUniversities.USA : [],
  UK: Array.isArray(ukUniversities) ? ukUniversities : [],
  Canada: Array.isArray(canadianUniversities) ? canadianUniversities : [],
  Australia: Array.isArray(australianUniversities) ? australianUniversities : [],
  Germany: Array.isArray(germanUniversities) ? germanUniversities : []
};

// University Card Component
const UniversityCard = ({ university }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!university || !university.images || !university.programs || !university.features) {
    return (
      <div className="text-center text-slate-300 py-12">
        University data is incomplete
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === university.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? university.images.length - 1 : prev - 1
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl border border-white/10"
    >
      <div className="relative h-[300px] overflow-hidden">
        <motion.img
          key={currentImageIndex}
          src={university.images[currentImageIndex]}
          alt={`${university.name} view ${currentImageIndex + 1}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full object-cover"
        />
        
        <div className="absolute inset-0 flex items-center justify-between px-4">
          <button
            onClick={prevImage}
            className="p-2 rounded-full bg-black/50 hover:bg-black/75 text-white transition-all duration-200 transform hover:scale-105"
          >
            <FaChevronLeft size={20} />
          </button>
          <button
            onClick={nextImage}
            className="p-2 rounded-full bg-black/50 hover:bg-black/75 text-white transition-all duration-200 transform hover:scale-105"
          >
            <FaChevronRight size={20} />
          </button>
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {university.images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 
                ${index === currentImageIndex ? 'bg-white scale-125' : 'bg-white/50'}`}
            />
          ))}
        </div>

        {university.ranking && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-indigo-600 rounded-full text-white text-sm font-semibold shadow-lg">
            Rank #{university.ranking}
          </div>
        )}
      </div>

      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors duration-200">
          {university.name}
        </h3>
        
        <div className="flex items-center text-slate-300">
          <FaMapMarkerAlt className="mr-2 text-indigo-400" />
          <span>{university.location}</span>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center text-slate-300">
            <FaDollarSign className="mr-2 text-indigo-400" />
            <span>${university.tuition.toLocaleString()}/year</span>
          </div>
          <div className="flex items-center text-slate-300">
            <FaHome className="mr-2 text-indigo-400" />
            <span>${university.livingCost.toLocaleString()}/year</span>
          </div>
        </div>

        <p className="text-slate-300 leading-relaxed line-clamp-3">
          {university.description}
        </p>

        <div className="pt-4 border-t border-white/10">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="text-indigo-400 font-semibold mb-2">Programs</h4>
              <ul className="text-slate-300 space-y-1">
                {university.programs.map((program, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-2" />
                    {program}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-indigo-400 font-semibold mb-2">Features</h4>
              <ul className="text-slate-300 space-y-1">
                {university.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-3 rounded-xl font-semibold transition-all duration-200 mt-6 shadow-lg hover:shadow-indigo-500/25"
        >
          Learn More
        </motion.button>
      </div>
    </motion.div>
  );
};

// Main ExploreUniversities Component
const ExploreUniversities = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { view } = useParams();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("All");
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [filteredUniversities, setFilteredUniversities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeView, setActiveView] = useState(view || "all");

  const viewOptions = [
    { id: "all", label: "All Universities", path: "/explore-universities" },
    { id: "top-rankings", label: "Top Rankings", path: "/explore-universities/top-rankings" },
    { id: "search-by-country", label: "Search by Country", path: "/explore-universities/search-by-country" },
    { id: "compare-universities", label: "Compare Universities", path: "/explore-universities/compare-universities" }
  ];

  const filters = [
    { label: "All Universities", value: "All" },
    { label: "Top 100", value: "ranking" },
    { label: "Public Universities", value: "public" },
    { label: "Private Universities", value: "private" },
    { label: "Low Tuition", value: "lowTuition" }
  ];

  useEffect(() => {
    setIsLoading(true);
    try {
      let filtered = selectedCountry === "All"
        ? Object.values(universities).flat()
        : universities[selectedCountry] || [];

      if (searchTerm) {
        filtered = filtered.filter(uni =>
          uni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          uni.location.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      switch (selectedFilter) {
        case "ranking":
          filtered = filtered.filter(uni => parseInt(uni.ranking) <= 100);
          break;
        case "public":
          filtered = filtered.filter(uni => uni.type === "Public");
          break;
        case "private":
          filtered = filtered.filter(uni => uni.type === "Private");
          break;
        case "lowTuition":
          filtered = filtered.filter(uni => uni.tuition < 20000);
          break;
        default:
          break;
      }

      setFilteredUniversities(filtered);
    } catch (error) {
      console.error('Filtering error:', error);
      setFilteredUniversities([]);
    } finally {
      setIsLoading(false);
    }
  }, [selectedCountry, searchTerm, selectedFilter]);

  useEffect(() => {
    if (!universities || Object.values(universities).every(arr => arr.length === 0)) {
      console.error('No university data available');
      setIsLoading(false);
      return;
    }
  }, []);

  useEffect(() => {
    const path = location.pathname;
    const viewFromPath = path.split("/").pop();
    
    if (viewFromPath === "explore-universities") {
      setActiveView("all");
      setSelectedFilter("All");
    } else if (viewFromPath) {
      setActiveView(viewFromPath);
      switch (viewFromPath) {
        case "top-rankings":
          setSelectedFilter("ranking");
          break;
        case "search-by-country":
          setSelectedFilter("All");
          break;
        case "compare-universities":
          // Add compare logic here
          break;
        default:
          setSelectedFilter("All");
      }
    }
  }, [location.pathname]);

  const handleViewChange = (viewId) => {
    const option = viewOptions.find(opt => opt.id === viewId);
    if (option) {
      setActiveView(viewId);
      setIsLoading(true);
      navigate(option.path);
      
      if (viewId === "all") {
        setSelectedFilter("All");
      } else {
        switch (viewId) {
          case "top-rankings":
            setSelectedFilter("ranking");
            break;
          case "search-by-country":
            setSelectedFilter("All");
            break;
          case "compare-universities":
            // Add compare logic here
            break;
          default:
            setSelectedFilter("All");
        }
      }
      setIsLoading(false);
    }
  };

  // Memoize filtered universities
  const memoizedFilteredUniversities = useMemo(() => {
    return filteredUniversities;
  }, [filteredUniversities]);

  return (
    <div className="min-h-screen bg-slate-900 py-24">
      {/* Background Logo Overlay */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] scale-150">
          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 50,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <AnimatedLogo isBackground={true} />
          </motion.div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Explore Universities Worldwide
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Discover top universities across the globe and find your perfect educational fit.
          </p>
        </motion.div>

        {/* View Options */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          {viewOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => handleViewChange(option.id)}
              className={`px-6 py-2 rounded-full transition-all duration-200 
                ${activeView === option.id 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-white/10 text-slate-300 hover:bg-white/20'}`}
            >
              {option.label}
            </button>
          ))}
        </div>

        <div className="space-y-6 mb-12">
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setSelectedCountry("All")}
              className={`px-6 py-2 rounded-full transition-all duration-200 
                ${selectedCountry === "All" 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-white/10 text-slate-300 hover:bg-white/20'}`}
            >
              All Countries
            </button>
            {Object.keys(universities).map((country) => (
              <button
                key={country}
                onClick={() => setSelectedCountry(country)}
                className={`px-6 py-2 rounded-full transition-all duration-200 
                  ${selectedCountry === country 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-white/10 text-slate-300 hover:bg-white/20'}`}
              >
                {country}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setSelectedFilter(filter.value)}
                className={`px-6 py-2 rounded-full transition-all duration-200 
                  ${selectedFilter === filter.value 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-white/10 text-slate-300 hover:bg-white/20'}`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="relative">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search universities by name or location..."
              className="w-full pl-12 p-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-slate-400 focus:outline-none focus:border-indigo-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {isLoading ? (
          <div className="text-center text-slate-300 py-12">
            Loading universities...
          </div>
        ) : (
          <>
            <div className="text-slate-300 mb-8">
              Found {memoizedFilteredUniversities.length} universities
            </div>

            <AnimatePresence>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {memoizedFilteredUniversities.map((university, index) => (
                  <UniversityCard 
                    key={`${university.name}-${index}`} 
                    university={university} 
                  />
                ))}
              </div>
            </AnimatePresence>

            {memoizedFilteredUniversities.length === 0 && !isLoading && (
              <div className="text-center text-slate-300 py-12">
                No universities found matching your criteria.
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ExploreUniversities;