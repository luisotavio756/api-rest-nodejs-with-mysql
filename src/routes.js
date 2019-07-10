const express = require("express");
const routes = express.Router();
const BookController = require("./controllers/BookController");

/* 
 Routers
 Use Postman or Insomnia
*/

// Index
routes.get("/products", BookController.index);

// Add
routes.post("/products", BookController.insert);

// Update
routes.put("/products/:id", BookController.update);

// Show
routes.get("/products/:id", BookController.show);

// Delete
routes.delete("/products/:id", BookController.delete);

module.exports = routes;