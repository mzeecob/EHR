import Patient from "../models/Patient";
import response from "../util/response";


class PatientController{
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
   * update patient
   * @param {Object[]} {id} - Request
   * @returns {Object[]} Response Object
   */

    static async updatePatient(id, record){


        Patient.findOne({ _id: id }, function (err, doc){
            doc.record = record;
            doc.save();
          });
    }
}

export default PatientController