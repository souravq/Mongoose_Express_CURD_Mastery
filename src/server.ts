import mongoose from "mongoose";
import app from "./app";

//VKNXG8SDka5Zk5xw

async function main() {
  try {
    await mongoose.connect(
      "mongodb+srv://souravbera515:VKNXG8SDka5Zk5xw@cluster0.xlhgqcj.mongodb.net/?retryWrites=true&w=majority"
    );

    app.listen(3006, () => {
      console.log("Mongoose App is listening on PORT 3006");
    });
  } catch (err) {
    console.log(err);
  }

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

main();
