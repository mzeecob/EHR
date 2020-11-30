import express from 'express';
import patientController from '../controllers/patientController'
var router = express.Router();

router.get("/", patientController.allPatients)
router.get("/:name", patientController.onePatient)

export default router;

