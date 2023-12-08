# Mongoose Express CRUD Mastery

## Description

Mongoose Express CRUD Mastery is a powerful TypeScript-based web application built with Express and Mongoose for MongoDB interaction. It provides a solid foundation for creating, reading, updating, and deleting user data, complete with robust validation and error handling.

### Features

-   **CRUD Operations:** Perform Create, Read, Update, and Delete operations on user data effortlessly.
-   **Express Framework:** Utilizes the Express web framework for building a robust and scalable backend.
-   **Mongoose ORM:** Seamlessly integrates with Mongoose, offering a convenient object modeling interface for MongoDB.
-   **Zod Validation:** Implements Zod for TypeScript-first schema declaration and validation, ensuring data integrity.
-   **bcrypt Security:** Leverages bcrypt for secure password hashing, enhancing user authentication.

## Prerequisites

Before running the application, ensure you have the following installed:

-   Node.js (v14 or higher)
-   MongoDB

## Installation

1.  Clone the repository.
    
    bashCopy code
    
    `git clone https://github.com/souravq/Mongoose_Express_CURD_Mastery.git`
    
    `cd mongoose_express_crud_mastery` 
    
3.  Install dependencies.
    
    bashCopy code
    
    `npm install` 
    
4.  Create a `.env` file in the project root and add the following environment variables:
    
    envCopy code
    
    `MONGODB_URI=mongodb+srv://souravbera515:VKNXG8SDka5Zk5xw@cluster0.xlhgqcj.mongodb.net/?retryWrites=true&w=majority`
    
    `PORT=3006` 
    

## Development

Run the following command to start the development server:

bashCopy code

`npm run dev` 

The server will be running at [http://localhost:3000](http://localhost:3000/) (or the port you specified in the `.env` file).

## Scripts

-   `npm run build`: Build the TypeScript code.
-   `npm test`: Run tests.
-   `npm run dev`: Start the development server with nodemon.
-   `npm run lint`: Lint the code.

## Dependencies

-   [Express](https://expressjs.com/): Web framework for Node.js.
-   [Mongoose](https://mongoosejs.com/): MongoDB object modeling for Node.js.
-   [bcrypt](https://www.npmjs.com/package/bcrypt): Library for hashing passwords.
-   [dotenv](https://www.npmjs.com/package/dotenv): Loads environment variables from a file.
-   [nodemon](https://nodemon.io/): Utility that monitors for changes and automatically restarts the server.
-   [zod](https://github.com/colinhacks/zod): TypeScript-first schema declaration and validation library.

## Here All are the API End Points - 

1) ### Create a new user -> http://localhost:3006/api/users
2) ### Retrieve a list of all users -> http://localhost:3006/api/users
3) ### Retrieve a specific user by ID -> http://localhost:3006/api/users/1
4) ### Update user information -> http://localhost:3006/api/users/1
5) ### Delete a user -> http://localhost:3006/api/users/1
6) ### Add New Product in Order -> http://localhost:3006/api/users/1/orders
7) ### Retrieve all orders for a specific user -http://localhost:3006/api/users/1/orders
8) ### Calculate Total Price of Orders for a Specific User -http://localhost:3006/api/users/1/orders/total-price
