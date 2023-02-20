"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _scoreController = require("../controllers/score-controller.js");
var _express = _interopRequireDefault(require("express"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const router = _express.default.Router();
router.post('/api/score', _scoreController.postScore);
router.get('/api/score', _scoreController.getBoard);
var _default = router;
exports.default = _default;