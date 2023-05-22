import { Request, Response } from "express";
import {
    addQuestion,
    updateQuestion,
    getQuestionById,
    getAllQuestions,
    deleteQuestion
} from "../services/question.service";
import { httpStatusCodes, messages } from "../helpers/constants";
import logger from "../config/logger.config";

export async function create(req: Request, res: Response) {
    try {
        const bodyParams = req.body
        const question = await addQuestion(bodyParams)
        return res.status(httpStatusCodes.success).send({ id: question._id })
    } catch (error) {
        logger.error(error)
        return res.status(httpStatusCodes.serverError).send(messages.serverError)
    }
}

export async function update(req: Request, res: Response) {
    try {
        const questionId = req.params.id
        const bodyParams = req.body
        const question = await updateQuestion(questionId, bodyParams)
        return res.status(httpStatusCodes.success).send({ id: question._id })
    } catch (error) {
        logger.error(error)
        return res.status(httpStatusCodes.serverError).send(messages.serverError)
    }
}

export async function get(req: Request, res: Response) {
    try {
        const questionId = req.params.id
        const question = await getQuestionById(questionId)
        return res.status(httpStatusCodes.success).send(question)
    } catch (error) {
        logger.error(error)
        return res.status(httpStatusCodes.serverError).send(messages.serverError)
    }
}

export async function getAll(req: Request, res: Response) {
    try {
        const questions = await getAllQuestions()
        return res.status(200).send(questions)
    } catch (error) {
        logger.error(error)
        return res.status(500).send(messages.serverError)
    }
}

export async function deleteById(req: Request, res: Response) {
    try {
        const questionId = req.params.id
        const question = await deleteQuestion(questionId)
        return res.status(200).send({ id: question._id })
    } catch (error) {
        logger.error(error)
        return res.status(500).send(messages.serverError)
    }
}