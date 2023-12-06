// 1. Create an interface representing a document in MongoDB.

export type fullName = {
  firstName: string;
  lastName: string;
};

export type address = {
  street: string;
  city: string;
  country: string;
};

export type Order = {
  productName: string;
  price: number;
  quantity: number;
};

export type User = {
  userId: number;
  username: string;
  password: string;
  Name: fullName;
  age: number;
  email: string;
  isActive: boolean;
  hobbies: string[];
  address: address;
  orders: Order[];
};
