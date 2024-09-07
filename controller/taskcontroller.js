const Task = require("../module/taskModel");

const rateLimiter = async (req, res, next) => {
  console.log(req.body);
  const userId = req.body.user_id;
  if (!userId) return res.status(400).json({ message: "User ID is required" });

  const now = Date.now();

  const tasksInLastMinute = await Task.find({
    user_id: userId,
    timestamp: { $gt: now - 60000 },
  });

  const lastTask = tasksInLastMinute[tasksInLastMinute.length - 1];

  if (lastTask && now - lastTask.timestamp < 1000) {
    return res
      .status(429)
      .send({ message: "Rate limit exceeded, please wait 1 second" });
  }

  if (tasksInLastMinute.length >= 20) {
    return res
      .status(429)
      .send({ message: "Rate limit of 20 tasks per minute exceeded" });
  }

  next();
};

const processTask = async (req, res) => {
  const userId = req.body.user_id;

  const newTask = new Task({
    user_id: userId,
    timestamp: Date.now(),
  });

  await newTask.save();

  res
    .status(200)
    .send({ message: `Task for user ${userId} processed and logged.` });
};

module.exports = {
  rateLimiter,
  processTask,
};
