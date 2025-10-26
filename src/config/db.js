// config/db.js
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // Connect to local MongoDB
    await mongoose.connect("mongodb://127.0.0.1:27017/restaurantDB", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;