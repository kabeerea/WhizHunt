import express from 'express'
import { authenticateJWT } from '../middlewares/auth.middleware';
import { getAll, get, update, deleteById } from '../controllers/user.controller';

const router = express.Router(); 
router.use(authenticateJWT)

router.get('/', getAll);
router.get('/:id', get);
router.put('/:id', update);
router.delete('/:id', deleteById);

export default router