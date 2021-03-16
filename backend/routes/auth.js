const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

router.post('/register', async (req, res) => {
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(req.body.password, salt);

	const user = new User({
		username: req.body.username,
		email: req.body.email,
		password: hashedPassword,
		gender: req.body.gender,
		occupation: req.body.occupation,
		interests: req.body.interests,
	});

	try {
		const newUser = await user.save();
		res.status(201).json(newUser);
	} catch (e) {
		res.status(400).send(e);
	}
});

router.post('/login', async (req, res) => {
	const user = await User.findOne({ email: req.body.email });
	const validPassword = await bcrypt.compare(
		req.body.password,
		user.password
	);
	if (!validPassword) return res.status(400).send('Invalid credentials');

	const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
	res.header('auth-token', token).send(token);
});

module.exports = router;
