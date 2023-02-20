"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScoreModel = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const ScoreSchema = new _mongoose.default.Schema({
  name: {
    type: String
  },
  score: {
    type: Number,
    default: 0
  },
  timestamp: {
    type: Date
  }
});
const ScoreModel = _mongoose.default.model('User', ScoreSchema);
exports.ScoreModel = ScoreModel;