const express = require("express");
const routes = express.Router();
const BookController = require("./controllers/BookController");

/* 
 Routers
 Use Postman or Insomnia
*/

// Index
routes.get("/books", BookController.index);

// Add
routes.post("/books", BookController.insert);

// Update
routes.put("/books/:id", BookController.update);

// Show
routes.get("/books/:id", BookController.show);

// Delete
routes.delete("/books/:id", BookController.delete);

module.exports = routes;