import express from 'express';
import patientController from '../controllers/patientController'


var router = express.Router();

router.get("/", async function (req, res, next) {

    const patients = await patientController.onePatient(req.params.id)

    res.render("./admin", {'patients': patients})
})

export default router;
