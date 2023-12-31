"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var ultimate_react_apirequests_1 = require("ultimate-react-apirequests");
var ultimate_react_form_1 = require("ultimate-react-form");
function Register(_a) {
    var _this = this;
    var onError = _a.onError, onSuccess = _a.onSuccess, roles = _a.roles, children = _a.children;
    return ((0, jsx_runtime_1.jsxs)(ultimate_react_form_1.Form, { onSubmission: function (data) { return __awaiter(_this, void 0, void 0, function () {
            var res, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        if (data.password !== data.confirm) {
                            throw new Error('Les mots de passes ne correspondent pas');
                        }
                        return [4 /*yield*/, (0, ultimate_react_apirequests_1.post)('/register', {}, data)];
                    case 1:
                        res = _a.sent();
                        if (res.error) {
                            throw new Error(res.error);
                        }
                        onSuccess('Utilisateur enregistré avec succes');
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        onError(error_1.message);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); }, children: [(0, jsx_runtime_1.jsx)(ultimate_react_form_1.Input, { type: "text", name: "lastname", placeholder: "Nom de l'utilisateur" }), (0, jsx_runtime_1.jsx)(ultimate_react_form_1.Input, { type: "text", name: "firstname", placeholder: "Pr\u00E9nom de l'utilisateur" }), (0, jsx_runtime_1.jsx)(ultimate_react_form_1.Input, { type: "text", name: "contact", placeholder: "Email de l'utilisateur" }), (0, jsx_runtime_1.jsx)("label", { children: " Role" }), (0, jsx_runtime_1.jsx)(ultimate_react_form_1.Select, { name: "role", options: roles
                    ? roles.map(function (role) {
                        return {
                            value: role._id,
                            title: role.name,
                        };
                    })
                    : [] }), children, (0, jsx_runtime_1.jsx)(ultimate_react_form_1.Input, { type: "password", name: "password", placeholder: "Mot de passe" }), (0, jsx_runtime_1.jsx)(ultimate_react_form_1.Input, { type: "password", name: "confirm", placeholder: "Confirm" }), (0, jsx_runtime_1.jsx)(ultimate_react_form_1.SubmitInput, { title: "Enregistrer" })] }));
}
exports.default = Register;
