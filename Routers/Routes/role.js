const express = require("express");
const roleRouter = express.Router();
const { creatRole, getRoles } = require("./../Controllers/role");

// const authentication = require("./../middleware/authentication");
// const authorization = require("./../middleware/authorization")


roleRouter.post("/createRole", /* authentication, authorization ,*/ creatRole);

roleRouter.get("/roles", /* authentication, authorization ,*/ getRoles);

module.exports = roleRouter;
