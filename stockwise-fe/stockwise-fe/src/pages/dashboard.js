import { renderLayout } from '../components/layout.js';
import swal from 'sweetalert'; // <-- sweetalert import

export async function renderDashboardPage() {
  const app = document.getElementById('app');

  let inventoryData = [];
  let predictionData = [];

  try {
    const invRes = await fetch('http://localhost:3000/api/inventory');
    inventoryData = await invRes.json();

    const predRes = await fetch('http://localhost:3000/api/prediction/compare');
    predictionData = await predRes.json();
  } catch (error) {
    console.error("Failed to load data:", error);
  }

  // SweetAlert warning if understock exists
  const understocked = predictionData.filter(item => item.status === 'understock');
  if (understocked.length > 0) {
    const affected = understocked.map(item => `• ${item.pizza_id}`).join('\n');
    swal({
      title: "Stock Alert 🚨",
      text: `The following items are understocked:\n\n${affected}`,
      icon: "warning",
      button: "Acknowledge"
    });
  }

  const stockAlertRows = understocked.map(item => `
    <tr class="border-t">
      <td class="py-2">${item.pizza_id}</td>
      <td class="py-2">${item.predicted}</td>
      <td class="py-2">${item.actual}</td>
      <td class="py-2 text-red-600">${item.status}</td>
    </tr>
  `).join('');

  const totalStockRows = [...inventoryData]
    .sort((a, b) => b.stock - a.stock)
    .map(item => `
      <tr class="border-t">
        <td class="py-2">${item.name}</td>
        <td class="py-2">${item.stock}</td>
      </tr>
    `).join('');

  const predictionRows = predictionData.map(item => `
    <tr class="border-t">
      <td class="py-2">${item.pizza_id}</td>
      <td class="py-2">${item.predicted}</td>
      <td class="py-2">${item.actual}</td>
      <td class="py-2 text-${item.status === 'understock' ? 'red' : item.status === 'balanced' ? 'green' : 'yellow'}-600">${item.status}</td>
    </tr>
  `).join('');

  const dashboardContent = `
    <div class="min-h-screen bg-gray-100 text-gray-800 p-6">
      <header class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold">Dashboard</h1>
        <div class="flex items-center gap-4">
          <button class="text-gray-600 hover:text-gray-800">🔔</button>
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 bg-gray-400 rounded-full"></div>
            <span class="text-sm text-gray-700">Admin</span>
          </div>
        </div>
      </header>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div class="bg-white shadow rounded-lg p-4 h-48 flex items-center justify-center text-gray-400 text-sm">
          [ Chart Placeholder ]
        </div>
        <div class="bg-white shadow rounded-lg p-4 h-48 flex items-center justify-center text-gray-400 text-sm">
          [ Pie Chart Placeholder ]
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div class="bg-white shadow rounded-lg p-4">
          <h2 class="text-lg font-semibold mb-4">Stock Alert</h2>
          <table class="w-full text-sm text-left">
            <thead class="border-b text-gray-600">
              <tr>
                <th class="py-2">Pizza ID</th>
                <th class="py-2">Predicted</th>
                <th class="py-2">Actual</th>
                <th class="py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              ${stockAlertRows || `<tr><td colspan="4" class="py-2 text-center text-gray-500">No stock alerts.</td></tr>`}
            </tbody>
          </table>
        </div>

        <div class="bg-white shadow rounded-lg p-4">
          <h2 class="text-lg font-semibold mb-4">Total Stocks</h2>
          <table class="w-full text-sm text-left">
            <thead class="border-b text-gray-600">
              <tr>
                <th class="py-2">Pizza ID</th>
                <th class="py-2">Quantity</th>
              </tr>
            </thead>
            <tbody>
              ${totalStockRows}
            </tbody>
          </table>
        </div>
      </div>

      <div class="bg-white shadow rounded-lg p-4 mt-6">
        <h2 class="text-lg font-semibold mb-4">Prediction vs Stock</h2>
        <table class="w-full text-sm text-left">
          <thead class="border-b text-gray-600">
            <tr>
              <th class="py-2">Pizza ID</th>
              <th class="py-2">Predicted</th>
              <th class="py-2">Actual</th>
              <th class="py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            ${predictionRows || `<tr><td colspan="4" class="py-2 text-center text-gray-500">No predictions available.</td></tr>`}
          </tbody>
        </table>
      </div>
    </div>
  `;

  app.innerHTML = renderLayout(dashboardContent);
}
