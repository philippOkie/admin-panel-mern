import { useState } from "react";
import bikeService from "../services/bikes";

const CreateNew = (bikes, addABike) => {
  const [form, setForm] = useState({
    name: "",
    type: "",
    color: "",
    wheelSize: "",
    price: "",
    id: "",
    description: "",
  });

  function isNumber(value) {
    return typeof value === "number";
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleResetBtnClick = () => {
    setForm({
      name: "",
      type: "",
      color: "",
      wheelSize: "",
      price: "",
      id: "",
      description: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      form.name.length < 5 ||
      form.type.length < 5 ||
      form.description.length < 5
    ) {
      window.alert("all text inputs should be at least 5 characters long");
    } else if (isNumber(form.wheelSize) || isNumber(form.price)) {
      window.alert("price and wheel size inputs should be numbers");
    } else {
      bikeService.create({
        name: form.name,
        type: form.type,
        color: form.color,
        wheelSize: form.wheelSize,
        price: form.price,
        id: form.id,
        description: form.description,
      });
      addABike({
        name: form.name,
        type: form.type,
        color: form.color,
        wheelSize: form.wheelSize,
        price: form.price,
        id: form.id,
        description: form.description,
      });
    }

    handleResetBtnClick();
  };

  return (
    <div>
      <form>
        <input
          required
          type="text"
          name="name"
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          required
          type="text"
          name="type"
          onChange={handleChange}
          placeholder="Type"
        />
        <input
          required
          type="text"
          name="color"
          onChange={handleChange}
          placeholder="Color"
        />
        <input
          required
          type="text"
          name="wheelSize"
          onChange={handleChange}
          placeholder="Wheel Size"
        />
        <input
          required
          type="text"
          name="price"
          onChange={handleChange}
          placeholder="Price"
        />
        <input
          required
          type="text"
          name="id"
          onChange={handleChange}
          placeholder="ID(slug):XXXXXXXXXXXXX"
        />
        <textarea
          required
          type="text"
          name="description"
          onChange={handleChange}
          placeholder="Description"
        />
        <button onClick={handleSubmit} type="submit">
          Save
        </button>
        <button type="reset" onClick={handleResetBtnClick}>
          Clear
        </button>
      </form>
    </div>
  );
};

export default CreateNew;
