import { Request, Response } from "express";
import {
    updateUser,
    getUserById,
    getAllUsers,
    deleteUser
} from "../services/user.service";
import { formatSuccessResponse, formatErrorResponse } from "../helper/utility";
import { errors } from "../helper/constants";

export async function update(req: Request, res: Response) {
    try {
        const userId = req.params.id
        const bodyParams = req.body
        const user = await updateUser(userId, bodyParams)
        return res.status(200).send(formatSuccessResponse({ id: user._id }))
    } catch (error) {
        return res.status(500).send(formatErrorResponse(errors.serverError))
    }
}

export async function get(req: Request, res: Response) {
    try {
        const userId = req.params.id
        const user = await getUserById(userId)
        return res.status(200).send(formatSuccessResponse(user))
    } catch (error) {
        return res.status(500).send(formatErrorResponse(errors.serverError))
    }
}

export async function getAll(req: Request, res: Response) {
    try {
        const users = await getAllUsers()
        return res.status(200).send(formatSuccessResponse(users))
    } catch (error) {
        return res.status(500).send(formatErrorResponse(errors.serverError))
    }
}

export async function deleteById(req: Request, res: Response) {
    try {
        const userId = req.params.id
        const user = await deleteUser(userId)
        return res.status(200).send(formatSuccessResponse({ id: user._id }))
    } catch (error) {
        return res.status(500).send(formatErrorResponse(errors.serverError))
    }
}