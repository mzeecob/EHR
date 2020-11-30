
import express from 'express';
import userRegister from '../controllers/userController'
var router = express.Router();

router.post("/", userRegister.signup)

export default router;