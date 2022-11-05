const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cookieParser = require("cookie-parser");
const User = require("./models/user");

const dotenv = require("dotenv");
const userRoute = require("./routes/user.js");

dotenv.config();

const app = express();

// database connection
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, {}, (err) => {
  if (err) console.log(err);
  console.log("database is connected");
});

// app use
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(cookieParser());
app.use(express.json());

app.use("/api/users", userRoute);

// app.get("/", function (req, res) {
//   res.status(200).send(`Welcome to login , sign-up api`);
// });

// listening port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`app is live at ${PORT}`);
});
