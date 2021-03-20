const { HttpError } = require('../utils/utils');

const errorHandler = (err, req, res, next) => {
	if (err instanceof HttpError) {
		res.status(err.statusCode).json({
			error: true,
			message: err.errorMessage,
		});
	} else {
		res.status(500).json({
			error: true,
			message: 'Internal server error',
		});
	}
};

module.exports = errorHandler;
