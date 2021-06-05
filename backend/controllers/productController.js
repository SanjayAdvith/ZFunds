import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

export const getProduct = asyncHandler(async (req, res) => {
    const products = await Product.find({})  // empty object gives all data
    res.json(products)
})

export const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (product) {
        res.json(product)
    } else {
        res.send('Error')
    }
})