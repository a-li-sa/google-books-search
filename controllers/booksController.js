const db = require('../models');
const Book = require('../models/book');

module.exports = {
  getBooks: async (req, res) => {
    try {
      db.find({})
        .then(books => res.json(books))
    } catch (e) {
      console.log(e)
      res.status(401).json(e);
    }
  },
  saveBook: async (req, res) => {
    const {title, authors, description, image, link} = req.body;
    try {
      const book = await new Book({title, authors, description, image, link})
      book.save();
      res.json(book);
    } catch (e) {
      console.log(e)
      res.status(401).json(e);
    }
  },
  deleteBook: async (req, res) => {
    const { id } = req.params;
    Book.findByIdAndRemove(id)
      .then(book => res.json(book));
    try {
    } catch (e) {
      console.log(e)
      res.status(401).json(e);
    }
  },
}
