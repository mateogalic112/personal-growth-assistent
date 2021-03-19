const mongoose = require('mongoose');

const connectDB = async () => {
	try {
		await mongoose.connect(`mongodb+srv://mateogalic112:Zvucnik123@cluster0.wgk0e.mongodb.net/assistent?retryWrites=true&w=majority`
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
