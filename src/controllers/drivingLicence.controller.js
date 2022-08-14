import { DrivingLicence } from "../models"


const createDrivingLicence = async (req, res) => {

    try {
        const newDrivingLicence = await DrivingLicence.create(req.body)
        res.status(201).json(newDrivingLicence)
    } catch (error) {
        res.status(400).json(error)
    }

}


export {
    createDrivingLicence
}