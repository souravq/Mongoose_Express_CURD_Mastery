// 1. Create an interface representing a document in MongoDB.

import { Model } from "mongoose";

export type IFullName = {
  firstName: string;
  lastName: string;
};

export type IAddress = {
  street: string;
  city: string;
  country: string;
};

export type IOrder = {
  productName: string;
  price: number;
  quantity: number;
};

export type IUser = {
  userId: number;
  username: string;
  password: string;
  fullName: IFullName;
  age: number;
  email: string;
  isActive: boolean;
  hobbies: string[];
  address: IAddress;
  orders?: IOrder[];
};

export type UserMethods = {
  isUserExist(id: number): Promise<IUser | null>;
};

export type UserModel = Model<IUser, object, UserMethods>;
