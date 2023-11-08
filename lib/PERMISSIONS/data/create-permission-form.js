"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (_id) {
    return [
        { name: "user-id", type: "hidden", value: _id },
        { name: "type", placeholder: "Nom de la permission" },
        { name: "ressource", placeholder: "Route" },
        { name: "action", placeholder: "Action" },
    ];
});
