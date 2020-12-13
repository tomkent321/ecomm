import express from 'express'
const router = express.Router()
import {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
} from '../controllers/productController.js'
import { protect, adminAuth } from '../middleware/authMiddleware.js'

router
  .route('/:id')
  .get(getProductById)
  .delete(protect, adminAuth, deleteProduct)
  .put(protect, adminAuth, updateProduct)

router.route('/').get(getProducts).post(protect, adminAuth, createProduct)
router.route('/:id/reviews').post(protect, createProductReview)

export default router
