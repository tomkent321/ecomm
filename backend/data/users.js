import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Kent Howard',
    email: 'kent@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Kirstie Brown',
    email: 'kirstie@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
