import { Request, Response, NextFunction } from 'express'
import { body, validationResult } from 'express-validator'
import { ExpressValidatorResult } from '../global/types'
import { httpStatusCodes, messages } from '../helpers/constants'
import { getUserById } from '../services/user.service'

export function userAuthenticationValidationRules() {
    return [
        body('username').exists().withMessage(messages.usernameRequired),
        body('password').exists().withMessage(messages.passwordRequired),
    ]
}

export function userRegistrationValidationRules() {
    return [
        body('id').exists().withMessage(messages.userIdRequired).bail()
            .isMongoId().withMessage(messages.invalidUserId).bail()
            .custom(async (id) => {
                const user = await getUserById(id)
                return user !== null
            }).withMessage(messages.invalidUserId),
        body('name').exists().withMessage(messages.nameRequired),
        body('email').exists().withMessage(messages.emailRequired).bail()
            .isEmail().withMessage(messages.invalidEmailId),
        body('phone').exists().withMessage(messages.phoneRequired).bail()
            .isMobilePhone('en-IN').withMessage(messages.invalidPhone),
        body('password').exists().withMessage(messages.passwordRequired).bail()
            .trim().isLength({ min: 8 }).withMessage(messages.invalidPassword)
    ]
}

export function verifyUsernameValidationRules() {
    return [
        body('username').exists().withMessage(messages.usernameRequired)
    ]
}

export const validate = (req: Request, res: Response, next: NextFunction) => {
    const result = validationResult(req)
    if (result.isEmpty()) {
        return next()
    }
    const errors: Record<string, string> = {}
    result.array().forEach((error: ExpressValidatorResult) => {
        errors[error.path] = error.msg
    })
    return res.status(httpStatusCodes.badRequest).send({ errors })
}