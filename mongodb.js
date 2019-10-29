const request = require("request"),
  { MongoClient, ObjectId } = require("mongodb"),
  connectionUrl = "mongodb://127.0.0.1/27017",
  databaseName = "task-manager";

// console.log(new ObjectId().getTimestamp());
MongoClient.connect(
  connectionUrl,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log("error");
    }
    // console.log("Connected");
    const db = client.db(databaseName);

    // db.collection("tasks").findOne(
    //   { _id: new ObjectId("5db541c4e63b917e4a53ea77") },
    //   (error, result) => {
    //     if (error) {
    //       return console.log("error");
    //     }
    //     console.log(result);
    //   }
    // );

    // db.collection("tasks")
    //   .find({
    //     // $in: {
    //       completed: true
    //     // }
    //   })
    //   .toArray((error, result) => {
    //     if (error) {
    //       return console.log(error);
    //     }
    //     console.log(result);
    //   });

    // db.collection("users")
    //   .updateOne(
    //     {
    //       _id: new ObjectId("5db540966fba5f7cbdbdd28b")
    //     },
    //     {
    //       $set: {
    //         name: "Joseph Sasikanth Reddy Byreddy"
    //         //   , age: 24
    //       },
    //       $inc: { age: 1 }
    //     }
    //   )
    //   .then(result => {
    //     console.log(result.modifiedCount);
    //   })
    //   .catch(err => {
    //     console.error(err);
    //   });

    // db.collection("tasks")
    //   .updateMany({ completed: false }, { $set: { completed: true } })
    //   .then(result => {
    //     console.log(result.modifiedCount);
    //   })
    //   .catch(err => {
    //     console.error(err);
    //   });

    db.collection("users")
      .deleteOne({ age: 35 })
      .then(result => {
        console.log(result.deletedCount);
      })
      .catch(err => {
        console.error(err);
      });
    db.collection("tasks")
      .deleteMany({ completed: false })
      .then(result => {
        console.log(result.deletedCount);
      })
      .catch(err => {
        console.error(err);
      });
  }
);
