import express from "express";
import {
  getPortfolios,
  addPortfolio,
  deletePortfolio,
} from "../controllers/portfolioController.js";

const router = express.Router();

router.get("/", getPortfolios);
router.post("/", addPortfolio);
router.delete("/:id", deletePortfolio);

export default router;
