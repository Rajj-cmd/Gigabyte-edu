import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import StudyAbroad from "./pages/StudyAbroad";
import ExploreUniversities from "./pages/ExploreUniversities";
import Courses from "./pages/Courses";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import Services from "./pages/Services";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/study-abroad" element={<StudyAbroad />} />
        <Route path="/explore-universities">
          <Route index element={<ExploreUniversities />} />
          <Route path=":view" element={<ExploreUniversities />} />
        </Route>
        <Route path="/courses" element={<Courses />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services">
          <Route index element={<Services />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

