import { ObjectId } from "mongodb";
import { IUser } from "./user.interface";
import User from "./user.model";

// Create user
const createUser = async (userData: IUser) => {
  try {
    const result = await User.create(userData);

    // const user = new User(userData);

    // if (await user.isUserExist(userData.userId)) {
    //   throw new Error("User already Exist");
    // }

    // const result = await user.save();

    return result;
  } catch (err) {
    console.log(err);
  }
};

// Get All User
const getAllUsers = async () => {
  try {
    const result = await User.find(
      {},
      "username fullName.firstName fullName.lastName age email address.street address.city address.country -_id"
    );

    return result;
  } catch (err) {
    console.log(err);
  }
};

// Retrieve a specific user by ID
const getSingleUser = async (userId: number) => {
  try {
    //const result = await User.findOne({ userId });
    const user = new User();
    if (!(await user.isUserExist(userId))) {
      throw new Error("User not found");
    }
    const result = await User.findOne({ userId });
    return result;
  } catch (err) {
    console.log(err);
  }
};

// Update User
const updateUser = async (userId: number, userData: IUser) => {
  try {
    //const result = await User.updateOne({ userId }, user);
    const user = new User();
    if (!(await user.isUserExist(userId))) {
      throw new Error("User not found");
    }
    //const result = await User.updateOne({ userId }, user);
    const result = await User.updateOne({ userId: userId }, { $set: userData });
    return result;
  } catch (err) {
    console.log(err);
  }
};

// Delete User
const deleteUser = async (userId: string) => {
  try {
    const result = await User.deleteOne({ _id: new ObjectId(userId) });
    return result;
  } catch (err) {
    console.log(err);
  }
};

export const UserService = {
  createUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
};
