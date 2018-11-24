import express from 'express';
import {test, create, find} from '../controllers/product.controller';

const router = express.Router();

router.get('/test', test);
router.post('/create', create);
router.get('/:id', find);

export default router;