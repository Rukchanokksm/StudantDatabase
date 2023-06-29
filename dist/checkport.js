"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkstatus = void 0;
const express_1 = __importDefault(require("express"));
const server = (0, express_1.default)();
server.use(express_1.default.json());
//Check Status port
async function checkstatus(_, res) {
    return res.status(200).json({ status: "ok" }).end();
}
exports.checkstatus = checkstatus;
//# sourceMappingURL=checkport.js.map