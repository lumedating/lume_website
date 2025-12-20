import { BrowserRouter as Router, Routes, Route, useLocation, Link } from "react-router-dom";
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
    this.state = { hasError: false, error: null, errorInfo: null };
    this.retryTimeout = null;
    this.retryCountRef = { current: 0 }; // Use ref to track retry count
  }

  static getDerivedStateFromError(error) {
    // Catch errors and update state
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log error for debugging
    console.error("Error caught by boundary:", error, errorInfo);
    
    // Store error info
    this.setState({
      error,
      errorInfo,
    });

    // Auto-retry for transient errors (like resource loading issues)
    // Only auto-retry once to avoid infinite loops
    // Use ref to check current retry count immediately
    if (this.retryCountRef.current === 0) {
      this.retryCountRef.current = 1;
      this.retryTimeout = setTimeout(() => {
        this.setState({
          hasError: false,
        });
      }, 1500);
    }
  }

  componentWillUnmount() {
    // Clean up timeout
    if (this.retryTimeout) {
      clearTimeout(this.retryTimeout);
    }
  }

  handleReset = () => {
    // Clear any pending retry
    if (this.retryTimeout) {
      clearTimeout(this.retryTimeout);
      this.retryTimeout = null;
    }
    
    // Reset retry count
    this.retryCountRef.current = 0;
    
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="app" style={{ padding: "2rem", textAlign: "center" }}>
          <h1>Something went wrong.</h1>
          <p>Please refresh the page.</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginTop: "1rem", flexWrap: "wrap" }}>
            <button
              onClick={this.handleReset}
              style={{
                padding: "0.75rem 1.5rem",
                backgroundColor: "#666666",
                color: "#ffffff",
                border: "none",
                borderRadius: "1.5rem",
                cursor: "pointer",
              }}
            >
              Try Again
            </button>
            <button
              onClick={() => window.location.reload()}
              style={{
                padding: "0.75rem 1.5rem",
                backgroundColor: "#b700ff",
                color: "#ffffff",
                border: "none",
                borderRadius: "1.5rem",
                cursor: "pointer",
              }}
            >
              Reload Page
            </button>
          </div>
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

function NotFound() {
  return (
    <div style={{ padding: "2rem", textAlign: "center", minHeight: "60vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/" style={{ color: "#b700ff", textDecoration: "none", marginTop: "1rem" }}>
        Go Home
      </Link>
    </div>
  );
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
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
