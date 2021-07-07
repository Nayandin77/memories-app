import express from "express";
const router = express.Router();

import { signin, signup, showMessage } from "../controllers/user.js";

router.post("/signin", signin);
router.post("/signup", signup);
router.get("/", showMessage);

export default router;