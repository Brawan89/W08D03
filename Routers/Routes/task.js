const express = require("express");
const taskRouter = express.Router();
const {
  addNewTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
} = require("./../Controllers/task");

const authentication = require("./../middleware/authentication");
const authorization = require("./../middleware/authorization");

taskRouter.get("/allTasks", authentication, authorization , getAllTasks);
taskRouter.get("/task", authentication, authorization , getTaskById);
taskRouter.post("/createTask", authentication, authorization , addNewTask);
taskRouter.put("/task/:id", authentication, authorization ,updateTask);
taskRouter.delete("/deltask/:id", authentication, authorization ,deleteTask);

module.exports = taskRouter;
