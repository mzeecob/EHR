
import express from 'express';
import userLogin from '../controllers/userController'
var router = express.Router();

router.post("/", userLogin.login)


export default router;