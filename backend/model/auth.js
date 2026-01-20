//Local Module
const mongoose = require("mongoose");

const authScheme = mongoose.Schema(
  {
    firstname: {
        type: String,
        required: [true, 'First Name is required']
    },

    lastname: String,

    email: {
        type: String,
        required: [true, 'Email is required']
    },

    dept:{
      type: String,
      enum: ['CSE', 'ECE', 'ME', 'EE', 'IT'],
      default: 'CSE',
      required: [true, 'Department is required']
    },

    college: {
        type: String,
        required: [true, 'College is required']
    },

    isLoggedIn: {
        type: Boolean,
        default: false,
    },
  },
  
);

module.exports = mongoose.model("User", authScheme);
