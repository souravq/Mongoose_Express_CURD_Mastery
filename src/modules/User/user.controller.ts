import { Request, Response } from "express";
import { UserService } from "./user.service";

const createUser = async (req: Request, res: Response) => {
  try {
    const user = req.body;
    // Service Call
    const result = await UserService.createUser(user);
    // Send Response
    res.status(200).json({
      success: true,
      message: "User Created Successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const UserController = {
  createUser,
};
