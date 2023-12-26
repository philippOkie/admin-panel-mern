const mongoose = require("mongoose");

const bikeSchema = new mongoose.Schema({
  name: String,
  type: String,
  color: String,
  wheelSize: Number,
  id: String,
  price: Number,
  description: String,
  status: String,
});

module.exports = mongoose.model("Bike", bikeSchema);
