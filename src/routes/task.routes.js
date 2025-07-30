const express = require('express');
const router = express.Router();
const {
  create,
  getAll,
  getById,
  update,
  remove,
} = require('../controllers/task.controller');
const authMiddleware = require('../middlewares/auth');
const validate = require('../validators/validate');
const {
  createTaskSchema,
  updateTaskSchema,
} = require('../validators/task.schemas');
const validateObjectId = require('../middlewares/validateObjectId');

// All tasks routes require authentication
router.use(authMiddleware);

// @route   POST /api/tasks
// @desc    Create new task
router.post('/', validate(createTaskSchema), create);

// @route   GET /api/tasks
// @desc    Get all tasks for user
router.get('/', getAll);

// @route   GET /api/tasks/:id
// @desc    Get specific task by ID
router.get('/:id', validateObjectId('id'), getById);

// @route   PUT /api/tasks/:id
// @desc    Update task
router.put('/:id', validateObjectId('id'), validate(updateTaskSchema), update);

// @route   DELETE /api/tasks/:id
// @desc    Delete task
router.delete('/:id', validateObjectId('id'), remove);

module.exports = router;
