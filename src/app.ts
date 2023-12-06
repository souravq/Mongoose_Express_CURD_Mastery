import express from "express";
import { userRouter } from "./modules/User/user.route";

const app = express();

require("dotenv").config();

app.get("/", (req, res) => {
  console.log("Hello World");
  res.send("Hi");
});

app.use("/api/v1/user", userRouter.router);

export default app;
