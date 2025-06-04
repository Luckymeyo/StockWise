import { renderLayout } from '../components/layout.js';
import swal from 'sweetalert';

export function renderInventoryPage() {
  const app = document.getElementById('app');

  async function fetchPredictionList() {
    try {
      const res = await fetch('http://localhost:3000/api/prediction/compare');
      const data = await res.json();
      return data.map(item => item.pizza_id); // ['hawaiian_m', ...]
    } catch {
      return [];
    }
  }

  async function fetchInventory() {
    const res = await fetch('http://localhost:3000/api/inventory');
    return await res.json();
  }

  async function renderTable() {
    const inventory = await fetchInventory();
    const pizzaWhitelist = await fetchPredictionList();

    const rows = inventory.map(item => {
      const statusColor = item.status === 'understock' ? 'text-red-600' :
                          item.status === 'overstock' ? 'text-yellow-600' :
                          item.status === 'balanced' ? 'text-green-600' : 'text-gray-600';

      return `
        <tr class="border-t" data-id="${item.id}">
          <td class="py-2">${item.pizza_id}</td>
          <td class="py-2">${item.predicted}</td>
          <td class="py-2">${item.actual}</td>
          <td class="py-2 ${statusColor}">${item.status}</td>
        </tr>
      `;
    }).join('');

    const html = `
      <h1 class="text-3xl font-semibold mb-4">Inventory</h1>
      <div class="bg-white shadow rounded-lg p-4">
        <h2 class="text-lg font-semibold mb-4">Inventory Table</h2>
        <table class="w-full text-sm text-left mb-4">
          <thead class="border-b text-gray-600">
            <tr>
              <th class="py-2">Pizza ID</th>
              <th class="py-2">Predicted</th>
              <th class="py-2">Actual</th>
              <th class="py-2">Status</th>
            </tr>
          </thead>
          <tbody id="inventory-body">
            ${rows}
          </tbody>
        </table>
        <div class="flex gap-4 mt-4">
          <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" id="add-btn">Add</button>
          <button class="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600" id="edit-btn">Edit</button>
          <button class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600" id="remove-btn">Remove</button>
        </div>
      </div>
    `;
    app.innerHTML = renderLayout(html);

    // --- Button Hooks ---
    document.getElementById('add-btn').onclick = async () => {
      const { value: formValues } = await swal({
        text: 'Enter Pizza ID, Predicted, Actual',
        content: createForm(['pizza_id', 'predicted', 'actual']),
        buttons: true,
      });

      if (formValues) {
        const [pizza_id, predicted, actual] = formValues;
        if (!pizzaWhitelist.includes(pizza_id)) {
          return swal("Invalid", `Pizza ID must be one of: ${pizzaWhitelist.join(', ')}`, "error");
        }

        await fetch('http://localhost:3000/api/inventory', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ pizza_id, predicted: +predicted, actual: +actual }),
        });
        await renderTable();
      }
    };

    document.getElementById('edit-btn').onclick = async () => {
      const id = prompt("Enter the ID of the item to edit:");
      const inventoryItem = inventory.find(i => i.id == id);
      if (!inventoryItem) return swal("Error", "Item not found", "error");

      const { value: formValues } = await swal({
        text: 'Update fields',
        content: createForm(['predicted', 'actual'], inventoryItem),
        buttons: true,
      });

      if (formValues) {
        const [predicted, actual] = formValues;
        await fetch(`http://localhost:3000/api/inventory/${id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ predicted: +predicted, actual: +actual }),
        });
        await renderTable();
      }
    };

    document.getElementById('remove-btn').onclick = async () => {
      const id = prompt("Enter the ID of the item to remove:");
      const confirm = await swal("Are you sure?", "This cannot be undone!", "warning", {
        buttons: true,
        dangerMode: true,
      });
      if (!confirm) return;

      await fetch(`http://localhost:3000/api/inventory/${id}`, {
        method: 'DELETE',
      });
      await renderTable();
    };
  }

  function createForm(fields, data = {}) {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = fields.map(field => `
      <input type="text" name="${field}" placeholder="${field}" value="${data[field] || ''}"
        class="swal-content__input mb-2">
    `).join('');
    return wrapper;
  }

  renderTable();
}
