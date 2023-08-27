const express = require("express");
const crudRoutes = require("./users/users.router");

const router = express.Router();

router.use("/crud", crudRoutes);

module.exports = router;
