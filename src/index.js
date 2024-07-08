const express = require("express");
const app = express();

const { PORT } = require("./config/serverConfig");
const startingServer = () => {
  app.listen(PORT, () => {
    console.log(`Server Listening on PORT${PORT}`);
  });
};
startingServer();
