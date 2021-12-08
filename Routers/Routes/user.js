const express = require("express");
const userRouter = express.Router();
const { register , login , getAllUsers } = require("./../Controllers/user");

const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");

userRouter.post("/register" , register);
userRouter.post("/login" , login);

// admin -> role
userRouter.get("/allusers", getAllUsers);


module.exports = userRouter; 