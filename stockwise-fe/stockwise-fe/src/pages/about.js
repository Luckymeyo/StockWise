import { renderLayout } from '../components/layout.js';

export function renderAboutPage() {
  const app = document.getElementById('app');
  app.innerHTML = renderLayout(`
    <div class="flex items-center justify-center min-h-[60vh]">
      <h1 class="text-4xl font-bold text-gray-800">About This App</h1>
    </div>
  `);
}
