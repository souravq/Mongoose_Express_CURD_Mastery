import { ObjectId } from "mongodb";
import { User } from "./user.interface";
import UserModel from "./user.model";

// Create user
const createUser = async (user: User) => {
  try {
    const result = await UserModel.create(user);
    return result;
  } catch (err) {
    console.log(err);
  }
};

// Get All User
const getAllUsers = async () => {
  try {
    const result = await UserModel.find({});
    return result;
  } catch (err) {
    console.log(err);
  }
};

// Retrieve a specific user by ID
const getSingleUser = async (userId: string) => {
  try {
    console.log(userId);
    const result = await UserModel.findById(userId);
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
};

// Update User
const updateUser = async (user: User) => {
  try {
    const result = await UserModel.updateOne(user);
    return result;
  } catch (err) {
    console.log(err);
  }
};

// Delete User
// const deleteUser = async (userId: string) => {
//   try {
//     const result = await UserModel.deleteOne({ _id: new ObjectId(userId) });
//     return result;
//   } catch (err) {
//     console.log(err);
//   }
// };

export const UserService = {
  createUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  //deleteUser,
};
