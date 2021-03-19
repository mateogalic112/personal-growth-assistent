const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

router.post('/register', async (req, res) => {
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(req.body.password, salt);

	const userExists = await User.findOne({ email: req.body.email })

	if(userExists) {
		res.status(400)
		throw new Error('User already exists')
	}

	const user = await User.create({
		username: req.body.username,
		email: req.body.email,
		password: hashedPassword,
		gender: req.body.gender,
		occupation: req.body.occupation,
		interests: req.body.interests,
	});

	if(user) {
		const token = jwt.sign({ _id: user._id }, "shhhh");
		res.status(201).json({
			_id: user._id,
			username: user.username,
			email: user.email,
			token
		})
	} else {
		res.status(400)
		throw new Error('Error occured while registering...Please try again.')
	}
});

router.post('/login', async (req, res) => {
	const user = await User.findOne({ email: req.body.email });
	if (!user) return res.status(401).send('Invalid credentials');

	const validPassword = await bcrypt.compare(
		req.body.password,
		user.password
	);
	if (!validPassword) return res.status(401).send('Invalid credentials');

	const token = jwt.sign({ _id: user._id }, "shhhh");
	res.json({
		_id: user._id,
		username: user.username,
		email: user.email,
		token
	});
});

module.exports = router;
