"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBoard = getBoard;
exports.postScore = postScore;
var _scoreService = require("../services/score-service.js");
var _questionService = require("../services/question-service.js");
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function calcScore(questionsDb, answersUser) {
  let scoreNumber = 0;
  for (let i = 0; i < answersUser.length; i++) {
    const userAnswer = answersUser[i].answerId;
    const correctAnswer = questionsDb[i].answerId;
    if (userAnswer === correctAnswer) {
      ++scoreNumber;
    }
  }
  return scoreNumber;
}
async function postScore(req, res) {
  const userAnswers = req.body.answers;
  let questionToSearchInDB = [];
  for (let i = 0; i < userAnswers.length; i++) {
    const question = userAnswers[i].questionId;
    questionToSearchInDB.push(new _mongoose.default.Types.ObjectId(question));
  }
  const questions = await (0, _questionService.serviceGetUserQuestions)(questionToSearchInDB);
  const scoreNumber = calcScore(questions, userAnswers);
  const userName = req.body.name;
  const newScore = await (0, _scoreService.serviceCreateScore)({
    name: userName,
    score: scoreNumber
  });
  return res.send(newScore);
}
async function getBoard(req, res) {
  const scores = await (0, _scoreService.serviceGetBoard)();
  return res.send(scores);
}