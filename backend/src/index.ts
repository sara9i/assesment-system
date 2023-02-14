/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import * as swaggerUi from "swagger-ui-express";
import * as swaggerDocument from "../docs/swagger.json";
import { rateLimit } from "./middleware/rate-limit.middleware";
import { mainRouter } from "./routes/main.router";
const cors = require('cors');

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
  console.error("PORT NOT DEFINED");
  process.exit(1);
}
if (!process.env.JWT_SECRET_KEY) {
  console.error("JWT_SECRET_KEY NOT DEFINED");
  process.exit(1);
}
if (!process.env.JWT_ACCESS_TOKEN_EXPIRY) {
  console.error("JWT_ACCESS_TOKEN_EXPIRY NOT DEFINED");
  process.exit(1);
}
if (!process.env.JWT_REFRESH_SECRET_KEY) {
  console.error("JWT_REFRESH_SECRET_KEY NOT DEFINED");
  process.exit(1);
}
if (!process.env.JWT_REFRESH_TOKEN_EXPIRY) {
  console.error("JWT_REFRESH_TOKEN_EXPIRY NOT DEFINED");
  process.exit(1);
}

 
 const PORT: number = parseInt(process.env.PORT as string, 10) || 8000;

 
 const app = express();

/**
 *  App Configuration
 */

app.use(express.json());
app.use(rateLimit);
app.use(cors());
app.use("/api/v1", mainRouter);

//adding swagger ui
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));




/**
 * Server Activation
 */

const sqlite3 = require('sqlite3').verbose();

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});