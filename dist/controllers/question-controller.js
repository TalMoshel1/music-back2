"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createQuestion = createQuestion;
exports.getQuestions = getQuestions;
var _questionService = require("../services/question-service.js");
// import {postAudio, getAudios} from '../store/cloudFunctions.js'
async function getQuestions(req, res) {
  const questions = await (0, _questionService.serviceGetQuestions)();
  return res.send(questions);
}
async function createQuestion(req, res) {
  const question = req.body;
  const createdQuestion = await (0, _questionService.serviceCreateQuestion)(question);
  return res.send(createdQuestion);
}