const mongoose = require("mongoose");

// Define the schema for the Bike model
const bikeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
  },
  type: {
    type: String,
    required: true,
    minlength: 5,
  },
  color: String,
  wheelSize: {
    type: Number,
    required: true,
    min: 0,
  },
  id: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  description: {
    type: String,
    required: true,
    minlength: 5,
  },
  status: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Bike", bikeSchema);
