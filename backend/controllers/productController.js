import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({})

  res.json(products)
})

// @desc    Fetch one product
// @route   GET /api/products
// @access  Public
const getProductById = asyncHandler(async (req, res) => {
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

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)

  if (product) {
    await product.remove()
    res.json({ message: 'Painting removed' })
  } else {
    //if not set will default to status 500
    res.status(404)
    throw new Error('Painting not found')
    //uses the errorMiddleware errorHandler
  }
})

// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    user: req.user._id,
    name: 'Sample name',
    year: 2020,
    image: '/images/sample.jpg',
    height: 18,
    width: 28,
    medium: 'Acrylic on Canvas',
    price: 0,
    subject: 'Scenery',
    status: 'Available by request',
    location: 'Tom and Pam',
    framed: 'No',
    artist_comments: 'I liked the colors',
    countInStock: 0,
    numReviews: 0,
  })

  const createdProduct = await product.save()
  res.status(201).json(createdProduct)
})

// @desc    Update a product
// @route   PUT /api/products
// @access  Private/Admin
const updateProduct = asyncHandler(async (req, res) => {
  const {
    name,
    image,
    year,
    height,
    width,
    medium,
    price,
    subject,
    status,
    location,
    framed,
    artist_comments,
    countInStock,
  } = req.body

  const product = await Product.findById(req.params.id)

  if (product) {
    product.name = name
    product.image = image
    product.year = year
    product.height = height
    product.width = width
    product.medium = medium
    product.price = price
    product.subject = subject
    product.status = status
    product.framed = framed
    product.location = location
    product.artist_comments = artist_comments
    product.countInStock = countInStock

    const updatedProduct = await product.save()
    res.json(updatedProduct)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

export {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
}
