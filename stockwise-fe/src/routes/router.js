import { renderLoginPage } from '../pages/login.js';
import { renderRegisterPage } from '../pages/register.js';
import { renderDashboardPage } from '../pages/dashboard.js';
import { renderInventoryPage } from '../pages/inventory.js';
import { renderAboutPage } from '../pages/about.js';
import { renderDistributionPage } from '../pages/distribution.js';
import { renderTransactionPage } from '../pages/transaction.js';
import { renderStockPredictionPage } from '../pages/stock-prediction.js';

export function handleRouting() {
  const hash = window.location.hash;

  switch (hash) {
    case '#/login':
      renderLoginPage();
      break;
    case '#/register':
      renderRegisterPage();
      break;
    case '#/dashboard':
      renderDashboardPage();
      break;
    case '#/inventory':
      renderInventoryPage();
      break;
    case '#/transaction':
      renderTransactionPage();
      break;
    case '#/stock-prediction':
      renderStockPredictionPage();
      break;
    case '#/about':
      renderAboutPage();
      break;
      case '#/distribution': // ADD THIS
      renderDistributionPage();
      break;
    default:
      renderLoginPage(); // Default route (could be a 404 or login)
      break;
  }
}
