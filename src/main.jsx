import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

try {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} catch (error) {
  console.error('Failed to render app:', error);
  rootElement.innerHTML = `
    <div style="padding: 2rem; text-align: center; color: #ffffff; background-color: #111111; min-height: 100vh;">
      <h1>Failed to load application</h1>
      <p>Please refresh the page.</p>
      <button onclick="window.location.reload()" style="padding: 0.75rem 1.5rem; background-color: #b700ff; color: #ffffff; border: none; border-radius: 1.5rem; cursor: pointer; margin-top: 1rem;">
        Reload Page
      </button>
    </div>
  `;
}
