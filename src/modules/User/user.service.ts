import { MongoServerError } from "mongodb";
import { IOrder, IUser } from "./user.interface";
import User from "./user.model";

// Create user
const createUser = async (userData: IUser) => {
  try {
    const result = await User.create(userData);
    return result;
  } catch (error) {
    if (error instanceof MongoServerError) {
      if (error.code === 11000 || error.code === 11001) {
        throw new Error("Duplicate key error");
      } else {
        throw new Error("MongoDB Error");
      }
    } else {
      throw new Error("Non-MongoDB Error");
    }
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
const deleteUser = async (userId: number) => {
  try {
    const user = new User();
    if (!(await user.isUserExist(userId))) {
      throw new Error("User not found");
    }
    const result = await User.deleteOne({ userId });
    return result;
  } catch (err) {
    console.log(err);
  }
};

// ===================== ORDER ====================

// Create Order
const createOrder = async (userId: number, orderData: IOrder) => {
  try {
    const user = new User();
    if (!(await user.isUserExist(userId))) {
      throw new Error("User not found");
    }
    const result = await User.updateOne(
      { userId: userId },
      {
        $push: { orders: orderData },
      },
      { upsert: true }
    );
    return result;
  } catch (err) {
    console.log(err);
  }
};

// Get All Orders for User
const getAllOrders = async (userId: number) => {
  try {
    const user = new User();
    if (!(await user.isUserExist(userId))) {
      throw new Error("User not found");
    }
    const result = await User.findOne(
      { userId },
      {
        "orders._id": 0,
        _id: 0,
        userId: 0,
        username: 0,
        password: 0,
        fullName: 0,
        age: 0,
        email: 0,
        isActive: 0,
        hobbies: 0,
        address: 0,
        __v: 0,
      }
    );
    return result;
  } catch (err) {
    console.log(err);
  }
};

// Calculate Total Price of Orders
const totalPriceOfOders = async (userId: number) => {
  try {
    const user = new User();
    if (!(await user.isUserExist(userId))) {
      throw new Error("User not found");
    }
    const result = await User.aggregate([
      { $match: { userId: userId } },
      {
        $project: {
          totalPrice: { $sum: "$orders.price" },
          _id: 0,
        },
      },
    ]);
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
  createOrder,
  getAllOrders,
  totalPriceOfOders,
};
