import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import Header from "./components/Header";
import Footer from "./components/Footer.jsx";
import NotFound from "./pages/NotFound.jsx";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;