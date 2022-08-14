import { Car } from "../models"


const createCar = async (req, res) => {
    try {
        const newCar = await Car.create(req.body)
        res.status(201).json(newCar)
    } catch (error) {
        res.status(400).json(error)
    }
}

const getcarByIdWithUser = async (req, res) => {
    try {
        const car = await Car.findById(req.params.id).populate({path: 'user'})
        res.status(200).json(car)
    } catch (error) {
        res.status(400).json(error)
    }
}

const getCarsWithUsers = async (req, res) => {
    try {
        const car = await Car.find().populate({path: 'user'})
        res.status(200).json(car)
    } catch (error) {
        res.status(400).json(error)
    }
}

export {
    createCar,
    getcarByIdWithUser,
    getCarsWithUsers
}