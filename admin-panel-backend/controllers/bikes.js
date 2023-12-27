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

bikesRouter.put("/:id", async (request, response) => {
  try {
    const updatedBike = await Bike.findOneAndUpdate(
      { _id: request.params.id },
      request.body,
      { new: true }
    );

    if (!updatedBike) {
      return response.status(404).json({ error: "Bike not found" });
    }

    response.json(updatedBike);
  } catch (error) {
    console.error("Error updating bike:", error);
    response.status(500).json({ error: "Internal server error" });
  }
});

module.exports = bikesRouter;
