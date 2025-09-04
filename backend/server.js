import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

// Routes
import portfolioRoutes from "./routes/portfolioRoutes.js";
import mailRoutes from "./routes/mailRoutes.js"; // 👈 added

dotenv.config();

const app = express();

// ✅ Middleware (must come before routes)
app.use(cors());
app.use(express.json()); // parses application/json
app.use(express.urlencoded({ extended: true })); // parses form-urlencoded

// ✅ Routes
app.use("/api/portfolio", portfolioRoutes);
app.use("/api/mail", mailRoutes); // 👈 added

// ✅ Simple test route
app.get("/", (req, res) => {
  res.send("Backend is running...");
});

// ✅ Environment variables
const PORT = process.env.PORT || 5000;
const MONGO_URI =
  process.env.MONGO_URI || "mongodb://127.0.0.1:27017/mern_portfolio";

// ✅ Connect to MongoDB and start server
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () =>
      console.log(`🚀 Server running on http://localhost:${PORT}`)
    );
  })
  .catch((err) => console.error("❌ MongoDB connection error:", err));
