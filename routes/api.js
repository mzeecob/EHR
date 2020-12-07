import Router from 'express';
import patientRoute from './patient.route'
import userRoute from './user.route'
import userLoginRoute from './userLogin.route'
import receptionRoute from './reception.route'

const router = Router();

router.get('/', function(req,res){
    res.redirect('/login');
});

router.use('/login', userLoginRoute);
router.use('/patients', patientRoute);
router.use('/users', userRoute);
router.use('/reception', receptionRoute);

export default router;

