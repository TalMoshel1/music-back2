"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.serviceCreateQuestion = serviceCreateQuestion;
exports.serviceGetQuestions = serviceGetQuestions;
exports.serviceGetUserQuestions = serviceGetUserQuestions;
var _question = require("../models/question.js");
async function serviceCreateQuestion(question) {
  try {
    const score = new _question.QuestionModel({
      body: question.body,
      answers: question.answers,
      answerId: question.answerId
    });
    await score.save();
    return score;
  } catch (err) {
    throw new Error(err);
  }
}
async function serviceGetQuestions() {
  const questions = await _question.QuestionModel.aggregate([{
    $sample: {
      size: 10
    }
  }, {
    $project: {
      answerId: 0
    }
  }]);
  return questions;
}
async function serviceGetUserQuestions(_idArr) {
  try {
    const questions = await _question.QuestionModel.aggregate([{
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
}