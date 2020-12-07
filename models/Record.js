import mongoose from 'mongoose';



var RecordSchema = new mongoose.Schema({
    patient: {type: mongoose.Schema.Types.ObjectId,
        ref: "Patient"},
    hospital: {type: String, required: true},
    doctorName: {type: String, required: true},
    details: {type: String, required: true},
    
}, {timestamps: true});


export default mongoose.model('Record', RecordSchema);