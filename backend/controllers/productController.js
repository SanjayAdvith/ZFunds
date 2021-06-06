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


export const deleteProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)

    if (product) {
        await product.remove()
        res.json({ message: 'Product removed' })
    } else {
        res.status(404)
        throw new Error('Product not found')
    }
})

export const createProduct = asyncHandler(async (req, res) => {
    const product = new Product({
        name: 'Sample name',
        price: 0,
        user: req.user._id,
        images: '/images/sample.jpg',
        brand: 'Sample brand',
        category: 'Sample category',
        is_in_stock: 0,
        title: 'Sample description',
    })

    const createdProduct = await product.save()
    res.status(201).json(createdProduct)
})




export const updateProduct = asyncHandler(async (req, res) => {
    const {
        name,
        price,
        images,
        brand,
        title,
        category,
        is_in_stock,
    } = req.body

    const product = await Product.findById(req.params.id)

    if (product) {
        product.name = name
        product.price = price
        product.images = images
        product.brand = brand
        product.title = title
        product.category = category
        product.is_in_stock = is_in_stock

        const updatedProduct = await product.save()
        res.json(updatedProduct)
    } else {
        res.status(404)
        throw new Error('Product not found')
    }
})
