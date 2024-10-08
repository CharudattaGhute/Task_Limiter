const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    required: true,
  },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
