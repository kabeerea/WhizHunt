import express from 'express'
import { getAll, get, create, update, deleteById } from '../controllers/test.controller';

const router = express.Router(); 
router.get('/', getAll);
router.get('/:id', get);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', deleteById);

export default router