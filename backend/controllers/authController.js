const { validationResult } = require("express-validator");
const User = require("../model/auth");

exports.getUser = async (req, res, next) => {
  const users = await User.find();
  return res.json(users);
};

exports.postUser = async (req, res, next) => {
  console.log(req.body);

  if(!req.body.firstname || !req.body.lastname || !req.body.email || !req.body.dept || !req.body.college) {
    return res.status(400).json({ errors: ["All fields are required"] });
  }

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors.array());
    return res.status(401).json({ errors: errors.array().map(err => err.msg) });
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
