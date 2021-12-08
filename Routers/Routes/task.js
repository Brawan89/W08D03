const express = require("express");
const taskRouter = express.Router();
const {
  addNewTask,
  getAllTasks,
  getTaskById,
  getUsertodo,
  updateTask,
  deleteTask,
  deleteTaskByUser,
} = require("./../Controllers/task");

const authentication = require("./../middleware/authentication");
const authorization = require("./../middleware/authorization");

//user -> add , get , delete , update (task)
taskRouter.post("/createTask", authentication, addNewTask);
taskRouter.get("/allTasks", authentication, getAllTasks);
taskRouter.delete("/deltask/:id", authentication, deleteTask);
taskRouter.put("/updateTask/:id", authentication, updateTask);
//
taskRouter.get("/getUsertodo/:user", authentication, getUsertodo);


// taskRouter.get("/allTasks", authentication, authorization , getAllTasks);
taskRouter.get("/task", authentication, authorization , getTaskById);
// taskRouter.put("/task/:id", authentication, authorization ,updateTask);
taskRouter.delete("/deleteTaskByUser/:id", authentication, authorization ,deleteTaskByUser);

module.exports = taskRouter;
