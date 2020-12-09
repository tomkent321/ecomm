import express from 'express'
const router = express.Router()
import {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
} from '../controllers/userController.js'
import { protect, adminAuth } from '../middleware/authMiddleware.js'
//shown as the first argument in the get call

router.route('/').post(registerUser).get(protect, adminAuth, getUsers)
router.post('/login', authUser)
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile)

router
  .route('/:id')
  .delete(protect, adminAuth, deleteUser)
  .get(protect, adminAuth, getUserById)
  .put(protect, adminAuth, updateUser)

export default router
