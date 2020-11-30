import mongoose from 'mongoose';



var InsuranceSchema = new mongoose.Schema({
    name: {type: String, required: true},
    descrption: {type: String, required: true},
}, {timestamps: true});


export default mongoose.model('Insurance', InsuranceSchema);