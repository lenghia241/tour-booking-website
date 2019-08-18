const express = require('express');
const morgan = require('morgan');

const app = express();

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

// 1)MIDDLEWARES

// Function to add middleware to middleware stack
app.use(morgan('dev'));
app.use(express.json());

// app.use((req, res, next) => {
//   console.log('My first middleware 👋');
//   next();
// });

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// 2) ROUTE HANDLER

// 3) ROUTES
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
