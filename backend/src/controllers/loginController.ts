const { StatusCodes } = require('http-status-codes');
const jwt = require('jsonwebtoken');
const { compareSync } = require("bcrypt");
import { loginBodySchema } from '../schemas/loginScema';
const db = require('../models');



export const login = async (req, res) => {
  console.log('Validating the request body for the login');
  try {
    await loginBodySchema.validate(req.body);
  } catch (error) {
    console.log('Invalid Body Data: ', error);
    return res.status(StatusCodes.BAD_REQUEST).send("Invalid Body Data:");
  }
  console.log('Trying to find user in users Collection');
  let user;
  try {
    user = await db.users.findOne({email: req.body.email});
  } catch (error) {
    console.log('Error finding user logging in:', error);
    return res.status(StatusCodes.UNAUTHORIZED).send("Invalid Username/Password.");
  }
  if (!user) {
    console.log('Empty result from User Collection');
    return res.status(StatusCodes.UNAUTHORIZED).send("Invalid Username/Password.");
  }
  user = user?.dataValues
  console.log('Matching the passwords ');
  let doPasswordsMatch = compareSync(req.body.password, user.password);

  if (!doPasswordsMatch) {
    console.log('Passwords dont match, input password: ', req.body.password);
    return res.status(StatusCodes.UNAUTHORIZED).send("Invalid Username/Password.");
  }

  console.log('Creating tokens for the User');
  let response;
  try {
    let returnedUserObject = { ...user };
    delete returnedUserObject.password;
    response = {
      user: { ...returnedUserObject },
      accessToken: jwt.sign({ user: { ...returnedUserObject } }, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRY,
      }),
      refreshToken: jwt.sign({ user: { ...returnedUserObject } }, process.env.JWT_REFRESH_SECRET_KEY, {
        expiresIn: process.env.JWT_REFRESH_TOKEN_EXPIRY,
      }),
    };
  } catch (error) {
    console.log('Error creating tokens for the user:', error);
    return res.status(StatusCodes.UNAUTHORIZED).send("Invalid Username/Password.");
  }
  return res.status(StatusCodes.ACCEPTED).json(response);
};
