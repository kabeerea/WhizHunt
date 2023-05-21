import { Request, Response } from "express";
import {
    addTest,
    updateTest,
    getTestById,
    getAllTests,
    deleteTest
} from "../services/test.service";
import { messages, httpStatusCodes } from "../helpers/constants";
import { addUsers } from "../services/user.service";

export async function create(req: Request, res: Response) {
    try {
        const bodyParams = req.body
        const test = await addTest(bodyParams)
        await addUsers(test.name, test.id, test.strength)
        return res.status(httpStatusCodes.success).send({ id: test._id })
    } catch (error) {
        return res.status(httpStatusCodes.serverError).send(messages.serverError)
    }
}

export async function update(req: Request, res: Response) {
    try {
        const testId = req.params.id
        const bodyParams = req.body
        const question = await updateTest(testId, bodyParams)
        return res.status(httpStatusCodes.success).send({ id: question._id })
    } catch (error) {
        return res.status(httpStatusCodes.serverError).send(messages.serverError)
    }
}

export async function get(req: Request, res: Response) {
    try {
        const testId = req.params.id
        const test = await getTestById(testId)
        return res.status(httpStatusCodes.success).send(test)
    } catch (error) {
        return res.status(httpStatusCodes.serverError).send(messages.serverError)
    }
}

export async function getAll(_req: Request, res: Response) {
    try {
        const tests = await getAllTests()
        return res.status(httpStatusCodes.success).send(tests)
    } catch (error) {
        return res.status(httpStatusCodes.serverError).send(messages.serverError)
    }
}

export async function deleteById(req: Request, res: Response) {
    try {
        const testId = req.params.id
        const test = await deleteTest(testId)
        return res.status(httpStatusCodes.success).send({ id: test._id })
    } catch (error) {
        return res.status(httpStatusCodes.serverError).send(messages.serverError)
    }
}