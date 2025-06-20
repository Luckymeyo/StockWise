import { renderLayout } from '../components/layout.js';

export async function renderStockPredictionPage() {
  const app = document.getElementById('app');

  // Simulasi data transaksi pizza (ini nanti diganti fetch dari API asli)
  let transactions = [];

  // Simulasi prediksi (dummy)
  let predictionResult = null;

  // Ambil data transaksi dari API (misal endpoint /transactions)
  async function fetchTransactions() {
    try {
      const res = await fetch('http://localhost:8000/transactions');
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      transactions = await res.json();
    } catch (error) {
      console.error("Failed to fetch transactions:", error);
      transactions = [];
    }
  }

  // Hitung total pizza sold per pizza_name
  function calculateTotalPerPizza() {
    const totals = {};
    transactions.forEach(t => {
      totals[t.pizza_name] = (totals[t.pizza_name] || 0) + t.quantity;
    });
    return totals;
  }

  // Render tabel total pizza
  function renderTotalsTable() {
    const totals = calculateTotalPerPizza();
    const rows = Object.entries(totals).map(([pizza, qty]) => `
      <tr>
        <td class="border px-4 py-2">${pizza}</td>
        <td class="border px-4 py-2 text-center">${qty}</td>
      </tr>
    `).join('');
    return `
      <table class="min-w-full border-collapse border border-gray-300 mb-6">
        <thead>
          <tr class="bg-gray-200">
            <th class="border border-gray-300 px-4 py-2 text-left">Pizza Name</th>
            <th class="border border-gray-300 px-4 py-2 text-center">Total Sold</th>
          </tr>
        </thead>
        <tbody>
          ${rows || `<tr><td colspan="2" class="text-center p-4 text-gray-500">No data available</td></tr>`}
        </tbody>
      </table>
    `;
  }

  // Render prediksi hasil
  function renderPrediction() {
    if (!predictionResult) return '';
    return `
      <div class="mt-6 p-4 bg-green-100 border border-green-400 rounded max-w-md mx-auto">
        <h3 class="font-semibold mb-2">Prediction for ${predictionResult.date}:</h3>
        <ul>
          ${Object.entries(predictionResult.predictions).map(([pizza, qty]) => `
            <li>${pizza}: ${qty} pizzas</li>
          `).join('')}
        </ul>
      </div>
    `;
  }

  // Render halaman utama
  function renderPage() {
    const content = `
      <div class="min-h-screen bg-gray-100 p-6 text-gray-800">
        <h1 class="text-2xl font-bold mb-6">Pizza Stock Prediction</h1>

        <h2 class="text-xl mb-4">Total Pizza Sold</h2>
        ${renderTotalsTable()}

        <form id="prediction-form" class="max-w-md mx-auto bg-white p-4 rounded shadow">
          <label for="predict_date" class="block mb-2 font-medium">Enter Date to Predict (YYYY-MM-DD):</label>
          <input type="date" id="predict_date" name="predict_date" required class="w-full border rounded px-3 py-2 mb-4" />
          <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Predict</button>
        </form>

        ${renderPrediction()}
      </div>
    `;

    app.innerHTML = renderLayout(content);

    // Form submit event
    const form = document.getElementById('prediction-form');
    form.addEventListener('submit', e => {
      e.preventDefault();

      const date = form.predict_date.value;
      if (!date) return alert('Please enter a valid date.');

      // Dummy prediksi: misal prediksi penjualan 10% dari total saat ini
      const totals = calculateTotalPerPizza();
      const predictions = {};
      for (const [pizza, qty] of Object.entries(totals)) {
        predictions[pizza] = Math.round(qty * 0.1); // 10% dari total penjualan
      }

      predictionResult = {
        date,
        predictions
      };

      renderPage();
    });
  }

  // Fetch data dan render pertama kali
  await fetchTransactions();
  renderPage();
}
