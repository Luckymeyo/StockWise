import express from 'express';
import {
  getInventory,
  createInventory,
  updateInventoryByName,
  deleteInventoryById,
  deleteInventoryByName
} from '../controllers/inventoryController.js';

const router = express.Router();

router.get('/', getInventory);
router.post('/', createInventory);
router.patch('/name/:name', updateInventoryByName);      // ← PATCH by name
router.delete('/name/:name', deleteInventoryByName);     // ← DELETE by name
router.delete('/:id', deleteInventoryById);              // ← fallback: delete by ID

export default router;
