// controllers/predictionControllers.js
import fs from 'fs';
import path from 'path';
import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const require = createRequire(import.meta.url);
const csv = require('csv-parser');

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const forecast = {
  hawaiian_m: 10,
  classic_dlx_m: 15,
  five_cheese_l: 12,
  ital_supr_l: 14,
  mexicana_m: 18,
};

const comparePredictionWithStock = async (req, res) => {
  try {
    const qtyDataPath = path.join(__dirname, '../data/qty_data.csv');
    const results = [];

    const readCSV = () =>
      new Promise((resolve, reject) => {
        fs.createReadStream(qtyDataPath)
          .pipe(csv())
          .on('data', (data) => results.push(data))
          .on('end', () => resolve(results))
          .on('error', reject);
      });

    const actualStock = await readCSV();

    const stockMap = {};
    actualStock.forEach(({ pizza_id, qty }) => {
      stockMap[pizza_id] = parseInt(qty);
    });

    const result = Object.entries(forecast).map(([pizza_id, predicted]) => {
      const actual = stockMap[pizza_id] || 0;
      let status = 'balanced';

      if (predicted > actual) status = 'understock';
      else if (predicted < actual) status = 'overstock';

      return { pizza_id, predicted, actual, status };
    });

    res.json(result);
  } catch (error) {
    console.error('Prediction comparison error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export { comparePredictionWithStock };
