// 2. Create a Schema corresponding to the document interface.

import { Schema, model } from "mongoose";
import {
  IAddress,
  IFullName,
  IOrder,
  IUser,
  UserMethods,
  UserModel,
} from "./user.interface";

import bcrypt from "bcrypt";

const fullNameSchema = new Schema<IFullName>({
  firstName: {
    type: String,
    required: [true, "First Name is required"],
  },
  lastName: {
    type: String,
    required: [true, "Last Name is required"],
  },
});

const addressSchema = new Schema<IAddress>({
  street: {
    type: String,
    required: [true, "Street is required"],
  },
  city: {
    type: String,
    required: [true, "City is required"],
  },
  country: {
    type: String,
    required: [true, "Country is required"],
  },
});

const orderSchema = new Schema<IOrder>({
  productName: {
    type: String,
    required: [true, "Product Name is required"],
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
  },
  quantity: {
    type: Number,
    required: [true, "Quantity is required"],
  },
});

const userSchema = new Schema<IUser, UserModel, UserMethods>({
  userId: {
    type: Number,
    required: [true, "User ID is required"],
    unique: true,
  },
  username: {
    type: String,
    required: [true, "Username is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    max: [20, "Password Max length can't be more than 20"],
  },
  fullName: { type: fullNameSchema, required: [true, "Full Name is required"] },
  age: { type: Number, required: [true, "Age is required"] },
  email: { type: String, required: [true, "Email is required"] },
  isActive: { type: Boolean, required: [true, "Active status is required"] },
  hobbies: { type: [String], required: [true, "Hobbies are required"] },
  address: { type: addressSchema, required: [true, "Address is required"] },
  orders: { type: [orderSchema] },
});

// Middleware

userSchema.pre("save", async function (next) {
  //console.log(this, "Pre Data");
  const user = this;
  user.password = await bcrypt.hash(user.password, 12);
  next();
});

userSchema.methods.isUserExist = async (userId: number) => {
  const existingUser = await User.findOne({ userId });
  return existingUser;
};

// 3. Create a Model.

const User = model<IUser, UserModel>("User", userSchema);

export default User;
