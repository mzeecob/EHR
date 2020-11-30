
import express from 'express';
import userController from '../controllers/userController'
var router = express.Router();

router.get("/", userController.allUsers)
// router.get("/:name", insuranceController.oneInsurance)

export default router;