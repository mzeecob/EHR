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
        try{
            const Patients = await Patient.find({});
            if(!Patients){ 
                return response.send400(res, "NO Patients found");
            }
            return response.send200(res, "Patients found", Patients);

        } catch(err){
            response.send500(res, "Internal Server Error, Try Again Later");
            throw err;
        }
    }


    /**
   * get one Patients
   * @param {Object[]} req - Request
   * @param {Object[]} res - Response
   * @returns {Object[]} Response Object with its status
   */
    static async onePatient(req, res){
        const name = req.params.name;
        try{
            const Patient = await Patient.findOne({name: name});
            if (!Patient){
                return response.send400(res, "NO Patients found");
            }
            return response.send200(res, "Patient found", Patient);
            
        }catch(err){
            response.send500(res, "Internal Server Error, Try Again Later");
            throw err;
        }
    }


    /**
   * get all patient
   * @param {Object[]} req - Request
   * @param {Object[]} res - Response
   * @returns {Object[]} Response Object with its status
   */
static async allPatients(req, res){
    try{
        const patients = await Patient.find({});
        if(!patients){ 
            return response.send400(res, "NO patients found");
        }
        return patients;

    } catch(err){
        response.send500(res, "Internal Server Error, Try Again Later");
        throw err;
    }
}

}

export default PatientController