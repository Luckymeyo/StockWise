import db from '../db.js'

export const getUserByEmail = (email) => {
  return db.data.users.find(user => user.email === email)
}

export const createUser = (user) => {
  db.data.users.push(user)
  return db.write()
}

export function getAllUsers() {
  return db.get('users').value();
}
