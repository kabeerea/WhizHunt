import express from 'express'
import { authenticateAdmin, authenticateJWT } from '../middlewares/auth.middleware';
import { create, get, getAll, update, deleteById } from '../controllers/question.controller'

const router = express.Router();
router.get('/', getAll);
router.get('/:id', get);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', deleteById);

export default router