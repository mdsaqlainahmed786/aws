"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.get("/find-sum", (req, res) => {
    const { a, b } = req === null || req === void 0 ? void 0 : req.query;
    const sum = parseInt(a) + parseInt(b);
    res.send({ result: sum });
});
app.listen(4000, () => {
    console.log("Server is running on http://localhost:4000");
});
