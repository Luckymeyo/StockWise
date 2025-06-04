// db.js
import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'

// Define default data structure
const defaultData = {
  users: [],
  inventory: []
}

// Setup adapter + db
const adapter = new JSONFile('db.json')
const db = new Low(adapter, defaultData)  // ✅ This is the correct way for lowdb v3+

await db.read()
await db.write()

export default db
