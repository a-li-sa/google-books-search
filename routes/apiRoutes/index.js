const router = require('express').Router();
const booksRoutes = require('./booksRoutes');

router.use('/books', booksRoutes);

module.exports = router;
