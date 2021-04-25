const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	author: {
		type: String,
		required: true,
	},
    pages: {
        type: Number,
        required: true,
    },
    notes: [String],
    isCurrent: {
        type: Boolean,
        default: false,
    },
    currentPage: {
        type: Number,
        default: 0,
    },
    user: {
		type: mongoose.ObjectId,
		required: true,
		ref: 'User',
	},
});

module.exports = mongoose.model('Books', bookSchema);
