import mongoose from "mongoose";
import { app } from "./app";

const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error("JWT key must be defined");
  }
  if (!process.env.AUTH_URI) {
    throw new Error("JWT key must be defined");
  }
  try {
    await mongoose.connect(process.env.AUTH_URI);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error(err);
  }
  app.listen(3000, () => console.log("listening on port 3000!!!!!!"));
};
start();
