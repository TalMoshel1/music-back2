"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _score = _interopRequireDefault(require("./score.js"));
var _question = _interopRequireDefault(require("./question.js"));
var _express = _interopRequireDefault(require("express"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const appRouter = _express.default.Router();
appRouter.use(_score.default);
appRouter.use(_question.default);
var _default = appRouter;
exports.default = _default;