const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const bikeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 5,
  },
  type: {
    type: String,
    required: true,
    minLength: 5,
  },
  color: String,
  wheelSize: {
    type: Number,
    required: true,
  },
  id: {
    type: String,
    required: true,
    minLength: 5,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
    minLength: 5,
  },
  status: {
    type: String,
    required: true,
  },
});

bikeSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Bike", bikeSchema);
