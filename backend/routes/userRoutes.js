import express from 'express'
const router = express.Router()
import {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
} from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'
//shown as the first argument in the get call

router.route('/').post(registerUser)

router.post('/login', authUser)
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile)

export default router
