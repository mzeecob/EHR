import Insurance from "../models/Insurance";
import response from "../util/response";


class insuranceController{
    /**
   * get all insurances
   * @param {Object[]} req - Request
   * @param {Object[]} res - Response
   * @returns {Object[]} Response Object with its status
   */
    static async allInsurances(req, res){
        try{
            const insurances = await Insurance.find({});
            if(!insurances){ 
                return response.send400(res, "NO insurances found");
            }
            return response.send200(res, "insurances found", insurances);

        } catch(err){
            response.send500(res, "Internal Server Error, Try Again Later");
            throw err;
        }
    }


    /**
   * get one insurances
   * @param {Object[]} req - Request
   * @param {Object[]} res - Response
   * @returns {Object[]} Response Object with its status
   */
    static async oneInsurance(req, res){
        const name = req.params.name;
        try{
            const insurance = await Insurance.findOne({name: name});
            if (!insurance){
                return response.send400(res, "NO insurances found");
            }
            return response.send200(res, "insurance found", insurance);
            
        }catch(err){
            response.send500(res, "Internal Server Error, Try Again Later");
            throw err;
        }
    }

}

export default insuranceController