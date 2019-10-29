require("../src/db/mongoose");
const User = require("../src/models/user");
// User.findByIdAndUpdate("5db7e6e0ced7d237442eb254", { age: 24 })
//   .then(result => {
//     console.log(result);

//     return User.countDocuments({ age: 24 });
//   })
//   .then(result => {
//     console.log(result);
//   })
//   .catch(err => {
//     console.error(err);
//   });

const updateAgeandCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({age});
  return { user, count };
};

updateAgeandCount("5db7e637adad1f369c6f33a6", 24)
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.error(err);
  });
