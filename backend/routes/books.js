const router = require('express').Router();
const verify = require('../middlewares/verifyToken');
const Book = require('../models/Book');
const { HttpError } = require('../utils/utils');

/***
 * Creating new book
 */
router.post('/', verify, async (req, res, next) => {
	const book = await Book.create({
		title: req.body.title,
		author: req.body.author,
		pages: req.body.pages,
		user: req.user._id,
	});

	if (book) {
		res.status(201).json(book);
	} else {
		return next(new HttpError(400, 'Bad request'));
	}
});

/***
 * Get all Books
 */
router.get('/', verify, async (req, res, next) => {
	const books = await Book.find({ user: req.user._id }).sort({ '_id': -1 });

	if (books) {
		res.status(200).json(books);
	} else {
		return next(new HttpError(400, 'Bad Request'));
	}
});

/***
 * Update Book
 */
router.patch('/:id', verify, async (req, res, next) => {
	const book = await Book.findById(req.params.id);

	if (book) {
        book.notes = req.body.notes || book.notes;
		book.isCurrent = req.body.isCurrent ?? book.isCurrent;
		book.currentPage =  req.body.currentPage || book.currentPage;

		const updatedBook = await book.save();
		res.status(200).json(updatedBook);
	} else {
		return next(new HttpError(400, 'Bad Request'));
	}
});

module.exports = router;
