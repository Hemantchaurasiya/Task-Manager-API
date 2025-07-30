const express = require('express');
const dotenv = require('dotenv');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');

const connectDB = require('./src/config/db');
const errorHandler = require('./src/middlewares/errorHandler');

dotenv.config();
connectDB();

const app = express();

// Body parser
app.use(express.json());

// Secure headers
app.use(helmet());

// CORS
app.use(cors());

// Logging
app.use(morgan('dev'));

// Rate limiting
const quoteLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 5,
  message: 'Too many requests to quote endpoint. Please try again later.',
});

// Routes
app.use('/api/auth', require('./src/routes/auth.routes'));
app.use('/api/tasks', require('./src/routes/task.routes'));
app.use('/api/quote', quoteLimiter, require('./src/routes/quote.routes'));

// Error middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
