import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

// Routes
import portfolioRoutes from "./routes/portfolioRoutes.js";
import mailRoutes from "./routes/mailRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: ["http://localhost:3000", "https://my-portfolio-gfhe.vercel.app"],
  methods: ["GET", "POST"],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/portfolio", portfolioRoutes);
app.use("/api/mail", mailRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running...");
});

// Env variables
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Connect to MongoDB and start server
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () =>
      console.log(`🚀 Server running on port ${PORT}`)
    );
  })
  .catch((err) => console.error("❌ MongoDB connection error:", err));
