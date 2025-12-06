import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Mission from "./pages/Mission";
import Team from "./pages/Team";

function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="app">
        <ScrollToHash />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/team" element={<Team />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
