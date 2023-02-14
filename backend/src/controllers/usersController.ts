/**
 * Required External Modules and Interfaces
 */

import { Request, Response } from "express";
const { StatusCodes } = require('http-status-codes');
const db = require('../models');
const yup = require('yup');

/**
 * Controller Definitions
 */

export const listUsers = async (req: Request, res: Response) => {
  try {
    const users  = await db.users.findAll();
    return res.status(StatusCodes.ACCEPTED).send(users);
  } catch (e) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(e.message);
  }
}

let createUserSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required().email(),
  password: yup.string().required(),
});

export const createtUser = async (req: Request, res: Response) => {
  try {
    const isQueryValid = await createUserSchema.isValid(req.body);
    if (!isQueryValid) {
      console.error('Error creating user due to Invalid Parameters');
      return res.status(StatusCodes.BAD_REQUEST).send("Invalid Parameters");
    }
    
    const body = createUserSchema.cast(req.body);
    const user  = await db.users.create(body);
    return res.status(StatusCodes.ACCEPTED).send(user);
  } catch (e) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(e.message);
  }
}