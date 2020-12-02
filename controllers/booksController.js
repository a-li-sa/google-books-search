const db = require('../models');
const Book = require('../models/book');

module.exports = {
  getBooks: async (req, res) => {
    try {

    } catch (e) {
      console.log(e)
      res.status(401).json(e);
    }
  },
  saveBook: async (req, res) => {
    try {

    } catch (e) {
      console.log(e)
      res.status(401).json(e);
    }
  },
  deleteBook: async (req, res) => {
    try {

    } catch (e) {
      console.log(e)
      res.status(401).json(e);
    }
  },
}
