const { validationResult } = require("express-validator");
const User = require("../model/auth");

exports.getUser = async (req, res, next) => {
  const users = await User.find();
  return res.json(users);
};

exports.postUser = async (req, res, next) => {
  console.log(req.body);

  if (
    !req.body.firstname ||
    !req.body.lastname ||
    !req.body.email ||
    !req.body.dept ||
    !req.body.college
  ) {
    return res.status(400).json({ errors: ["All fields are required"] });
  }

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors.array());
    return res
      .status(401)
      .json({ errors: errors.array().map((err) => err.msg) });
  }

  const users = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    dept: req.body.dept,
    college: req.body.college,
    isLoggedIn: true,
  });

  await users.save();
  return res.status(201).json(users);
};

exports.getLogin = async (req, res, next) => {};

exports.postLogin = async (req, res, next) => {
  console.log("Post Login:", req.body);
  const { email, dept } = req.body;
  const user = await User.findOne({ email });

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors.array());
    return res
      .status(401)
      .json({ errors: errors.array().map((err) => err.msg) });
  }

  if (!email || !dept) {
    return res.status(400).json({ errors: ["All fields are required"] });
  }

  if (!user) {
    return res.status(401).json({ errors: ["User is not found"] });
  }

  res.cookie("isLoggedIn", "true", {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    maxAge: 24 * 60 * 60 * 1000,
  });

  return res.status(201).json({ isLoggedIn: true });
};
