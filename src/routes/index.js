const express = require("express");
const crudRoutes = require("./users/users.router");

const router = express.Router();

router.use("/user", crudRoutes);

module.exports = router;
