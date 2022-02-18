import { Router } from "express";

export const fileRouter = Router();

/** "File Target" routes: each target corresponds with  a file that can be collected. */

// Get all targets
fileRouter.get("/target");
// Create new target
fileRouter.post("/target");
// Get a specific target
fileRouter.get("/target/:id");
// Replace a specific target
fileRouter.put("/target/:id");
// Delete a given target
fileRouter.delete("/target/:id");

/** "File Collection" routes: each collection is associated with targets that allow the collection of many files at once. */

// Get all collections
fileRouter.get("/collection");
// Create a new collection
fileRouter.post("/collection");
// Get a specific collection
fileRouter.get("/collection/:id");
// Replace a specific collection
fileRouter.put("/collection/:id");
// Delete a given collection
fileRouter.delete("/collection/:id");
