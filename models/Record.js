import mongoose from 'mongoose';



var RecordSchema = new mongoose.Schema({
    patient: {type: mongoose.Schema.Types.ObjectId,
        ref: "Patient"},
    doctor: {type: String, required: true},
    hospital: {type: String, required: true},
    details: {type: String, required: true},
    
}, {timestamps: true});


export default mongoose.model('Record', RecordSchema);