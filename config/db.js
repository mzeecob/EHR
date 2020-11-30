import mongoose from "mongoose";
import dotenv from "dotenv";
import dum from "../test/data/init_dam";
import Car from "../models/Car";
import User from "../models/User";
import Insurance from "../models/Insurance";


dotenv.config();


var url = process.env.DATABASE_URL;
    //  Connect to the database

    const connectDB = async () => {
      try {
        await mongoose.connect(url, {
          useNewUrlParser: true,
          useCreateIndex: true,
          useUnifiedTopology: true,
          useFindAndModify: false
        });

        dum.dataExist();
        console.log("Database is Connected")

      } catch (err) {
        throw err;
      }
    };
    
    export default connectDB;