"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DataSchema = _mongoose["default"].Schema({
  chocolateName: {
    required: true,
    type: String
  },
  picture: {
    required: true,
    type: String
  }
});

var _default = _mongoose["default"].model("chocolate", DataSchema, "chocolate");

exports["default"] = _default;