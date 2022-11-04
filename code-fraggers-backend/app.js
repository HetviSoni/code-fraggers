const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoute = require("./routes/user.js");

require("dotenv").config();
require("./db/conn");

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

app.use("/api/users", userRoute);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
