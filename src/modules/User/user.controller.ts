import { Request, Response } from "express";
import { UserService } from "./user.service";
import { createUserResponseData } from "./types";

// Create User
const createUser = async (req: Request, res: Response) => {
  try {
    const user = req.body;

    // Create User Service Call
    const result = await UserService.createUser(user);

    // Final Expected Response
    const finalResponse: createUserResponseData = {
      userId: result?.userId as number,
      username: result?.username as string,
      fullName: {
        firstName: result?.fullName?.firstName as string,
        lastName: result?.fullName?.lastName as string,
      },
      age: result?.age as number,
      email: result?.email as string,
      isActive: result?.isActive as boolean,
      hobbies: result?.hobbies ? result?.hobbies : [],
      address: {
        street: result?.address?.street as string,
        city: result?.address?.city as string,
        country: result?.address?.country as string,
      },
    };

    // Send Response
    res.status(200).json({
      success: true,
      message: "User created successfully!",
      data: finalResponse,
    });
  } catch (err) {
    console.log(err);
  }
};

// Get All Users
const getAllUsers = async (req: Request, res: Response) => {
  try {
    //Get All Users Service Call
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
    // Get Single User Service Call
    const result = await UserService.getSingleUser(parseInt(userId));

    // Final Expected Response
    const finalResponse: createUserResponseData = {
      userId: result?.userId as number,
      username: result?.username as string,
      fullName: {
        firstName: result?.fullName?.firstName as string,
        lastName: result?.fullName?.lastName as string,
      },
      age: result?.age as number,
      email: result?.email as string,
      isActive: result?.isActive as boolean,
      hobbies: result?.hobbies ? result?.hobbies : [],
      address: {
        street: result?.address?.street as string,
        city: result?.address?.city as string,
        country: result?.address?.country as string,
      },
    };

    // Send Response
    if (result) {
      res.status(200).json({
        success: true,
        message: "User fetched successfully!",
        data: finalResponse,
      });
    } else {
      res.status(200).json({
        success: false,
        message: "User not found",
        error: {
          code: 404,
          description: "User not found!",
        },
      });
    }
  } catch (err) {
    console.log(err);
  }
};

// Update User
const updateUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const userUpdatedData = req.body;
    // Update User Service Call
    const result = await UserService.updateUser(
      parseInt(userId),
      userUpdatedData
    );

    // Final Expected Response
    const finalResponse: createUserResponseData = {
      userId: userUpdatedData?.userId,
      username: userUpdatedData?.username,
      fullName: {
        firstName: userUpdatedData?.fullName?.firstName,
        lastName: userUpdatedData?.fullName?.lastName,
      },
      age: userUpdatedData?.age,
      email: userUpdatedData?.email,
      isActive: userUpdatedData?.isActive,
      hobbies: userUpdatedData?.hobbies ? userUpdatedData?.hobbies : [],
      address: {
        street: userUpdatedData?.address?.street,
        city: userUpdatedData?.address?.city,
        country: userUpdatedData?.address?.country,
      },
    };

    // Send Response
    if (result) {
      res.status(200).json({
        success: true,
        message: "User updated successfully!",
        data: finalResponse,
      });
    } else {
      res.status(200).json({
        success: false,
        message: "User not found",
        error: {
          code: 404,
          description: "User not found!",
        },
      });
    }
  } catch (err) {
    console.log(err);
  }
};

// Delete User
const deleteUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    // Delete User Service Call
    const result = await UserService.deleteUser(parseInt(userId));
    // Send response

    if (result) {
      res.status(200).json({
        success: true,
        message: "User deleted successfully!",
        data: null,
      });
    } else {
      res.status(200).json({
        success: false,
        message: "User not found",
        error: {
          code: 404,
          description: "User not found!",
        },
      });
    }
  } catch (err) {
    console.log(err);
  }
};

// ================= ORDER ==================

// Create Order
const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const userId = req.params.userId;
    const result = await UserService.createOrder(parseInt(userId), orderData);
    if (result) {
      res.status(200).json({
        success: true,
        message: "Order created successfully!",
        data: null,
      });
    } else {
      res.status(200).json({
        success: false,
        message: "User not found",
        error: {
          code: 404,
          description: "User not found!",
        },
      });
    }
  } catch (err) {
    console.log(err);
  }
};

// Get All Orders for User
const getAllOders = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const result = await UserService.getAllOrders(parseInt(userId));

    if (result) {
      res.status(200).json({
        success: true,
        message: "Order fetched successfully!",
        data: result,
      });
    } else {
      res.status(200).json({
        success: false,
        message: "User not found",
        error: {
          code: 404,
          description: "User not found!",
        },
      });
    }
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
  createOrder,
  getAllOders,
};
