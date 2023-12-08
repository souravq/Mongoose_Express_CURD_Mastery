import { Request, Response } from "express";
import { UserService } from "./user.service";
import { createUserResponseData } from "./types";
import { ZodError } from "zod";
import { validation } from "./user.validation";

// Create User
const createUser = async (req: Request, res: Response) => {
  try {
    const user = req.body;

    // Data validation using ZOD
    const validateData = validation.userValidationSchema.parse(user);

    // Create User Service Call
    const result = await UserService.createUser(validateData);

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
  } catch (error) {
    // Check if the error is a ZodError
    if (error instanceof ZodError) {
      // Extract relevant information from the ZodError
      const validationErrors = error.errors.map((err) => ({
        path: err.path.join("."),
        message: err.message,
      }));

      // Send validation error response
      res.status(400).json({
        success: false,
        message: "Validation error",
        errors: validationErrors,
      });
    } else {
      const unknownError = error as Error;
      if (unknownError.message === "Duplicate key error") {
        res.status(400).json({
          success: false,
          message:
            "Duplicate key error. User with the same userId or username already exists.",
          error: unknownError.message,
        });
      }

      // For other types of errors, send a generic error response
      res.status(500).json({
        success: false,
        message: "An error occurred while processing the request.",
        error: unknownError.message,
      });
    }
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

    // Data validation using ZOD
    const validateData = validation.userValidationSchema.parse(userUpdatedData);

    // Update User Service Call
    const result = await UserService.updateUser(parseInt(userId), validateData);

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
  } catch (error) {
    // Check if the error is a ZodError
    if (error instanceof ZodError) {
      // Extract relevant information from the ZodError
      const validationErrors = error.errors.map((err) => ({
        path: err.path.join("."),
        message: err.message,
      }));

      // Send validation error response
      res.status(400).json({
        success: false,
        message: "Validation error",
        errors: validationErrors,
      });
    } else {
      const unknownError = error as Error;
      if (unknownError.message === "Duplicate key error") {
        res.status(400).json({
          success: false,
          message:
            "Duplicate key error. User with the same userId or username already exists.",
          error: unknownError.message,
        });
      }

      // For other types of errors, send a generic error response
      res.status(500).json({
        success: false,
        message: "An error occurred while processing the request.",
        error: unknownError.message,
      });
    }
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
    const userId = req.params.userId;
    const orderData = req.body;

    //Zod Validation
    const validateOrderData = validation.orderValidationSchema.parse(orderData);

    const result = await UserService.createOrder(
      parseInt(userId),
      validateOrderData
    );
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
  } catch (error) {
    // Check if the error is a ZodError
    if (error instanceof ZodError) {
      // Extract relevant information from the ZodError
      const validationErrors = error.errors.map((err) => ({
        path: err.path.join("."),
        message: err.message,
      }));

      // Send validation error response
      res.status(400).json({
        success: false,
        message: "Validation error",
        errors: validationErrors,
      });
    } else {
      const unknownError = error as Error;
      if (unknownError.message === "Duplicate key error") {
        res.status(400).json({
          success: false,
          message:
            "Duplicate key error. User with the same userId or username already exists.",
          error: unknownError.message,
        });
      }

      // For other types of errors, send a generic error response
      res.status(500).json({
        success: false,
        message: "An error occurred while processing the request.",
        error: unknownError.message,
      });
    }
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

// Calculate Total Price of Orders for a Specific User
const totalPriceOfOrders = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const result = await UserService.totalPriceOfOders(parseInt(userId));
    if (result) {
      res.status(200).json({
        success: true,
        message: "Total price calculated successfully!",
        data: result[0],
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
  totalPriceOfOrders,
};
