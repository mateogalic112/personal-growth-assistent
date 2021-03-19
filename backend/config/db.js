const mongoose = require('mongoose');

const connectDB = async () => {
	try {
		await mongoose.connect(procces.env.MONGO_URI
		, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
			useCreateIndex: true,
		});

		console.log(`MongoDB Connected!`.cyan);
	} catch (e) {
		console.error(`Error: ${e.message}`.red);
		process.exit(1);
	}
};

module.exports = connectDB;
