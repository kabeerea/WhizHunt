import { Request, Response } from "express";
import {
    addTest,
    updateTest,
    getTestById,
    getAllTests,
    deleteTest
} from "../services/test.service";
import { formatSuccessResponse, formatErrorResponse } from "../helper/utility";
import { errors } from "../helper/constants";
import { addUsers } from "../services/user.service";

export async function create(req: Request, res: Response) {
    try {
        const bodyParams = req.body
        const test = await addTest(bodyParams)
        await addUsers(test.name, test.id, test.strength)
        return res.status(200).send(formatSuccessResponse({ id: test._id }))
    } catch (error) {
        console.log(error)
        return res.status(500).send(formatErrorResponse(errors.serverError))
    }
}

export async function update(req: Request, res: Response) {
    try {
        const testId = req.params.id
        const bodyParams = req.body
        const question = await updateTest(testId, bodyParams)
        return res.status(200).send(formatSuccessResponse({ id: question._id }))
    } catch (error) {
        return res.status(500).send(formatErrorResponse(errors.serverError))
    }
}

export async function get(req: Request, res: Response) {
    try {
        const testId = req.params.id
        const test = await getTestById(testId)
        return res.status(200).send(formatSuccessResponse(test))
    } catch (error) {
        return res.status(500).send(formatErrorResponse(errors.serverError))
    }
}

export async function getAll(req: Request, res: Response) {
    try {
        const tests = await getAllTests()
        return res.status(200).send(formatSuccessResponse(tests))
    } catch (error) {
        return res.status(500).send(formatErrorResponse(errors.serverError))
    }
}

export async function deleteById(req: Request, res: Response) {
    try {
        const testId = req.params.id
        const test = await deleteTest(testId)
        return res.status(200).send(formatSuccessResponse({ id: test._id }))
    } catch (error) {
        return res.status(500).send(formatErrorResponse(errors.serverError))
    }
}