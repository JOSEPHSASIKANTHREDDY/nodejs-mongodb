require("../src/db/mongoose");
const Task = require("../src/models/task");
// Task.findByIdAndDelete("5db73f39a3ebcc1f6c463374")
//   .then(result => {
//     console.log(result);
//     return Task.countDocuments({ completed: false });
//   })
//   .then(result => {
//     console.log(result);
//   })
//   .catch(err => {
//     console.error(err);
//   });

const deleteTaskandCount = async (id, completed) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed });
  return {task,count}
};

deleteTaskandCount("5db73f64440b7a1fa3857ff0", false)
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.error(err);
  });
