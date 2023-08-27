const express = require("express");
const {
  httpCreateUpdateUser,
  httpGetAllUsers,
  httpGetUser,
  httpDeleteUser,
} = require("./users.controller");

const crudRouter = express.Router();

crudRouter.post("/createOrUpdateUser", httpCreateUpdateUser);
crudRouter.get("/getAllUsers", httpGetAllUsers);
crudRouter.get("/getUser/:id", httpGetUser);
crudRouter.delete("/deleteUser/:id", httpDeleteUser);

module.exports = crudRouter;
