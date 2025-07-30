const axios = require('axios');
const asyncHandler = require('express-async-handler');

const getQuote = asyncHandler(async (req, res) => {
  const response = await axios.get('https://api.quotable.io/random');
  const { content, author } = response.data;
  res.status(200).json({ success: true, data: { content, author } });
});

module.exports = {
  getQuote,
};
