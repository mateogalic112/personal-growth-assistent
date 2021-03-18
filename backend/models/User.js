const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
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
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('User', userSchema);
