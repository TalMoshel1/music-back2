function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
import { ScoreModel } from '../models/score.js';
export function serviceCreateScore(_x) {
  return _serviceCreateScore.apply(this, arguments);
}
function _serviceCreateScore() {
  _serviceCreateScore = _asyncToGenerator(function* (obj) {
    try {
      const now = new Date();
      const score = new ScoreModel({
        name: obj.name,
        score: obj.score,
        timestamp: now
      });
      yield score.save();
      return score;
    } catch (err) {
      throw new Error(err);
    }
  });
  return _serviceCreateScore.apply(this, arguments);
}
export function serviceGetBoard() {
  return _serviceGetBoard.apply(this, arguments);
}
function _serviceGetBoard() {
  _serviceGetBoard = _asyncToGenerator(function* () {
    const randomScores = yield ScoreModel.find({}).sort({
      score: -1,
      timestamp: -1
    }).limit(10);
    return randomScores;
  });
  return _serviceGetBoard.apply(this, arguments);
}