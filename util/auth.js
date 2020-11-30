import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import response from "../util/response";
import User from "../models/User";
import dotenv from "dotenv";
dotenv.config();



class Auth {
  static generateToken(user) {
    return jwt.sign(user, process.env.SECRET, {expiresIn: "5h"});
  }

  static isValidPassword(password, hashedPassword) {
    return bcrypt.compareSync(password, hashedPassword);
  }

  static hashPassword(password) {
    return bcrypt.hashSync(password, 10);
  }

  static async getAuthUser(value) {
    const user = await User.findOne({ _id: value.owner });


    if (!user) {
      response.send401(res, "User not authorized");
      return false;
    }

    return user;
  }
}

export default Auth;
