import { Request, Response } from "express";
import {
    addQuestion,
    updateQuestion,
    getQuestionById,
    getAllQuestions,
    deleteQuestion
} from "../services/question.service";
import { formatSuccessResponse, formatErrorResponse } from "../helper/utility";
import { errors } from "../helper/constants";

export async function create(req: Request, res: Response) {
    try {
        const bodyParams = req.body
        const question = await addQuestion(bodyParams)
        return res.status(200).send(formatSuccessResponse({ id: question._id }))
    } catch (error) {
        return res.status(500).send(formatErrorResponse(errors.serverError))
    }
}

export async function update(req: Request, res: Response) {
    try {
        const questionId = req.params.id
        const bodyParams = req.body
        const question = await updateQuestion(questionId, bodyParams)
        return res.status(200).send(formatSuccessResponse({ id: question._id }))
    } catch (error) {
        return res.status(500).send(formatErrorResponse(errors.serverError))
    }
}

export async function get(req: Request, res: Response) {
    try {
        const questionId = req.params.id
        const question = await getQuestionById(questionId)
        return res.status(200).send(formatSuccessResponse(question))
    } catch (error) {
        return res.status(500).send(formatErrorResponse(errors.serverError))
    }
}

export async function getAll(req: Request, res: Response) {
    try {
        const questions = await getAllQuestions()
        return res.status(200).send(formatSuccessResponse(questions))
    } catch (error) {
        return res.status(500).send(formatErrorResponse(errors.serverError))
    }
}

export async function deleteById(req: Request, res: Response) {
    try {
        const questionId = req.params.id
        const question = await deleteQuestion(questionId)
        return res.status(200).send(formatSuccessResponse({ id: question._id }))
    } catch (error) {
        return res.status(500).send(formatErrorResponse(errors.serverError))
    }
}