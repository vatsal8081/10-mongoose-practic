import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const UserRole =  {
    ADMIN: 'admin',
    SUBSCRIBER: 'subscriber'
}

const UserSchima = new Schema({
    name: {type: String},
    age: {type: Number},
    email: {type: String, require: true, unique: true},
    role: {type: String, enum: UserRole}
}, { timestamps: true, toJSON: {virtuals: true}, toObject: {virtuals: true} });


UserSchima.virtual('drivingLicence', {
    ref: 'DrivingLicence',
    localField: '_id',
    foreignField: 'user'
})

UserSchima.virtual('cars', {
    ref: 'Car',
    localField: "_id",
    foreignField: 'user'
})

const User = model('User', UserSchima)


export { User }
