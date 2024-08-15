import { Router } from "express";
import { verifyToken } from "../utils/token-manager.js";

// Protected API
const chatRoutes = Router();
chatRoutes.post("/new", verifyToken);

export default chatRoutes;