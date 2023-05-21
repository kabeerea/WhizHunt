import express from 'express'
import { login, register, verify } from '../controllers/auth.controller'
import {
    userAuthenticationValidationRules,
    userRegistrationValidationRules,
    verifyUsernameValidationRules,
    validate
} from '../middlewares/validation.middleware';

const router = express.Router();

router.post('/login', userAuthenticationValidationRules(), validate, login);
router.post('/register', userRegistrationValidationRules(), validate, register);
router.post('/verify', verifyUsernameValidationRules(), validate,verify);

export default router