const router = require('express').Router();
const verify = require('../middlewares/verifyToken');
const User = require('../models/User');

router.get('', verify, async (req, res) => {
	const user = await User.findById(req.user._id)

	if(user) {
		res.json({
			_id: user._id,
			username: user.username,
			email: user.email,
		});
	} else {
		res.status(404)
		throw new Error('No user found.')
	}
});

module.exports = router;
