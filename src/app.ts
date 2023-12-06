import express from "express";

const app = express();

require("dotenv").config();

app.get("/", (req, res) => {
  console.log("Hello World");
  res.send("Hi");
});

export default app;
