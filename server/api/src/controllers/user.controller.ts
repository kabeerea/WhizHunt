import { Request, Response } from "express";
import { addUser } from "../services/user.service";
import User from '../models/user.model';

export async function create(req: Request, res: Response) {
    try {
        const bodyParams = req.body
        console.log(bodyParams)
        const user = await addUser(bodyParams)
        console.log(user)
        res.status(200).send({ id: user._id})
    } catch (error) {
        res.status(500).send(error.message)
    }
}