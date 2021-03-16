const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const colors = require('colors');
const authRoute = require('./routes/auth');
const transactionsRoute = require('./routes/transactions');

dotenv.config();

const app = express();

connectDB();

app.use(express.json());

app.use('/api/v1/users', authRoute);
app.use('/api/v1/transactions', transactionsRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`.yellow));
