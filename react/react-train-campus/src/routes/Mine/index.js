"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_redux_1 = require("react-redux");
;
function Mine(props) {
    return (react_1.default.createElement("div", null, "Mine"));
}
exports.default = react_redux_1.connect()(Mine);