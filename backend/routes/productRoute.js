import express from 'express'
import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

const router = express.Router()


router.get('/', asyncHandler(async (req, res) => {
    const products = await Product.find({})  // empty object gives all data
    res.json(products)
}))



router.get('/:id', asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (product) {
        res.json(product)
    } else {
        res.send('Error')
    }
}))

export default router