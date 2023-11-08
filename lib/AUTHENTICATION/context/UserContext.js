"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserContext = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
exports.UserContext = (0, react_1.createContext)({});
function UserContextProvider(_a) {
    var children = _a.children;
    var _b = (0, react_1.useState)({}), user = _b[0], setUser = _b[1];
    return ((0, jsx_runtime_1.jsx)(exports.UserContext.Provider, { value: { user: user, setUser: setUser }, children: children }));
}
exports.default = UserContextProvider;
