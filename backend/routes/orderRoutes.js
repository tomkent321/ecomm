import express from 'express'
const router = express.Router()
import {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  getMyOrders,
  getOrders,
} from '../controllers/orderController.js'
import { protect, adminAuth } from '../middleware/authMiddleware.js'
//shown as the first argument in the get call

router
  .route('/')
  .post(protect, addOrderItems)
  .get(protect, adminAuth, getOrders)
router.route('/myorders').get(protect, getMyOrders)
router.route('/:id').get(protect, getOrderById)
router.route('/:id/pay').put(protect, updateOrderToPaid)

export default router
