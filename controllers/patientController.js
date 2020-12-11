import Patient from "../models/Patient";
import Record from "../models/Record";
import response from "../util/response";
import validate from "../util/validators/validator";



class PatientController{

/**
   * Receives values from request & validates if
   * a patient can be created, if user data is inconsistent
   * user will receive a response specifying account creation error
   * @param {Object[]} req - Request
   * @param {Object[]} res - Response
   * @returns {Object[]} Response Object with its status
   */
  static async newPatient(req, res) {
    const { error, value } = validate.validatePatient(req.body);

    if (error) {
      return response.send400(res, error.details[0].message);
    }

    if (await Patient.findOne({ email: value.email })) {
      return response.send409(res, "Patient Already Exists");
    }

    try {

      const patient = new Patient(value);
      await patient.save();

      return patient

    } catch (err) {
      throw err;
    }
  }

    /**
   * get all Patients
   * @param {Object[]} req - Request
   * @param {Object[]} res - Response
   * @returns {Object[]} Response Object with its status
   */
    static async allPatients(req, res){
        const patients = await Patient.find({});
        if(!patients){ 
            return response.send400(res, "NO patients found");
        }
        return patients;
    }

    


    /**
   * get one Patients
   * @param {Object[]} id - Request
   * @returns {Object[]} Response Object with its 
   */
    static async onePatient(id){
        const patient = await Patient.findOne({_id: id});

        if (!patient){
            return "NO Patients found";
        }
        return patient;
    }


    /**
   * create a Record
   * @param {Object[]} {id} - Request
   * @returns {Object[]} Response Object
   */
    static async createRecord(record){
        const newRecord = new Record(record);
        await newRecord.save(function (err) {
            if (err) console.log(err); 

        })
        return newRecord
    }

    /**
   * get all Records
   * @param {Object[]} {id} - Request
   * @returns {Object[]} Response Object
   */
    static async getAllRecords(id){
        const records = await Record.find({patient: id})
        if (!records){
            return "No Recods Found"
        }
        return records
    }

     /**
   * get one Record
   * @param {Object[]} {id} - Request
   * @returns {Object[]} Response Object
   */
  static async getOneRecord(id){
    const record = await Record.findOne({_id: id})
    if (!record){
        return "No Recod Found"
    }
    return record
}

}

export default PatientController