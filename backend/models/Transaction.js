const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	type: {
		type: String,
		required: true,
	},
	amount: {
		type: Number,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now(),
	},
	isCrypto: {
		type: Boolean,
		default: false,
	},
	cryptoQty: {
		type: Number,
		default: 0,
	},
	cryptoCoinPrice: {
		type: Number,
		default: 0,
	},
	user: {
		type: mongoose.ObjectId,
		required: true,
		ref: 'User',
	},
});

module.exports = mongoose.model('Transaction', transactionSchema);
