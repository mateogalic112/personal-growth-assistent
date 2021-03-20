const router = require('express').Router();
const verify = require('../middlewares/verifyToken');
const User = require('../models/User');
const { HttpError } = require('../utils/utils');

router.get('/', verify, async (req, res) => {
	const user = await User.findById(req.user._id);

	if (user) {
		res.json({
			_id: user._id,
			username: user.username,
			email: user.email,
		});
	} else {
		return next(new HttpError(404, 'No user found'));
	}
});

module.exports = router;
