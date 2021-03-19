const jwt = require('jsonwebtoken');
const User = require('../models/User');

module.exports = async function (req, res, next) {
	const token = req.header('auth-token');
	if (!token) return res.status(401).send('Access denied!');

	try {
		const verified = jwt.verify(token, "shhhh");
		req.user = await User.findById(verified._id).select('-password');
		next();
	} catch (err) {
		res.status(401).send('Invalid token');
	}
};
