import { Request } from "express";
import { AlternativeValidationError } from "express-validator";
import { Types } from "mongoose";

export interface IQuestion {
    id: string
    question: string
    options: Array<String>
    answerIndex: number
}

export interface ITest {
    id: string
    name: string
    strength: number
    startTime: Date
    endTime: Date
    questions: Array<Types.ObjectId>
}

export interface IUser {
    id?: string
    username?: string
    test?: Types.ObjectId
    name?: string
    phone?: string
    email?: string
    password?: string
    role?: 0 | 1
}

export interface TokenPayload {
    id: string
    username: string
    name: string
    role: 0 | 1
}

export interface IGetUserAuthInfoRequest extends Request {
    user: TokenPayload
}

export interface ExpressValidatorResult extends AlternativeValidationError{
    path: string,
}