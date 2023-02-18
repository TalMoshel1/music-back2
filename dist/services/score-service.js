"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.serviceCreateScore = serviceCreateScore;
exports.serviceGetBoard = serviceGetBoard;
var _score = require("../models/score.js");
async function serviceCreateScore(obj) {
  try {
    const now = new Date();
    const score = new _score.ScoreModel({
      name: obj.name,
      score: obj.score,
      timestamp: now
    });
    await score.save();
    return score;
  } catch (err) {
    throw new Error(err);
  }
}
async function serviceGetBoard() {
  const randomScores = await _score.ScoreModel.find({}).sort({
    score: -1,
    timestamp: -1
  }).limit(10);
  return randomScores;
}