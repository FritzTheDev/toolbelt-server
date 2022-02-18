// Import packages
import cors from "cors";
import { config } from "dotenv";
import check from "tiny-invariant";
import Express, { json } from "express";
import { authRouter } from "./routers/auth";

// Pull in environmetn variables
config();

// Startup checks to make sure everything that should be set is
check(process.env.DATABASE_URL, '"DATABASE_URL" hasn\'t been set. Check your environment variables.');
check(process.env.DATABASE_URL, '"NODE_ENV" hasn\'t been set. Check your environment variables.');

// Create an instance of the Express "class"
const app = Express();

/** Global Middleware */

// Enable Cross-Origin Request Sharing (CORS) - from anywhere in dev and from APP_ORIGIN in prod
app.use(cors({ origin: process.env.NODE_ENV === "production" ? process.env.APP_ORIGIN : "*" }));

// Enable JSON body parsing
app.use(json());

// Select a port to listen for requests on. Default to 4200 if not set.
const port = process.env.PORT || "4200";

/** Use routers to direct requests. */

// Auth Router: used for logging in, signing up, and resetting passwords
app.use("/auth", authRouter);

// Bind to the supplied port and start listening for requests
app.listen(port, () => {
  // If you're not running in production this will print a handy link to the origin.
  process.env.NODE_ENV === "production"
    ? console.log(`Listening in production mode at port ${port}`)
    : console.log(`Listening in development mode at http://localhost:${port}`);
});
