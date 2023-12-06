import { User } from "./user.interface";
import UserModel from "./user.model";

const createUser = async (user: User) => {
  try {
    const result = UserModel.create(user);
    return result;
  } catch (err) {
    console.log(err);
  }
};

export const UserService = {
  createUser,
};
