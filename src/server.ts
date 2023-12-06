import mongoose from "mongoose";
import app from "./app";
import { config } from "./config";

async function main() {
  try {
    await mongoose.connect(config.database_url as string);

    app.listen(config.port, () => {
      console.log("Mongoose App is listening on PORT " + config.port);
    });
  } catch (err) {
    console.log(err);
  }
}

main();
