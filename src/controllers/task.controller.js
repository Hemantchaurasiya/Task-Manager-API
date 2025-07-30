const asyncHandler = require('express-async-handler');
const {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
} = require('../services/task.service');

const create = asyncHandler(async (req, res) => {
  const task = await createTask(req.body, req.user.id);
  res.status(201).json({ success: true, data: task });
});

const getAll = asyncHandler(async (req, res) => {
  const tasks = await getTasks(req.user.id);
  res.status(200).json({ success: true, data: tasks });
});

const getById = asyncHandler(async (req, res) => {
  const task = await getTaskById(req.params.id, req.user.id);
  res.status(200).json({ success: true, data: task });
});

const update = asyncHandler(async (req, res) => {
  const task = await updateTask(req.params.id, req.body, req.user.id);
  res.status(200).json({ success: true, data: task });
});

const remove = asyncHandler(async (req, res) => {
  await deleteTask(req.params.id, req.user.id);
  res.status(200).json({ success: true, message: 'Task deleted successfully' });
});

module.exports = {
  create,
  getAll,
  getById,
  update,
  remove,
};
