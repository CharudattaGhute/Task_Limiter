const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/taskroute");

const app = express();

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/TaskLimiter");

const database = mongoose.connection;
database.on("error", (error) => {
  console.log("Error", error);
});

database.once("connected", () => {
  console.log("Database Connected");
});
app.use("/api/task", router);

app.listen(4001, () => {
  console.log("http://localhost:4001");
});
