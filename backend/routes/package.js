import express from "express";

const router = express.Router();

router.get('/packages') // all packages
router.get('/packages/:id') // perticular package detail
router.post('/bookings') // add post details

export default router;