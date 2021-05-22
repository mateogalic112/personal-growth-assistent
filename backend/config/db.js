const mongoose = require('mongoose');

const connectDB = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
			useCreateIndex: true,
		});

		console.log(`MongoDB Connected!`.cyan);
	} catch (err) {
		console.error(`Error: ${err.message}`.red);
		process.exit(1);
	}
};

module.exports = connectDB;
