import { Request, Response } from "express";
import { authenticateUser, registerUser, verifyUsername } from "../services/auth.service";
import { httpStatusCodes, messages } from "../helpers/constants";

export async function login(req: Request, res: Response) {
    try {
        const { username, password } = req.body
        const token = await authenticateUser(username, password)
        if (token) {
            return res.status(httpStatusCodes.success).send({ token })
        }
        return res.status(httpStatusCodes.badRequest).send(messages.invalidCredentials)
    } catch (error) {
        return res.status(httpStatusCodes.serverError).send(messages.serverError)
    }

}

export async function register(req: Request, res: Response) {
    try {
        await registerUser(req.body)
        return res.status(httpStatusCodes.success).send({})
    } catch (error) {
        return res.status(httpStatusCodes.serverError).send(messages.serverError)
    }
}

export async function verify(req: Request, res: Response) {
    try {
        const response = await verifyUsername(req.body.username)
        return res.status(httpStatusCodes.success).send(response)
    } catch (error) {
        return res.status(httpStatusCodes.serverError).send(messages.serverError)
    }
}