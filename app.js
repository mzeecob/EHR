import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import connect from "./config/db"
import api from './routes/api'
import dotenv from "dotenv"
dotenv.config();
const app = express();



/**
    * Middleware
    */

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true}));


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