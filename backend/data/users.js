import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Sanjay Advith',
    email: 'sanjay@gmail.com',
    password: bcrypt.hashSync('1234', 10),
  },
  {
    name: 'Z Funds',
    email: 'zfunds@gmail.com',
    password: bcrypt.hashSync('123', 10),
  },
]

export default users
