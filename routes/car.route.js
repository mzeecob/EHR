import express from 'express';
import CarController from '../controllers/carController'
var router = express.Router();


router.get("/", CarController.allCars)
router.get("/:plate", CarController.oneCar)
router.post("/add", CarController.addCar)

export default router;

