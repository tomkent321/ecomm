import express from 'express'
const router = express.Router()
import {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
} from '../controllers/productController.js'
import { protect, adminAuth } from '../middleware/authMiddleware.js'

router
.route('/:id')
.get(getProductById)
.delete(protect, adminAuth, deleteProduct)
.put(protect, adminAuth, updateProduct)

router.route('/').get(getProducts).post(protect, adminAuth, createProduct)

export default router
