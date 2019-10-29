const express = require("express"),
  // @ts-ignore
  router = new express.Router(),
  User = require("../models/user");
  router.get('/',async (req,res)=>res.send("Test"))
router.post("/users", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }

  //   user
  //     .save()
  //     .then(result => {
  //       res.status(201).send(result);
  //     })
  //     .catch(err => {
  //       res.status(400).send(err);
  //     });
});
router.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send(error);
  }
  //   User.find({})
  //     .then(result => {
  //       res.status(200).send(result);
  //     })
  //     .catch(err => {
  //       res.status(500).send(err);
  //     });
});
router.get("/users/:id", async (req, res) => {
  const _id = req.params.id;
  console.log(_id);

  try {
    const user = await User.findById(_id);
    if (!user) {
      return res.status(404).send({ error: "User Not Found" });
    }
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
  //   User.findById(_id)
  //     .then(result => {
  //       if (!result) {
  //         res.status(404).send("User with specified id doesn't exist");
  //       }
  //       res.status(200).send(result);
  //     })
  //     .catch(err => {
  //       res.status(500).send(err);
  //     });
});

router.patch("/users/:id", async (req, res) => {
  const updates = Object.keys(req.body),
    allowed_updates = ["name", "email", "age", "password"],
    isValid = updates.every(update => allowed_updates.includes(update));
  if (!isValid) {
    return res.status(400).send({ error: "Invalid Updates" });
  }

  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!user) {
      return res.status(404).send("User Not Found");
    }
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete("/users/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).send({ error: "User Not Found" });
    }
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});
module.exports = router;
