const mongoose = require("mongoose"),
  validator = require("validator");

mongoose.connect(
  "mongodb://127.0.0.1:27017/task-manager-api",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify:false
  },
  (err, result) => {
    if (err) {
      return console.error(err);
    }
    // console.log(result);
  }
);

// const me = new User({
//   name: "Joseph Byreddy      ",
//   age: 24,
//   email: "sasikanth.joseph@gmail.com         ",
//   password: "      byreddy"
// });
// me.save()
//   .then(result => {
//     console.log(result);
//   })
//   .catch(err => {
//     console.error(err);
//   });

// const Task = mongoose.model("Task", {
//   // @ts-ignore
//   description: {
//     type: String,
//     required: true,
//     trim: true
//   },
//   completed: {
//     type: Boolean,
//     required: false,
//     default: false
//   }
// });

// const my_task = new Task({
//   description: "                    Task One           ",
//   completed: true
// });

// my_task
//   .save()
//   .then(result => {
//     console.log(result);
//   })
//   .catch(err => {
//     console.error(err);
//   });
