import express from "express";

const router = express.Router();

router.get('/packages') // add new package
router.put('/packages/:id') // update package
router.delete('/packages/:id') // delete package

export default router