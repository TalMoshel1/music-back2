"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QuestionModel = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const QuestionSchema = new _mongoose.default.Schema({
  body: {
    type: String,
    required: true,
    validate: value => {
      value.length > 0;
    }
  },
  answers: {
    type: [],
    required: true,
    validate: array => {
      array.length === 4;
    }
  },
  answerId: {
    type: Number,
    required: true
  }
});
const QuestionModel = _mongoose.default.model('Question', QuestionSchema);
exports.QuestionModel = QuestionModel;