const express = require('express');
const { register, login } = require('../controllers/auth.controller');
const validate = require('../validators/validate');
const { registerSchema, loginSchema } = require('../validators/auth.schemas');

const router = express.Router();

// @route   POST /api/auth/register
// @desc    Register user
router.post('/register', validate(registerSchema), register);

// @route   POST /api/auth/login
// @desc    Login user
router.post('/login', validate(loginSchema), login);

module.exports = router;
