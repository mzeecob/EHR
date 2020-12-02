import express from 'express';
import patientController from '../controllers/patientController'
var router = express.Router();

router.get("/", async function(req, res, next) {
    const patients = await patientController.allPatients()
    if (patients) {
        console.log(patients);
        res.render("./patients", {'patients': patients})
    }

})


router.get("/:slug", patientController.onePatient)



export default router;

