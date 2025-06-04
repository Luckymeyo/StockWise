import { getUserByEmail, createUser } from '../models/userModels.js'

export const register = async (req, res) => {
  const { firstName, lastName, email, phone, password } = req.body

  if (getUserByEmail(email)) {
    return res.status(400).json({ message: 'Email already exists.' })
  }

  const newUser = { id: Date.now(), firstName, lastName, email, phone, password }
  await createUser(newUser)

  res.status(201).json({ message: 'User registered successfully.' })
}

export const login = (req, res) => {
  const { email, password } = req.body
  const user = getUserByEmail(email)

  if (!user || user.password !== password) {
    return res.status(401).json({ message: 'Invalid credentials.' })
  }

  res.status(200).json({ message: 'Login successful', user })
}
