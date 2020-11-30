
import express from 'express';
import userController from '../controllers/userController'
var router = express.Router();

router.get("/", userController.allUsers)


export default router;