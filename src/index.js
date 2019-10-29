const express = require("express"),
  app = express(),
  port = process.env.PORT || 3000,
  User = require("./models/user.js"),
  Task = require("./models/task.js"),
  userRouter = require("./routes/user"),
  taskRouter = require("./routes/task");
require("./db/mongoose");

app.use(express.json());

app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log(`App running on ${port}`);
});
