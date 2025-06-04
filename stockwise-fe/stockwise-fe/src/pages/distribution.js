import { renderLayout } from '../components/layout.js';

export function renderDistributionPage() {
  const app = document.getElementById('app');
  app.innerHTML = renderLayout(`
    <h1 class="text-4xl font-bold mb-4 text-gray-800">Distribution</h1>
    <p class="text-lg text-gray-600">Distribution and logistics data will be shown here.</p>
  `);
}
