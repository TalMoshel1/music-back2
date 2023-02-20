import scoreRouter from './score.js';
import questionsRouter from './question.js';
import express from 'express';
const appRouter = express.Router();
appRouter.use(scoreRouter);
appRouter.use(questionsRouter);
export default appRouter;