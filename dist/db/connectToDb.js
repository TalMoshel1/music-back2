"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const MONGODB_PASSWORD = 'dUeQoobA3xzWyN62';
async function connectToDb() {
  try {
    _mongoose.default.connect(`mongodb+srv://TalMoshel:${MONGODB_PASSWORD}@cluster0.oegjnmw.mongodb.net/?retryWrites=true&w=majority`).then(res => {
      console.log('connected to DB!');
      return res;
    });
  } catch (error) {
    return Promise.reject(new Error(error));
  }
}
var _default = connectToDb;
exports.default = _default;