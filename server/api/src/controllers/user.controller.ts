import { Request, Response } from "express";
import {
    updateUser,
    getUserById,
    getAllUsers,
    deleteUser
} from "../services/user.service";
import { messages, httpStatusCodes } from "../helpers/constants";
import logger from "../config/logger.config";

export async function update(req: Request, res: Response) {
    try {
        const userId = req.params.id
        const bodyParams = req.body
        const user = await updateUser(userId, bodyParams)
        return res.status(httpStatusCodes.success).send({ id: user._id })
    } catch (error) {
        logger.error(error)
        return res.status(httpStatusCodes.serverError).send(messages.serverError)
    }
}

export async function get(req: Request, res: Response) {
    try {
        const userId = req.params.id
        const user = await getUserById(userId)
        return res.status(httpStatusCodes.success).send(user)
    } catch (error) {
        logger.error(error)
        return res.status(httpStatusCodes.serverError).send(messages.serverError)
    }
}

export async function getAll(req: Request, res: Response) {
    try {
        const users = await getAllUsers()
        return res.status(httpStatusCodes.success).send(users)
    } catch (error) {
        logger.error(error)
        return res.status(httpStatusCodes.serverError).send(messages.serverError)
    }
}

export async function deleteById(req: Request, res: Response) {
    try {
        const userId = req.params.id
        const user = await deleteUser(userId)
        return res.status(httpStatusCodes.success).send({ id: user._id })
    } catch (error) {
        logger.error(error)
        return res.status(httpStatusCodes.serverError).send(messages.serverError)
    }
}