import express from "express";
import { UserController } from "./user.controller";

const router = express.Router();

//============= USER APIS ================

// Create user
router.post("/", UserController.createUser);

// Get All Users
router.get("/", UserController.getAllUsers);

// Get single User
router.get("/:userId", UserController.getSingleUserData);

// Update User
router.put("/:userId", UserController.updateUser);

// Delete User
router.delete("/:userId", UserController.deleteUser);

//============ ORDER APIS ============================
// Create Order
router.put("/:userId/orders", UserController.createOrder);

// Get All Orders for User
router.get("/:userId/orders", UserController.getAllOders);

export const userRouter = {
  router,
};
