const jwt = require('jsonwebtoken');
const User = require('../models/User');

const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );
};

const registerUser = async ({ name, email, password }) => {
  const userExists = await User.findOne({ email });
  if (userExists) {
    throw new Error('User already exists');
  }

  const user = await User.create({ name, email, password });
  const token = generateToken(user);

  return { user: { id: user._id, name: user.name, email: user.email }, token };
};

const loginUser = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user || !(await user.matchPassword(password))) {
    throw new Error('Invalid email or password');
  }

  const token = generateToken(user);

  return { user: { id: user._id, name: user.name, email: user.email }, token };
};

module.exports = {
  registerUser,
  loginUser,
};
