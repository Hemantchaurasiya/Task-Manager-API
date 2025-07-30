const asyncHandler = require('express-async-handler');
const { registerUser, loginUser } = require('../services/auth.service');

const register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const data = await registerUser({ name, email, password });
  res.status(201).json({ success: true, data });
});

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const data = await loginUser({ email, password });
  res.status(200).json({ success: true, data });
});

module.exports = {
  register,
  login,
};
