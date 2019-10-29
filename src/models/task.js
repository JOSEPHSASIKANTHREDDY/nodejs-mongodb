const mongoose = require("mongoose"),
  validator = require("validator"),
  Task = mongoose.model("Task", {
    // @ts-ignore
    description: {
      type: String,
      required: true,
      trim: true
    },
    completed: {
      type: Boolean,
      required: false,
      default: false
    }
  });
module.exports=Task