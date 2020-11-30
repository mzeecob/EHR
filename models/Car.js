import mongoose from 'mongoose';



var CarSchema = new mongoose.Schema({
    plateNumber: {type: String, required: true, unique: true},
    seats: {type: String, required: true},
    owner: {type: mongoose.Schema.Types.ObjectId,
        ref: "user"},
        type: {type: String, required: true},
    yellowCardNumber: {type: String, required: true},
}, {timestamps: true});


export default mongoose.model('Car', CarSchema);