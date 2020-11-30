import express from 'express';
import insuranceController from '../controllers/insuranceController'
var router = express.Router();

router.get("/", insuranceController.allInsurances)
router.get("/:name", insuranceController.oneInsurance)

export default router;

