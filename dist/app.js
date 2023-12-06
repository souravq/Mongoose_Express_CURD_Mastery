"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_route_1 = require("./modules/User/user.route");
const app = (0, express_1.default)();
require("dotenv").config();
app.get("/", (req, res) => {
    console.log("Hello World");
    res.send("Hi");
});
app.use("/api/v1/user", user_route_1.userRouter.router);
exports.default = app;
