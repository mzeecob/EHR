import mongoose from 'mongoose';



var UserSchema = new mongoose.Schema({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    email: {type: String, lowercase: true, required: true, unique: true},
    phone: {type: String, required: true},
    password: {type: String, required: true},
    role: {type: String, required: true, default: 'receptionist',
    enum: ["receptionist", "doctor", "admin"]},
    
}, {timestamps: true});


export default mongoose.model('User', UserSchema);