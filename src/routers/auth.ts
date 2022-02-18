import { Router } from "express";

export const authRouter = Router();

// "Check Token" route the client can hit in order to confirm login status.
authRouter.get("/");

// "Sign In" route that accepts an email & password and returns an auth JWT if they match a user.
authRouter.post("/signin");

// "Sign Up" route that accepts an email & password and returns an auth JWT after creating a user.
authRouter.post("/signup");

// "Use Password Reset" route that accepts an emailed UUID and a new password. If everything checks out, it resets the password.
authRouter.post("/use-password-reset-code");

// "Send Password Reset" route that accepts an email address & sends a reset password to that email. Returns nothing.
authRouter.post("/send-password-reset-code");