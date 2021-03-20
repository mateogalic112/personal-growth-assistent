const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { HttpError } = require('../utils/utils');

router.post('/register', async (req, res, next) => {
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(req.body.password, salt);

	const userExists = await User.findOne({ email: req.body.email });

	if (userExists) {
		return next(new HttpError(400, 'Bad request'));
	}

	const user = await User.create({
		username: req.body.username,
		email: req.body.email,
		password: hashedPassword,
		gender: req.body.gender,
		occupation: req.body.occupation,
		interests: req.body.interests,
	});

	if (user) {
		const token = jwt.sign({ _id: user._id }, 'shhhh');
		res.status(201).json({
			_id: user._id,
			username: user.username,
			email: user.email,
			gender: user.gender,
			occupation: user.occupation,
			interests: user.interests,
			token,
		});
	} else {
		next(e);
	}
});

router.post('/login', async (req, res, next) => {
	const user = await User.findOne({ email: req.body.email });
	if (!user) {
		return next(new HttpError(400, 'Bad request'));
	}

	const validPassword = await bcrypt.compare(
		req.body.password,
		user.password
	);
	if (!validPassword) {
		return next(new HttpError(401, 'Invalid credentials'));
	}

	const token = jwt.sign({ _id: user._id }, 'shhhh');
	res.json({
		_id: user._id,
		username: user.username,
		email: user.email,
		gender: user.gender,
		occupation: user.occupation,
		interests: user.interests,
		token,
	});

	if (!token) {
		return next(new HttpError(401, 'Invalid token'));
	}
});

module.exports = router;
