const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Exercise = new Schema({

  name: {
    type: String,
    trim: true,
    required: [true, "exercise name is required"],
  },

  description: {
    trim: true,
    type: String,
  },

  type: {
    type: String,
    required: [true, "exercise type is required"],
    enum: ["walk", "swim", "hike", "run", "bicycle_ride"]
  },

  duration:{
    type: Number,
    required: [true, 'exercise duration is required']
  },

  date: {
    type: Date,
    default: Date.now()
  }

});

module.exports = mongoose.model("Exercise", Exercise);
