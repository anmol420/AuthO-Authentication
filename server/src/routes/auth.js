import { Router } from "express";
import passport from "passport";
import { authCallback, getProfile, login, logout, register} from "../controller/authController.js";
import protect from "../middleware/authMiddleware.js";

const router = Router();

// Google Auth
router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));
router.get("/google/callback", passport.authenticate("google", { failureRedirect: "/" }), authCallback);

// Custom Auth
router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/profile", protect, getProfile);

export default router;