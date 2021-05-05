const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { HttpError } = require('../utils/utils');

module.exports = async function (req, _, next) {
	const token = req.header('auth-token');
	if (!token) return next(new HttpError(401, 'Access denied!'));

	try {
		const verified = jwt.verify(token, process.env.TOKEN_SECRET);
		req.user = await User.findById(verified._id).select('-password');
		next();
	} catch (err) {
		next(err);
	}
};
