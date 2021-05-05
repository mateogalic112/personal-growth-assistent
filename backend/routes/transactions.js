const router = require('express').Router();
const verify = require('../middlewares/verifyToken');
const Transaction = require('../models/Transaction');
const { HttpError } = require('../utils/utils');

/***
 * Creating new transaction
 */
router.post('/', verify, async (req, res, next) => {
	const transaction = await Transaction.create({
		name: req.body.name,
		type: req.body.type,
		amount: req.body.amount,
		user: req.user._id,
		date: req.body.date,
		isCrypto: req.body.isCrypto,
		cryptoQty: req.body.cryptoQty,
		cryptoCoinPrice: req.body.cryptoCoinPrice,
	});

	if (transaction) {
		res.status(201).json(transaction);
	} else {
		return next(new HttpError(400, 'Bad request'));
	}
});

/***
 * Get all transactions
 */
router.get('/', verify, async (req, res, next) => {
	const transactions = await Transaction.find({ user: req.user._id })
		.sort({ '_id': -1 })
		.exec();

	if (transactions) {
		res.status(200).json(transactions);
	} else {
		return next(new HttpError(400, 'Bad Request'));
	}
});

/***
 * Delete transaction
 */
router.delete('/:id', verify, async (req, res, next) => {
	const deletedTransaction = await Transaction.deleteOne({
		_id: req.params.id,
	});

	if (deletedTransaction) {
		res.status(200).json(deletedTransaction);
	} else {
		return next(new HttpError(400, 'Bad Request'));
	}
});

/***
 * Update transaction
 */
router.put('/:id', verify, async (req, res, next) => {
	const transaction = await Transaction.findById(req.params.id);

	if (transaction) {
		(transaction.name = req.body.name || transaction.name),
			(transaction.type = req.body.type || transaction.type);
		transaction.amount = req.body.amount || transaction.amount;
		transaction.date = req.body.date || transaction.date;

		const updatedTransaction = await transaction.save();
		res.status(200).json(updatedTransaction);
	} else {
		return next(new HttpError(400, 'Bad Request'));
	}
});

module.exports = router;
