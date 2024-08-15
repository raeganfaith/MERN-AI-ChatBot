import { Router } from "express";
import { verifyToken } from "../utils/token-manager.js";
import { chatCompletionVaidator, validate } from "../utils/validators.js";
import { generateChatCompletion } from "../controllers/chat-controllers.js";

// Protected API
const chatRoutes = Router();
chatRoutes.post(
  "/new", 
  validate(chatCompletionVaidator), 
  verifyToken, 
  generateChatCompletion
);

export default chatRoutes;