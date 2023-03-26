const mongoose = require("mongoose");
const validator = require('validator');
// const Exercise = require("./Exercise")

const Schema = mongoose.Schema;

const User = new Schema({
  firstname: {
    type: String,
    trim: true,
    required: [true, "firstname is required"],
  },

  lastname: {
    type: String,
    trim: true,
    required: [true, "lastname is required"]
  },

  email: {
    type: String,
    validate: [validator.isEmail, 'invalid email'],
    trim: true,
    required: [true, "email is required"],
    unique: [true, "email must me unique"],
  },

  phone: String,

  password: {
    type: String,
    required: [true, "password is required"],
    minlength: [8, "Password Must Be Minimum 8 Characters"],
  },

  dob: String,
  
  gender: {
    type: String,
    // enum
  },

  exercises: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Exercise'
    }
  ]

});

module.exports = mongoose.model("User", User);
