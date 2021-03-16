const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		min: 6,
		max: 100,
		unique: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
		min: 6,
	},
	occupation: {
		type: String,
		required: true,
	},
	gender: {
		type: String,
		required: true,
	},
	interests: [String],
});

module.exports = mongoose.model('User', userSchema);
