import express from 'express';
import patientController from '../controllers/patientController'
import userController from '../controllers/userController'
import Auth from '../util/auth';
var router = express.Router();

router.get("/", async function(req, res, next) {
    const patients = await patientController.allPatients()
    const records = await patientController.getAllRecords()

    if (patients) {
        res.render("./patients", {'patients': patients, 'records': records})
    }

})

router.get("/newRecord/:slug", async (req, res, next)=>{
    const patient = await patientController.onePatient(req.params.slug)

    if (patient){
        res.render("./newRecord", {'patient': patient})
    }
})

router.post("/newRecord/:slug", async (req, res, next)=>{

    if ( await patientController.createRecord(req.body)) {
        
        res.redirect("/patients")

    }
   
})

router.get("/records/:slug/", async (req, res, next)=>{
    const patient = await patientController.onePatient(req.params.slug)
    const records = await patientController.getAllRecords(patient._id)
    console.log(records);
    if (records) {
        res.render("./records", {'records': records, 'patient': patient})
    }
})

router.get("/record/:slug", async (req, res, next)=>{
    const record = await patientController.getOneRecord(req.params.slug)
    if (record) {
        res.render("./record", {'record': record})
    }
})



export default router;

