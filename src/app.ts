import express from "express";

const app = express();

app.get("/", (req, res) => {
  console.log("Hello World");
  res.send("Hi");
});

export default app;
