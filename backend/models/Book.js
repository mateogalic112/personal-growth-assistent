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
        default: true,
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
}, { timestamps: true });

module.exports = mongoose.model('Books', bookSchema);
