const taskModel = require("./../../db/Models/tasks");

//create task
const addNewTask = (req, res) => {
  const { name , user } = req.body;
  const newTask = new taskModel({
    name,
    user,
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

  // get one task by id
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

  const getUsertodo = (req, res) => {
    const { user } = req.params;
    taskModel
      .find({ user, isDel: false })
      .populate("user")
      .then((result) => {
        if (result) {
          res.status(200).json(result);
        } else {
          res.status(400).json("This post not found");
        }
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  };


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

//
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

  const deleteTaskByUser = (req, res) => {
  
    const { id } = req.params;
   const { users } = req.body;

    taskModel
      .findOneAndUpdate(
        { _id: id, users , isDel: false },
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

module.exports = { addNewTask , getAllTasks , getTaskById, getUsertodo , updateTask , deleteTask , deleteTaskByUser}