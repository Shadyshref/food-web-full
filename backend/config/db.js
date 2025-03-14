import mongoose from "mongoose";
import "dotenv/config";  

export const connectDB = async () => {
  const DB_URI = process.env.DB_URI;

  try {
    await mongoose.connect(DB_URI);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log("Error connecting to MongoDB:", err);
  }
};





