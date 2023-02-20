function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
import { serviceGetBoard, serviceCreateScore } from '../services/score-service.js';
import { serviceGetUserQuestions } from '../services/question-service.js';
import mongoose from 'mongoose';
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
export function postScore(_x, _x2) {
  return _postScore.apply(this, arguments);
}
function _postScore() {
  _postScore = _asyncToGenerator(function* (req, res) {
    const userAnswers = req.body.answers;
    let questionToSearchInDB = [];
    for (let i = 0; i < userAnswers.length; i++) {
      const question = userAnswers[i].questionId;
      questionToSearchInDB.push(new mongoose.Types.ObjectId(question));
    }
    const questions = yield serviceGetUserQuestions(questionToSearchInDB);
    const scoreNumber = calcScore(questions, userAnswers);
    const userName = req.body.name;
    const newScore = yield serviceCreateScore({
      name: userName,
      score: scoreNumber
    });
    return res.send(newScore);
  });
  return _postScore.apply(this, arguments);
}
export function getBoard(_x3, _x4) {
  return _getBoard.apply(this, arguments);
}
function _getBoard() {
  _getBoard = _asyncToGenerator(function* (req, res) {
    const scores = yield serviceGetBoard();
    return res.send(scores);
  });
  return _getBoard.apply(this, arguments);
}