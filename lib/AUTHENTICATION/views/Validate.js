"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_router_dom_1 = require("react-router-dom");
var ultimate_react_form_1 = require("ultimate-react-form");
var auth_form_1 = __importDefault(require("../data/forms/auth-form"));
function Validate() {
    var id = (0, react_router_dom_1.useParams)().id;
    return (0, jsx_runtime_1.jsx)(ultimate_react_form_1.Form, { onSubmission: function () { return null; }, formData: (0, auth_form_1.default)(id) });
}
exports.default = Validate;
