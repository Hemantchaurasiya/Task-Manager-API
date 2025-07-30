const express = require('express');
const { getQuote } = require('../controllers/quote.controller');

const router = express.Router();

// @route   GET /api/quote
// @desc    Get a random motivational quote
router.get('/', getQuote);

module.exports = router;
