import express from "express";
import { userRouter } from "./modules/User/user.route";

const app = express();

// Parser
app.use(express.json());

// User Route
app.use("/api/v1/user", userRouter.router);

export default app;
