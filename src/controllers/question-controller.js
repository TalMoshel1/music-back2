import { serviceGetQuestions, serviceCreateQuestion } from '../services/question-service.js'
export async function getQuestions(req, res) {
    const questions = await serviceGetQuestions()
    return res.send(questions)
}

export async function createQuestion(req, res) {
    const question = req.body;
    const createdQuestion = await serviceCreateQuestion(question)
    return res.send(createdQuestion)
}





