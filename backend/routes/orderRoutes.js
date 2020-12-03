import express from 'express'
const router = express.Router()
import {
  addOrderItems
} from '../controllers/orderController.js'
import { protect } from '../middleware/authMiddleware.js'
//shown as the first argument in the get call

router.route('/').post(protect, addOrderItems)

export default router
