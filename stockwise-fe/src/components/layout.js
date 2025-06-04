export function renderLayout(content, route = '') {
  const hideNavbar = route === '#/login' || route === '#/register';

  return `
    <div class="min-h-screen bg-gray-100 text-gray-900">
      <!-- Top App Title -->
      <header class="p-4 bg-white shadow-md">
        <h1 class="text-2xl font-bold text-gray-800">StockWise</h1>
      </header>

      <!-- Navigation Bar -->
      ${!hideNavbar ? `
        <nav class="bg-white p-4 shadow-sm flex gap-6 text-sm font-medium text-gray-700 border-b">
          <a href="#/dashboard" class="hover:text-blue-500">📊 Dashboard</a>
          <a href="#/inventory" class="hover:text-blue-500">📦 Inventory</a>
          <a href="#/transaction" class="hover:text-blue-500">🧾 Transactions</a>
          <a href="#/stock-prediction" class="hover:text-blue-500">📈 Stock Prediction</a>
          <a href="#/distribution" class="hover:text-blue-500">🚚 Distribution</a>
          <a href="#/about" class="hover:text-blue-500">ℹ️ About</a>
        </nav>
      ` : ''}

      <!-- Main Content -->
      <main class="max-w-6xl mx-auto p-6">
        ${content}
      </main>
    </div>
  `;
}
