const Joi = require('joi');

const createTaskSchema = Joi.object({
  title: Joi.string().max(100).required(),
  description: Joi.string().max(500).allow(''),
  status: Joi.string().valid('pending', 'in-progress', 'completed').optional(),
  dueDate: Joi.date().optional(),
});

const updateTaskSchema = Joi.object({
  title: Joi.string().max(100).optional(),
  description: Joi.string().max(500).allow('').optional(),
  status: Joi.string().valid('pending', 'in-progress', 'completed').optional(),
  dueDate: Joi.date().optional(),
}).min(1); // At least one field must be present

module.exports = {
  createTaskSchema,
  updateTaskSchema,
};
