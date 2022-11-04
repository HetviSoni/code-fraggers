const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URI, {})
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((err) => {
    console.log(`No Connection`);
    console.log(err);
  });
