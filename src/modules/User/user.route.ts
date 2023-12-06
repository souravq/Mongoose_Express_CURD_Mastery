import express, { Request, Response } from "express";
import { UserController } from "./user.controller";

const router = express.Router();

// router.get("/", (req: Request, res: Response) => {
//   res.send("Router Setup Done");
// });

// Create user
router.post("/", UserController.createUser);

// Get All Users
router.get("/", UserController.getAllUsers);

// Get single User
router.get("/:userId", UserController.getSingleUserData);

// Update User
router.put("/", UserController.updateUser);

// Delete User
router.delete("/:userId", UserController.deleteUser);

export const userRouter = {
  router,
};
