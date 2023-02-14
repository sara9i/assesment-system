import * as assessmentsController from "../controllers/assessmentsController";
/**
 * Required External Modules and Interfaces
 */

import express, { Request, Response } from "express";

/**
 * Router Definition
 */

export const assessmentRouter = express.Router();

// // GET users
assessmentRouter.get("/", async (req: Request, res: Response) => {
  assessmentsController.listAssessments(req, res);
});

assessmentRouter.get("/:assessmentID", async (req: Request, res: Response) => {
  assessmentsController.getAssessmentById(req, res);
});

// // POST user
assessmentRouter.post("/", async (req: Request, res: Response) => {
  assessmentsController.createtAssessment(req, res);
});