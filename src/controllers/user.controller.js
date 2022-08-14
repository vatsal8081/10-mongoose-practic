import { Car, DrivingLicence, User } from "../models"



const createUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body)
        res.status(201).josn(newUser)
    } catch (error) {
        res.status(400).josn({error})
    }
}

const updateUser = async (req, res) => {
    try {
        // const updatedUser = await User.updateOne({_id: req.params.id}, req.body)
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.bodsy, {new: true})
        res.status(200).josn(updatedUser)
    } catch (error) {
        res.status(400).josn({error})
    }
}


const getUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(400).json({error})
    }
}

const getUsersWithCarsAndDrivingLicence = async (req, res) => {
    try {
        const users = await User.find().populate({path: 'cars'}).populate({path: 'drivingLicence'})
        res.status(200).json(users)
    } catch (error) {
    res.status(400).json({error})       
    }
}

const deleteUser = async (req, res) => {
    try {
        await DrivingLicence.deleteMany({user: req.params.id})
        await Car.deleteMany({user: req.params.id})
        await User.deleteOne({_id: req.params.id})
        res.status(200).json({})       
    } catch (error) {
    res.status(400).json({error})       
    }
}


export {
    createUser,
    updateUser,
    getUsers,
    getUsersWithCarsAndDrivingLicence,
    deleteUser
}