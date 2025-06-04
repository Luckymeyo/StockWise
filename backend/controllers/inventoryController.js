import {
  getAllInventory,
  createInventoryItem,
  updateInventoryItemByName,
  deleteInventoryItem,
  deleteInventoryItemByName
} from '../models/inventoryModel.js';

const allowedPizzas = [
  "Hawaiian Pizza",
  "Barbecue Chicken Pizza",
  "Pepperoni Pizza",
  "Vegetarian Pizza",
  "Margherita Pizza",
  "Meat Lovers Pizza",
  "Supreme Pizza",
  "Buffalo Chicken Pizza",
  "Cheese Pizza",
  "Mexican Greenwave Pizza"
];

// GET all
export const getInventory = async (req, res) => {
  const data = await getAllInventory();
  res.json(data);
};

// POST new
export const createInventory = async (req, res) => {
  const { name, predicted, actual } = req.body;

  if (!name || predicted == null || actual == null) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  if (!allowedPizzas.includes(name)) {
    return res.status(400).json({ error: 'Pizza name not allowed' });
  }

  const newItem = await createInventoryItem({ name, predicted, actual });
  res.status(201).json(newItem);
};

// PATCH by Name
export const updateInventoryByName = async (req, res) => {
  const { name } = req.params;
  const { predicted, actual } = req.body;

  if (predicted == null || actual == null) {
    return res.status(400).json({ error: 'Both predicted and actual are required' });
  }

  const updated = await updateInventoryItemByName(name, { predicted, actual });
  if (!updated) {
    return res.status(404).json({ error: 'Item not found' });
  }

  res.json(updated);
};

// DELETE by ID
export const deleteInventoryById = async (req, res) => {
  const { id } = req.params;
  await deleteInventoryItem(id);
  res.status(204).send();
};

// DELETE by Name
export const deleteInventoryByName = async (req, res) => {
  const { name } = req.params;
  const deleted = await deleteInventoryItemByName(name);
  if (!deleted) {
    return res.status(404).json({ error: 'Item not found' });
  }
  res.status(204).send();
};
