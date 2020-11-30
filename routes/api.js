import Router from 'express';
import carRoute from './car.route'
import insuranceRoute from './insurance.route'
import userRoute from './user.route'
import userLoginRoute from './userLogin.route'
import userRegisterRoute from './userRegister.route'

const router = Router();


// car route
router.use('/cars', carRoute);
router.use('/insurances', insuranceRoute);
router.use('/users', userRoute);
router.use('/login', userLoginRoute);
router.use('/register', userRegisterRoute);

export default router;

