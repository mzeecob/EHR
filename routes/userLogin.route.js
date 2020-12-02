
import express from 'express';
import userLogin from '../controllers/userController'
var router = express.Router();

router.get("/", function (req, res, next) {
    res.render("./login")
})

router.post("/", async function (req, res, net) {
    const patient = await userLogin.login(req.body, res)
    if (patient) {
        res.redirect("/patients")
    }
})


export default router;