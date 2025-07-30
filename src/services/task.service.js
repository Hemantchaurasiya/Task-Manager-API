const Task = require('../models/Task');
const ApiError = require('../utils/ApiError');

const createTask = async ({ title, description, status, dueDate }, userId) => {
  const task = await Task.create({ title, description, status, dueDate, user: userId });
  return task;
};

const getTasks = async (userId) => {
  const tasks = await Task.find({ user: userId }).sort({ createdAt: -1 });
  return tasks;
};

const getTaskById = async (taskId, userId) => {
  const task = await Task.findOne({ _id: taskId, user: userId });
  if (!task) throw new ApiError(404,'Task not found');
  return task;
};

const updateTask = async (taskId, updateData, userId) => {
  const task = await Task.findOneAndUpdate(
    { _id: taskId, user: userId },
    updateData,
    { new: true, runValidators: true }
  );
  if (!task) throw new ApiError(404,'Task not found');
  return task;
};

const deleteTask = async (taskId, userId) => {
  const task = await Task.findOneAndDelete({ _id: taskId, user: userId });
  if (!task) throw new ApiError(404,'Task not found');
  return task;
};

module.exports = {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
};
