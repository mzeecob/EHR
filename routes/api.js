import Router from 'express';
import patientRoute from './patient.route'
import userRoute from './user.route'
import userLoginRoute from './userLogin.route'
import receptionRoute from './reception.route'
import adminRoute from './admin.route'
import historyRoute from './history.route'

const router = Router();

router.get('/', function(req,res){
    res.redirect('/login');
});

router.use('/login', userLoginRoute);
router.use('/patients', patientRoute);
router.use('/users', userRoute);
router.use('/reception', receptionRoute);
router.use('/admin', adminRoute);
router.use('/history', historyRoute);

export default router;

