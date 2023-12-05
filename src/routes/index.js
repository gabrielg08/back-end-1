import express from "express";

import { router as userRoute } from '../modules/users/user.route.js'
import { router as repairRoute } from '../modules/repairs/repairs.route.js'

export const router = express.Router();


router.use('/repairs', repairRoute)
router.use('/user', userRoute)
