/**
 * Required External Modules and Interfaces
 */

import express from "express";
import { assessmentRouter } from './assessment.router';
import { authRouter } from "./auth.router";
import { usersRouter } from './users.router';
export const mainRouter = express.Router();
mainRouter.use('/users', usersRouter);
mainRouter.use('/auth', authRouter);
mainRouter.use('/assessments', assessmentRouter);