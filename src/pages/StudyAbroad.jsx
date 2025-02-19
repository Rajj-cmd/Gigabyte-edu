import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import { FaSun, FaCloudRain, FaDollarSign, FaGraduationCap, FaPlane, FaHome } from "react-icons/fa";

const StudyAbroad = () => {
  const navigate = useNavigate();

  const countries = [
    {
      name: "United States",
      image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
      description: "Home to many world-renowned universities, the USA offers diverse education opportunities across 50 states.",
      livingCost: {
        monthly: "$1,500-$3,000",
        rent: "$800-$2,500",
        food: "$300-$500",
        transport: "$60-$100"
      },
      weather: {
        summer: "20°C to 35°C",
        winter: "-5°C to 10°C",
        description: "Varies by region; from tropical Florida to snowy Alaska"
      },
      pros: [
        "World-class universities",
        "Diverse culture and opportunities",
        "Advanced research facilities",
        "Optional Practical Training (OPT)"
      ],
      cons: [
        "High tuition fees",
        "Expensive healthcare",
        "Strict visa requirements",
        "High living costs in major cities"
      ],
      universities: ["Massachusetts Institute of Technology", "Stanford University", "Harvard University"]
    },
    {
      name: "United Kingdom",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad",
      description: "Known for its prestigious universities and rich academic heritage spanning centuries.",
      livingCost: {
        monthly: "£1,000-£2,000",
        rent: "£500-£1,500",
        food: "£200-£300",
        transport: "£50-£100"
      },
      weather: {
        summer: "15°C to 25°C",
        winter: "2°C to 10°C",
        description: "Mild temperatures with frequent rain throughout the year"
      },
      pros: [
        "High-quality education",
        "Rich cultural heritage",
        "Shorter degree programs",
        "Central location for European travel"
      ],
      cons: [
        "High living costs",
        "Variable weather",
        "Limited work opportunities after graduation",
        "Brexit implications"
      ],
      universities: ["University of Oxford", "University of Cambridge", "Imperial College London"]
    },
    {
      name: "Canada",
      image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce",
      description: "Known for its high quality of life, multicultural environment, and welcoming attitude towards international students.",
      livingCost: {
        monthly: "CAD 1,200-2,500",
        rent: "CAD 600-1,800",
        food: "CAD 300-600",
        transport: "CAD 80-120"
      },
      weather: {
        summer: "20°C to 30°C",
        winter: "-15°C to 5°C",
        description: "Cold winters and mild summers, varying significantly by region"
      },
      pros: [
        "High quality of education",
        "Post-graduation work opportunities",
        "Safe and welcoming environment",
        "Beautiful natural landscapes"
      ],
      cons: [
        "Cold winters",
        "High living costs in major cities",
        "Limited housing in popular areas",
        "Distance between major cities"
      ],
      universities: ["University of Toronto", "McGill University", "University of British Columbia"]
    },
    {
      name: "Australia",
      image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be",
      description: "Offers world-class education with a relaxed lifestyle and beautiful weather year-round.",
      livingCost: {
        monthly: "AUD 1,800-2,800",
        rent: "AUD 800-2,000",
        food: "AUD 400-600",
        transport: "AUD 80-150"
      },
      weather: {
        summer: "25°C to 35°C",
        winter: "10°C to 20°C",
        description: "Warm summers and mild winters, perfect for outdoor lifestyle"
      },
      pros: [
        "High standard of living",
        "Excellent weather",
        "Strong job market",
        "Post-study work rights"
      ],
      cons: [
        "High cost of living",
        "Distance from other countries",
        "Competitive job market",
        "Wildlife challenges"
      ],
      universities: ["University of Melbourne", "University of Sydney", "Australian National University"]
    },
    {
      name: "Germany",
      image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b",
      description: "Offers tuition-free education at public universities with strong emphasis on research and innovation.",
      livingCost: {
        monthly: "€800-1,500",
        rent: "€400-800",
        food: "€200-300",
        transport: "€50-100"
      },
      weather: {
        summer: "20°C to 30°C",
        winter: "0°C to 10°C",
        description: "Four distinct seasons with moderate temperatures"
      },
      pros: [
        "No or low tuition fees",
        "Strong economy",
        "High-quality healthcare",
        "Central European location"
      ],
      cons: [
        "Language barrier",
        "Complex visa process",
        "Limited English programs",
        "Housing shortage in major cities"
      ],
      universities: ["Technical University of Munich", "Ludwig Maximilian University", "Heidelberg University"]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 py-24">
      {/* Hero Section */}
      <div className="container mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-12"
        >
          Study Abroad Destinations
        </motion.h1>

        {/* Country Sections */}
        <div className="space-y-32">
          {countries.map((country, index) => (
            <motion.section
              key={country.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Country Header */}
              <div className="relative h-[400px] rounded-3xl overflow-hidden mb-12">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${country.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {country.name}
                  </h2>
                  <p className="text-xl text-slate-300">
                    {country.description}
                  </p>
                </div>
              </div>

              {/* Info Grid */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Living Costs */}
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <FaDollarSign className="text-indigo-400 mr-2" />
                    Living Costs
                  </h3>
                  <div className="space-y-4 text-slate-300">
                    <p><strong>Monthly Average:</strong> {country.livingCost.monthly}</p>
                    <p><strong>Accommodation:</strong> {country.livingCost.rent}</p>
                    <p><strong>Food:</strong> {country.livingCost.food}</p>
                    <p><strong>Transport:</strong> {country.livingCost.transport}</p>
                  </div>
                </div>

                {/* Weather */}
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <FaSun className="text-indigo-400 mr-2" />
                    Weather
                  </h3>
                  <div className="space-y-4 text-slate-300">
                    <p><strong>Summer:</strong> {country.weather.summer}</p>
                    <p><strong>Winter:</strong> {country.weather.winter}</p>
                    <p><strong>Overview:</strong> {country.weather.description}</p>
                  </div>
                </div>
              </div>

              {/* Pros & Cons */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-6">Pros</h3>
                  <ul className="space-y-3">
                    {country.pros.map((pro, idx) => (
                      <li key={idx} className="flex items-center text-slate-300">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-3" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-6">Cons</h3>
                  <ul className="space-y-3">
                    {country.cons.map((con, idx) => (
                      <li key={idx} className="flex items-center text-slate-300">
                        <span className="w-2 h-2 bg-red-400 rounded-full mr-3" />
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Top Universities */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-white mb-6">Featured Universities</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {country.universities.map((uni, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 
                        cursor-pointer hover:bg-white/10 transition-all duration-300"
                      onClick={() => navigate(`/explore-universities?country=${country.name}&university=${uni}`)}
                    >
                      <FaGraduationCap className="text-3xl text-indigo-400 mb-4" />
                      <h4 className="text-xl font-bold text-white mb-2">{uni}</h4>
                      <p className="text-slate-300">Click to explore details</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Divider */}
              {index < countries.length - 1 && (
                <div className="w-full h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
              )}
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudyAbroad;