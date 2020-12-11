import express from 'express';
import patientController from '../controllers/patientController'
import userController from '../controllers/userController'

var router = express.Router();

router.get("/", async function (req, res, next) {
    const users = await userController.allUsers()
    res.render("./admin", {'users': users})
})

router.get("/addStaff", function (req, res, next) {
    res.render("./addAdmin")
})

export default router;