import express from 'express';
import { comparePredictionWithStock } from '../controllers/predictionControllers.js';

const router = express.Router();

router.get('/compare', comparePredictionWithStock);

export default router; // ✅ ES module export
