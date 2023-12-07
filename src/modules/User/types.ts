export type createUserResponseData = {
  userId: number;
  username: string;
  fullName: {
    firstName: string;
    lastName: string;
  };
  age: number;
  email: string;
  isActive: boolean;
  hobbies: string[];
  address: {
    street: string;
    city: string;
    country: string;
  };
};

export type craeteUserResponse = {
  success: boolean;
  message: string;
  data: createUserResponseData;
};

// Define createUserResponseData based on CreateUserResponse
//export type createUserResponseDataData = Omit<createUserResponseData, undefined>;
