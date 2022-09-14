"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var connectDB = function connectDB() {
  var databaseName, url, con;
  return regeneratorRuntime.async(function connectDB$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          databaseName = process.env.DATABASE_NAME;
          url = process.env.DATABASE_URL_LOCAL;
          _context.next = 5;
          return regeneratorRuntime.awrap(_mongoose["default"].connect(url + databaseName, {
            useNewUrlParser: true,
            useUnifiedTopology: true
          }));

        case 5:
          con = _context.sent;
          console.log("Database connected : ".concat(con.connection.host));
          _context.next = 13;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          console.error("Error: ".concat(_context.t0.message));
          process.exit(1);

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 9]]);
};

var _default = connectDB;
exports["default"] = _default;