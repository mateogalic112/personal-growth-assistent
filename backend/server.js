const path = require('path')
const express = require('express');
require('dotenv').config();
const connectDB = require('./config/db');
const colors = require('colors');
const cors = require('cors');
const authRoute = require('./routes/auth');
const transactionsRoute = require('./routes/transactions');
const booksRoute = require('./routes/books');
const goalsRoute = require('./routes/goals');
const errorHandler = require('./middlewares/errorMiddleware');

const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/api/users', authRoute);
app.use('/api/transactions', transactionsRoute);
app.use('/api/books', booksRoute);
app.use('/api/goals', goalsRoute);

const currentPath = process.cwd();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(currentPath, '/frontend/build')))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(currentPath, 'frontend', 'build', 'index.html'))
  )
}

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`.yellow));
