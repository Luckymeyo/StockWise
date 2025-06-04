import db from '../db.js';
import { nanoid } from 'nanoid';

async function load() {
  await db.read();
  db.data ||= { users: [], inventory: [] };
}

export async function getAllInventory() {
  await load();
  return db.data.inventory || [];
}

export async function createInventoryItem({ name, predicted, actual }) {
  await load();

  const diff = Math.abs(predicted - actual);
  const status = diff <= 5 ? 'balanced' : actual < predicted ? 'understock' : 'overstock';

  const newItem = {
    id: nanoid(10),
    name,
    predicted,
    actual,
    status
  };

  db.data.inventory.push(newItem);
  await db.write();
  return newItem;
}

export async function updateInventoryItemByName(name, { predicted, actual }) {
  await load();
  const item = db.data.inventory.find(i => i.name === name);
  if (!item) return null;

  item.predicted = predicted;
  item.actual = actual;
  const diff = Math.abs(predicted - actual);
  item.status = diff <= 5 ? 'balanced' : actual < predicted ? 'understock' : 'overstock';

  await db.write();
  return item;
}

export async function deleteInventoryItem(id) {
  await load();
  db.data.inventory = db.data.inventory.filter(i => i.id !== id);
  await db.write();
}

export async function deleteInventoryItemByName(name) {
  await load();
  const originalLength = db.data.inventory.length;
  db.data.inventory = db.data.inventory.filter(i => i.name !== name);
  const changed = db.data.inventory.length !== originalLength;
  await db.write();
  return changed;
}
