import express from 'express'
import { createDrivingLicence } from '../controllers/drivingLicence.controller'

const router = express.Router()

router.post('/', createDrivingLicence)

export { router as drivingLicenceRouter }
