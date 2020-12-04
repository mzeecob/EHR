import express from 'express';
import patientController from '../controllers/patientController'
var router = express.Router();

router.get("/", async function(req, res, next) {
    const patients = await patientController.allPatients()
    if (patients) {
        res.render("./patients", {'patients': patients})
    }

})


router.get("/:slug", async (req, res, next)=>{
    const patient = await patientController.onePatient(req.params.slug)
    if (patient){
        res.render("./patient", {'patient': patient})
    }
})

router.post("/:slug", async (req, res, next)=>{
    console.log(req.body.id);
    console.log(req.body.record);
    await patientController.updatePatient(req.body.id, req.body.record)
    res.redirect("/patients")
})



export default router;

