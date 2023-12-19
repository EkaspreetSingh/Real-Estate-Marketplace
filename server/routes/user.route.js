import express from "express";
import { test } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/test", test);
router.post("/signin",signin);

export default router;