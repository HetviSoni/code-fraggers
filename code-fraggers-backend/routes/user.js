const router = require("express").Router();
const User = require("../models/user.js");
const jwt = require("jsonwebtoken");
const { auth } = require(".././middlewares/auth");
const fetch = require("node-fetch");

// adding new user (sign-up route)
router.post("/register", async (req, res) => {
  let obj = req.body;
  const leetFullData = await fetch(
    `https://leetcode-stats-api.herokuapp.com/${req.body.username}`
  );
  const leetFullDataJson = await leetFullData.json();
  obj["easySolved"] = leetFullDataJson.easySolved;
  obj["mediumSolved"] = leetFullDataJson.mediumSolved;
  obj["hardSolved"] = leetFullDataJson.hardSolved;

  let newUser = new User(obj);

  let user = await User.findOne({ email: req.body.email });
  if (user) {
    return res
      .status(400)
      .json({ auth: false, message: "email already exits" });
  }
  user = await User.findOne({ username: req.body.username });
  if (user) {
    return res
      .status(400)
      .json({ auth: false, message: "Username already exits" });
  }
  user = await User.findOne({ metamaskid: req.body.metamaskid });
  if (user) {
    return res.status(400).json({
      auth: false,
      message: "Metamask public address already exits",
    });
  }

  try {
    const savedUser = newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/updateLeetData", auth, async (req, res) => {
  let user = await User.findOne(req.user._id);
  const leetFullData = await fetch(
    `https://leetcode-stats-api.herokuapp.com/${req.body.username}`
  );
  const leetFullDataJson = await leetFullData.json();
  user["easySolved"] = leetFullDataJson.easySolved;
  user["mediumSolved"] = leetFullDataJson.mediumSolved;
  user["hardSolved"] = leetFullDataJson.hardSolved;
  try {
    await user.save();
    res.status(200).send({
      message: "successfully updated",
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// login user
router.post("/login", async (req, res) => {
  let token = req.cookies.auth;
  try {
    User.findByToken(token, (err, user) => {
      if (err) return res(err);
      if (user)
        return res.status(400).json({
          error: true,
          message: "You are already logged in",
        });
      else {
        User.findOne({ email: req.body.email }, function (err, user) {
          if (!user)
            return res.json({
              isAuth: false,
              message: " Auth failed ,email not found",
            });

          user.comparepassword(req.body.password, (err, isMatch) => {
            if (!isMatch)
              return res.json({
                isAuth: false,
                message: "password doesn't match",
              });

            user.generateToken((err, user) => {
              if (err) return res.status(400).send(err);
              res.cookie("auth", user.token).json({
                isAuth: true,
                id: user._id,
                email: user.email,
              });
            });
          });
        });
      }
    });
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

//logout user
router.get("/logout", auth, async (req, res) => {
  try {
    req.user.deleteToken(req.token, (err, user) => {
      if (err) return res.status(400).send(err);
      // res.redirect("/login");
      res.sendStatus(200);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// get logged in user
router.get("/profile", auth, async (req, res) => {
  try {
    res.json({
      isAuth: true,
      id: req.user._id,
      email: req.user.email,
      name: req.user.name,
      username: req.user.username,
    });
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

module.exports = router;
