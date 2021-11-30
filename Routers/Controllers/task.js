const taskModel = require("./../../db/Models/tasks");

//create task
const addNewTask = (req, res) => {
  const { name } = req.body;
  const newTask = new taskModel({
    name,
    user: req.token.id,
  });
  newTask
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

// get all todos except dalete task
const getAllTasks = (req, res) => {
    taskModel
      .find({ isDel: false, user: req.token.id })
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  };
///////////////////////////////////////
// git one task by id
const getTaskById = (req, res) => {
    const { id } = req.body; 
    taskModel
      .find({ _id: id , user: req.token.id })
      .then((result) => {
        if (result) {
        res.status(200).json(result);
        } else {
            res.status(404).json("task dose not exist");
        }
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  };

///////////////////////////////////////////////////////
//update task (not delete)
const updateTask = (req, res) => {
    const { name } = req.body;
      const { id } = req.params;
  
      taskModel
        .findOneAndUpdate({ _id: id, isDel: false },
         {$set: { name: name }}
        )
        .then((result) => {
          if (result) {
            res.status(200).json("updated");
          } else {
            res.status(404).json( "task not found!" );
          }
        })
        .catch((err) => {
          res.status(400).json(err);
        });
  };
/////////////////////////////////////////

const deleteTask = (req, res) => {
  
      const { id } = req.params;
  
      taskModel
        .findOneAndUpdate(
          { _id: id, isDel: false },
       { $set: { isDel: true }})
        .then((result) => {
          if (result) {
            res.status(200).json(result);
          } else {
            res.status(404).json(" task not found! ");
          }
        })
        .catch((err) => {
          res.status(400).json(err);
        });
   
  };

///////////////////////////////////////
module.exports = { addNewTask , getAllTasks , getTaskById , updateTask , deleteTask}