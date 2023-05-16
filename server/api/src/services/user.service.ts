import { rejects } from 'assert'
import { Document } from 'mongoose'
import { resolve } from 'path'
import User, { IUser } from '../models/user.model'

export async function addUser(user: IUser) {
    try {
        const userDoc = new User({
            name: user.name,
            username: user.username,
            password: user.password,
            role: user.role,
        })
        return userDoc.save()
    } catch (error) {
        throw error
    }
}