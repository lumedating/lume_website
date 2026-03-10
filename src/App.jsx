import { BrowserRouter as Router, Routes, Route, useLocation, Link } from "react-router-dom";
import { useEffect, Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Mission from "./pages/Mission";
import Team from "./pages/Team";
import PrivacyPolicy from "./pages/PrivacyPolicy";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false, 
      error: null, 
      errorInfo: null,
      showError: false // Separate state for showing error UI
    };
    this.retryTimeout = null;
    this.showErrorTimeout = null;
    this.retryCountRef = { current: 0 };
  }

  static getDerivedStateFromError(error) {
    // Don't immediately show error - wait to see if it resolves
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

    // Filter out non-critical errors that shouldn't show error UI
    const isNonCriticalError = this.isNonCriticalError(error, errorInfo);
    
    if (isNonCriticalError) {
      // For non-critical errors, just log and don't show UI
      console.warn("Non-critical error caught, not showing error UI:", error);
      // Auto-recover after a short delay
      if (this.retryCountRef.current === 0) {
        this.retryCountRef.current = 1;
        this.retryTimeout = setTimeout(() => {
          this.setState({
            hasError: false,
            error: null,
            errorInfo: null,
          });
        }, 500);
      }
      return;
    }

    // For critical errors, wait a bit before showing error UI
    // This allows transient errors to resolve themselves
    // Clear any existing timeout
    if (this.showErrorTimeout) {
      clearTimeout(this.showErrorTimeout);
    }

    // Wait 2 seconds before showing error UI
    // This gives time for transient errors to resolve
    this.showErrorTimeout = setTimeout(() => {
      // Only show error if it still exists (hasn't been resolved)
      if (this.state.hasError) {
        this.setState({ showError: true });
      }
    }, 2000);

    // Auto-retry for transient errors
    // Only auto-retry once to avoid infinite loops
    if (this.retryCountRef.current === 0) {
      this.retryCountRef.current = 1;
      this.retryTimeout = setTimeout(() => {
        // If error resolved, clear the show error timeout
        if (this.showErrorTimeout) {
          clearTimeout(this.showErrorTimeout);
          this.showErrorTimeout = null;
        }
        this.setState({
          hasError: false,
          showError: false,
          error: null,
          errorInfo: null,
        });
      }, 1500);
    }
  }

  isNonCriticalError(error, errorInfo) {
    // Check if error is related to image loading or other non-critical issues
    const errorMessage = error?.message?.toLowerCase() || '';
    const errorStack = errorInfo?.componentStack?.toLowerCase() || '';
    
    // Image loading errors are handled by browsers and shouldn't crash the app
    if (errorMessage.includes('image') || errorMessage.includes('img')) {
      return true;
    }
    
    // Font loading errors are non-critical
    if (errorMessage.includes('font') || errorMessage.includes('fontawesome')) {
      return true;
    }
    
    // Network errors for non-critical resources
    if (errorMessage.includes('failed to fetch') || 
        errorMessage.includes('network') ||
        errorMessage.includes('loading chunk')) {
      // Only consider it non-critical if it's not a critical resource
      return true;
    }
    
    // Chunk loading errors (common on first load) are often transient
    if (errorMessage.includes('chunk') || errorMessage.includes('loading')) {
      return true;
    }
    
    return false;
  }

  componentWillUnmount() {
    // Clean up timeouts
    if (this.retryTimeout) {
      clearTimeout(this.retryTimeout);
    }
    if (this.showErrorTimeout) {
      clearTimeout(this.showErrorTimeout);
    }
  }

  handleReset = () => {
    // Clear any pending timeouts
    if (this.retryTimeout) {
      clearTimeout(this.retryTimeout);
      this.retryTimeout = null;
    }
    if (this.showErrorTimeout) {
      clearTimeout(this.showErrorTimeout);
      this.showErrorTimeout = null;
    }
    
    // Reset retry count
    this.retryCountRef.current = 0;
    
    this.setState({
      hasError: false,
      showError: false,
      error: null,
      errorInfo: null,
    });
  };

  render() {
    // Only show error UI if error persists and is critical
    if (this.state.hasError && this.state.showError) {
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

    // If there's an error but we're not showing it yet (waiting period), render children
    // This allows the app to continue rendering while we wait to see if error resolves
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
            <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
