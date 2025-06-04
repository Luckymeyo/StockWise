// Import Tailwind styles
import './style.css';

// Import the routing handler
import { handleRouting } from './routes/router.js';

// Run routing once when the DOM is fully loaded
window.addEventListener('DOMContentLoaded', handleRouting);

// Also re-run routing when hash changes (for SPA navigation)
window.addEventListener('hashchange', handleRouting);

// Register the service worker using Vite PWA plugin
import { registerSW } from 'virtual:pwa-register';
registerSW({ immediate: true });
