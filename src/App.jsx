import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import StudyAbroad from "./pages/StudyAbroad";
import ExploreUniversities from "./pages/ExploreUniversities";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Modal from "./components/Modal";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";

function App() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  useEffect(() => {
    const handleRegisterModal = () => {
      setIsRegisterOpen(true);
    };

    document.addEventListener('openRegisterModal', handleRegisterModal);
    return () => document.removeEventListener('openRegisterModal', handleRegisterModal);
  }, []);

  const handleRegisterClick = () => {
    setIsRegisterOpen(true);
  };

  const handleRegisterClose = () => {
    setIsRegisterOpen(false);
  };

  return (
    <div>
      <Navbar onRegisterClick={handleRegisterClick} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/study-abroad" element={<StudyAbroad />} />
        <Route path="/services" element={<Services />} />
        <Route path="/explore-universities/*" element={<ExploreUniversities />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Modal isOpen={isRegisterOpen} onClose={handleRegisterClose}>
        <Register onClose={handleRegisterClose} />
      </Modal>
    </div>
  );
}

export default App;

