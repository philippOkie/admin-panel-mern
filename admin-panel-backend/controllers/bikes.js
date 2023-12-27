const bikesRouter = require("express").Router();
const { request } = require("../app");
const Bike = require("../models/bike");

bikesRouter.get("/", async (request, response) => {
  const blogs = await Bike.find({});
  response.json(blogs);
});

bikesRouter.post("/", async (request, response) => {
  const body = request.body;
  const blogs = await Bike.find({});

  if (body.name === undefined || body.id === undefined) {
    return response.status(400).end();
  }

  const existingBikeWithSameId = await Bike.findOne({ id: body.id });

  if (existingBikeWithSameId) {
    return response.status(409).json({ error: "Duplicate id found" });
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

bikesRouter.delete("/:id", async (request, response) => {
  await Bike.findByIdAndDelete(request.params.id);

  response.status(204).end();
});

bikesRouter.put("/:id", async (request, response) => {});

module.exports = bikesRouter;
