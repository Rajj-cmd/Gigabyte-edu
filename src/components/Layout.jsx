import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaMapMarkerAlt, FaClock, FaPhone, FaEnvelope, FaWhatsapp, FaDirections } from "react-icons/fa";
import Footer from "./Footer";

const Layout = ({ children, showMap = false }) => {  
  const mapLocation = {
    name: "Gigabyte Education Consultancy Pvt. Ltd.",
    address: "200m ahead from Shantinagar Gas Station, Kathmandu 44600, Nepal",
    coordinates: "27.685499876212027, 85.33641797537742",
    googleMapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.997007276466!2d85.33641797537742!3d27.685499876212027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1996138ca6ed%3A0x71275767f7fb8040!2sGigabyte%20Education%20Consultancy%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1708329649089!5m2!1sen!2snp"
  };

  const workingHours = {
    weekdays: "Sunday - Friday: 10:00 AM - 5:00 PM",
    saturday: "Saturday: Closed",
    holidays: "Public Holidays: Closed"
  };
  const contactInfo = {
    address: "200m ahead from Shantinagar Gas Station, Kathmandu 44600, Nepal",
    phone: "+977 9767659319",
    whatsapp: "+977 9767659319",
    email: "gigabyteedu@gmail.com"
  };

  return (
    <div className="relative">
      {children}
      
      {showMap && (
        <div className="relative bg-slate-900">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-transparent to-slate-900/90" />
          
          <div className="relative z-10 container mx-auto px-4 py-24">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Visit Our Office</h2>
              <p className="text-xl text-slate-300">Get in touch with our expert consultants</p>
            </motion.div>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 max-w-6xl mx-auto">
              {/* Location Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-indigo-500/20 p-3 rounded-lg">
                    <FaMapMarkerAlt className="text-indigo-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Location</h3>
                    <p className="text-slate-300 text-sm">{contactInfo.address}</p>
                  </div>
                </div>
              </motion.div>

              {/* Working Hours Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-indigo-500/20 p-3 rounded-lg">
                    <FaClock className="text-indigo-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Working Hours</h3>
                    <div className="text-slate-300 text-sm space-y-1">
                      <p>{workingHours.weekdays}</p>
                      <p>{workingHours.saturday}</p>
                      <p>{workingHours.holidays}</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Contact Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-indigo-500/20 p-3 rounded-lg">
                    <FaPhone className="text-indigo-400 text-xl" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-white font-semibold">Contact</h3>
                    <a 
                      href={`tel:${contactInfo.phone}`}
                      className="block text-slate-300 text-sm hover:text-indigo-400 transition-colors"
                    >
                      {contactInfo.phone}
                    </a>
                    <a
                      href={`https://wa.me/${contactInfo.whatsapp.replace(/\+/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-slate-300 text-sm hover:text-indigo-400 transition-colors"
                    >
                      <FaWhatsapp /> WhatsApp
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Email Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-indigo-500/20 p-3 rounded-lg">
                    <FaEnvelope className="text-indigo-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Email</h3>
                    <a 
                      href={`mailto:${contactInfo.email}`}
                      className="text-slate-300 text-sm hover:text-indigo-400 transition-colors"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Map Container */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 
                group hover:border-indigo-500/50 transition-all duration-500"
            >
              {/* Semi-transparent overlay that appears on hover */}
              <div className="absolute inset-0 bg-indigo-500/10 opacity-0 group-hover:opacity-100 
                transition-opacity duration-500 z-10" />

              <iframe
                src={mapLocation.googleMapsUrl}
                className="w-full h-[600px] group-hover:scale-105 transition-transform duration-700"
                style={{ 
                  border: 0, 
                  filter: 'contrast(1.1) brightness(0.9)',
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Gigabyte Education Location"
              />

              {/* Enhanced Map Controls with Background Blur */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-20
                backdrop-blur-md bg-black/20 p-3 rounded-2xl border border-white/10">
                <motion.a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapLocation.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-r from-indigo-600 to-indigo-500 px-6 py-3 rounded-xl 
                    text-white flex items-center gap-2 hover:shadow-lg hover:shadow-indigo-500/25 
                    transition-all duration-300"
                >
                  <FaExternalLinkAlt size={14} />
                  View Larger Map
                </motion.a>

                <motion.a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(mapLocation.coordinates)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-r from-green-600 to-green-500 px-6 py-3 rounded-xl 
                    text-white flex items-center gap-2 hover:shadow-lg hover:shadow-green-500/25 
                    transition-all duration-300"
                >
                  <FaDirections size={14} />
                  Get Directions
                </motion.a>
              </div>

              {/* Floating Card with Company Info */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="absolute top-8 right-8 z-20 bg-white/10 backdrop-blur-md rounded-xl p-6 
                  border border-white/20 shadow-xl max-w-sm"
              >
                <h3 className="text-xl font-bold text-white mb-4">Gigabyte Education</h3>
                <div className="space-y-3 text-slate-200">
                  <p className="flex items-start gap-3">
                    <FaMapMarkerAlt className="text-indigo-400 mt-1 flex-shrink-0" />
                    <span>{contactInfo.address}</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <FaClock className="text-indigo-400 flex-shrink-0" />
                    <span>{workingHours.weekdays}</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <FaPhone className="text-indigo-400 flex-shrink-0" />
                    <span>{contactInfo.phone}</span>
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Layout;
