import { useState, useEffect } from 'react';

/**
 * Hook to detect when FontAwesome script has loaded
 * Returns true when FontAwesome is ready, false otherwise
 * Uses a simple approach: wait for script load event or timeout
 */
export function useFontAwesome() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let cleanupFunctions = [];
    let timeoutId = null;
    let fallbackTimeout = null;

    // Check if FontAwesome script exists and is loaded
    const checkScript = () => {
      const script = document.querySelector('script[src*="fontawesome"]');
      if (!script) {
        // No script found, assume it's not needed or will load later
        // Set to true after a short delay to prevent blocking
        timeoutId = setTimeout(() => setIsLoaded(true), 500);
        return;
      }

      // If script is already loaded
      if (script.getAttribute('data-loaded') === 'true' || 
          (script.readyState && script.readyState === 'complete')) {
        setIsLoaded(true);
        return;
      }

      // Wait for script to load
      const handleLoad = () => {
        script.setAttribute('data-loaded', 'true');
        setIsLoaded(true);
      };

      const handleError = () => {
        // If script fails, still allow rendering after delay
        timeoutId = setTimeout(() => setIsLoaded(true), 1000);
      };

      // Check if already loaded
      if (script.complete) {
        handleLoad();
        return;
      }

      // Listen for load events
      script.addEventListener('load', handleLoad, { once: true });
      script.addEventListener('error', handleError, { once: true });
      
      cleanupFunctions.push(() => {
        script.removeEventListener('load', handleLoad);
        script.removeEventListener('error', handleError);
      });

      // Fallback timeout - allow rendering after 2 seconds even if script hasn't loaded
      fallbackTimeout = setTimeout(() => {
        setIsLoaded(true);
      }, 2000);
    };

    // Small delay to ensure DOM is ready
    const initTimeout = setTimeout(checkScript, 50);
    
    return () => {
      clearTimeout(initTimeout);
      clearTimeout(timeoutId);
      clearTimeout(fallbackTimeout);
      cleanupFunctions.forEach(cleanup => cleanup());
    };
  }, []);

  return isLoaded;
}

