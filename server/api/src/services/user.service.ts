import { Types } from 'mongoose';
import { IUser, UserRoles } from '../global/types';
import User from '../models/user.model'

export async function addUsers(testName: string, testId: string, strength: number) {
    try {
        const users = Array(strength).fill(0).map((_, index) => ({
            username: `${testName.replace(/\s/g, '').toLowerCase()}-${index + 1}`,
            test: new Types.ObjectId(testId),
            role: UserRoles.USER
        })) as IUser[]
        return User.create(users);
    } catch (error) {
        throw error
    }
}

export async function updateUser(id: string, user: IUser) {
    try {
        return User.findByIdAndUpdate({ id }, { ...user })
    } catch (error) {
        throw error
    }
}

export async function getAllUsers() {
    try {
        return User.find().populate('test')
    } catch (error) {
        throw error
    }
}

export async function getUserById(id: string) {
    try {
        return User.findById(id).populate('test')
    } catch (error) {
        throw error
    }
}

export async function getUserByUsername(username: string) {
    try {
        return User.findOne({ username })
    } catch (error) {
        throw error
    }
}

export async function deleteUser(id: string) {
    try {
        return User.findByIdAndDelete(id)
    } catch (error) {
        throw error
    }
}