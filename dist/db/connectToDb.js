function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
import mongoose from 'mongoose';
const MONGODB_PASSWORD = 'dUeQoobA3xzWyN62';
function connectToDb() {
  return _connectToDb.apply(this, arguments);
}
function _connectToDb() {
  _connectToDb = _asyncToGenerator(function* () {
    try {
      mongoose.connect(`mongodb+srv://TalMoshel:${MONGODB_PASSWORD}@cluster0.oegjnmw.mongodb.net/?retryWrites=true&w=majority`).then(res => {
        console.log('connected to DB!');
        return res;
      });
    } catch (error) {
      return Promise.reject(new Error(error));
    }
  });
  return _connectToDb.apply(this, arguments);
}
export default connectToDb;