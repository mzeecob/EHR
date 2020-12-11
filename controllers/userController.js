import validate from "../util/validators/validator";
import response from "../util/response";
import User from "../models/User";
import auth from "../util/auth";

/** Class Holding All User Authentication methods */
class AuthController {
  /**
   * Receives values from request & validates if
   * user can create account, if user data is inconsistent
   * user will receive a response specifying account creation error
   * @param {Object[]} req - Request
   * @param {Object[]} res - Response
   * @returns {Object[]} Response Object with its status
   */
  static async signup(req, res) {
    const { error, value } = validate.validateUser(req.body);

    if (error) {
      return response.send400(res, error.details[0].message);
    }

    if (await User.findOne({ email: value.email })) {
      return response.send409(res, "User Already Exists");
    }

    try {
      value.password = auth.hashPassword(value.password);
      const user = new User(value);

      await user.save();

      response.send201(res, "User Successfully Created", {
        user,
        token: auth.generateToken({ email: user.email })
      });
    } catch (err) {
      throw err;
    }
  }

  /**
   * Receives values from request & validates if
   * user exists & can login, on failure will receive
   * a response message specifying the error, on success
   * will receive a success message & JWT as reponse
   * @param {Object[]} req - Request
   * @param {Object[]} res - Response
   * @returns {Object[]} Response Object with its status
   */

   

  static async login(req, res) {


    const { email, password } = req;
    const { error } = validate.validateAccount(email, password);

    if (error) {
      return response.send400(res, error.details[0].message);
    }

    try {
      
      let user = await User.findOne({email: email });
      if (!user) {
        return response.send409(res, "User Not Found");
      }
      let isValidPwd = auth.isValidPassword(password, user.password);
      if (isValidPwd) {
        return {user: user, token: auth.generateToken({ email: user.email })}
        
      } else {
        response.send409(res, "Invalid Credentials");
      }
    } catch (err) {
      throw err;
    }
  }
  


  /**
   * get all users
   * @param {Object[]} req - Request
   * @param {Object[]} res - Response
   * @returns {Object[]} Response Object with its status
   */
static async allUsers(req, res){
    
        const users = await User.find({});
        if(!users){ 
            return response.send400(res, "NO users found");
        }
        return  users;

    
}


}

export default AuthController;
