import express from 'express';
import product_controller from '../controllers/product.controller';

const router = express.Router();

router.get('/test', product_controller.test);

export default router;