import express from 'express';
import bodyParser from 'body-parser';
import connect from "./config/db";
import api from './routes/api'
import dotenv from "dotenv";
dotenv.config();
const app = express();



/**
    * Middleware
    */

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// catch 400
app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(400).send(`Error: ${res.originUrl} not found`);
    next();
});

// catch 500
app.use((err, req, res, next) => {
    console.log(err.stack)
    res.status(500).send(`Error: ${err}`);
    next();
});


// Routes
app.use(api);


// connect to database and create dum data
const runServer = async () => {
    try {
      await connect();
    } catch (error) {
      throw error;
    }
};

  runServer();

export default app;