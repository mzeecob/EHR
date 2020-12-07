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

  
}

export default Auth;
