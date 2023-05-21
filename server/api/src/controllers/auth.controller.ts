import { Request, Response } from "express";
import bcrypt from 'bcryptjs';
import { authenticateUser, createUser } from "../services/auth.service";
import { formatSuccessResponse, formatErrorResponse } from "../helper/utility";
import { errors } from "../helper/constants";

export async function login(req: Request, res: Response) {
    try {
        const { username, password } = req.body
        const token = await authenticateUser(username, password)
        if (token) {
            return res.status(200).send(formatSuccessResponse({ token }))
        }
        return res.status(400).send(formatErrorResponse(errors.invalidCredentials))
    } catch (error) {
        return res.status(200).send(formatErrorResponse(errors.serverError))
    }

}

export async function register(req: Request, res: Response) {
    try {
        await createUser(req.body)
        return res.status(200).send(formatSuccessResponse({}))
    } catch (error) {
        return res.status(500).send(formatErrorResponse(errors.serverError))
    }
}