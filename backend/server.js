const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const colors = require('colors');
const cors = require('cors');
const authRoute = require('./routes/auth');
const transactionsRoute = require('./routes/transactions');
const booksRoute = require('./routes/books');
const goalsRoute = require('./routes/goals');
const errorHandler = require('./middlewares/errorMiddleware');

dotenv.config();

const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/api/users', authRoute);
app.use('/api/transactions', transactionsRoute);
app.use('/api/books', booksRoute);
app.use('/api/goals', goalsRoute);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`.yellow));
