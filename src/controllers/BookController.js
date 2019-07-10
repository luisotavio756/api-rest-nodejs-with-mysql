const Book = require("../models/BookModel");

module.exports = {

    // Get All Books
    async index(req, res) {
        const request = await Book.getAll();
        
        return res.json(request);
    },

    // Insert Book
    async insert(req, res) {
        const request = await Book.insert(req.body.title, req.body.description, Date.now);
        
        return res.send(request);
    },

    // Show Book By Id
    async show(req, res) {
        const request = await Book.findById(req.params.id);

        return res.json(request);
    },

    // Update Book
    async update(req, res) {
        const request = await Book.update(req.params.id, req.body.title, req.body.description, Date.now);

        return res.send(request);
    },

    // Delete Book
    async delete(req, res) {
        const request = await Book.delete(req.params.id);

        return res.send(request);
    }



};