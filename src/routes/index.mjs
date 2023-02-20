import scoreRouter from './score.mjs'
import questionsRouter from './question.mjs';

import express from 'express'


const appRouter = express.Router()

appRouter.use(scoreRouter)
appRouter.use(questionsRouter)

export default appRouter


