const express = require("express");
const router = express.Router();
const { rateLimiter, processTask } = require("../controller/taskcontroller");

router.post("/process-task", rateLimiter, processTask);

module.exports = router;
