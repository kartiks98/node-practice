const http = require("http");
const app = require("./app");
const connectMongo = require("../mongo");
require("dotenv").config();

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

const startServer = async () => {
  await connectMongo();

  server.listen(PORT, () => {
    console.log("listening on PORT : ", PORT);
  });
};

startServer();
