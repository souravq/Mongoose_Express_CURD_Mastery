import express, { Request, Response } from "express";
import { UserController } from "./user.controller";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Router Setup Done");
});

// Create user
router.post("/create-user", UserController.createUser);

export const userRouter = {
  router,
};
