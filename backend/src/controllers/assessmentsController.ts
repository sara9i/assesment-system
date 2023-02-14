/**
 * Required External Modules and Interfaces
 */

import { Request, Response } from "express";
import * as assessmentsService from "../services/assessmentService";
const { StatusCodes } = require('http-status-codes');
const db = require('../models');

import { assessmentBodySchema } from '../schemas/createAssessment';

/**
 * Controller Definitions
 */

export const listAssessments = async (req: Request, res: Response) => {
  try {
    let {sortBy='id', sortOrder='DESC'} = req.query;
    if(sortOrder === "-1"){
      sortOrder='DESC'
    }
    const assessments  = await db.assessments.findAll({
      order: [
          [sortBy, sortOrder],
      ],
  });
    return res.status(StatusCodes.ACCEPTED).send(assessments);
  } catch (e) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(e.message);
  }
}

export const getAssessmentById = async (req: Request, res: Response) => {
  try {
    const assessmentID: string = req.params.assessmentID;
    const assessment = await assessmentsService.getAssessmentDetails(assessmentID);
    return res.status(StatusCodes.ACCEPTED).send(assessment);
  } catch (e) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(e.message);
  }
}

export const createtAssessment = async (req: Request, res: Response) => {
  try {
    const isQueryValid = await assessmentBodySchema.isValid(req.body);
    if (!isQueryValid) {
      console.error('Error creating assessment due to Invalid Parameters');
      return res.status(StatusCodes.BAD_REQUEST).send("Invalid Parameters");
    }
    
    const body = assessmentBodySchema.cast(req.body);
    const assessment = await assessmentsService.createtAssessment(body);
 
    return res.status(StatusCodes.ACCEPTED).send(assessment);
  } catch (e) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(e.message);
  }
}