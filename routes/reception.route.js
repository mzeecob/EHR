
import express from 'express';
import patientController from '../controllers/patientController'


var router = express.Router();

router.get("/", async function (req, res, next) {
    const patients = await patientController.allPatients()

    if (patients) {
        res.render("./reception", {'patients': patients})
    }

})

router.get("/register", function (req, res, next) {
    
    res.render("./signup")
    
})

router.post("/register", async function (req, res, next) {
    try{
        if (await patientController.newPatient(req, res)) {
            res.redirect("/reception");
        }
    } catch (err){
        throw err
    }
    
    
})

export default router;