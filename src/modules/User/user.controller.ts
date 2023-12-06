import { Request, Response } from "express";
import { UserService } from "./user.service";

// Create User
const createUser = async (req: Request, res: Response) => {
  try {
    const user = req.body;
    // Service Call
    const result = await UserService.createUser(user);
    // Send Response
    res.status(200).json({
      success: true,
      message: "User created successfully!",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

// Get All Users
const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserService.getAllUsers();
    //send Response
    res.status(200).json({
      success: true,
      message: "Users fetched successfully!",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

// Get Single User
const getSingleUserData = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const result = await UserService.getSingleUser(userId);
    console.log(result);
    //send Response
    res.status(200).json({
      success: true,
      message: "User fetched successfully!",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

// Update User
const updateUser = async (req: Request, res: Response) => {
  try {
    const userUpdatedData = req.body;
    const result = await UserService.updateUser(userUpdatedData);
    //send Response
    res.status(200).json({
      success: true,
      message: "User updated successfully!",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

// Delete User
const deleteUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const result = await UserService.deleteUser(userId);
    //send response
    res.status(200).json({
      success: true,
      message: "User deleted successfully!",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const UserController = {
  createUser,
  getAllUsers,
  getSingleUserData,
  updateUser,
  deleteUser,
};
