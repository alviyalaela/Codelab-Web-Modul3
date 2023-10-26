import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/AboutUs";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;