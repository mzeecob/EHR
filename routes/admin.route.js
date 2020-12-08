import express from 'express';
import patientController from '../controllers/patientController'
import userController from '../controllers/userController'

var router = express.Router();

router.get("/", async function (req, res, next) {
    const patients = await patientController.allPatients()
    const users = await userController.allUsers()
    res.render("./admin", {'patients': patients, 'users': users})
})

export default router;