const mongoose = require("mongoose"),
  validator = require("validator"),
  User = mongoose.model("User", {
    // @ts-ignore
    name: {
      type: String,
      required: true,
      trim: true
    },
    age: {
      type: Number,
      default: 0,
      validate(value) {
        if (value < 0) {
          throw new Error("Age can't be a -ve number");
        }
      }
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Email is invalid");
        }
      }
    },
    password: {
      type: String,
      required: true,
      minlength: 7,
      trim: true,
      validate(pwd) {
        if (pwd.toLowerCase().includes("password")) {
          // validator.contains(pwd, "password")
          throw new Error("Password can't contain itself");
        }
      }
    }
  });
module.exports = User;
