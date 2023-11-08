"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var ultimate_react_mongo_table_1 = __importDefault(require("ultimate-react-mongo-table"));
function Roles(props) {
    return ((0, jsx_runtime_1.jsx)("div", { className: "roles flex-start", children: (0, jsx_runtime_1.jsx)(ultimate_react_mongo_table_1.default, { documents: props.roles, action: function () { return null; } }) }));
}
exports.default = Roles;
