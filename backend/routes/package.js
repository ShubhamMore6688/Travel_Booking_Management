import express from "express";
import { getAllPackages, getPackageById } from "../controllers/packageController.js";
import { createBooking, getBookingDetails } from "../controllers/bookingController.js";

const router = express.Router();

router.get('/packages', getAllPackages) // all packages
router.get('/packages/:id', getPackageById) // perticular package detail
router.post('/bookings', createBooking ) // add post details
router.get('/booking/:id', getBookingDetails) // perticular booking detail
export default router;