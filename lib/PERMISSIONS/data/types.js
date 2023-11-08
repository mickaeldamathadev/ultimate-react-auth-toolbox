"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.permKeys = exports.PermTypes = void 0;
var PermTypes;
(function (PermTypes) {
    PermTypes["READ"] = "READ";
    PermTypes["WRITE"] = "WRITE";
    PermTypes["UPDATE"] = "UPDATE";
    PermTypes["DELETE"] = "DELETE";
})(PermTypes || (exports.PermTypes = PermTypes = {}));
exports.permKeys = {
    type: PermTypes.READ,
    route: "",
    action: "",
};
