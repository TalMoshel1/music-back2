function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
import { serviceGetQuestions, serviceCreateQuestion } from '../services/question-service.js';
// import {postAudio, getAudios} from '../store/cloudFunctions.js'
export function getQuestions(_x, _x2) {
  return _getQuestions.apply(this, arguments);
}
function _getQuestions() {
  _getQuestions = _asyncToGenerator(function* (req, res) {
    const questions = yield serviceGetQuestions();
    return res.send(questions);
  });
  return _getQuestions.apply(this, arguments);
}
export function createQuestion(_x3, _x4) {
  return _createQuestion.apply(this, arguments);
}
function _createQuestion() {
  _createQuestion = _asyncToGenerator(function* (req, res) {
    const question = req.body;
    const createdQuestion = yield serviceCreateQuestion(question);
    return res.send(createdQuestion);
  });
  return _createQuestion.apply(this, arguments);
}
