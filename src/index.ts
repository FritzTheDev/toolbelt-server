// Import packages
import check from "tiny-invariant";
import Express, { json } from "express";

// Startup checks to make sure everything that should be set is
check(process.env.DATABASE_URL, '"DATABASE_URL" hasn\'t been set. Check your environment variables.');

// Create an instance of the Express "class"
const app = Express();

/** Global Middleware */
// Enable JSON body parsing
app.use(json());

// Select a port to listen for requests on. Default to 3000 if not set.
const port = process.env.PORT || 3000;

// Bind to the supplied port and start listening for requests
app.listen(port, () => {
  // If you're not running in production this will print a handy link to the origin.
  process.env.NODE_ENV === "production"
    ? console.log(`Listening in production mode at port ${port}`)
    : console.log(`Listening in development mode at http://localhost:${port}`);
});