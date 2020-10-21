import express from 'express'

import asyncHandler from 'express-async-handler'
const router = express.Router()
import Product from '../models/productModel.js'

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({})
    // throw new Error('Some error')

    res.json(products)
  })
)

// @desc    Fetch one product
// @route   GET /api/products/:id
// @access  Public

router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)

    if (product) {
      res.json(product)
    } else {
      //if not set will default to status 500
      res.status(404)
      throw new Error('Product not found')
      //uses the errorMiddleware errorHandler
    }
  })
)

export default router