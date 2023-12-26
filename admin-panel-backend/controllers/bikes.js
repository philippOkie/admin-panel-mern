const bikesRouter = require("express").Router();
const Bike = require("../models/bike");

bikesRouter.get("/", async (request, response) => {
  const blogs = await Bike.find({});
  response.json(blogs);
});

bikesRouter.post("/", async (request, response) => {
  const body = request.body;

  if (body.name === undefined || body.id === undefined) {
    return response.status(400).end();
  }

  const bike = new Bike({
    name: body.name,
    type: body.type,
    color: body.color,
    wheelSize: body.wheelSize,
    id: body.id,
    price: body.price,
    description: body.description,
    status: "available",
  });

  const savedBike = await bike.save();

  response.status(201).json(savedBike);
});

module.exports = bikesRouter;
