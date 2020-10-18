import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'

import connectDB from './config/db.js'

import productRoutes from './routes/productRoutes.js'

dotenv.config()
//Then use .env files to store sensitive data

connectDB()

const app = express()

app.get('/', (req, res) => {
  res.send('API is running')
})

//this 'mounts' this route into app to the correct router

app.use('/api/products', productRoutes)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
)
