const express = require("express"),
  Task = require("../models/task"),
  // @ts-ignore
  router = new express.Router();

router.post("/tasks", async (req, res) => {
  const task = new Task(req.body);

  try {
    await task.save();
    res.status(200).send(task);
  } catch (error) {
    res.status(500).send(error);
  }
  //   task
  //     .save()
  //     .then(result => {
  //       res.status(201).send(result);
  //     })
  //     .catch(err => {
  //       res.status(400).send(err);
  //     });
});

router.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).send(tasks);
  } catch (error) {
    res.status(500).send(error);
  }
  //   Task.find({})
  //     .then(result => {
  //       res.status(200).send(result);
  //     })
  //     .catch(err => {
  //       res.status(500).send(err);
  //     });
});

router.get("/tasks/:id", async (req, res) => {
  try {
    const task = await Task.findById({ _id: req.params.id });
    res.status(200).send(task);
  } catch (error) {
    res.status(500).send(error);
  }
  //   Task.findById(req.params.id)
  //     .then(result => {
  //       if (!result) {
  //         return res.status(404).send("No Tasks found");
  //       }
  //       res.status(200).send(result);
  //     })
  //     .catch(err => {
  //       res.status(500).send(err);
  //     });
});

router.patch("/tasks/:id", async (req, res) => {
  const updates = Object.keys(req.body),
    allowed_updates = ["description", "completed"],
    isValid = updates.every(update => allowed_updates.includes(update));
  if (!isValid) {
    return res.status(400).send({ error: "Invalid Updates" });
  }
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!task) {
      return res.status(404).send("Task Not Found");
    }
    res.status(200).send(task);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete("/tasks/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).send({ error: "Task Not Found" });
    }
    res.status(200).send(task);
  } catch (error) {
    res.status(500).send(error);
  }
});
module.exports = router;
