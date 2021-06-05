import express from 'express'
import asyncHandler from 'express-async-handler'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoute.js'


dotenv.config()
const app = express()
connectDB()


app.get('/', (req, res) => {
    res.send('server is running')
})

app.use('/api/products', productRoutes)


const PORT = process.env.PORT || 5000

app.listen(PORT, console.log('API is running'))