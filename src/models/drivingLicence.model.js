import mongoose from 'mongoose';


const {Schema, model } = mongoose


const DrivingLicenceSchima = new Schema({
    licenceNumber: {type: String, require: true},
    expiryDate: {type: Date, reuire: true},
    user: {type: Schema.Types.ObjectId, ref: 'User'}
}, {timestamps: true})


const DrivingLicence = model('DrivingLicence', DrivingLicenceSchima)

export {DrivingLicence}