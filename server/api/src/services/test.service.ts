import { Types } from 'mongoose'
import Test, { ITest } from '../models/test.model'

export async function addTest(test: ITest) {
    try {
        const testDoc = new Test({
            name: test.name,
            strength: test.strength,
            startTime: test.startTime,
            endTime: test.endTime,
            questions: test.questions.map((question) => new Types.ObjectId(question)),
        })
        return testDoc.save()
    } catch (error) {
        throw error
    }
}

export async function updateTest(id: string, test: ITest) {
    try {
        return Test.findByIdAndUpdate({ id }, { ...test })
    } catch (error) {
        throw error
    }
}

export async function getAllTests() {
    try {
        return Test.find().populate('question')
    } catch (error) {
        throw error
    }
}

export async function getTestById(id: string) {
    try {
        return Test.findById(id).populate('question')
    } catch (error) {
        throw error
    }
}

export async function deleteTest(id: string) {
    try {
        return Test.findByIdAndDelete(id)
    } catch (error) {
        throw error
    }
}