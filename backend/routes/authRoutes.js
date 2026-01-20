//External Module
const express = require("express");
const { body } = require("express-validator");

//Local Module
const authController = require("../controllers/authController");

const authRouter = express.Router();

//import controller
authRouter.get("/login", authController.getUser);
authRouter.post(
  "/login", // Express Validator (All Errors for these fields)
  [
    body("firstname")
      .trim()
      .isLength({ min: 2 })
      .withMessage("First Name should contain at least 2 character")
      .matches(/^[A-Za-z\s]+$/)
      .withMessage("First Name should contain only alphabets"),

    body("lastname")
      .trim()
      .isLength({ min: 2 })
      .withMessage("Last Name should contain at least 2 character")
      .matches(/^[A-Za-z\s]+$/)
      .withMessage("Last Name should contain only alphabets"),

    body("email")
      .isEmail()
      .withMessage("Please Enter valid Email")
      .normalizeEmail(),

    body("dept")
      .notEmpty()
      .withMessage("Please select the user type")
      .isIn(["CSE", "ECE", "ME", "EE", "IT"])
      .withMessage("Please select correct  dept"),

    body("college")
      .trim()
      .isLength({ min: 2 })
      .withMessage("College must be at least 2 characters long"),
  ],
  authController.postUser,
);

// exports.hostRouter = hostRouter
module.exports = authRouter;
