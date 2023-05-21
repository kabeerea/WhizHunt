import { getUserById, getUserByUsername, updateUser } from './user.service';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { IUser } from '../models/user.model';

export async function authenticateUser(username: string, password: string) {
    const authUser = await getUserByUsername(username)
    if (authUser) {
        const isvalidCredentials = bcrypt.compareSync(password, authUser.password);
        if (isvalidCredentials) {
            const token = jwt.sign({
                userId: authUser.id,
                name: authUser.name,
                username: authUser.username,
                role: authUser.role
            }, process.env.TOKEN_SECRET);
            return token
        }
    }
    return null
}

export async function createUser(user: IUser) {
    try {
        const { id, name, email, phone, password } = user
        const hash = bcrypt.hashSync(password, process.env.HASH_SALT);
        const authUser = await getUserById(id)
        return updateUser(authUser.id, {
            name,
            email,
            phone,
            password: hash
        })
    } catch (error) {
        throw error
    }
}