const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
	type: {
		type: String,
		required: true,
	},
	amount: {
		type: String,
		require: true,
	},
	coin: {
		type: String,
	},
	date: {
		type: Date,
		default: Date.now(),
	},
	user: {
		type: Schema.Types.ObjectId,
		required: true,
		ref: 'User',
	},
});

module.exports = mongoose.model('Transaction', transactionSchema);
