
import express from 'express';
import insuranceController from '../controllers/userController'
var router = express.Router();

router.post("/", insuranceController.login)
// router.get("/:name", insuranceController.oneInsurance)

export default router;