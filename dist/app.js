"use strict";

var _express = _interopRequireDefault(require("express"));
var _index = _interopRequireDefault(require("./routes/index.js"));
var _connectToDb = _interopRequireDefault(require("./db/connectToDb.js"));
var _cors = _interopRequireDefault(require("cors"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const app = (0, _express.default)();
app.use((0, _cors.default)({
  origin: process.env.FE_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(_express.default.json());
app.use(_index.default);
const PORT = process.env.PORT || 3000;
(0, _connectToDb.default)().then(() => {
  app.listen(PORT, () => console.log(`App listening at port ${PORT}`));
});