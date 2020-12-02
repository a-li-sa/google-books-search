const router = require('express').Router();
const {getBooks, saveBook, deleteBook } = require('../../../controllers/booksController');

router.route('/')
  .get(getBooks)
  .post(saveBook);

router.route('/:id')
  .delete(deleteBook);

module.exports = router;
