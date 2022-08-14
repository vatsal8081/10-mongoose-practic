import express from 'express';
import { getcarByIdWithUser, createCar, getCarsWithUsers } from '../controllers/car.controller';

const router = express.Router()


router.post('/', createCar)
router.get('/user', getCarsWithUsers)
router.get('/:id/user', getcarByIdWithUser)

export { router as carRouter }