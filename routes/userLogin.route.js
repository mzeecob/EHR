
import express from 'express';
import userLogin from '../controllers/userController'
var router = express.Router();

router.get("/", function (req, res, next) {
    res.render("./login")
})

router.post("/", async function (req, res, next) {
    const {user} = await userLogin.login(req.body, res)
    console.log("fsss" + user);

    if (user.role) {
        // doctor role
        if (user.role === "doctor") {
            res.redirect("./patients")

        // receptionist role
        }else if (user.role === "receptionist"){
            res.redirect("/reception")

        // admin role
        }else{
            res.redirect("/admin")
        }
    }
    // public Role
    else{
        res.redirect("history")
    }
})


export default router;