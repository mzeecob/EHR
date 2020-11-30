import mongoose from 'mongoose';



var UserSchema = new mongoose.Schema({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    email: {type: String, lowercase: true, required: true, unique: true},
    phone: {type: String, required: true},
    password: {type: String, required: true},
    
}, {timestamps: true});


export default mongoose.model('User', UserSchema);