import Question, { IQuestion } from '../models/question.model'

export async function addQuestion(question: IQuestion) {
    try {
        const questionDoc = new Question({
            question: question.question,
            options: question.options,
            answerIndex: question.answerIndex,
        })
        return questionDoc.save()
    } catch (error) {
        throw error
    }
}

export async function updateQuestion(id: string, question: IQuestion) {
    try {
        return Question.findByIdAndUpdate({ id }, { ...question })
    } catch (error) {
        throw error
    }
}

export async function getAllQuestions() {
    try {
        return Question.find()
    } catch (error) {
        throw error
    }
}

export async function getQuestionById(id: string) {
    try {
        return Question.findById(id)
    } catch (error) {
        throw error
    }
}

export async function deleteQuestion(id: string) {
    try {
        return Question.findByIdAndDelete(id)
    } catch (error) {
        throw error
    }
}