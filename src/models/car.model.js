import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const CarSchima = new Schema({
    model: {type: String},
    color: {type: String, default: 'black'},
    user: {type: Schema.Types.ObjectId, ref: 'User'}
}, {timestamps: true})


const Car = model('Car', CarSchima)

export {Car}