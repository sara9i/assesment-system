import * as loginController from "../controllers/loginController";
/**
 * Required External Modules and Interfaces
 */

import express, { NextFunction, Request, Response } from "express";

/**
 * Router Definition
 */

export const authRouter = express.Router();

// POST login 
authRouter.post("/login", async (req: Request, res: Response, next: NextFunction) => {
  loginController.login(req, res, next);
});