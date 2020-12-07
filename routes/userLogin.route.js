
import express from 'express';
import userLogin from '../controllers/userController'
var router = express.Router();

router.get("/", function (req, res, next) {
    res.render("./login")
})

router.post("/", async function (req, res, next) {
    const {user} = await userLogin.login(req.body, res)
    console.log("fsss" + user);

    if (user.role === "doctor") {
        res.render("./patients")
    }else{
        res.redirect("/reception")
    }
})


export default router;