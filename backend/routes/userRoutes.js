import express from 'express'
const router = express.Router()
import { authUser, getUserProfile } from '../controllers/userController.js'
import {protect} from '../middleware/authMiddleware.js'
//shown as the first argument in the get call

router.post('/login', authUser)
router.route('/profile').get(protect, getUserProfile)

export default router
