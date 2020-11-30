import Car from "../models/Car";
import response from "../util/response";
import validate from "../util/validators/validator";
import auth from "../util/auth";



class CarController{

    /**
   * get all cars
   * @param {Object[]} req - Request
   * @param {Object[]} res - Response
   * @returns {Object[]} Response Object with its status
   */
    static async allCars(req, res){
        try{
            const cars = await Car.find({});
            if(!cars){ 
                return response.send400(res, "NO cars found");
            }
            return response.send200(res, "Cars found", cars);

        } catch(err){
            response.send500(res, "Internal Server Error, Try Again Later");
            throw err;
        }
    }

  /**
   * get one car
   * @param {Object[]} req - Request
   * @param {Object[]} res - Response
   * @returns {Object[]} Response Object with its status
   */
    static async oneCar(req, res){
        const plate = req.params.plate;
        try{
            const car = await Car.findOne({plateNumber: plate});
            if (!car){
                return response.send400(res, "NO cars found");
            }
            return response.send200(res, "Car found", car);
            
        }catch(err){
            response.send500(res, "Internal Server Error, Try Again Later");
            throw err;
        }
    }

    /**
   * add a car
   * @param {Object[]} req - Request
   * @param {Object[]} res - Response
   * @returns {Object[]} Response Object with its status
   */
  static async addCar(req, res){
    const {error, value} = validate.validateCar(req.body);
    if (error) {
        return response.send400(res, error.details[0].message);
      }

    try{
        const car = await Car(auth.getAuthCar(value));
        car.save();
        
        
    }catch(err){
        response.send500(res, "Internal Server Error, Try Again Later");
        throw err;
    }
}


}

export default CarController