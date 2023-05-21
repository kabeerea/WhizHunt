import express from 'express'
import { login, register, verify } from '../controllers/auth.controller'
const router = express.Router();

router.post('/login', login);
router.post('/register', register);
router.post('/verify', verify);

export default router