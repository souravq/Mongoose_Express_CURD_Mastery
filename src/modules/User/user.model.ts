// 2. Create a Schema corresponding to the document interface.

import { Schema, model } from "mongoose";
import { Address, FullName, Order, User } from "./user.interface";

const fullNameSchema = new Schema<FullName>({
  firstName: String,
  lastName: String,
});

const addressSchema = new Schema<Address>({
  street: String,
  city: String,
  country: String,
});

const orderSchema = new Schema<Order>({
  productName: String,
  price: Number,
  quantity: Number,
});

const userSchema = new Schema<User>({
  userId: { type: Number, required: true },
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

// 3. Create a Model.

const UserModel = model<User>("User", userSchema);

export default UserModel;
