import express from 'express';
import { createSale, getSales, updateSale, deleteSale } from '../controllers/monthlySaleController.js';

const router = express.Router();

router.post('/sales', createSale);
router.get('/sales', getSales);
router.put('/sales/:id', updateSale);
router.delete('/sales/:id', deleteSale);

export default router;
