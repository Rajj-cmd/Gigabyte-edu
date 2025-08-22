import { FaLinkedin, FaFacebook, FaEnvelope, FaMapMarkerAlt, FaPhone, FaGlobe, FaClock } from "react-icons/fa";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-900 text-white">
      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      {/* Contact and Timing Section */}
      <div className="bg-slate-800/95 backdrop-blur-md border-t border-slate-700 py-8">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-slate-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-indigo-400 mb-4">Location</h3>
            <p className="text-slate-300">
              <FaMapMarkerAlt className="inline mr-2 text-indigo-400" />
              Putalisadak, Kathmandu, Nepal
            </p>
          </div>
          <div className="bg-slate-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-indigo-400 mb-4">Contact</h3>
            <p className="text-slate-300 mb-2">
              <FaPhone className="inline mr-2 text-indigo-400" />
              +977 01-5313360
            </p>
            <p className="text-slate-300 mb-2">
              <FaEnvelope className="inline mr-2 text-indigo-400" />
              gigabyte.edu@gmail.com
            </p>
          </div>
          <div className="bg-slate-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-indigo-400 mb-4">Opening Hours</h3>
            <p className="text-slate-300 mb-2">
              <FaClock className="inline mr-2 text-indigo-400" />
              Opening Time: 10:00 AM
            </p>
            <p className="text-slate-300 mb-2">
              <FaClock className="inline mr-2 text-indigo-400" />
              Closing Time: 5:00 PM
            </p>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d883.0612712984532!2d85.3138248695755!3d27.709718185811425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1941889d3b85%3A0xd12d297723bfd157!2sGigabyte%20Education%20Consultancy%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1741924074737!5m2!1sen!2snp"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Gigabyte Education Location"
        ></iframe>
      </div>

      {/* Footer Section */}
      <footer className="bg-slate-800/95 backdrop-blur-md border-t border-slate-700">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* About Section */}
            <div>
              <h3 className="text-xl font-bold text-indigo-400 mb-4">About Gigabyte Education</h3>
              <p className="text-slate-300">
                Gigabyte Education Consultancy is a leading education consultancy dedicated to helping students achieve their dreams of studying abroad. We provide expert guidance and personalized support for university applications, visas, and scholarships.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold text-indigo-400 mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/study-abroad" className="text-slate-300 hover:text-indigo-400 transition-colors">
                    Study Abroad
                  </a>
                </li>
                <li>
                  <a href="/explore-universities" className="text-slate-300 hover:text-indigo-400 transition-colors">
                    Explore Universities
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-slate-300 hover:text-indigo-400 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-slate-300 hover:text-indigo-400 transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-xl font-bold text-indigo-400 mb-4">Contact Us</h3>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-center">
                  <FaMapMarkerAlt className="mr-2 text-indigo-400" />
                  Putalisadak, Kathmandu, Nepal
                </li>
                <li className="flex items-center">
                  <FaPhone className="mr-2 text-indigo-400" />
                  +977 01-5313360
                </li>
                <li className="flex items-center">
                  <FaEnvelope className="mr-2 text-indigo-400" />
                  gigabyte.edu@gmail.com
                </li>
                <li className="flex items-center">
                  <FaGlobe className="mr-2 text-indigo-400" />
                  https://gigabyteeducationconsultancy.com
                </li>
              </ul>
            </div>

            {/* Social Media Links */}
            <div>
              <h3 className="text-xl font-bold text-indigo-400 mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/company/gigabyte-education-consultancy-pvt-ltd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-500 transition-colors"
                >
                  <FaLinkedin size={32} />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61557666615964"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-400 transition-colors"
                >
                  <FaFacebook size={32} />
                </a>
                <a
                  href="mailto:gigabyte.edu@gmail.com "
                  className="text-red-600 hover:text-red-400 transition-colors"
                >
                  <FaEnvelope size={32} />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>
              &copy; {new Date().getFullYear()} Gigabyte Education Consultancy. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;