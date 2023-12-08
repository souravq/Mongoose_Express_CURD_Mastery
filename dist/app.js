"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_route_1 = require("./modules/User/user.route");
const app = (0, express_1.default)();
// Parser
app.use(express_1.default.json());
// User Route
app.use('/api/users', user_route_1.userRouter.router);
//Base Url
app.get('/', (req, res) => {
    res.send('Mongoose Express Crud Mastery App Is Running !!!');
});
exports.default = app;
