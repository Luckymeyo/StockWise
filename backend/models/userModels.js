import db from '../db.js'

async function load() {
  await db.read()
  db.data ||= { users: [], inventory: [] }
}

export const getUserByEmail = async (email) => {
  await load()
  return db.data.users.find(user => user.email === email)
}

export const createUser = async (user) => {
  await load()
  db.data.users.push(user)
  return db.write()
}

export async function getAllUsers() {
  await load()
  return db.data.users || []
}
