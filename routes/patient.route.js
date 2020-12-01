import express from 'express';
import patientController from '../controllers/patientController'
var router = express.Router();

// router.get("/patients", function(req, res, next) {
//     const patients = patientController.allPatients()
//     if (patients) {
//         res.render("./patients", {'patients': patients})
//     }
//     res.render("./patients")
// })


// router.get("/patients/:slug", patientController.onePatient)

router.get("/patients", function (req, res, next) {
    res.render("./patients")
})

export default router;

