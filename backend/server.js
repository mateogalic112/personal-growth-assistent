const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const colors = require('colors');
const cors = require('cors');
const authRoute = require('./routes/auth');
const screens = require('./routes/screens');
const transactionsRoute = require('./routes/transactions');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware')

dotenv.config();

const app = express();

connectDB();

app.use(express.json());
app.use(cors());

app.use('/', screens);
app.use('/api/users', authRoute);
app.use('/api/transactions', transactionsRoute);

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`.yellow));
