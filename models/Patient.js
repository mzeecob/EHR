import mongoose from 'mongoose';



var PatientSchema = new mongoose.Schema({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    email: {type: String, lowercase: true, unique: true},
    gender: {type: String, required: true},
    phone: {type: String, required: true},
    record: {type: String},
}, {timestamps: true});


export default mongoose.model('Patient', PatientSchema);