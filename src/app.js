import express from 'express'
import { carRouter, drivingLicenceRouter, userRouter } from './routes'
const app = express()

app.use(express.json())

app.use('/api/v1/users', userRouter)
app.use('/api/v1/driving-licence', drivingLicenceRouter)
app.use('/api/v1/cars', carRouter)

export { app }