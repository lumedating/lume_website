import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Mission from "./pages/Mission";
import Team from "./pages/Team";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="app" style={{ padding: "2rem", textAlign: "center" }}>
          <h1>Something went wrong.</h1>
          <p>Please refresh the page.</p>
          <button
            onClick={() => window.location.reload()}
            style={{
              padding: "0.75rem 1.5rem",
              backgroundColor: "#b700ff",
              color: "#ffffff",
              border: "none",
              borderRadius: "1.5rem",
              cursor: "pointer",
              marginTop: "1rem",
            }}
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    // Only scroll if there's a hash, or if we're navigating to home page
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    } else if (location.pathname === "/") {
      // Only scroll to top on home page, not on every route change
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <ErrorBoundary>
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
    </ErrorBoundary>
  );
}

export default App;
