import * as usersController from "../controllers/usersController";
/**
 * Required External Modules and Interfaces
 */

import express, { Request, Response } from "express";

/**
 * Router Definition
 */

export const usersRouter = express.Router();

// // GET users
usersRouter.get("/", async (req: Request, res: Response) => {
  usersController.listUsers(req, res);
});

// // POST user
usersRouter.post("/", async (req: Request, res: Response) => {
  usersController.createtUser(req, res);
});