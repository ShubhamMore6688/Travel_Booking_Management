import express from "express";
import { getAllPackages, getPackageById } from "../controllers/packageController.js";
import { createBooking } from "../controllers/bookingController.js";

const router = express.Router();

router.get('/packages', getAllPackages) // all packages
router.get('/packages/:id', getPackageById) // perticular package detail
router.post('/bookings', createBooking ) // add post details

export default router;