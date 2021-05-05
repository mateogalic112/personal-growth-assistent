const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
    date: {
        type: Date,
		default: Date.now(),
    },
    isCompleted: {
        type: Boolean,
        default: false,
    },
    user: {
		type: mongoose.ObjectId,
		required: true,
		ref: 'User',
	},
}, { timestamps: true });

module.exports = mongoose.model('Goal', goalSchema);
