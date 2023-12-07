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

const fullNameSchema = new Schema<IFullName>({
  firstName: String,
  lastName: String,
});

const addressSchema = new Schema<IAddress>({
  street: String,
  city: String,
  country: String,
});

const orderSchema = new Schema<IOrder>({
  productName: String,
  price: Number,
  quantity: Number,
});

const userSchema = new Schema<IUser, UserModel, UserMethods>({
  userId: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  Name: { type: fullNameSchema, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true },
  isActive: { type: Boolean, required: true },
  hobbies: { type: [String], required: true },
  address: { type: addressSchema, required: true },
  orders: { type: [orderSchema], required: true },
});

userSchema.methods.isUserExist = async (userId: string) => {
  console.log(userId);
  const existingUser = await User.findOne({ userId });
  return existingUser;
};

// 3. Create a Model.

const User = model<IUser, UserModel>("User", userSchema);

export default User;
