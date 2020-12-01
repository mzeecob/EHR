import Router from 'express';
import patientRoute from './patient.route'
import userRoute from './user.route'
import userLoginRoute from './userLogin.route'
import userRegisterRoute from './userRegister.route'

const router = Router();

router.get('/', function(req,res){
    res.redirect('/login');
});

router.use('/login', userLoginRoute);
router.use('/patients', patientRoute);
router.use('/users', userRoute);
router.use('/register', userRegisterRoute);

export default router;

