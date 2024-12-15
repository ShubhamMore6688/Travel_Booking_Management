import express from "express";
import { addPackage, deletePackage, updatePacakge } from "../controllers/adminController.js";

const router = express.Router();

router.post('/packages', addPackage) // add new package
router.put('/packages/:id', updatePacakge) // update package
router.delete('/packages/:id', deletePackage) // delete package

export default router