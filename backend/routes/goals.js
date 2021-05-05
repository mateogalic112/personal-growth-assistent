const router = require('express').Router();
const verify = require('../middlewares/verifyToken');
const Goal = require('../models/Goal');
const { HttpError } = require('../utils/utils');

/***
 * Creating new Goal
 */
router.post('/', verify, async (req, res, next) => {
	const goal = await Goal.create({
		title: req.body.title,
		date: req.body.date,
		user: req.user._id,
	});

	if (goal) {
		res.status(201).json(goal);
	} else {
		return next(new HttpError(400, 'Bad request'));
	}
});

/***
 * Get all Goals
 */
router.get('/', verify, async (req, res, next) => {
	const goals = await Goal.find({ user: req.user._id });

	if (goals) {
		res.status(200).json(goals);
	} else {
		return next(new HttpError(400, 'Bad Request'));
	}
});

/***
 * Update Goal
 */
router.patch('/:id', verify, async (req, res, next) => {
	const goal = await Goal.findById(req.params.id);

	if (goal) {
        goal.isCompleted = req.body.isCompleted ?? goal.isCompleted;

		const updatedGoal = await goal.save();
		res.status(200).json(updatedGoal);
	} else {
		return next(new HttpError(400, 'Bad Request'));
	}
});

/***
 * Delete Goal
 */
 router.delete('/:id', verify, async (req, res, next) => {
	const deletedGoal = await Goal.deleteOne({
		_id: req.params.id,
	});

	if (deletedGoal) {
		res.status(200).json(deletedGoal);
	} else {
		return next(new HttpError(400, 'Bad Request'));
	}
});


module.exports = router;
