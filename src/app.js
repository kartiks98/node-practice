const cors = require("cors");
const express = require("express");
const morgan = require("morgan");
const routes = require("./routes");

const app = express();

app.use(cors());
app.use(morgan("combined"));
app.use(express.json());
app.use("/v1", routes);

module.exports = app;
