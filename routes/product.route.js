import express from 'express';
import {test, create} from '../controllers/product.controller';

const router = express.Router();

router.get('/test', test);
router.post('/create', create);

export default router;