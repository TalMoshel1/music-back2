import { serviceGetBoard, serviceCreateScore } from '../services/score-service.mjs'
import { serviceGetUserQuestions } from '../services/question-service.mjs'
import mongoose from 'mongoose'

function calcScore(questionsDb, answersUser) {
    let scoreNumber = 0
    for (let i = 0; i < answersUser.length; i++ ) {
        const userAnswer = answersUser[i].answerId
        const correctAnswer = questionsDb[i].answerId
        if (userAnswer === correctAnswer) {
            ++scoreNumber
        }
    }
    return scoreNumber
}

export async function postScore(req, res) {
    const userAnswers = req.body.answers
    let questionToSearchInDB = []
    for (let i = 0; i < userAnswers.length; i++ ) {
        const question = userAnswers[i].questionId
        questionToSearchInDB.push(new mongoose.Types.ObjectId(question))
    }
    const questions = await serviceGetUserQuestions(questionToSearchInDB)
    const scoreNumber = calcScore(questions, userAnswers)
    const userName = req.body.name
    const newScore = await serviceCreateScore({name: userName, score: scoreNumber})

    return res.send(newScore)
}

export async function getBoard(req,res) {
    const scores = await serviceGetBoard()
    return res.send(scores)
}
