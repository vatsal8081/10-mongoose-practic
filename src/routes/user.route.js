import express from 'express'
import { createUser, deleteUser, getUsers, getUsersWithCarsAndDrivingLicence, updateUser } from '../controllers/user.controller'

const router = express.Router()

router.post('/', createUser)
router.patch('/:id', updateUser)
router.get('/', getUsers)
router.get('/cars/driving-licence', getUsersWithCarsAndDrivingLicence)
router.delete('/:id', deleteUser)

export { router as userRouter }