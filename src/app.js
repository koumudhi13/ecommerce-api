// src/app.js

import express from "express";
import dotenv from "dotenv";

// ✅ Routes
import userRoutes from "./routes/userRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";

// ✅ Sequelize & Models
import sequelize from "./config/db.js";
import User from "./models/User.js";
import Category from "./models/Category.js";
import Product from "./models/Product.js";

dotenv.config();

const app = express();

// ✅ Middleware to parse JSON
app.use(express.json());

// ✅ Mount routes
app.use("/api/users", userRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/products", productRoutes);

// ✅ Default test route
app.get("/", (req, res) => {
  res.send("E-Commerce API Server is running ✅");
});

// ✅ Sync models (drop & recreate tables in dev)
sequelize.sync({ force: true }).then(() => {
  console.log("✅ All tables synced successfully");
});

// ✅ Test MySQL connection and start server
sequelize
  .authenticate()
  .then(() => {
    console.log("✅ MySQL connected successfully.");
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Unable to connect to MySQL:", err);
  });