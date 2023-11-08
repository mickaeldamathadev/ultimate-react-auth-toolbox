"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validate = exports.ScopedComponent = exports.RestrictedRoute = exports.Reset = exports.Login = exports.Forgot = void 0;
var RestrictedRoute_1 = __importDefault(require("./AUTHENTICATION/components/RestrictedRoute"));
exports.RestrictedRoute = RestrictedRoute_1.default;
var ScopedComponent_1 = __importDefault(require("./AUTHENTICATION/components/ScopedComponent"));
exports.ScopedComponent = ScopedComponent_1.default;
var Forgot_1 = __importDefault(require("./AUTHENTICATION/views/Forgot"));
exports.Forgot = Forgot_1.default;
var Login_1 = __importDefault(require("./AUTHENTICATION/views/Login"));
exports.Login = Login_1.default;
var Reset_1 = __importDefault(require("./AUTHENTICATION/views/Reset"));
exports.Reset = Reset_1.default;
var Validate_1 = __importDefault(require("./AUTHENTICATION/views/Validate"));
exports.Validate = Validate_1.default;
