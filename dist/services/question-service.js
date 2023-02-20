function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
import { QuestionModel } from '../models/question.js';
export function serviceCreateQuestion(_x) {
  return _serviceCreateQuestion.apply(this, arguments);
}
function _serviceCreateQuestion() {
  _serviceCreateQuestion = _asyncToGenerator(function* (question) {
    try {
      const score = new QuestionModel({
        body: question.body,
        answers: question.answers,
        answerId: question.answerId
      });
      yield score.save();
      return score;
    } catch (err) {
      throw new Error(err);
    }
  });
  return _serviceCreateQuestion.apply(this, arguments);
}
export function serviceGetQuestions() {
  return _serviceGetQuestions.apply(this, arguments);
}
function _serviceGetQuestions() {
  _serviceGetQuestions = _asyncToGenerator(function* () {
    const questions = yield QuestionModel.aggregate([{
      $sample: {
        size: 10
      }
    }, {
      $project: {
        answerId: 0
      }
    }]);
    return questions;
  });
  return _serviceGetQuestions.apply(this, arguments);
}
export function serviceGetUserQuestions(_x2) {
  return _serviceGetUserQuestions.apply(this, arguments);
}
function _serviceGetUserQuestions() {
  _serviceGetUserQuestions = _asyncToGenerator(function* (_idArr) {
    try {
      const questions = yield QuestionModel.aggregate([{
        $match: {
          _id: {
            $in: _idArr
          }
        }
      }, {
        $redact: {
          $cond: [{
            $eq: [{
              $indexOfArray: [_idArr, "$_id"]
            }, -1]
          }, "$$PRUNE", "$$KEEP"]
        }
      }, {
        $addFields: {
          sortIdx: {
            $indexOfArray: [_idArr, "$_id"]
          }
        }
      }, {
        $sort: {
          sortIdx: 1
        }
      }]).exec();
      return questions;
    } catch (err) {
      throw new Error(err);
    }
  });
  return _serviceGetUserQuestions.apply(this, arguments);
}